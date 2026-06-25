/**
 * App-Einstieg für das Biologie-Lernprogramm "KA 2"
 * (Klasse 8, Realschule BW, M-Niveau).
 * Themen der Klassenarbeit: Sinnesorgan Haut, Vom Reiz zur Reaktion,
 * Die Zelle (Tier-/Pflanzenzelle), Infektionskrankheiten (Bakterien & Viren).
 *
 * Definiert die Lektionsliste (LESSONS) und steuert die Navigation.
 * Die eigentlichen Lektionsinhalte stehen in den js/lessons-*.js-Dateien
 * und tragen sich ins globale Register window.LESSON_DATA ein.
 */
const LESSONS = [
  // Modul 1: Sinnesorgan Haut
  { id: 1, title: 'Aufbau der Haut – die drei Schichten', module: 'haut' },
  { id: 2, title: 'Funktionen der Haut & Haut als Sinnesorgan', module: 'haut' },
  // Modul 2: Vom Reiz zur Reaktion
  { id: 3, title: 'Vom Reiz zur Reaktion & das EVA-Prinzip', module: 'reiz' },
  // Modul 3: Die Zelle
  { id: 4, title: 'Die Zelle und ihre Bestandteile', module: 'zelle' },
  { id: 5, title: 'Tierzelle und Pflanzenzelle im Vergleich', module: 'zelle' },
  // Modul 4: Infektionskrankheiten
  { id: 6, title: 'Bakterien & Viren – Aufbau und Vermehrung', module: 'infektion' },
  { id: 7, title: 'Infektionskrankheiten – Erreger, Symptome, Übertragung', module: 'infektion' },
  // Abschluss: Prüfungssimulation
  { id: 8, title: 'Prüfungssimulation (alle Themen)', module: 'pruefung' },
];

function navigateToLesson(id) {
  document.getElementById('progress-bar-container').style.display = '';
  document.getElementById('sidebar').classList.remove('open');
  // Wiederholungs-Box ausblenden, sobald aktiv in eine Lektion navigiert wird.
  const reviewBox = document.getElementById('review-due');
  if (reviewBox) reviewBox.style.display = 'none';
  Progress.setLastLesson(id);
  if (Progress.getStatus(id) === 'not_started') {
    Progress.setStatus(id, 'in_progress');
  }
  document.querySelectorAll('#sidebar li').forEach(li => li.classList.remove('active'));
  Renderer.renderLesson(id);
  Renderer.renderSidebar(LESSONS);
  Renderer.renderProgressBar();
  const activeItem = document.querySelector(`#sidebar li[data-lesson-id="${id}"]`);
  if (activeItem) activeItem.classList.add('active');
  // nach oben scrollen, damit der Lektionstitel sichtbar ist
  const main = document.getElementById('content');
  if (main) main.scrollTop = 0;
  window.scrollTo(0, 0);
}

document.addEventListener('DOMContentLoaded', () => {
  Renderer.renderSidebar(LESSONS);
  Renderer.renderProgressBar();
  const lastLesson = Progress.getLastLesson();
  navigateToLesson(lastLesson);
  // Begrüßung: Fällig-Box NACH der initialen Navigation zeigen.
  Renderer.renderReviewDue();

  const menuToggle = document.getElementById('menu-toggle');
  const sidebar = document.getElementById('sidebar');
  if (menuToggle) {
    menuToggle.addEventListener('click', () => {
      sidebar.classList.toggle('open');
    });
  }
  document.getElementById('reset-progress').addEventListener('click', () => {
    if (confirm('Fortschritt wirklich zurücksetzen?')) {
      Progress.reset();
      location.reload();
    }
  });
});
