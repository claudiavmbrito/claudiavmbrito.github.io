// Theme toggle (preference kept in localStorage; head.html applies it before paint).
document.querySelector(".theme").addEventListener("click", function () {
  var r = document.documentElement,
    dark = r.dataset.theme ? r.dataset.theme === "dark" : matchMedia("(prefers-color-scheme: dark)").matches;
  r.dataset.theme = dark ? "light" : "dark";
  try { localStorage.setItem("theme", r.dataset.theme); } catch (e) {}
});

// Inline BibTeX: load the .bib file the first time an entry is opened, then offer Copy.
document.querySelectorAll(".bib").forEach(function (d) {
  d.addEventListener("toggle", function () {
    if (!d.open || d.dataset.loaded) return;
    d.dataset.loaded = "1";
    var code = d.querySelector("code"), copy = d.querySelector(".copy");
    fetch(d.dataset.src).then(function (r) {
      if (!r.ok) throw new Error(r.status);
      return r.text();
    }).then(function (t) {
      code.textContent = t.trim();
      copy.hidden = false;
    }).catch(function () { delete d.dataset.loaded; });
  });
});

document.querySelectorAll(".bib .copy").forEach(function (b) {
  b.addEventListener("click", function () {
    var t = b.parentNode.querySelector("code").textContent, l = b.querySelector("span");
    navigator.clipboard.writeText(t).then(function () { l.textContent = "Copied"; }, function () { l.textContent = "Select and copy"; });
    setTimeout(function () { l.textContent = "Copy"; }, 2000);
  });
});

// Line filter on Publications: highlight one research line, dim the rest, hide nothing.
document.querySelectorAll(".line-filter").forEach(function (bar) {
  var list = document.querySelector(".pub-list"), chips = bar.querySelectorAll(".chip");
  chips.forEach(function (c) {
    c.addEventListener("click", function () {
      var id = c.dataset.line;
      if (id) list.dataset.filter = id; else delete list.dataset.filter;
      chips.forEach(function (o) { o.setAttribute("aria-pressed", o === c ? "true" : "false"); });
    });
  });
});

// Route map on narrow screens: start scrolled to the newest years.
document.querySelectorAll(".routemap-scroll").forEach(function (s) {
  if (s.scrollWidth > s.clientWidth) s.scrollLeft = s.scrollWidth;
});
