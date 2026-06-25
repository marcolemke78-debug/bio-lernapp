/**
 * Macht beschriftete SVG-Grafiken anklickbar (Biologie-Lernprogramm).
 * Tippt man auf ein Teil (Element mit class="bio-part" + data-name/data-info),
 * erscheinen Name und Aufgabe in der Ablage (.figure-readout) unter der Grafik.
 *
 * Event-Delegation auf document: funktioniert auch fuer SVGs, die erst spaeter
 * per innerHTML in eine Lektion eingefuegt werden (Erklaerung + Uebung).
 * Touch-tauglich: .bio-part hat cursor:pointer, dadurch feuert iOS-Safari "click".
 */
(function () {
  document.addEventListener('click', function (e) {
    var part = e.target.closest && e.target.closest('.bio-part');
    if (!part) return;
    var fig = part.closest('.clickable-figure');
    if (!fig) return;
    var out = fig.querySelector('.figure-readout');
    if (out) {
      out.innerHTML = '<strong>' + (part.getAttribute('data-name') || '') + '</strong>: '
        + (part.getAttribute('data-info') || '');
      out.classList.add('filled');
    }
    fig.querySelectorAll('.bio-part.bio-active').forEach(function (n) {
      n.classList.remove('bio-active');
    });
    part.classList.add('bio-active');
  });
})();
