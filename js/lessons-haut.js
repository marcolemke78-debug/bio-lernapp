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
  // Wird in der Erklaerung (mit Legende) UND in der Uebung (zum Beschriften) genutzt.
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
      <!-- Talgdruese am Haarbalg -->
      <circle cx="245" cy="160" r="15" fill="#f6c343" stroke="#d99b1c" stroke-width="1.5"/>
      <line x1="231" y1="160" x2="205" y2="158" stroke="#d99b1c" stroke-width="2"/>
      <!-- Schweissdruese: Ausfuehrungsgang + Knaeuel -->
      <path d="M 400 40 q 16 70 -4 130 q -14 46 6 78" fill="none" stroke="#5b94d6" stroke-width="3"/>
      <circle cx="402" cy="335" r="22" fill="none" stroke="#3f74b8" stroke-width="3"/>
      <circle cx="402" cy="335" r="12" fill="none" stroke="#3f74b8" stroke-width="3"/>
      <!-- Blutgefaesse -->
      <path d="M 320 122 q 16 70 0 150" fill="none" stroke="#dc2626" stroke-width="3"/>
      <path d="M 338 122 q -16 70 0 150" fill="none" stroke="#2563eb" stroke-width="3"/>
      <!-- Tastkoerperchen (Sinneszelle) -->
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
        <circle cx="92" cy="210" r="13" fill="#1d4ed8"/><text x="92" y="215">8</text>
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
          <h2>Die Haut - unser groesstes Organ</h2>
          <p>Die Haut ist das <strong>groesste Organ</strong> deines Koerpers. Bei einem Erwachsenen
          waere sie ausgebreitet fast <strong>2 Quadratmeter</strong> gross. Sie ist aus
          <strong>drei Schichten</strong> aufgebaut - von aussen nach innen:
          <strong>Oberhaut, Lederhaut, Unterhaut</strong>.</p>

          <div class="analogy-box">
            <strong>Wie die Wand eines Hauses:</strong> Eine Hauswand besteht auch aus mehreren Schichten -
            aussen der wetterfeste Putz (schuetzt), in der Mitte die Mauer mit Rohren und Kabeln (versorgt das Haus),
            innen die Daemmung (haelt warm). Genauso ist es bei der Haut: aussen die schuetzende
            <strong>Oberhaut</strong>, in der Mitte die <strong>Lederhaut</strong> mit Druesen, Gefaessen und
            Sinneszellen, innen die <strong>Unterhaut</strong> aus Fett, die waermt und polstert.
          </div>

          <h3>Querschnitt durch die Haut</h3>
          <p>Schau dir die Zeichnung an. Jede Nummer ist ein Bestandteil der Haut. In der Tabelle darunter
          steht, zu welcher Schicht er gehoert und welche <strong>Funktion</strong> er hat.</p>

          ${skinSvg}

          <table class="icon-table">
            <tr><th>Nr.</th><th>Bestandteil</th><th>Schicht</th><th>Funktion (Aufgabe)</th></tr>
            <tr><td><strong>1</strong></td><td>Hornschicht</td><td>Oberhaut</td><td>Aussen, aus verhornten <em>toten</em> Zellen. Schuetzt vor Krankheitserregern, Austrocknung und Verletzungen.</td></tr>
            <tr><td><strong>2</strong></td><td>Keimschicht</td><td>Oberhaut</td><td>Bildet staendig <em>neue</em> Hautzellen, die nach oben wandern. Hier sitzen die Pigmentzellen (Farbstoff <strong>Melanin</strong>) - Schutz vor UV-Strahlung der Sonne.</td></tr>
            <tr><td><strong>3</strong></td><td>Haar</td><td>Leder-/Oberhaut</td><td>Schuetzt und waermt; stellt sich bei Kaelte auf (Gaensehaut).</td></tr>
            <tr><td><strong>4</strong></td><td>Talgdruese</td><td>Lederhaut</td><td>Gibt Fett (Talg) ab - haelt Haut und Haare geschmeidig und schuetzt vor dem Austrocknen.</td></tr>
            <tr><td><strong>5</strong></td><td>Haarwurzel</td><td>Lederhaut</td><td>Hier waechst das Haar nach (im Haarbalg).</td></tr>
            <tr><td><strong>6</strong></td><td>Schweissdruese</td><td>Lederhaut/Unterhaut</td><td>Bildet Schweiss. Beim Verdunsten kuehlt das den Koerper (Temperaturregelung).</td></tr>
            <tr><td><strong>7</strong></td><td>Blutgefaess</td><td>Lederhaut</td><td>Versorgt die Haut mit Naehrstoffen und Sauerstoff und transportiert Waerme.</td></tr>
            <tr><td><strong>8</strong></td><td>Tastkoerperchen (Sinneszelle)</td><td>Lederhaut</td><td>Nimmt Reize wahr (Druck, Beruehrung) - dadurch ist die Haut ein <strong>Sinnesorgan</strong>.</td></tr>
          </table>
          <p>Die <strong>Unterhaut</strong> besteht vor allem aus <strong>Fettgewebe</strong>. Es speichert
          Energie, polstert den Koerper und haelt ihn warm (Waermeisolierung).</p>

          <div class="why-context">
            <strong>Warum lernen wir das?</strong> Auf deiner KA steht: <em>"AB der Haut beschriften und deren
            Funktionen nennen"</em>. Genau das ueben wir hier: jeden Bestandteil der richtigen Schicht zuordnen
            <strong>und</strong> sagen, wozu er da ist.
          </div>

          <div class="tip-box">
            <strong>Merksatz fuer die Reihenfolge (von aussen nach innen):</strong> <strong>O</strong>berhaut -
            <strong>L</strong>ederhaut - <strong>U</strong>nterhaut. Eselsbruecke: <em>"<strong>O</strong>hne
            <strong>L</strong>ecker <strong>U</strong>nterwegs"</em> - O, L, U von oben nach unten.
          </div>

          <div class="warning-box">
            <strong>Nicht verwechseln (beliebte Falle):</strong> Die <strong>Hornschicht</strong> (ganz aussen)
            besteht aus <em>toten</em> Zellen und schuetzt. Die <strong>Keimschicht</strong> (darunter) bildet
            <em>neue, lebende</em> Zellen. "Keim" wie "keimen / wachsen" = hier entsteht Neues.
          </div>
        `
      },
      example: {
        title: "Beispiel: Wo gehoert was hin?",
        steps: [
          {
            label: "Eine Schuerfwunde",
            html: `<p>Du faellst und schuerfst dir das Knie - es blutet leicht. Das Blut zeigt: Die Verletzung
              geht durch die <strong>Oberhaut</strong> bis in die <strong>Lederhaut</strong>, denn erst dort
              liegen die <strong>Blutgefaesse</strong> (Nr. 7). In der Oberhaut allein gibt es kein Blut.</p>`
          },
          {
            label: "Warum wird man braun?",
            html: `<p>In der <strong>Keimschicht</strong> (Nr. 2) sitzen Pigmentzellen. Bei Sonne bilden sie mehr
              <strong>Melanin</strong> (brauner Farbstoff) - die Haut wird braun. Das ist ein <strong>Schutz vor
              UV-Strahlung</strong>.</p>`
          },
          {
            label: "Warum schwitzen wir?",
            html: `<p>Wird dir warm, bilden die <strong>Schweissdruesen</strong> (Nr. 6) Schweiss. Beim Verdunsten
              auf der Haut entsteht Kuehle - so regelt die Haut die <strong>Koerpertemperatur</strong>.</p>`
          }
        ]
      },
      exercisesIntro: "Schau dir nochmal die Nummern im Querschnitt an. Erst zuordnen, dann die Funktionen.",
      exercises: [
        {
          type: "matching",
          question: "Beschrifte die Haut: Ordne jede Nummer dem richtigen Bestandteil zu.",
          pairs: [
            { left: "1", right: "Hornschicht" },
            { left: "2", right: "Keimschicht" },
            { left: "4", right: "Talgdruese" },
            { left: "6", right: "Schweissdruese" },
            { left: "8", right: "Tastkoerperchen" }
          ],
          explanation: "1 Hornschicht (aussen), 2 Keimschicht (bildet neue Zellen), 4 Talgdruese (Fett), 6 Schweissdruese (Kuehlung), 8 Tastkoerperchen (Fuehlen)."
        },
        {
          type: "matching",
          question: "Ordne jeden Bestandteil seiner Schicht zu:",
          pairs: [
            { left: "Hornschicht", right: "Oberhaut" },
            { left: "Schweissdruese", right: "Lederhaut" },
            { left: "Fettgewebe", right: "Unterhaut" }
          ],
          explanation: "Oberhaut (Horn- und Keimschicht) - Lederhaut (Druesen, Gefaesse, Sinneszellen) - Unterhaut (Fettgewebe)."
        },
        {
          type: "multiple-choice",
          question: "Welche Schicht bildet staendig <strong>neue</strong> Hautzellen?",
          options: ["Die Keimschicht", "Die Hornschicht", "Die Unterhaut", "Die Talgdruese"],
          correct: 0,
          explanation: "Richtig! In der Keimschicht entstehen neue Zellen, die nach oben wandern und verhornen.",
          wrongExplanations: {
            1: "Die Hornschicht besteht aus toten Zellen - sie bildet nichts Neues, sie schuetzt.",
            2: "Die Unterhaut ist Fettgewebe (Waerme/Polster), keine Zellbildung.",
            3: "Die Talgdruese gibt Fett ab, sie bildet keine Hautzellen."
          }
        },
        {
          type: "fill-in-blank",
          question: "Vervollstaendige die drei Hautschichten (von aussen nach innen):",
          text: "Ganz aussen liegt die {{blank}}, darunter die {{blank}}, und innen die {{blank}} aus Fettgewebe.",
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
          <p>Die Haut ist nicht nur eine Huelle. Sie hat <strong>viele wichtige Aufgaben</strong> gleichzeitig.
          Die vier wichtigsten solltest du nennen koennen.</p>

          <div class="analogy-box">
            <strong>Wie eine Hightech-Jacke:</strong> Eine gute Outdoor-Jacke schuetzt dich vor Regen und Kaelte,
            laesst dich nicht ueberhitzen und manche haben sogar Sensoren. Deine Haut kann all das von Natur aus:
            schuetzen, Temperatur regeln und fuehlen.
          </div>

          <h3>Die 4 Hauptfunktionen der Haut</h3>
          <table class="icon-table">
            <tr><th>Funktion</th><th>Wie macht die Haut das?</th></tr>
            <tr><td><strong>Schutz</strong></td><td>Die Hornschicht haelt Krankheitserreger, Schmutz und UV-Strahlung ab und schuetzt vor Austrocknung und Verletzung.</td></tr>
            <tr><td><strong>Temperatur regeln</strong></td><td>Bei Hitze: Schwitzen kuehlt, Blutgefaesse weiten sich. Bei Kaelte: Gefaesse verengen sich, Gaensehaut, das Fett der Unterhaut waermt.</td></tr>
            <tr><td><strong>Sinnesorgan (Fuehlen)</strong></td><td>In der Lederhaut sitzen Sinneszellen. Sie melden Druck, Beruehrung, Waerme, Kaelte und Schmerz ans Gehirn.</td></tr>
            <tr><td><strong>Ausscheidung</strong></td><td>Mit dem Schweiss gibt die Haut Wasser und etwas Salz/Abfallstoffe ab.</td></tr>
          </table>

          <h3>Die Haut als Sinnesorgan</h3>
          <p>Die Haut ist eines deiner <strong>fuenf Sinnesorgane</strong> (Auge, Ohr, Nase, Zunge, <strong>Haut</strong>).
          Ihr Sinn ist das <strong>Tasten / Fuehlen</strong>. In der Lederhaut liegen verschiedene
          <strong>Sinneszellen</strong> (Tastkoerperchen). Jede Art reagiert auf etwas anderes:</p>
          <table class="icon-table">
            <tr><th>Sinneszelle reagiert auf ...</th><th>Beispiel</th></tr>
            <tr><td>Druck und Beruehrung</td><td>Du spuerst, dass dich jemand antippt.</td></tr>
            <tr><td>Waerme und Kaelte</td><td>Du merkst, ob das Wasser warm oder kalt ist.</td></tr>
            <tr><td>Schmerz</td><td>Du ziehst die Hand schnell von der heissen Herdplatte weg.</td></tr>
          </table>
          <p>Die Sinneszellen nehmen den <strong>Reiz</strong> auf und schicken die Information ueber Nerven
          zum Gehirn. (Mehr dazu im naechsten Modul: "Vom Reiz zur Reaktion".)</p>

          <div class="why-context">
            <strong>Warum lernen wir das?</strong> In der KA musst du die <strong>Funktionen der Haut nennen</strong>
            koennen. Und die Haut verbindet zwei Themen: Sie ist Schutzorgan <em>und</em> Sinnesorgan - das
            Stichwort fuehrt direkt zum naechsten Thema (Reiz und Reaktion).
          </div>

          <div class="tip-box">
            <strong>4 Funktionen zum Merken - "S-T-S-A":</strong> <strong>S</strong>chutz,
            <strong>T</strong>emperatur regeln, <strong>S</strong>innesorgan (fuehlen), <strong>A</strong>usscheidung.
          </div>

          <div class="warning-box">
            <strong>Aufpassen:</strong> Die Sinneszellen sitzen in der <strong>Lederhaut</strong>, nicht in der
            toten Hornschicht. Deshalb spuerst du auch keine Beruehrung, wenn nur die obersten, toten Zellen
            betroffen sind (z.B. beim Schneiden der Hornhaut).
          </div>
        `
      },
      example: {
        title: "Beispiel: Welche Funktion der Haut ist gefragt?",
        steps: [
          {
            label: "Du fasst auf eine heisse Herdplatte",
            html: `<p>Die Sinneszellen melden <strong>Schmerz</strong> - du ziehst die Hand weg.
              &rarr; Funktion: <strong>Sinnesorgan</strong> (Fuehlen).</p>`
          },
          {
            label: "Dir wird beim Sport heiss",
            html: `<p>Du faengst an zu schwitzen, der Schweiss verdunstet und kuehlt.
              &rarr; Funktion: <strong>Temperatur regeln</strong>.</p>`
          },
          {
            label: "Ein Krankheitserreger landet auf der Haut",
            html: `<p>Die <strong>Hornschicht</strong> haelt ihn ab, er kommt nicht in den Koerper.
              &rarr; Funktion: <strong>Schutz</strong>.</p>`
          }
        ]
      },
      exercisesIntro: "Denk an S-T-S-A: Schutz, Temperatur, Sinnesorgan, Ausscheidung.",
      exercises: [
        {
          type: "multiple-choice",
          question: "Welcher Sinn gehoert zur Haut als Sinnesorgan?",
          options: ["Das Tasten / Fuehlen", "Das Sehen", "Das Hoeren", "Das Riechen"],
          correct: 0,
          explanation: "Richtig! Die Haut ist das Tast-Sinnesorgan: Sie fuehlt Druck, Beruehrung, Waerme, Kaelte und Schmerz.",
          wrongExplanations: {
            1: "Das Sehen gehoert zum Auge.",
            2: "Das Hoeren gehoert zum Ohr.",
            3: "Das Riechen gehoert zur Nase."
          }
        },
        {
          type: "matching",
          question: "Ordne jeder Hautfunktion das passende Beispiel zu:",
          pairs: [
            { left: "Schutz", right: "Die Hornschicht haelt Krankheitserreger ab" },
            { left: "Temperatur regeln", right: "Schwitzen kuehlt den Koerper" },
            { left: "Sinnesorgan", right: "Du spuerst eine Beruehrung" },
            { left: "Ausscheidung", right: "Mit dem Schweiss wird etwas Salz abgegeben" }
          ],
          explanation: "Schutz, Temperatur regeln, Sinnesorgan (fuehlen) und Ausscheidung - die vier Aufgaben der Haut."
        },
        {
          type: "fill-in-blank",
          question: "Fuelle die Luecken zur Haut als Sinnesorgan:",
          text: "Die Haut ist ein {{blank}}. In der Lederhaut sitzen {{blank}}, die Reize wie Druck, Waerme und Schmerz an das {{blank}} melden.",
          blanks: [
            { correct: "Sinnesorgan", alternatives: ["sinnesorgan"] },
            { correct: "Sinneszellen", alternatives: ["sinneszellen", "Tastkoerperchen", "Tastkörperchen"] },
            { correct: "Gehirn", alternatives: ["gehirn"] }
          ],
          explanation: "Sinneszellen in der Lederhaut nehmen Reize auf und melden sie ueber Nerven ans Gehirn."
        },
        {
          type: "free-text",
          question: "Nenne und erklaere kurz <strong>drei Funktionen der Haut</strong>.",
          hint: "Denk an S-T-S-A. Pro Funktion ein kurzer Satz, was die Haut da macht.",
          minWords: 12,
          modelAnswer: "1. Schutz: Die Hornschicht haelt Krankheitserreger, Schmutz und UV-Strahlung ab und schuetzt vor Austrocknung. 2. Temperatur regeln: Durch Schwitzen kuehlt sich der Koerper, das Fett der Unterhaut waermt. 3. Sinnesorgan: Sinneszellen in der Lederhaut nehmen Druck, Waerme und Schmerz wahr und melden sie ans Gehirn."
        }
      ]
    }

  ]);

})();
