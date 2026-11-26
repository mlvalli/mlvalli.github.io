(function () {
  var WHATSAPP_NUMBER = "553193143207";

  // Links do WhatsApp
  document.querySelectorAll("[data-wa]").forEach(function (a) {
    a.href = "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(a.getAttribute("data-wa"));
  });

  // Menu hambúrguer
  var toggle = document.getElementById("menu-toggle");
  var menu = document.getElementById("mobile-menu");
  function setMenu(open) {
    menu.classList.toggle("open", open);
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
  }
  toggle.addEventListener("click", function () {
    setMenu(toggle.getAttribute("aria-expanded") !== "true");
  });
  menu.querySelectorAll("a").forEach(function (a) {
    a.addEventListener("click", function () { setMenu(false); });
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") setMenu(false);
  });

  // Faixa animada (itens duplicados para o loop contínuo)
  var items = ["Consulta médica", "Saúde mental", "Neurodivergências", "Emagrecimento", "Laudos", "Medicina do trabalho", "Calvície", "Check-up", "Receitas digitais"];
  var marquee = document.getElementById("marquee");
  for (var k = 0; k < 2; k++) {
    items.forEach(function (t) {
      var span = document.createElement("span");
      span.textContent = t;
      var star = document.createElement("span");
      star.textContent = "✦";
      span.appendChild(star);
      marquee.appendChild(span);
    });
  }

  // Animação de entrada ao rolar
  var els = document.querySelectorAll(".reveal");
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) e.target.classList.add("in");
    });
  }, { threshold: 0.15 });
  els.forEach(function (el) {
    if (el.getBoundingClientRect().top < window.innerHeight) el.classList.add("in");
    else io.observe(el);
  });
  document.documentElement.classList.add("reveal-on");
  setTimeout(function () {
    els.forEach(function (el) { el.classList.add("in"); });
  }, 4000);
})();
