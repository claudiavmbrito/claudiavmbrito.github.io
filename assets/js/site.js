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
