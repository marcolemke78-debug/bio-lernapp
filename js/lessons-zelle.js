/**
 * Modul 3 - Die Zelle (Biologie KA 2, Klasse 8, M-Niveau).
 *   L4 Die Zelle und ihre Bestandteile (Analogie Zelle = Fabrik)
 *   L5 Tierzelle und Pflanzenzelle im Vergleich (Unterschiede)
 *
 * Inhalte in eigenen Worten nach dem Hefteintrag "Zellen sind kleine Fabriken"
 * und der Zell-Zeichnung. Eigene SVG-Grafiken. Zielgruppe: Leonie.
 */
(function () {

  // Einzelne Zelle mit nummerierten Grundbausteinen (Erklärung + Übung).
  const cellSvg = `
    <div class="clickable-figure">
    <svg viewBox="0 0 460 320" role="img" aria-label="Schematische Zelle mit Zellmembran, Zellplasma, Zellkern und Mitochondrien" style="max-width:460px;width:100%;height:auto;display:block;margin:0 auto;font-family:sans-serif;">
      <ellipse class="bio-part" data-name="Zellplasma" data-info="Die zähflüssige Grundmasse, die die Zelle ausfüllt; darin liegen alle Bauteile (die 'Werkshalle')." cx="230" cy="160" rx="203" ry="143" fill="#fdeaf3"/>
      <!-- Mitochondrien -->
      <g class="bio-part" data-name="Mitochondrium" data-info="Liefert die Energie für die Zelle - das 'Kraftwerk' der Zelle.">
        <ellipse cx="115" cy="95" rx="32" ry="16" fill="#fca5a5" stroke="#dc2626" stroke-width="1.5"/>
        <path d="M 92 95 q 11 -10 23 0 q 11 10 23 0" fill="none" stroke="#dc2626" stroke-width="1.5"/>
        <ellipse cx="345" cy="225" rx="32" ry="16" fill="#fca5a5" stroke="#dc2626" stroke-width="1.5"/>
        <path d="M 322 225 q 11 -10 23 0 q 11 10 23 0" fill="none" stroke="#dc2626" stroke-width="1.5"/>
      </g>
      <!-- Ribosomen -->
      <g class="bio-part" data-name="Ribosomen" data-info="Winzige Körnchen; hier werden Eiweiße gebaut (die 'Werkbänke').">
        <circle cx="300" cy="90" r="3.5" fill="#6b7280"/>
        <circle cx="320" cy="110" r="3.5" fill="#6b7280"/>
        <circle cx="120" cy="220" r="3.5" fill="#6b7280"/>
        <circle cx="140" cy="240" r="3.5" fill="#6b7280"/>
      </g>
      <!-- Zellkern -->
      <g class="bio-part" data-name="Zellkern" data-info="Steuerzentrale; enthält die Erbinformation (die Baupläne) - der 'Chef'.">
        <circle cx="230" cy="160" r="54" fill="#c4b5fd" stroke="#7c3aed" stroke-width="2"/>
        <circle cx="230" cy="160" r="16" fill="#7c3aed"/>
      </g>
      <!-- Zellmembran: nur der Rand ist klickbar, Innenklicks gehen ans Plasma -->
      <ellipse class="bio-part" data-name="Zellmembran" data-info="Äußere Hülle; schützt die Zelle und regelt, was hinein- und herausgeht (das 'Tor')." cx="230" cy="160" rx="205" ry="145" fill="none" stroke="#db2777" stroke-width="4"/>
      <!-- Nummern-Badges (Deko) -->
      <g pointer-events="none" font-size="13" font-weight="bold" fill="#ffffff" text-anchor="middle">
        <circle cx="408" cy="92" r="13" fill="#1d4ed8"/><text x="408" y="97">1</text>
        <circle cx="175" cy="270" r="13" fill="#1d4ed8"/><text x="175" y="275">2</text>
        <circle cx="230" cy="160" r="13" fill="#1d4ed8"/><text x="230" y="165">3</text>
        <circle cx="345" cy="225" r="13" fill="#1d4ed8"/><text x="345" y="230">4</text>
      </g>
    </svg>
    <div class="figure-readout">Tipp: Tippe auf einen Zellbestandteil, um Name und Aufgabe zu sehen.</div>
    </div>`;

  // Tierzelle vs. Pflanzenzelle - die 3 pflanzentypischen Teile grün hervorgehoben.
  const compareSvg = `
    <svg viewBox="0 0 640 340" role="img" aria-label="Vergleich Tierzelle und Pflanzenzelle" style="max-width:640px;width:100%;height:auto;display:block;margin:1rem auto;font-family:sans-serif;">
      <!-- Tierzelle -->
      <ellipse cx="160" cy="160" rx="125" ry="120" fill="#fdeaf3" stroke="#db2777" stroke-width="3"/>
      <circle cx="150" cy="140" r="38" fill="#c4b5fd" stroke="#7c3aed" stroke-width="2"/>
      <circle cx="150" cy="140" r="11" fill="#7c3aed"/>
      <ellipse cx="100" cy="235" rx="24" ry="13" fill="#fca5a5" stroke="#dc2626" stroke-width="1.5"/>
      <ellipse cx="215" cy="210" rx="24" ry="13" fill="#fca5a5" stroke="#dc2626" stroke-width="1.5"/>
      <text x="160" y="320" text-anchor="middle" font-size="16" font-weight="bold" fill="#be185d">Tierzelle</text>
      <!-- Pflanzenzelle: dicke Zellwand außen -->
      <rect x="360" y="45" width="240" height="235" rx="14" fill="#dcfce7" stroke="#15803d" stroke-width="6"/>
      <rect x="372" y="57" width="216" height="211" rx="8" fill="#f0fdf4" stroke="#16a34a" stroke-width="2"/>
      <!-- große Vakuole -->
      <ellipse cx="495" cy="175" rx="78" ry="72" fill="#cfeefe" stroke="#3b82f6" stroke-width="2"/>
      <!-- Zellkern -->
      <circle cx="420" cy="100" r="30" fill="#c4b5fd" stroke="#7c3aed" stroke-width="2"/>
      <circle cx="420" cy="100" r="9" fill="#7c3aed"/>
      <!-- Chloroplasten (grün) -->
      <ellipse cx="560" cy="95" rx="17" ry="9" fill="#22c55e" stroke="#15803d" stroke-width="1.5"/>
      <ellipse cx="565" cy="240" rx="17" ry="9" fill="#22c55e" stroke="#15803d" stroke-width="1.5"/>
      <ellipse cx="405" cy="235" rx="17" ry="9" fill="#22c55e" stroke="#15803d" stroke-width="1.5"/>
      <!-- Mitochondrium -->
      <ellipse cx="415" cy="170" rx="22" ry="12" fill="#fca5a5" stroke="#dc2626" stroke-width="1.5"/>
      <text x="480" y="320" text-anchor="middle" font-size="16" font-weight="bold" fill="#15803d">Pflanzenzelle</text>
      <!-- Hinweis-Labels für die 3 Extra-Teile -->
      <text x="495" y="180" text-anchor="middle" font-size="12" font-weight="bold" fill="#1d4ed8">Vakuole</text>
      <text x="600" y="40" text-anchor="end" font-size="11" font-weight="bold" fill="#15803d">Zellwand</text>
      <text x="560" y="78" text-anchor="middle" font-size="10" font-weight="bold" fill="#15803d">Chloroplast</text>
    </svg>`;

  window.LESSON_DATA = (window.LESSON_DATA || []).concat([

    // ===================================================================
    // Lektion 4: Die Zelle und ihre Bestandteile
    // ===================================================================
    {
      id: 4,
      title: "Die Zelle und ihre Bestandteile",
      explanation: {
        html: `
          <h2>Die Zelle - der kleinste Baustein des Lebens</h2>
          <p>Alle Lebewesen bestehen aus <strong>Zellen</strong>. Manche bestehen nur aus einer einzigen Zelle
          (z.B. Bakterien), Menschen, Tiere und Pflanzen aus <strong>vielen Milliarden</strong>. Eine Zelle ist
          winzig - aber in ihr arbeiten viele Bauteile zusammen, jedes mit einer eigenen Aufgabe.</p>

          <div class="analogy-box">
            <strong>Eine Zelle ist wie eine kleine Fabrik:</strong> In einer Fabrik gibt es einen Chef, ein Tor,
            eine Werkshalle und ein Kraftwerk. Genau so hat auch die Zelle ihre "Abteilungen" - jede sorgt dafür,
            dass die Zelle läuft. Mit diesem Bild kannst du dir die Bestandteile gut merken.
          </div>

          <h3>Die Bauteile einer Zelle</h3>
          ${cellSvg}

          <table class="icon-table">
            <tr><th>Nr.</th><th>Bestandteil</th><th>Aufgabe (Funktion)</th><th>In der Fabrik ...</th></tr>
            <tr><td><strong>1</strong></td><td>Zellmembran</td><td>Äußere Hülle; schützt die Zelle und regelt, was hinein- und herausgeht.</td><td>das Werkstor / die Pforte</td></tr>
            <tr><td><strong>2</strong></td><td>Zellplasma</td><td>Die zähflüssige Grundmasse, die die Zelle ausfüllt; darin liegen alle Bauteile.</td><td>die Werkshalle / der Boden</td></tr>
            <tr><td><strong>3</strong></td><td>Zellkern</td><td>Steuerzentrale; enthält die Erbinformation (die Baupläne) und steuert die ganze Zelle.</td><td>der Chef / die Leitung</td></tr>
            <tr><td><strong>4</strong></td><td>Mitochondrien</td><td>Liefern die Energie für die Zelle - die "Kraftwerke" der Zelle.</td><td>das Kraftwerk</td></tr>
          </table>
          <p>Die kleinen grauen Punkte sind <strong>Ribosomen</strong> - an ihnen werden Eiweiße gebaut
          (die "Werkbänke" der Fabrik). Sie musst du nur kennen, nicht im Detail erklären.</p>

          <div class="why-context">
            <strong>Warum lernen wir das?</strong> Auf der KA stehen die "Zellbestandteile". Eine typische Aufgabe:
            einen Bestandteil benennen und seine Aufgabe nennen - oder ihn in der Zeichnung zuordnen.
          </div>

          <div class="tip-box">
            <strong>Mit der Fabrik merken:</strong> <strong>Zellkern</strong> = Chef (steuert),
            <strong>Zellmembran</strong> = Tor (rein/raus), <strong>Zellplasma</strong> = Halle (Raum innen),
            <strong>Mitochondrium</strong> = Kraftwerk (Energie).
          </div>

          <div class="warning-box">
            <strong>Nicht verwechseln:</strong> Die <strong>Zellmembran</strong> ist die dünne, weiche Hülle,
            die <em>jede</em> Zelle hat. Die feste <strong>Zellwand</strong> ist etwas anderes - die haben
            <em>nur Pflanzenzellen</em> (zusätzlich, ganz außen). Mehr dazu in der nächsten Lektion.
          </div>
        `
      },
      example: {
        title: "Beispiel: Welches Bauteil macht das?",
        steps: [
          {
            label: "Die Zelle braucht Energie",
            html: `<p>Damit die Zelle arbeiten kann, braucht sie Energie. Dafür sorgen die
              <strong>Mitochondrien</strong> (das "Kraftwerk").</p>`
          },
          {
            label: "Etwas soll in die Zelle hinein",
            html: `<p>Nährstoffe müssen in die Zelle. Was hinein- und herausgeht, regelt die
              <strong>Zellmembran</strong> (das "Tor").</p>`
          },
          {
            label: "Wer hat das Sagen?",
            html: `<p>Gesteuert wird alles vom <strong>Zellkern</strong> - er enthält die Baupläne
              (Erbinformation) und ist der "Chef".</p>`
          }
        ]
      },
      exercisesIntro: cellSvg + "<p>Denk an die Fabrik: Chef (Zellkern), Tor (Zellmembran), Halle (Zellplasma), Kraftwerk (Mitochondrium). Die Nummern siehst du oben.</p>",
      exercises: [
        {
          type: "matching",
          question: "Ordne jede Nummer aus der Zeichnung dem Bestandteil zu:",
          pairs: [
            { left: "1", right: "Zellmembran" },
            { left: "2", right: "Zellplasma" },
            { left: "3", right: "Zellkern" },
            { left: "4", right: "Mitochondrium" }
          ],
          explanation: "1 Zellmembran (Hülle), 2 Zellplasma (Grundmasse), 3 Zellkern (Steuerung), 4 Mitochondrium (Energie)."
        },
        {
          type: "matching",
          question: "Ordne jedem Bestandteil seine Aufgabe zu:",
          pairs: [
            { left: "Zellkern", right: "steuert die Zelle, enthält die Erbinformation" },
            { left: "Zellmembran", right: "regelt, was rein- und rausgeht" },
            { left: "Mitochondrien", right: "liefern die Energie (Kraftwerk)" },
            { left: "Zellplasma", right: "füllt die Zelle aus, darin liegen die Bauteile" }
          ],
          explanation: "Zellkern = Steuerung, Zellmembran = Tor, Mitochondrien = Energie, Zellplasma = Grundmasse."
        },
        {
          type: "multiple-choice",
          question: "Welcher Bestandteil enthält die <strong>Erbinformation</strong> und steuert die Zelle?",
          options: ["Der Zellkern", "Die Zellmembran", "Das Mitochondrium", "Das Zellplasma"],
          correct: 0,
          explanation: "Richtig! Der Zellkern ist die Steuerzentrale und enthält die Erbinformation (die Baupläne).",
          wrongExplanations: {
            1: "Die Zellmembran ist die Hülle - sie regelt rein/raus, steuert aber nicht.",
            2: "Mitochondrien liefern Energie, sie enthalten nicht die Erbinformation der Zelle.",
            3: "Das Zellplasma ist die Grundmasse - es steuert nicht."
          }
        },
        {
          type: "fill-in-blank",
          question: "Fülle die Lücken zu den Zellbestandteilen:",
          text: "Die {{blank}} ist die äußere Hülle der Zelle. Der {{blank}} steuert die Zelle und enthält die Erbinformation. Die {{blank}} liefern die Energie.",
          blanks: [
            { correct: "Zellmembran", alternatives: ["zellmembran"] },
            { correct: "Zellkern", alternatives: ["zellkern"] },
            { correct: "Mitochondrien", alternatives: ["mitochondrien", "Mitochondrium"] }
          ],
          explanation: "Zellmembran (Hülle) - Zellkern (Steuerung) - Mitochondrien (Energie)."
        }
      ]
    },

    // ===================================================================
    // Lektion 5: Tierzelle und Pflanzenzelle im Vergleich
    // ===================================================================
    {
      id: 5,
      title: "Tierzelle und Pflanzenzelle im Vergleich",
      explanation: {
        html: `
          <h2>Was unterscheidet Pflanzenzelle und Tierzelle?</h2>
          <p>Tierzellen und Pflanzenzellen haben <strong>vieles gemeinsam</strong>: beide besitzen einen Zellkern,
          eine Zellmembran, Zellplasma und Mitochondrien. Aber die <strong>Pflanzenzelle hat drei Dinge zusätzlich</strong>,
          die die Tierzelle <strong>nicht</strong> hat.</p>

          <div class="analogy-box">
            <strong>Wie Haus und Zelt:</strong> Ein Zelt (Tierzelle) ist weich und flexibel - es hat nur eine dünne
            Außenhaut. Ein Haus (Pflanzenzelle) hat zusätzlich feste <strong>Mauern</strong> (Zellwand), einen großen
            <strong>Wassertank</strong> (Vakuole) und <strong>Solarzellen</strong> auf dem Dach (Chloroplasten).
            Deshalb ist eine Pflanze auch ohne Knochen stabil und kann aufrecht stehen.
          </div>

          <h3>Die Zellen nebeneinander</h3>
          ${compareSvg}

          <div class="reading-guide">
            <strong>So liest du das Bild:</strong> Beide Zellen haben Zellkern (lila), Mitochondrien (rot) und eine
            Membran. <strong>Nur die Pflanzenzelle</strong> hat die <strong>dicke grüne Zellwand</strong> außen, die
            großen <strong>blauen Vakuole</strong> in der Mitte und die grünen <strong>Chloroplasten</strong>.
          </div>

          <h3>Die 3 Unterschiede der Pflanzenzelle</h3>
          <table class="icon-table">
            <tr><th>Bestandteil</th><th>Tierzelle</th><th>Pflanzenzelle</th><th>Aufgabe</th></tr>
            <tr><td><strong>Zellwand</strong></td><td>nein</td><td><strong>ja</strong></td><td>feste Außenhülle - gibt der Zelle Halt und Form (Stabilität).</td></tr>
            <tr><td><strong>Chloroplasten</strong></td><td>nein</td><td><strong>ja</strong></td><td>grüne Farbstoffe; fangen das Sonnenlicht ein. Hier stellt die Pflanze ihre Nahrung her - sie machen die Pflanze grün.</td></tr>
            <tr><td><strong>Vakuole</strong> (groß)</td><td>nein (nur winzige)</td><td><strong>ja</strong></td><td>großer Speicherraum mit Zellsaft (Wasser); gibt der Zelle Halt (Druck von innen).</td></tr>
          </table>

          <table class="icon-table">
            <tr><th>Gemeinsam (beide Zellen haben)</th></tr>
            <tr><td>Zellkern &middot; Zellmembran &middot; Zellplasma &middot; Mitochondrien</td></tr>
          </table>

          <div class="why-context">
            <strong>Warum lernen wir das?</strong> Genau das steht auf der KA: "Zellbestandteile von Pflanzen- und
            Tierzellen, <strong>Unterschiede</strong>". Die typische Frage: Was hat die Pflanzenzelle, was die
            Tierzelle nicht hat?
          </div>

          <div class="tip-box">
            <strong>Die 3 Extras der Pflanze merken - "W-C-V":</strong> <strong>W</strong>and,
            <strong>C</strong>hloroplasten, <strong>V</strong>akuole. Eselsbrücke: Eine Pflanze braucht
            <em>Wand</em> (Halt), <em>Chloroplasten</em> (Licht) und einen <em>Wassertank</em> (Vakuole) -
            denn sie kann nicht weglaufen und muss sich selbst versorgen.
          </div>

          <div class="warning-box">
            <strong>Aufpassen:</strong> <strong>Zellwand</strong> (nur Pflanze, fest) ist nicht dasselbe wie
            <strong>Zellmembran</strong> (beide Zellen, dünn/weich). Die Pflanzenzelle hat <em>beides</em>: außen
            die Wand, darunter die Membran.
          </div>
        `
      },
      example: {
        title: "Beispiel: Tierzelle oder Pflanzenzelle?",
        steps: [
          {
            label: "Eine Zelle ist grün",
            html: `<p>Die Zelle enthält grüne <strong>Chloroplasten</strong>. Chloroplasten gibt es nur in
              <strong>Pflanzenzellen</strong> &rarr; es ist eine Pflanzenzelle.</p>`
          },
          {
            label: "Eine Zelle ist weich und rund, ohne feste Wand",
            html: `<p>Keine Zellwand, keine Chloroplasten, nur eine dünne Membran &rarr; das ist eine
              <strong>Tierzelle</strong>.</p>`
          },
          {
            label: "Eine Zelle ist eckig und stabil mit großem Wasserraum",
            html: `<p>Feste <strong>Zellwand</strong> und große <strong>Vakuole</strong> &rarr;
              <strong>Pflanzenzelle</strong>. Die Wand und der Innendruck der Vakuole geben Halt.</p>`
          }
        ]
      },
      exercisesIntro: "Merke W-C-V: nur die Pflanzenzelle hat Wand, Chloroplasten und (große) Vakuole.",
      exercises: [
        {
          type: "multiple-choice",
          question: "Welche drei Teile hat <strong>nur</strong> die Pflanzenzelle (nicht die Tierzelle)?",
          options: [
            "Zellwand, Chloroplasten und große Vakuole",
            "Zellkern, Zellmembran und Mitochondrien",
            "Zellplasma, Ribosomen und Zellkern",
            "Zellmembran, Vakuole und Mitochondrien"
          ],
          correct: 0,
          explanation: "Richtig! Zellwand, Chloroplasten und die große Vakuole sind typisch für die Pflanzenzelle (W-C-V).",
          wrongExplanations: {
            1: "Diese drei haben beide Zellen - sie sind keine Unterschiede.",
            2: "Auch diese kommen in beiden Zellen vor.",
            3: "Zellmembran und Mitochondrien haben beide Zellen; nur die große Vakuole ist pflanzentypisch."
          }
        },
        {
          type: "matching",
          question: "Ordne jedem pflanzentypischen Teil seine Aufgabe zu:",
          pairs: [
            { left: "Zellwand", right: "feste Außenhülle, gibt Halt und Form" },
            { left: "Chloroplasten", right: "grün, fangen Sonnenlicht ein" },
            { left: "Vakuole", right: "großer Speicher mit Zellsaft (Wasser)" }
          ],
          explanation: "Zellwand = Halt, Chloroplasten = Licht/grün, Vakuole = Wasserspeicher."
        },
        {
          type: "fill-in-blank",
          question: "Vervollständige die Unterschiede:",
          text: "Nur die Pflanzenzelle hat eine feste {{blank}} außen, grüne {{blank}}, die das Sonnenlicht einfangen, und eine große {{blank}} mit Zellsaft.",
          blanks: [
            { correct: "Zellwand", alternatives: ["zellwand"] },
            { correct: "Chloroplasten", alternatives: ["chloroplasten", "Chloroplast"] },
            { correct: "Vakuole", alternatives: ["vakuole"] }
          ],
          explanation: "Zellwand, Chloroplasten, Vakuole - die drei Extras der Pflanzenzelle (W-C-V)."
        },
        {
          type: "multiple-choice",
          question: "Was haben Tierzelle <strong>und</strong> Pflanzenzelle gemeinsam?",
          options: [
            "Beide haben Zellkern, Zellmembran, Zellplasma und Mitochondrien.",
            "Beide haben eine feste Zellwand.",
            "Beide haben grüne Chloroplasten.",
            "Beide haben eine große Vakuole."
          ],
          correct: 0,
          explanation: "Richtig! Zellkern, Zellmembran, Zellplasma und Mitochondrien kommen in beiden Zellen vor.",
          wrongExplanations: {
            1: "Die feste Zellwand hat nur die Pflanzenzelle.",
            2: "Chloroplasten hat nur die Pflanzenzelle.",
            3: "Eine große Vakuole hat nur die Pflanzenzelle."
          }
        },
        {
          type: "free-text",
          question: "Erkläre mit eigenen Worten den <strong>Unterschied zwischen Tier- und Pflanzenzelle</strong>.",
          hint: "Was hat die Pflanzenzelle zusätzlich (W-C-V)? Was haben beide gemeinsam?",
          minWords: 12,
          modelAnswer: "Beide Zellen haben einen Zellkern, eine Zellmembran, Zellplasma und Mitochondrien. Die Pflanzenzelle hat zusätzlich drei Dinge, die der Tierzelle fehlen: eine feste Zellwand (gibt Halt), grüne Chloroplasten (fangen Sonnenlicht ein) und eine große Vakuole (Wasserspeicher)."
        }
      ]
    }

  ]);

})();
