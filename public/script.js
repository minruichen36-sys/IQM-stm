const canvas = document.getElementById("stm-canvas");
const ctx = canvas.getContext("2d", { alpha: false });

const translations = {
  en: {
    "brand.name": "Imaging Quantum Materials",
    "nav.research": "Research",
    "nav.publications": "Publications",
    "nav.people": "People",
    "nav.news": "News",
    "nav.openings": "Openings",
    "nav.teaching": "Teaching",
    "hero.kicker": "University of Science and Technology of China",
    "hero.title": "Imaging quantum materials\nat the atomic scale.",
    "hero.copy":
      "We combine high-resolution scanning tunneling microscopy/spectroscopy with molecular beam epitaxy to visualize and understand collective electronic phenomena in quantum materials.",
    "hero.primary": "Explore Research",
    "hero.secondary": "Join the Lab",
    "about.kicker": "About",
    "about.title": "Quantum phases become visible through local probes.",
    "about.p1":
      "The group studies emergent states in condensed matter systems where interactions, topology, and reduced dimensionality give rise to electronic phases that are difficult to resolve with spatially averaged measurements alone.",
    "about.p2":
      "High-resolution STM/STS and MBE growth are used together to image the local density of states, quasiparticle interference, broken symmetries, and defect responses with atomic-scale spatial resolution and high energy sensitivity.",
    "research.kicker": "Research",
    "research.title": "Real-space probes of correlated and topological quantum matter.",
    "research.card1.title": "STM / STS",
    "research.card1.copy":
      "Tunneling between an atomically sharp tip and a clean sample surface probes local electronic states and the density of states as functions of position and energy.",
    "research.card2.title": "Unconventional Superconductivity",
    "research.card2.copy":
      "The lab images superconducting gaps, charge order, electronic nematicity, vortex states, and many-body effects in kagome, iron-based, iridate, and other strongly correlated systems.",
    "research.card3.title": "Topological Materials",
    "research.card3.copy":
      "Research includes topological insulators, Weyl semimetals, and candidate topological superconductors, where protected boundary modes and interaction effects can be resolved locally.",
    "publications.kicker": "Publications",
    "publications.title": "",
    "pub.1.title": "Robust one-dimensional edge channels in a 3D quantum spin Hall insulator",
    "pub.2.title": "Quantum confinement emerging in topological kagome superconductor CsV3Sb5",
    "pub.3.title": "Momentum-space Cooper-pair formation in competition with charge-density-wave gaps",
    "pub.4.title": "Directional electron-phonon coupling in the nematic phase of a kagome superconductor",
    "pub.5.title": "Charge-density-wave-driven electronic nematicity in a kagome superconductor",
    "people.kicker": "People",
    "people.title": "Researchers, students, and alumni.",
    "people.pi.avatar": "W",
    "people.pi.copy": "Professor, Department of Physics, USTC. Email: zywang2 at ustc.edu.cn.",
    "people.group.professor": "Professor",
    "people.group.graduate": "Graduate Students",
    "people.group.undergraduate": "Undergraduate Students",
    "people.group.alumni": "Group Alumni",
    "people.role.professor": "Professor",
    "people.role.graduate": "Graduate",
    "people.role.undergraduate": "Undergraduate",
    "people.role.alumni": "Alumni",
    "people.grad.title": "Graduate Students",
    "people.grad.copy":
      "Wanru Ma, Zhuying Wang, Shuikang Yu, Yunmei Zhang, Xuechen Zhang, Yitian Ma, Kunming Zhang, Deshu Chen, Wanlin Cheng, Zhenhao Wang.",
    "people.undergrad.title": "Undergraduate Students",
    "people.undergrad.copy":
      "Zeyu Liang, Yuanhao Jiao, Hongxi Song, Minrui Chen, Qixiao Yuan, Zhicen Liu, Lekai Guan, Shunqi Yu.",
    "people.alumni.title": "Alumni",
    "people.alumni.copy":
      "Ping Wu, Zuowei Liang, Junzhe Wang, Jiatao Song, Yidi Wang, Xiaoyu Wei, Yiming Sun.",
    "news.kicker": "News",
    "news.title": "Recent updates from the lab.",
    "news.1": "Ping Wu received the Special Prize of the President of the Chinese Academy of Sciences.",
    "news.2": "Shuikang Yu received the National Scholarship.",
    "news.3": "The group's work on one-dimensional edge channels appeared in Physical Review X.",
    "news.4": "A kagome-superconductor paper on Cooper-pair formation appeared in Science China Physics, Mechanics & Astronomy.",
    "news.5": "Work on unidirectional electron-phonon coupling in the nematic state of a kagome superconductor appeared in Nature Physics.",
    "news.6": "Wanru Ma received the 2022 National Scholarship.",
    "news.7": "Work on charge-density-wave-driven electronic nematicity in a kagome superconductor was published in Nature.",
    "news.8": "Work on the three-dimensional charge density wave and surface-dependent vortex-core states in CsV3Sb5 was published in Physical Review X.",
    "openings.kicker": "Openings & Contact",
    "openings.title": "Join a team working at the boundary of instrumentation and quantum matter.",
    "openings.postdoc.title": "Postdoctoral Researchers",
    "openings.postdoc.copy":
      "Motivated postdocs are encouraged to apply. Experience with molecular beam epitaxy is especially welcome; interests in correlated-electron systems and topological superconductors are a strong fit.",
    "openings.students.title": "Students",
    "openings.students.copy":
      "Graduate students and undergraduates interested in many-body physics, topology, STM/STS, and scanning probe microscopy are welcome to get in touch.",
    "openings.contact.title": "Contact",
    "openings.contact.copy":
      "We are part of Laboratory for the Correlated-Electron Matters at USTC. Email: zywang2 at ustc.edu.cn.",
    "teaching.kicker": "Teaching",
    "teaching.title": "Course materials and lecture notes.",
    "teaching.pdf1": "Chapter 1: Introduction & the First Law of Thermodynamics",
    "footer.name": "Imaging Quantum Materials at the Atomic Scale © University of Science and Technology of China",
  },
  zh: {
    "brand.name": "量子材料成像研究组",
    "nav.research": "研究方向",
    "nav.publications": "论文成果",
    "nav.people": "团队成员",
    "nav.news": "组内动态",
    "nav.openings": "招生招聘",
    "nav.teaching": "教学资料",
    "hero.kicker": "中国科学技术大学",
    "hero.title": "在原子尺度成像\n量子材料。",
    "hero.copy":
      "我们结合高分辨扫描隧道显微镜/谱学与分子束外延生长，直接观测并理解量子材料中的集体电子现象。",
    "hero.primary": "了解研究",
    "hero.secondary": "加入我们",
    "about.kicker": "关于我们",
    "about.title": "局域探测让量子物态变得可见。",
    "about.p1":
      "研究组关注凝聚态体系中的新奇量子态。相互作用、拓扑与低维效应会诱导出空间平均测量难以分辨的电子相。",
    "about.p2":
      "我们将高分辨 STM/STS 与 MBE 生长结合，在原子尺度成像局域态密度、准粒子干涉、对称性破缺以及缺陷响应，并获得高能量分辨的谱学信息。",
    "research.kicker": "研究方向",
    "research.title": "关联与拓扑量子物态的实空间探测。",
    "research.card1.title": "STM / STS",
    "research.card1.copy":
      "利用原子级尖锐针尖与洁净样品表面之间的隧穿过程，我们可以在位置和能量两个维度上探测局域电子态和态密度。",
    "research.card2.title": "非常规超导",
    "research.card2.copy":
      "研究组关注 kagome、铁基、铱氧化物等强关联体系中的超导能隙、电荷序、电子向列性、涡旋态以及多体效应。",
    "research.card3.title": "拓扑材料",
    "research.card3.copy":
      "研究内容包括拓扑绝缘体、Weyl 半金属以及候选拓扑超导体，重点解析受保护边界态与相互作用效应的局域表现。",
    "publications.kicker": "论文成果",
    "publications.title": "",
    "pub.1.title": "三维量子自旋霍尔绝缘体中的稳健一维边界通道",
    "pub.2.title": "拓扑 kagome 超导体 CsV3Sb5 中涌现的量子限域",
    "pub.3.title": "与电荷密度波能隙竞争的动量空间 Cooper 对形成",
    "pub.4.title": "kagome 超导体向列相中的方向性电子-声子耦合",
    "pub.5.title": "kagome 超导体中由电荷密度波驱动的电子向列性",
    "people.kicker": "团队成员",
    "people.title": "研究人员、学生与毕业成员。",
    "people.pi.avatar": "王",
    "people.pi.copy": "王振宇，中国科学技术大学物理系教授。邮箱：zywang2 at ustc.edu.cn。",
    "people.group.professor": "教授",
    "people.group.graduate": "研究生",
    "people.group.undergraduate": "本科生",
    "people.group.alumni": "毕业成员",
    "people.role.professor": "教授",
    "people.role.graduate": "研究生",
    "people.role.undergraduate": "本科生",
    "people.role.alumni": "毕业成员",
    "people.grad.title": "研究生",
    "people.grad.copy":
      "马婉茹、王著颖、余水康、张云梅、张学琛、马一田、张昆明、陈德树、程婉琳、王振昊。",
    "people.undergrad.title": "本科生",
    "people.undergrad.copy":
      "梁泽宇、焦元昊、宋泓熙、陈旻睿、袁启潇、刘知岑、关乐恺、于顺祺。",
    "people.alumni.title": "毕业成员",
    "people.alumni.copy":
      "吴萍、梁作伟、王俊喆、宋嘉涛、王一迪、魏晓宇、孙一鸣。",
    "news.kicker": "组内动态",
    "news.title": "研究组近期动态。",
    "news.1": "吴萍获中国科学院院长特别奖。",
    "news.2": "余水康获国家奖学金。",
    "news.3": "研究组关于一维边界通道的工作发表于 Physical Review X。",
    "news.4": "关于 kagome 超导体 Cooper 对形成的工作发表于《中国科学：物理学 力学 天文学》（英文版）。",
    "news.5": "关于 kagome 超导体向列态中单向电子-声子耦合的工作发表于 Nature Physics。",
    "news.6": "马婉茹获 2022 年国家奖学金。",
    "news.7": "关于 kagome 超导体中电荷密度波驱动电子向列性的工作发表于 Nature。",
    "news.8": "关于 CsV3Sb5 中三维电荷密度波和表面依赖涡旋芯态的工作发表于 Physical Review X。",
    "openings.kicker": "招生招聘",
    "openings.title": "欢迎加入我们，在仪器与量子材料交界处开展研究。",
    "openings.postdoc.title": "博士后",
    "openings.postdoc.copy":
      "欢迎有动力的博士后申请。具有分子束外延经验者优先；对强关联电子体系和拓扑超导感兴趣的申请者非常适合。",
    "openings.students.title": "学生",
    "openings.students.copy":
      "欢迎对多体物理、拓扑、STM/STS 与扫描探针显微技术感兴趣的研究生和本科生联系加入。",
    "openings.contact.title": "联系方式",
    "openings.contact.copy":
      "研究组隶属于中国科学技术大学关联电子物质实验室。邮箱：zywang2 at ustc.edu.cn。",
    "teaching.kicker": "教学资料",
    "teaching.title": "课程资料与讲义。",
    "teaching.pdf1": "第一章：引言与热力学第一定律",
    "footer.name": "量子材料成像研究组，中国科学技术大学",
  },};

