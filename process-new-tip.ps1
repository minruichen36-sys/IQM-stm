Add-Type -AssemblyName System.Drawing

$inputPath = "C:\Users\ysq\AppData\Local\Temp\codex-clipboard-6697269d-7de4-44ae-a8ff-aca9fbe06351.png"
$outputPath = Join-Path (Get-Location) "assets/stm-tip-cutout.png"
$previewPath = Join-Path (Get-Location) "assets/stm-tip-cutout-white-preview.png"

function Test-InPolygon {
  param(
    [int]$Px,
    [int]$Py,
    [object[]]$Polygon
  )

  $inside = $false
  $j = $Polygon.Count - 1
  for ($i = 0; $i -lt $Polygon.Count; $i++) {
    $xi = $Polygon[$i].X
    $yi = $Polygon[$i].Y
    $xj = $Polygon[$j].X
    $yj = $Polygon[$j].Y
    $intersect = (($yi -gt $Py) -ne ($yj -gt $Py)) -and
      ($Px -lt (($xj - $xi) * ($Py - $yi) / (($yj - $yi) + 0.0001) + $xi))
    if ($intersect) {
      $inside = -not $inside
    }
    $j = $i
  }
  return $inside
}

$source = [System.Drawing.Bitmap]::FromFile($inputPath)
try {
  $crop = New-Object System.Drawing.Rectangle(770, 0, 1190, 1210)
  $targetW = 1040
  $targetH = 1058
  $output = New-Object System.Drawing.Bitmap($targetW, $targetH, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
  $graphics = [System.Drawing.Graphics]::FromImage($output)
  $graphics.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
  $graphics.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
  $graphics.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
  $graphics.Clear([System.Drawing.Color]::Transparent)
  $graphics.DrawImage($source, (New-Object System.Drawing.Rectangle(0, 0, $targetW, $targetH)), $crop, [System.Drawing.GraphicsUnit]::Pixel)
  $graphics.Dispose()

  $tipPolygon = @(
    @{ X = 0; Y = 1026 },
    @{ X = 54; Y = 932 },
    @{ X = 238; Y = 678 },
    @{ X = 392; Y = 386 },
    @{ X = 463; Y = 278 },
    @{ X = 560; Y = 250 },
    @{ X = 730; Y = 0 },
    @{ X = 1039; Y = 0 },
    @{ X = 1039; Y = 548 },
    @{ X = 906; Y = 595 },
    @{ X = 758; Y = 657 },
    @{ X = 580; Y = 724 },
    @{ X = 372; Y = 812 },
    @{ X = 158; Y = 930 }
  )

  for ($y = 0; $y -lt $targetH; $y++) {
    for ($x = 0; $x -lt $targetW; $x++) {
      $p = $output.GetPixel($x, $y)
      $inTip = Test-InPolygon -Px $x -Py $y -Polygon $tipPolygon
      $insideUpperStrut = ($y -lt 360 -and $x -lt 730) -or ($y -lt 250 -and $x -lt 820)
      if (-not $inTip) {
        $output.SetPixel($x, $y, [System.Drawing.Color]::FromArgb(0, $p.R, $p.G, $p.B))
        continue
      }

      if ($insideUpperStrut) {
        $output.SetPixel($x, $y, [System.Drawing.Color]::FromArgb(0, $p.R, $p.G, $p.B))
        continue
      }

      $maxChannel = [Math]::Max($p.R, [Math]::Max($p.G, $p.B))
      $minChannel = [Math]::Min($p.R, [Math]::Min($p.G, $p.B))
      $saturation = $maxChannel - $minChannel
      $darkness = 255 - ((0.2126 * $p.R) + (0.7152 * $p.G) + (0.0722 * $p.B))
      $colorPresence = [Math]::Max($saturation * 4.2, $darkness * 2.7)
      $alpha = [Math]::Max(0, [Math]::Min(255, $colorPresence - 14))

      if ($p.R -gt 247 -and $p.G -gt 244 -and $p.B -gt 238 -and $saturation -lt 20) {
        $alpha = 0
      }

      $edgeFade = [Math]::Min(1, [Math]::Max(0, ($x + 24) / 90))
      $bottomFade = [Math]::Min(1, [Math]::Max(0, ($targetH - $y + 18) / 120))
      $alpha = $alpha * $edgeFade * $bottomFade

      $newA = [int][Math]::Round([Math]::Max(0, [Math]::Min(255, $alpha)))
      $output.SetPixel($x, $y, [System.Drawing.Color]::FromArgb($newA, $p.R, $p.G, $p.B))
    }
  }

  $output.Save($outputPath, [System.Drawing.Imaging.ImageFormat]::Png)

  $preview = New-Object System.Drawing.Bitmap($targetW, $targetH, [System.Drawing.Imaging.PixelFormat]::Format24bppRgb)
  $previewGraphics = [System.Drawing.Graphics]::FromImage($preview)
  $previewGraphics.Clear([System.Drawing.Color]::FromArgb(24, 24, 24))
  $previewGraphics.DrawImage($output, 0, 0)
  $previewGraphics.Dispose()
  $preview.Save($previewPath, [System.Drawing.Imaging.ImageFormat]::Png)
  $preview.Dispose()
  $output.Dispose()
}
finally {
  $source.Dispose()
}
