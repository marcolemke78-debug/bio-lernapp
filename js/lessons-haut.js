/**
 * Modul 1 - Sinnesorgan Haut (Biologie KA 2, Klasse 8, M-Niveau).
 *   L1 Aufbau der Haut - die drei Schichten (beschriften & Funktionen)
 *   L2 Funktionen der Haut & Haut als Sinnesorgan
 *
 * Inhalte in eigenen Worten nach dem Arbeitsblatt "Unsere Haut - ein Sinnesorgan"
 * und der Mindmap. Eigene SVG-Grafik (kein Buchbild). Zielgruppe: Leonie.
 */
(function () {

  // Eigener, schematischer Querschnitt durch die Haut mit nummerierten Bestandteilen.
  // Wird in der Erklärung (mit Legende) UND in der Übung (zum Beschriften) genutzt.
  const skinSvg = `
    <svg viewBox="0 0 560 410" role="img" aria-label="Schematischer Querschnitt durch die Haut mit den drei Schichten und ihren Bestandteilen" style="max-width:560px;width:100%;height:auto;display:block;margin:1rem auto;background:#fff;border:1px solid #e5e7eb;border-radius:10px;font-family:sans-serif;">
      <!-- Schichten -->
      <rect x="80" y="40" width="400" height="26" fill="#e7c9a0"/>
      <rect x="80" y="66" width="400" height="46" fill="#f1dab9"/>
      <rect x="80" y="112" width="400" height="188" fill="#f6caca"/>
      <rect x="80" y="300" width="400" height="92" fill="#fdeec0"/>
      <line x1="80" y1="112" x2="480" y2="112" stroke="#cf9090" stroke-width="1.5"/>
      <line x1="80" y1="300" x2="480" y2="300" stroke="#e3cd8a" stroke-width="1.5"/>
      <!-- Fettzellen in der Unterhaut -->
      <circle cx="130" cy="345" r="14" fill="#fbe39a" stroke="#e3cd8a"/>
      <circle cx="175" cy="368" r="14" fill="#fbe39a" stroke="#e3cd8a"/>
      <circle cx="300" cy="350" r="14" fill="#fbe39a" stroke="#e3cd8a"/>
      <circle cx="445" cy="368" r="14" fill="#fbe39a" stroke="#e3cd8a"/>
      <!-- Pigmentpunkte in der Keimschicht -->
      <circle cx="115" cy="100" r="3.5" fill="#6b4423"/>
      <circle cx="250" cy="103" r="3.5" fill="#6b4423"/>
      <circle cx="340" cy="98" r="3.5" fill="#6b4423"/>
      <!-- Haar (Schaft + Wurzel) -->
      <rect x="196" y="14" width="9" height="262" rx="4" fill="#8b5a2b"/>
      <ellipse cx="200" cy="280" rx="15" ry="11" fill="#6b4423"/>
      <!-- Talgdrüse am Haarbalg -->
      <circle cx="245" cy="160" r="15" fill="#f6c343" stroke="#d99b1c" stroke-width="1.5"/>
      <line x1="231" y1="160" x2="205" y2="158" stroke="#d99b1c" stroke-width="2"/>
      <!-- Schweißdrüse: Ausführungsgang + Knäuel -->
      <path d="M 400 40 q 16 70 -4 130 q -14 46 6 78" fill="none" stroke="#5b94d6" stroke-width="3"/>
      <circle cx="402" cy="335" r="22" fill="none" stroke="#3f74b8" stroke-width="3"/>
      <circle cx="402" cy="335" r="12" fill="none" stroke="#3f74b8" stroke-width="3"/>
      <!-- Blutgefäße -->
      <path d="M 320 122 q 16 70 0 150" fill="none" stroke="#dc2626" stroke-width="3"/>
      <path d="M 338 122 q -16 70 0 150" fill="none" stroke="#2563eb" stroke-width="3"/>
      <!-- Tastkörperchen (Sinneszelle) -->
      <ellipse cx="135" cy="210" rx="22" ry="14" fill="#d8b4fe" stroke="#9333ea" stroke-width="1.5"/>
      <line x1="135" y1="210" x2="135" y2="112" stroke="#9333ea" stroke-width="1.5" stroke-dasharray="3 3"/>
      <!-- Schicht-Beschriftung links -->
      <line x1="66" y1="40" x2="66" y2="112" stroke="#374151" stroke-width="2"/>
      <line x1="66" y1="112" x2="66" y2="300" stroke="#374151" stroke-width="2"/>
      <line x1="66" y1="300" x2="66" y2="392" stroke="#374151" stroke-width="2"/>
      <text x="26" y="76" transform="rotate(-90 26 76)" text-anchor="middle" font-size="13" font-weight="bold" fill="#1f2937">Oberhaut</text>
      <text x="26" y="206" transform="rotate(-90 26 206)" text-anchor="middle" font-size="13" font-weight="bold" fill="#1f2937">Lederhaut</text>
      <text x="26" y="346" transform="rotate(-90 26 346)" text-anchor="middle" font-size="13" font-weight="bold" fill="#1f2937">Unterhaut</text>
      <!-- Nummern-Badges -->
      <g font-size="13" font-weight="bold" fill="#ffffff" text-anchor="middle">
        <circle cx="455" cy="53" r="13" fill="#1d4ed8"/><text x="455" y="58">1</text>
        <circle cx="455" cy="92" r="13" fill="#1d4ed8"/><text x="455" y="97">2</text>
        <circle cx="200" cy="28" r="13" fill="#1d4ed8"/><text x="200" y="33">3</text>
        <circle cx="270" cy="160" r="13" fill="#1d4ed8"/><text x="270" y="165">4</text>
        <circle cx="232" cy="282" r="13" fill="#1d4ed8"/><text x="232" y="287">5</text>
        <circle cx="402" cy="335" r="13" fill="#1d4ed8"/><text x="402" y="340">6</text>
        <circle cx="355" cy="250" r="13" fill="#1d4ed8"/><text x="355" y="255">7</text>
        <circle cx="170" cy="210" r="13" fill="#1d4ed8"/><text x="170" y="215">8</text>
      </g>
    </svg>`;

  window.LESSON_DATA = (window.LESSON_DATA || []).concat([

    // ===================================================================
    // Lektion 1: Aufbau der Haut - die drei Schichten
    // ===================================================================
    {
      id: 1,
      title: "Aufbau der Haut - die drei Schichten",
      explanation: {
        html: `
          <h2>Die Haut - unser größtes Organ</h2>
          <p>Die Haut ist das <strong>größte Organ</strong> deines Körpers. Bei einem Erwachsenen
          wäre sie ausgebreitet fast <strong>2 Quadratmeter</strong> groß. Sie ist aus
          <strong>drei Schichten</strong> aufgebaut - von außen nach innen:
          <strong>Oberhaut, Lederhaut, Unterhaut</strong>.</p>

          <div class="analogy-box">
            <strong>Wie die Wand eines Hauses:</strong> Eine Hauswand besteht auch aus mehreren Schichten -
            außen der wetterfeste Putz (schützt), in der Mitte die Mauer mit Rohren und Kabeln (versorgt das Haus),
            innen die Dämmung (hält warm). Genauso ist es bei der Haut: außen die schützende
            <strong>Oberhaut</strong>, in der Mitte die <strong>Lederhaut</strong> mit Drüsen, Gefäßen und
            Sinneszellen, innen die <strong>Unterhaut</strong> aus Fett, die wärmt und polstert.
          </div>

          <h3>Querschnitt durch die Haut</h3>
          <p>Schau dir die Zeichnung an. Jede Nummer ist ein Bestandteil der Haut. In der Tabelle darunter
          steht, zu welcher Schicht er gehört und welche <strong>Funktion</strong> er hat.</p>

          ${skinSvg}

          <table class="icon-table">
            <tr><th>Nr.</th><th>Bestandteil</th><th>Schicht</th><th>Funktion (Aufgabe)</th></tr>
            <tr><td><strong>1</strong></td><td>Hornschicht</td><td>Oberhaut</td><td>Außen, aus verhornten <em>toten</em> Zellen. Schützt vor Krankheitserregern, Austrocknung und Verletzungen.</td></tr>
            <tr><td><strong>2</strong></td><td>Keimschicht</td><td>Oberhaut</td><td>Bildet ständig <em>neue</em> Hautzellen, die nach oben wandern. Hier sitzen die Pigmentzellen (Farbstoff <strong>Melanin</strong>) - Schutz vor UV-Strahlung der Sonne.</td></tr>
            <tr><td><strong>3</strong></td><td>Haar</td><td>Leder-/Oberhaut</td><td>Schützt und wärmt; stellt sich bei Kälte auf (Gänsehaut).</td></tr>
            <tr><td><strong>4</strong></td><td>Talgdrüse</td><td>Lederhaut</td><td>Gibt Fett (Talg) ab - hält Haut und Haare geschmeidig und schützt vor dem Austrocknen.</td></tr>
            <tr><td><strong>5</strong></td><td>Haarwurzel</td><td>Lederhaut</td><td>Hier wächst das Haar nach (im Haarbalg).</td></tr>
            <tr><td><strong>6</strong></td><td>Schweißdrüse</td><td>Lederhaut (reicht bis Unterhaut)</td><td>Bildet Schweiß. Beim Verdunsten kühlt das den Körper (Temperaturregelung).</td></tr>
            <tr><td><strong>7</strong></td><td>Blutgefäß</td><td>Lederhaut</td><td>Versorgt die Haut mit Nährstoffen und Sauerstoff und transportiert Wärme.</td></tr>
            <tr><td><strong>8</strong></td><td>Tastkörperchen (Sinneszelle)</td><td>Lederhaut</td><td>Nimmt Reize wahr (Druck, Berührung) - dadurch ist die Haut ein <strong>Sinnesorgan</strong>.</td></tr>
          </table>
          <p>Die <strong>Unterhaut</strong> besteht vor allem aus <strong>Fettgewebe</strong>. Es speichert
          Energie, polstert den Körper und hält ihn warm (Wärmeisolierung).</p>

          <div class="why-context">
            <strong>Warum lernen wir das?</strong> Auf deiner KA steht: <em>"AB der Haut beschriften und deren
            Funktionen nennen"</em>. Genau das üben wir hier: jeden Bestandteil der richtigen Schicht zuordnen
            <strong>und</strong> sagen, wozu er da ist.
          </div>

          <div class="tip-box">
            <strong>Merksatz für die Reihenfolge (von außen nach innen):</strong>
            <strong>O</strong>berhaut (oben) - <strong>L</strong>ederhaut (Mitte) - <strong>U</strong>nterhaut (unten).
            Die Buchstaben <strong>O-L-U</strong> gehen von oben nach unten - das <strong>O</strong> wie
            <em>oben</em>, das <strong>U</strong> wie <em>unten</em>.
          </div>

          <div class="warning-box">
            <strong>Nicht verwechseln (beliebte Falle):</strong> Die <strong>Hornschicht</strong> (ganz außen)
            besteht aus <em>toten</em> Zellen und schützt. Die <strong>Keimschicht</strong> (darunter) bildet
            <em>neue, lebende</em> Zellen. "Keim" wie "keimen / wachsen" = hier entsteht Neues.
          </div>
        `
      },
      example: {
        title: "Beispiel: Wo gehört was hin?",
        steps: [
          {
            label: "Eine Schürfwunde",
            html: `<p>Du fällst und schürfst dir das Knie - es blutet leicht. Das Blut zeigt: Die Verletzung
              geht durch die <strong>Oberhaut</strong> bis in die <strong>Lederhaut</strong>, denn erst dort
              liegen die <strong>Blutgefäße</strong> (Nr. 7). In der Oberhaut allein gibt es kein Blut.</p>`
          },
          {
            label: "Warum wird man braun?",
            html: `<p>In der <strong>Keimschicht</strong> (Nr. 2) sitzen Pigmentzellen. Bei Sonne bilden sie mehr
              <strong>Melanin</strong> (brauner Farbstoff) - die Haut wird braun. Das ist ein <strong>Schutz vor
              UV-Strahlung</strong>.</p>`
          },
          {
            label: "Warum schwitzen wir?",
            html: `<p>Wird dir warm, bilden die <strong>Schweißdrüsen</strong> (Nr. 6) Schweiß. Beim Verdunsten
              auf der Haut entsteht Kühle - so regelt die Haut die <strong>Körpertemperatur</strong>.</p>`
          }
        ]
      },
      exercisesIntro: skinSvg + "<p>Schau dir die Nummern im Querschnitt oben an. Erst zuordnen, dann die Funktionen.</p>",
      exercises: [
        {
          type: "matching",
          question: "Beschrifte die Haut: Ordne jede Nummer dem richtigen Bestandteil zu.",
          pairs: [
            { left: "1", right: "Hornschicht" },
            { left: "2", right: "Keimschicht" },
            { left: "4", right: "Talgdrüse" },
            { left: "6", right: "Schweißdrüse" },
            { left: "8", right: "Tastkörperchen" }
          ],
          explanation: "1 Hornschicht (außen), 2 Keimschicht (bildet neue Zellen), 4 Talgdrüse (Fett), 6 Schweißdrüse (Kühlung), 8 Tastkörperchen (Fühlen)."
        },
        {
          type: "matching",
          question: "Ordne jeden Bestandteil seiner Schicht zu:",
          pairs: [
            { left: "Hornschicht", right: "Oberhaut" },
            { left: "Schweißdrüse", right: "Lederhaut" },
            { left: "Fettgewebe", right: "Unterhaut" }
          ],
          explanation: "Oberhaut (Horn- und Keimschicht) - Lederhaut (Drüsen, Gefäße, Sinneszellen) - Unterhaut (Fettgewebe)."
        },
        {
          type: "multiple-choice",
          question: "Welche Schicht bildet ständig <strong>neue</strong> Hautzellen?",
          options: ["Die Keimschicht", "Die Hornschicht", "Die Unterhaut", "Die Talgdrüse"],
          correct: 0,
          explanation: "Richtig! In der Keimschicht entstehen neue Zellen, die nach oben wandern und verhornen.",
          wrongExplanations: {
            1: "Die Hornschicht besteht aus toten Zellen - sie bildet nichts Neues, sie schützt.",
            2: "Die Unterhaut ist Fettgewebe (Wärme/Polster), keine Zellbildung.",
            3: "Die Talgdrüse gibt Fett ab, sie bildet keine Hautzellen."
          }
        },
        {
          type: "fill-in-blank",
          question: "Vervollständige die drei Hautschichten (von außen nach innen):",
          text: "Ganz außen liegt die {{blank}}, darunter die {{blank}}, und innen die {{blank}} aus Fettgewebe.",
          blanks: [
            { correct: "Oberhaut", alternatives: ["oberhaut"] },
            { correct: "Lederhaut", alternatives: ["lederhaut"] },
            { correct: "Unterhaut", alternatives: ["unterhaut"] }
          ],
          explanation: "Oberhaut - Lederhaut - Unterhaut. Merke: O-L-U von oben nach unten."
        }
      ]
    },

    // ===================================================================
    // Lektion 2: Funktionen der Haut & Haut als Sinnesorgan
    // ===================================================================
    {
      id: 2,
      title: "Funktionen der Haut & Haut als Sinnesorgan",
      explanation: {
        html: `
          <h2>Was kann die Haut alles?</h2>
          <p>Die Haut ist nicht nur eine Hülle. Sie hat <strong>viele wichtige Aufgaben</strong> gleichzeitig.
          Die vier wichtigsten solltest du nennen können.</p>

          <div class="analogy-box">
            <strong>Wie eine Hightech-Jacke:</strong> Eine gute Outdoor-Jacke schützt dich vor Regen und Kälte,
            lässt dich nicht überhitzen und manche haben sogar Sensoren. Deine Haut kann all das von Natur aus:
            schützen, Temperatur regeln und fühlen.
          </div>

          <h3>Die 4 Hauptfunktionen der Haut</h3>
          <table class="icon-table">
            <tr><th>Funktion</th><th>Wie macht die Haut das?</th></tr>
            <tr><td><strong>Schutz</strong></td><td>Die Hornschicht hält Krankheitserreger, Schmutz und UV-Strahlung ab und schützt vor Austrocknung und Verletzung.</td></tr>
            <tr><td><strong>Temperatur regeln</strong></td><td>Bei Hitze: Schwitzen kühlt, Blutgefäße weiten sich. Bei Kälte: Gefäße verengen sich, Gänsehaut, das Fett der Unterhaut wärmt.</td></tr>
            <tr><td><strong>Sinnesorgan (Fühlen)</strong></td><td>In der Lederhaut sitzen Sinneszellen. Sie melden Druck, Berührung, Wärme, Kälte und Schmerz ans Gehirn.</td></tr>
            <tr><td><strong>Ausscheidung</strong></td><td>Mit dem Schweiß gibt die Haut Wasser und etwas Salz/Abfallstoffe ab.</td></tr>
          </table>

          <h3>Die Haut als Sinnesorgan</h3>
          <p>Die Haut ist eines deiner <strong>fünf Sinnesorgane</strong> (Auge, Ohr, Nase, Zunge, <strong>Haut</strong>).
          Ihr Sinn ist das <strong>Tasten / Fühlen</strong>. In der Lederhaut liegen verschiedene
          <strong>Sinneszellen</strong> (Tastkörperchen). Jede Art reagiert auf etwas anderes:</p>
          <table class="icon-table">
            <tr><th>Sinneszelle reagiert auf ...</th><th>Beispiel</th></tr>
            <tr><td>Druck und Berührung</td><td>Du spürst, dass dich jemand antippt.</td></tr>
            <tr><td>Wärme und Kälte</td><td>Du merkst, ob das Wasser warm oder kalt ist.</td></tr>
            <tr><td>Schmerz</td><td>Du ziehst die Hand schnell von der heißen Herdplatte weg.</td></tr>
          </table>
          <p>Die Sinneszellen nehmen den <strong>Reiz</strong> auf und schicken die Information über Nerven
          zum Gehirn. (Mehr dazu im nächsten Modul: "Vom Reiz zur Reaktion".)</p>

          <div class="why-context">
            <strong>Warum lernen wir das?</strong> In der KA musst du die <strong>Funktionen der Haut nennen</strong>
            können. Und die Haut verbindet zwei Themen: Sie ist Schutzorgan <em>und</em> Sinnesorgan - das
            Stichwort führt direkt zum nächsten Thema (Reiz und Reaktion).
          </div>

          <div class="tip-box">
            <strong>4 Funktionen zum Merken - "S-T-S-A":</strong> <strong>S</strong>chutz,
            <strong>T</strong>emperatur regeln, <strong>S</strong>innesorgan (fühlen), <strong>A</strong>usscheidung.
          </div>

          <div class="warning-box">
            <strong>Aufpassen:</strong> Die Sinneszellen sitzen in der <strong>Lederhaut</strong>, nicht in der
            toten Hornschicht. Deshalb spürst du auch keine Berührung, wenn nur die obersten, toten Zellen
            betroffen sind (z.B. beim Schneiden der Hornhaut).
          </div>
        `
      },
      example: {
        title: "Beispiel: Welche Funktion der Haut ist gefragt?",
        steps: [
          {
            label: "Du fasst auf eine heiße Herdplatte",
            html: `<p>Die Sinneszellen melden <strong>Schmerz</strong> - du ziehst die Hand weg.
              &rarr; Funktion: <strong>Sinnesorgan</strong> (Fühlen).</p>`
          },
          {
            label: "Dir wird beim Sport heiß",
            html: `<p>Du fängst an zu schwitzen, der Schweiß verdunstet und kühlt.
              &rarr; Funktion: <strong>Temperatur regeln</strong>.</p>`
          },
          {
            label: "Ein Krankheitserreger landet auf der Haut",
            html: `<p>Die <strong>Hornschicht</strong> hält ihn ab, er kommt nicht in den Körper.
              &rarr; Funktion: <strong>Schutz</strong>.</p>`
          }
        ]
      },
      exercisesIntro: "Denk an S-T-S-A: Schutz, Temperatur, Sinnesorgan, Ausscheidung.",
      exercises: [
        {
          type: "multiple-choice",
          question: "Welcher Sinn gehört zur Haut als Sinnesorgan?",
          options: ["Das Tasten / Fühlen", "Das Sehen", "Das Hören", "Das Riechen"],
          correct: 0,
          explanation: "Richtig! Die Haut ist das Tast-Sinnesorgan: Sie fühlt Druck, Berührung, Wärme, Kälte und Schmerz.",
          wrongExplanations: {
            1: "Das Sehen gehört zum Auge.",
            2: "Das Hören gehört zum Ohr.",
            3: "Das Riechen gehört zur Nase."
          }
        },
        {
          type: "matching",
          question: "Ordne jeder Hautfunktion das passende Beispiel zu:",
          pairs: [
            { left: "Schutz", right: "Die Hornschicht hält Krankheitserreger ab" },
            { left: "Temperatur regeln", right: "Schwitzen kühlt den Körper" },
            { left: "Sinnesorgan", right: "Du spürst eine Berührung" },
            { left: "Ausscheidung", right: "Mit dem Schweiß wird etwas Salz abgegeben" }
          ],
          explanation: "Schutz, Temperatur regeln, Sinnesorgan (fühlen) und Ausscheidung - die vier Aufgaben der Haut."
        },
        {
          type: "fill-in-blank",
          question: "Fülle die Lücken zur Haut als Sinnesorgan:",
          text: "Die Haut ist ein {{blank}}. In der Lederhaut sitzen {{blank}}, die Reize wie Druck, Wärme und Schmerz an das {{blank}} melden.",
          blanks: [
            { correct: "Sinnesorgan", alternatives: ["sinnesorgan"] },
            { correct: "Sinneszellen", alternatives: ["sinneszellen", "Tastkörperchen", "Tastkörperchen"] },
            { correct: "Gehirn", alternatives: ["gehirn"] }
          ],
          explanation: "Sinneszellen in der Lederhaut nehmen Reize auf und melden sie über Nerven ans Gehirn."
        },
        {
          type: "free-text",
          question: "Nenne und erkläre kurz <strong>drei Funktionen der Haut</strong>.",
          hint: "Denk an S-T-S-A. Pro Funktion ein kurzer Satz, was die Haut da macht.",
          minWords: 12,
          modelAnswer: "1. Schutz: Die Hornschicht hält Krankheitserreger, Schmutz und UV-Strahlung ab und schützt vor Austrocknung. 2. Temperatur regeln: Durch Schwitzen kühlt sich der Körper, das Fett der Unterhaut wärmt. 3. Sinnesorgan: Sinneszellen in der Lederhaut nehmen Druck, Wärme und Schmerz wahr und melden sie ans Gehirn."
        }
      ]
    }

  ]);

})();