const pointer = { x: 0, y: 0, active: false };
let width = 0;
let height = 0;
let dpr = 1;
let frame = 0;
let textureCanvas;
let textureCtx;
let textureData;
let tipImage = null;
let scanTextureImage = null;
let scanTextureMode = null;

function captureViewportCenterAnchor() {
  const viewportCenter = window.scrollY + window.innerHeight / 2;
  const sections = [...document.querySelectorAll("main > section, footer")];
  const anchor = sections.find((section) => {
    const top = section.offsetTop;
    return viewportCenter >= top && viewportCenter <= top + section.offsetHeight;
  }) || sections.find((section) => section.offsetTop > window.scrollY) || document.body;

  const anchorTop = anchor.offsetTop || 0;
  const anchorHeight = Math.max(anchor.offsetHeight, 1);

  return {
    anchor,
    progress: clamp((viewportCenter - anchorTop) / anchorHeight, 0, 1),
    centerOffset: viewportCenter - anchorTop,
  };
}

function restoreViewportCenterAnchor(anchorState) {
  if (!anchorState?.anchor?.isConnected) {
    return;
  }

  const anchorTop = anchorState.anchor.offsetTop || 0;
  const anchorHeight = Math.max(anchorState.anchor.offsetHeight, 1);
  const restoredOffset = clamp(anchorHeight * anchorState.progress, 0, anchorHeight);
  const targetTop = anchorTop + restoredOffset - window.innerHeight / 2;
  const maxTop = Math.max(0, document.documentElement.scrollHeight - window.innerHeight);

  window.scrollTo(0, clamp(targetTop, 0, maxTop));
}

