Add-Type -AssemblyName System.Drawing

function Save-TipCutout {
  param(
    [string]$InputPath,
    [string]$OutputPath
  )

  $source = [System.Drawing.Bitmap]::FromFile((Resolve-Path $InputPath))
  try {
    $crop = New-Object System.Drawing.Rectangle(120, 0, 1720, 1600)
    $targetW = 1100
    $targetH = 1023
    $output = New-Object System.Drawing.Bitmap($targetW, $targetH, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
    $graphics = [System.Drawing.Graphics]::FromImage($output)
    $graphics.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $graphics.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
    $graphics.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
    $graphics.Clear([System.Drawing.Color]::Transparent)
    $graphics.DrawImage($source, (New-Object System.Drawing.Rectangle(0, 0, $targetW, $targetH)), $crop, [System.Drawing.GraphicsUnit]::Pixel)
    $graphics.Dispose()

    $tipPolygon = @(
      @{ X = 274; Y = 1002 },
      @{ X = 315; Y = 890 },
      @{ X = 520; Y = 415 },
      @{ X = 604; Y = 176 },
      @{ X = 735; Y = 0 },
      @{ X = 1099; Y = 0 },
      @{ X = 1099; Y = 392 },
      @{ X = 892; Y = 520 },
      @{ X = 730; Y = 616 },
      @{ X = 516; Y = 756 },
      @{ X = 346; Y = 920 }
    )

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

    for ($y = 0; $y -lt $targetH; $y++) {
      for ($x = 0; $x -lt $targetW; $x++) {
        $p = $output.GetPixel($x, $y)
        $lum = (0.2126 * $p.R) + (0.7152 * $p.G) + (0.0722 * $p.B)
        $inTip = Test-InPolygon -Px $x -Py $y -Polygon $tipPolygon

        if (-not $inTip) {
          $output.SetPixel($x, $y, [System.Drawing.Color]::FromArgb(0, $p.R, $p.G, $p.B))
          continue
        }

        $alpha = [Math]::Max(0, [Math]::Min(255, ($lum - 22) * 3.9))

        $rightFade = [Math]::Min(1, [Math]::Max(0, ($targetW - $x) / 95))
        $bottomFade = [Math]::Min(1, [Math]::Max(0, ($targetH - $y) / 70))
        $leftFade = [Math]::Min(1, [Math]::Max(0, ($x - 4) / 100))
        $topFade = [Math]::Min(1, [Math]::Max(0, ($y + 60) / 160))
        $alpha = $alpha * $rightFade * $bottomFade * $leftFade * $topFade

        if ($lum -lt 36) {
          $alpha = $alpha * 0.08
        }

        $newA = [int][Math]::Round([Math]::Max(0, [Math]::Min(255, $alpha)))
        $output.SetPixel($x, $y, [System.Drawing.Color]::FromArgb($newA, $p.R, $p.G, $p.B))
      }
    }

    $output.Save((Join-Path (Get-Location) $OutputPath), [System.Drawing.Imaging.ImageFormat]::Png)
    $output.Dispose()
  }
  finally {
    $source.Dispose()
  }
}

function Save-ScanTexture {
  param(
    [string]$InputPath,
    [string]$OutputPath
  )

  $source = [System.Drawing.Bitmap]::FromFile((Resolve-Path $InputPath))
  try {
    $crop = New-Object System.Drawing.Rectangle(0, 60, 2048, 1660)
    $targetW = 900
    $targetH = 730
    $output = New-Object System.Drawing.Bitmap($targetW, $targetH, [System.Drawing.Imaging.PixelFormat]::Format24bppRgb)
    $graphics = [System.Drawing.Graphics]::FromImage($output)
    $graphics.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $graphics.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
    $graphics.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
    $graphics.DrawImage($source, (New-Object System.Drawing.Rectangle(0, 0, $targetW, $targetH)), $crop, [System.Drawing.GraphicsUnit]::Pixel)
    $graphics.Dispose()
    $output.Save((Join-Path (Get-Location) $OutputPath), [System.Drawing.Imaging.ImageFormat]::Png)
    $output.Dispose()
  }
  finally {
    $source.Dispose()
  }
}

$sourceImages = Get-ChildItem -File -Filter "*.png" |
  Where-Object { $_.DirectoryName -eq (Get-Location).Path } |
  Sort-Object Length

if ($sourceImages.Count -lt 2) {
  throw "Expected two source PNG images in the project folder."
}

$tipImage = $sourceImages[0].FullName
$scanImage = $sourceImages[$sourceImages.Count - 1].FullName

Save-TipCutout -InputPath $tipImage -OutputPath "assets/stm-tip-cutout.png"
Save-ScanTexture -InputPath $scanImage -OutputPath "assets/stm-scan-texture.png"
