/* ==========================================================================
   motion.js — petites animations « vivantes », esprit Apple
   - halo corail qui suit la souris avec inertie (ressort)
   - panneau de compétences qui s'incline en 3D vers le curseur
   - reflet de lumière qui suit le curseur sur les cartes de verre
   Règles : uniquement transform / opacity, rAF, interruptible ;
   désactivé au toucher et si l'utilisateur préfère réduire les animations.
   ========================================================================== */
(function () {
  'use strict';

  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  var root = document.documentElement;

  /* ---------- 1. Entrée du hero (une seule fois, au chargement) ---------- */
  if (!reduce) {
    root.classList.add('hero-enter');
    // retire la classe après l'animation : les éléments retrouvent leurs transitions normales
    setTimeout(function () { root.classList.remove('hero-enter'); }, 1600);
  }

  if (reduce || !finePointer) return;

  /* Ressort critique simplifié : la valeur rejoint sa cible sans rebond.
     k = raideur par frame (≈ réponse Apple 0.4 s à 60 fps). */
  function spring(k) {
    return { x: 0, y: 0, tx: 0, ty: 0, k: k,
      step: function () {
        this.x += (this.tx - this.x) * this.k;
        this.y += (this.ty - this.y) * this.k;
        return Math.abs(this.tx - this.x) + Math.abs(this.ty - this.y) > 0.05;
      } };
  }

  /* ---------- 2. Halo corail qui suit la souris ---------- */
  var glow = document.createElement('div');
  glow.className = 'ambient-glow';
  glow.setAttribute('aria-hidden', 'true');
  document.body.prepend(glow);

  var g = spring(0.06);
  var glowRunning = false;
  function glowLoop() {
    var moving = g.step();
    glow.style.transform = 'translate3d(' + g.x.toFixed(1) + 'px,' + g.y.toFixed(1) + 'px,0)';
    if (moving) requestAnimationFrame(glowLoop); else glowRunning = false;
  }
  window.addEventListener('pointermove', function (e) {
    // amplitude limitée : le halo « respire » vers le curseur sans le suivre complètement
    g.tx = (e.clientX - innerWidth / 2) * 0.18;
    g.ty = (e.clientY - innerHeight / 2) * 0.18;
    if (!glowRunning) { glowRunning = true; requestAnimationFrame(glowLoop); }
  }, { passive: true });

  /* ---------- 3. Panneau de compétences incliné en 3D ---------- */
  var panel = document.querySelector('.hero-panel');
  if (panel) {
    var t = spring(0.12);
    var tiltRunning = false;
    var MAX = 5; // degrés
    function tiltLoop() {
      var moving = t.step();
      panel.style.transform = 'perspective(900px) rotateX(' + t.y.toFixed(2) + 'deg) rotateY(' + t.x.toFixed(2) + 'deg)';
      if (moving) requestAnimationFrame(tiltLoop); else tiltRunning = false;
    }
    function kick() { if (!tiltRunning) { tiltRunning = true; requestAnimationFrame(tiltLoop); } }
    panel.addEventListener('pointermove', function (e) {
      var r = panel.getBoundingClientRect();
      var px = (e.clientX - r.left) / r.width - 0.5;
      var py = (e.clientY - r.top) / r.height - 0.5;
      t.tx = px * MAX * 2;
      t.ty = -py * MAX * 2;
      kick();
    });
    panel.addEventListener('pointerleave', function () { t.tx = 0; t.ty = 0; kick(); });
  }

  /* ---------- 4. Reflet qui suit le curseur sur les cartes de verre ---------- */
  var cards = document.querySelectorAll(
    '.hero-panel, .about-grid, .skill-card, .project-card, .timeline-card, .edu-card, .edu-extra > div, .contact-card');
  cards.forEach(function (card) {
    card.classList.add('spot');
    var raf = 0, lx = 0, ly = 0;
    card.addEventListener('pointermove', function (e) {
      var r = card.getBoundingClientRect();
      lx = e.clientX - r.left; ly = e.clientY - r.top;
      if (raf) return;
      raf = requestAnimationFrame(function () {
        raf = 0;
        // variables posées sur la carte elle-même (pas sur la page) : recalcul limité à cet élément
        card.style.setProperty('--spot-x', lx + 'px');
        card.style.setProperty('--spot-y', ly + 'px');
      });
    });
  });
})();