function setLanguage(lang) {
  const nextLang = translations[lang] ? lang : "en";
  const currentLang = document.documentElement.dataset.lang || "en";

  if (nextLang === currentLang) {
    return;
  }

  const centerAnchor = captureViewportCenterAnchor();
  document.documentElement.classList.add("is-language-switching");

  document.documentElement.dataset.lang = nextLang;
  document.documentElement.lang = nextLang === "zh" ? "zh-CN" : "en";
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.dataset.i18n;
    if (!Object.prototype.hasOwnProperty.call(translations[nextLang], key)) {
      return;
    }

    const value = translations[nextLang][key];
    const nextMarkup = value.includes("\n")
      ? value.split("\n").map((part) => part.trim()).join("<br />")
      : value;
    const currentValue = value.includes("\n") ? node.innerHTML : node.textContent;

    if (currentValue === nextMarkup) {
      node.dataset.i18nLocked = "true";
      return;
    }

    delete node.dataset.i18nLocked;
    if (value.includes("\n")) {
      node.innerHTML = nextMarkup;
    } else {
      node.textContent = value;
    }
  });
  localStorage.setItem("iqm-language", nextLang);
  restoreViewportCenterAnchor(centerAnchor);
  requestAnimationFrame(() => {
    document.documentElement.classList.remove("is-language-switching");
  });
}

function initializeLanguageToggle() {
  const preferred = localStorage.getItem("iqm-language") || "en";
  setLanguage(preferred);
  document.querySelector(".language-toggle")?.addEventListener("click", () => {
    const current = document.documentElement.dataset.lang || "en";
    setLanguage(current === "en" ? "zh" : "en");
  });
}


function setBackgroundMode(mode) {
  const nextMode = mode === "light" ? "light" : "dark";
  document.documentElement.dataset.bg = nextMode;
  localStorage.setItem("iqm-background", nextMode);
  if (scanTextureImage && scanTextureMode !== nextMode) {
    makeTextureFromImage(scanTextureImage);
  }
}

function initializeThemeToggle() {
  const preferred = localStorage.getItem("iqm-background") || "dark";
  setBackgroundMode(preferred);
  document.querySelector(".theme-toggle")?.addEventListener("click", () => {
    const current = document.documentElement.dataset.bg || "dark";
    setBackgroundMode(current === "dark" ? "light" : "dark");
  });
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function noise(x, y) {
  const n = Math.sin(x * 127.1 + y * 311.7) * 43758.5453123;
  return n - Math.floor(n);
}

function makeTexture() {
  const size = 420;
  textureCanvas = document.createElement("canvas");
  textureCanvas.width = size;
  textureCanvas.height = size;
  textureCtx = textureCanvas.getContext("2d");
  textureData = textureCtx.createImageData(size, size);

  const cx = size * 0.58;
  const cy = size * 0.46;

  for (let y = 0; y < size; y += 1) {
    for (let x = 0; x < size; x += 1) {
      const nx = x / size;
      const ny = y / size;
      const latticeA = Math.cos((nx * 34 + ny * 7.5) * Math.PI * 2);
      const latticeB = Math.cos((nx * 17 - ny * 29) * Math.PI * 2);
      const moire = Math.cos((nx * 5.2 + ny * 3.4) * Math.PI * 2);
      const defectDistance = Math.hypot(x - cx, y - cy) / size;
      const defect = Math.exp(-defectDistance * defectDistance * 165);
      const stripe = (noise(0.08, y * 0.03) - 0.5) * 0.16;
      const granular = (noise(x * 0.045, y * 0.045) - 0.5) * 0.18;
      const signal =
        0.48 +
        latticeA * 0.16 +
        latticeB * 0.13 +
        moire * 0.18 +
        defect * 0.45 +
        stripe +
        granular;
      const v = clamp(signal, 0, 1);
      const r = 18 + v * 218;
      const g = 20 + v * 156;
      const b = 19 + v * 76;
      const i = (y * size + x) * 4;
      textureData.data[i] = r;
      textureData.data[i + 1] = g;
      textureData.data[i + 2] = b;
      textureData.data[i + 3] = 255;
    }
  }

  textureCtx.putImageData(textureData, 0, 0);
}

function loadImage(src) {
  return new Promise((resolve) => {
    const image = new Image();
    image.onload = () => resolve(image);
    image.onerror = () => resolve(null);
    image.src = src;
  });
}

function makeTextureFromImage(image) {
  textureCanvas = document.createElement("canvas");
  textureCanvas.width = 900;
  textureCanvas.height = 730;
  textureCtx = textureCanvas.getContext("2d");
  textureCtx.drawImage(image, 0, 0, textureCanvas.width, textureCanvas.height);

  let data;
  try {
    data = textureCtx.getImageData(0, 0, textureCanvas.width, textureCanvas.height);
  } catch (error) {
    return;
  }
  scanTextureMode = document.documentElement.dataset.bg || "dark";   const lightMode = scanTextureMode === "light";   const low = lightMode ? [206, 206, 198] : [42, 44, 44];   const high = lightMode ? [82, 104, 105] : [216, 164, 91];   const mix = lightMode ? 0.64 : 0.78;    for (let y = 0; y < textureCanvas.height; y += 1) {     const rowNoise = (noise(0.18, y * 0.08) - 0.5) * 12;     for (let x = 0; x < textureCanvas.width; x += 1) {       const i = (y * textureCanvas.width + x) * 4;       const source = (data.data[i] * 0.299 + data.data[i + 1] * 0.587 + data.data[i + 2] * 0.114) / 255;       const vignetteX = Math.abs(x / textureCanvas.width - 0.5);       const vignetteY = Math.abs(y / textureCanvas.height - 0.5);       const vignette = 1 - Math.min(0.24, (vignetteX + vignetteY) * 0.16);       const v = clamp(source * vignette + rowNoise / 255, 0, 1);       const r = low[0] + (high[0] - low[0]) * v;       const g = low[1] + (high[1] - low[1]) * v;       const b = low[2] + (high[2] - low[2]) * v;       data.data[i] = clamp(data.data[i] * (1 - mix) + r * mix, 0, 255);       data.data[i + 1] = clamp(data.data[i + 1] * (1 - mix) + g * mix, 0, 255);       data.data[i + 2] = clamp(data.data[i + 2] * (1 - mix) + b * mix, 0, 255);     }   }
  textureCtx.putImageData(data, 0, 0);
}

function resize() {
  dpr = Math.min(window.devicePixelRatio || 1, 2);
  width = window.innerWidth;
  height = window.innerHeight;
  canvas.width = Math.floor(width * dpr);
  canvas.height = Math.floor(height * dpr);
  canvas.style.width = `${width}px`;
  canvas.style.height = `${height}px`;
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
}

function drawBackground() {
  const lightMode = document.documentElement.dataset.bg === "light";
  const gradient = ctx.createLinearGradient(0, 0, width, height);
  gradient.addColorStop(0, lightMode ? "#e6e6e1" : "#2b2d2d");
  gradient.addColorStop(0.45, lightMode ? "#e6e6e1" : "#2b2d2d");
  gradient.addColorStop(1, lightMode ? "#e6e6e1" : "#2b2d2d");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, width, height);

  ctx.save();
  ctx.globalAlpha = 0.32;
  ctx.strokeStyle = "rgba(244, 240, 232, 0.045)";
  ctx.lineWidth = 1;
  const spacing = Math.max(28, Math.min(42, width / 38));
  for (let x = -spacing; x < width + spacing; x += spacing) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x + height * 0.38, height);
    ctx.stroke();
  }
  ctx.restore();
}

function drawSurface(time) {
  const seconds = time * 0.001;
  const surfaceW = Math.min(width * 0.62, 760);
  const surfaceH = surfaceW * 0.42;
  const sx = width - surfaceW - width * 0.04;
  const sy = height * 0.48;
  const tilt = Math.min(92, surfaceH * 0.28);

  ctx.save();
  ctx.translate(sx + pointer.x * 10, sy + pointer.y * 8);
  ctx.transform(1, -0.08, -0.18, 0.86, 0, 0);

  const scanCycle = (seconds * 0.055) % 1;
  const tipX =
    width * 0.58 + Math.sin(seconds * 0.55) * Math.min(18, width * 0.018) + pointer.x * 4;
  const tipY = height * 0.44 + Math.sin(seconds * 0.42) * 2.4 + pointer.y * 4;

  ctx.save();
  ctx.globalAlpha = 0.92;
  ctx.beginPath();
  ctx.rect(0, 0, surfaceW, surfaceH);
  ctx.clip();
  ctx.fillStyle = "#211f1c";
  ctx.fillRect(0, 0, surfaceW, surfaceH);
  ctx.globalAlpha = 1;
  ctx.drawImage(textureCanvas, 0, 0, textureCanvas.width, textureCanvas.height, 0, 0, surfaceW, surfaceH);
  ctx.restore();

  ctx.globalAlpha = 0.34;
  ctx.strokeStyle = "rgba(214, 164, 91, 0.48)";
  ctx.lineWidth = 1;
  ctx.strokeRect(0, 0, surfaceW, surfaceH);
  ctx.restore();

  drawTip(tipX, tipY, time);

  const panelW = clamp(width * 0.22, 260, 350);
  const panelH = panelW * 0.68;
  drawReadoutPanel(width - panelW - 42, height - panelH - 96, panelW, panelH);
  return scanCycle;
}

function drawTip(x, y, time) {
  if (tipImage) {
    drawImageTip(x, y, time);
  }
}

function drawImageTip(x, y, time) {
  const seconds = time * 0.001;
  ctx.save();
  ctx.translate(x, y);
  ctx.rotate(-0.035 + Math.sin(seconds * 0.38) * 0.004);

  const tipW = clamp(width * 0.374, 330, 572);
  const tipH = tipW * (tipImage.height / tipImage.width);
  const anchorX = tipW * 0.16;
  const anchorY = tipH * 0.84;

  ctx.globalAlpha = 0.98;
  ctx.drawImage(tipImage, -anchorX, -anchorY, tipW, tipH);

  const glow = ctx.createRadialGradient(0, 10, 6, 0, 10, 120);
  glow.addColorStop(0, "rgba(132, 196, 191, 0.48)");
  glow.addColorStop(0.36, "rgba(132, 196, 191, 0.13)");
  glow.addColorStop(1, "rgba(132, 196, 191, 0)");
  ctx.fillStyle = glow;
  ctx.beginPath();
  ctx.arc(0, 10, 112 + Math.sin(seconds * 0.7) * 3, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();
}

function drawReadoutPanel(x, y, w, h) {
  if (width < 760) {
    return;
  }

  ctx.save();
  ctx.globalAlpha = 0.72;
  ctx.fillStyle = "rgba(10, 11, 10, 0.58)";
  ctx.strokeStyle = "rgba(244, 240, 232, 0.16)";
  ctx.lineWidth = 1;
  ctx.fillRect(x, y, w, h);
  ctx.strokeRect(x, y, w, h);

  ctx.fillStyle = "rgba(255, 255, 255, 0.94)";
  ctx.font = "11px Consolas, monospace";
  ctx.fillText("topography output", x + 16, y + 23);

  const pad = 16;
  const imgX = x + pad;
  const imgY = y + 38;
  const imgW = w - pad * 2;
  const imgH = h - 54;
  const outputLightMode = document.documentElement.dataset.bg === "light";
  ctx.fillStyle = outputLightMode ? "rgba(230, 230, 225, 0.86)" : "rgba(43, 45, 45, 0.88)";
  ctx.fillRect(imgX, imgY, imgW, imgH);
  ctx.globalAlpha = 0.94;
  ctx.drawImage(textureCanvas, 0, 0, textureCanvas.width, textureCanvas.height, imgX, imgY, imgW, imgH);
  ctx.globalCompositeOperation = document.documentElement.dataset.bg === "light" ? "multiply" : "screen";
  ctx.globalAlpha = document.documentElement.dataset.bg === "light" ? 0.18 : 0.12;
  ctx.fillStyle = document.documentElement.dataset.bg === "light" ? "rgba(70, 96, 98, 0.9)" : "rgba(216, 164, 91, 0.9)";
  ctx.fillRect(imgX, imgY, imgW, imgH);
  ctx.globalCompositeOperation = "source-over";
  ctx.globalAlpha = 0.2;
  ctx.strokeStyle = "rgba(244, 240, 232, 0.8)";
  ctx.strokeRect(imgX, imgY, imgW, imgH);
  ctx.restore();
}

function draw(time) {
  frame = time;
  drawBackground();
  drawSurface(time);
  window.requestAnimationFrame(draw);
}

window.addEventListener("resize", resize);
window.addEventListener("pointermove", (event) => {
  pointer.x = (event.clientX / window.innerWidth - 0.5) * 2;
  pointer.y = (event.clientY / window.innerHeight - 0.5) * 2;
  pointer.active = true;
});

async function initialize() {
  initializeLanguageToggle();
  initializeThemeToggle();

  [tipImage, scanTextureImage] = await Promise.all([
    loadImage("assets/stm-tip-cutout.png?v=4"),
    loadImage("assets/stm-scan-texture.png"),
  ]);

  if (scanTextureImage) {
    makeTextureFromImage(scanTextureImage);
  } else {
    makeTexture();
  }

  resize();
  window.requestAnimationFrame(draw);
}

initialize();

