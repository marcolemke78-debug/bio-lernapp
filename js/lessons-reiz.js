/**
 * Modul 2 - Vom Reiz zur Reaktion (Biologie KA 2, Klasse 8, M-Niveau).
 *   L3 Vom Reiz zur Reaktion & das EVA-Prinzip
 *
 * Inhalte in eigenen Worten nach dem Hefteintrag "Vom Reiz zur Reaktion".
 * Eigene SVG-Grafiken (EVA-Kette + Reiz-Reaktions-Kette). Zielgruppe: Leonie.
 */
(function () {

  // EVA-Chevron: Eingabe (grün) -> Verarbeitung (orange) -> Ausgabe (rot)
  const evaSvg = `
    <svg viewBox="0 0 530 140" role="img" aria-label="EVA-Prinzip: Eingabe, Verarbeitung, Ausgabe" style="max-width:530px;width:100%;height:auto;display:block;margin:1rem auto;font-family:sans-serif;">
      <polygon points="15,25 135,25 165,65 135,105 15,105 45,65" fill="#dcfce7" stroke="#16a34a" stroke-width="2"/>
      <polygon points="180,25 300,25 330,65 300,105 180,105 210,65" fill="#fef9c3" stroke="#ca8a04" stroke-width="2"/>
      <polygon points="345,25 465,25 495,65 465,105 345,105 375,65" fill="#fee2e2" stroke="#dc2626" stroke-width="2"/>
      <text x="98" y="62" text-anchor="middle" font-size="15" font-weight="bold" fill="#15803d">Eingabe</text>
      <text x="98" y="82" text-anchor="middle" font-size="10" fill="#1f2937">Reiz + Sinnesorgan</text>
      <text x="263" y="62" text-anchor="middle" font-size="15" font-weight="bold" fill="#a16207">Verarbeitung</text>
      <text x="263" y="82" text-anchor="middle" font-size="10" fill="#1f2937">Gehirn</text>
      <text x="428" y="62" text-anchor="middle" font-size="15" font-weight="bold" fill="#b91c1c">Ausgabe</text>
      <text x="428" y="82" text-anchor="middle" font-size="10" fill="#1f2937">Muskel = Reaktion</text>
    </svg>`;

  // Reiz-Reaktions-Kette (senkrecht): farbiger Streifen = EVA-Zuordnung
  const chainSvg = `
    <div class="clickable-figure">
    <svg viewBox="0 0 470 470" role="img" aria-label="Reiz-Reaktions-Kette vom Reiz über Sinnesorgan, Nerven und Gehirn bis zur Reaktion" style="max-width:470px;width:100%;height:auto;display:block;margin:0 auto;font-family:sans-serif;">
      <defs>
        <marker id="arr" markerWidth="10" markerHeight="10" refX="5" refY="5" orient="auto">
          <path d="M0,0 L10,5 L0,10 z" fill="#6b7280"/>
        </marker>
      </defs>
      <g class="bio-part" data-name="Reiz" data-info="Ein Einfluss aus der Umwelt (z.B. Hitze). Hier startet die Kette.">
        <rect x="70" y="8" width="330" height="44" rx="8" fill="#f3f4f6" stroke="#9ca3af"/>
        <rect x="70" y="8" width="8" height="44" rx="4" fill="#9ca3af"/>
        <text x="240" y="30" text-anchor="middle" font-size="13" font-weight="bold" fill="#1f2937">Reiz (z.B. heiße Herdplatte)</text>
        <text x="240" y="46" text-anchor="middle" font-size="10" fill="#6b7280">Einfluss aus der Umwelt</text>
      </g>
      <g class="bio-part" data-name="Sinnesorgan" data-info="Eingabe (E): Das Sinnesorgan nimmt den Reiz auf - z.B. die Haut spürt die Hitze.">
        <rect x="70" y="76" width="330" height="44" rx="8" fill="#dcfce7" stroke="#16a34a"/>
        <rect x="70" y="76" width="8" height="44" rx="4" fill="#16a34a"/>
        <text x="240" y="98" text-anchor="middle" font-size="13" font-weight="bold" fill="#15803d">Sinnesorgan (Haut, Auge ...)</text>
        <text x="240" y="114" text-anchor="middle" font-size="10" fill="#1f2937">nimmt den Reiz auf</text>
      </g>
      <g class="bio-part" data-name="sensorischer Nerv" data-info="Eingabe (E): Leitet die Information zum Gehirn. Merke: sensorisch = von den Sinnen HIN zum Gehirn.">
        <rect x="70" y="144" width="330" height="44" rx="8" fill="#dcfce7" stroke="#16a34a"/>
        <rect x="70" y="144" width="8" height="44" rx="4" fill="#16a34a"/>
        <text x="240" y="166" text-anchor="middle" font-size="13" font-weight="bold" fill="#15803d">sensorischer Nerv</text>
        <text x="240" y="182" text-anchor="middle" font-size="10" fill="#1f2937">leitet die Info zum Gehirn</text>
      </g>
      <g class="bio-part" data-name="Gehirn" data-info="Verarbeitung (V): Das Gehirn verarbeitet die Information und entscheidet, was zu tun ist.">
        <rect x="70" y="212" width="330" height="44" rx="8" fill="#fef9c3" stroke="#ca8a04"/>
        <rect x="70" y="212" width="8" height="44" rx="4" fill="#ca8a04"/>
        <text x="240" y="234" text-anchor="middle" font-size="13" font-weight="bold" fill="#a16207">Gehirn</text>
        <text x="240" y="250" text-anchor="middle" font-size="10" fill="#1f2937">verarbeitet und entscheidet</text>
      </g>
      <g class="bio-part" data-name="motorischer Nerv" data-info="Ausgabe (A): Leitet den Befehl zum Muskel. Merke: motorisch = zur Bewegung/zum Muskel HIN.">
        <rect x="70" y="280" width="330" height="44" rx="8" fill="#fee2e2" stroke="#dc2626"/>
        <rect x="70" y="280" width="8" height="44" rx="4" fill="#dc2626"/>
        <text x="240" y="302" text-anchor="middle" font-size="13" font-weight="bold" fill="#b91c1c">motorischer Nerv</text>
        <text x="240" y="318" text-anchor="middle" font-size="10" fill="#1f2937">leitet den Befehl zum Muskel</text>
      </g>
      <g class="bio-part" data-name="Muskel / Reaktion" data-info="Ausgabe (A): Der Muskel (oder eine Drüse) führt den Befehl aus = die Reaktion, z.B. Hand wegziehen.">
        <rect x="70" y="348" width="330" height="44" rx="8" fill="#fee2e2" stroke="#dc2626"/>
        <rect x="70" y="348" width="8" height="44" rx="4" fill="#dc2626"/>
        <text x="240" y="370" text-anchor="middle" font-size="13" font-weight="bold" fill="#b91c1c">Muskel / Drüse = Reaktion</text>
        <text x="240" y="386" text-anchor="middle" font-size="10" fill="#1f2937">z.B. Hand schnell wegziehen</text>
      </g>
      <g pointer-events="none">
        <line x1="240" y1="52" x2="240" y2="74" stroke="#6b7280" stroke-width="2" marker-end="url(#arr)"/>
        <line x1="240" y1="120" x2="240" y2="142" stroke="#6b7280" stroke-width="2" marker-end="url(#arr)"/>
        <line x1="240" y1="188" x2="240" y2="210" stroke="#6b7280" stroke-width="2" marker-end="url(#arr)"/>
        <line x1="240" y1="256" x2="240" y2="278" stroke="#6b7280" stroke-width="2" marker-end="url(#arr)"/>
        <line x1="240" y1="324" x2="240" y2="346" stroke="#6b7280" stroke-width="2" marker-end="url(#arr)"/>
        <text x="430" y="120" text-anchor="middle" font-size="11" font-weight="bold" fill="#15803d" transform="rotate(-90 430 120)">Eingabe</text>
        <text x="430" y="234" text-anchor="middle" font-size="11" font-weight="bold" fill="#a16207" transform="rotate(-90 430 234)">Verarbeitung</text>
        <text x="430" y="356" text-anchor="middle" font-size="11" font-weight="bold" fill="#b91c1c" transform="rotate(-90 430 356)">Ausgabe</text>
      </g>
    </svg>
    <div class="figure-readout">Tipp: Tippe auf eine Station der Kette, um zu sehen, was dort passiert.</div>
    </div>`;

  window.LESSON_DATA = (window.LESSON_DATA || []).concat([

    // ===================================================================
    // Lektion 3: Vom Reiz zur Reaktion & das EVA-Prinzip
    // ===================================================================
    {
      id: 3,
      title: "Vom Reiz zur Reaktion & das EVA-Prinzip",
      explanation: {
        html: `
          <h2>Wie der Körper auf die Umwelt reagiert</h2>
          <p>Stell dir vor, du fasst aus Versehen auf eine heiße Herdplatte. Blitzschnell ziehst du die
          Hand weg - <em>ohne nachzudenken</em>. Dahinter steckt ein fester Ablauf: vom <strong>Reiz</strong>
          bis zur <strong>Reaktion</strong>.</p>

          <div class="analogy-box">
            <strong>Wie eine Türklingel:</strong> Jemand drückt auf den Knopf (<strong>Reiz</strong>). Das Signal
            läuft durch das Kabel (<strong>Nerv</strong>) zur Klingel im Haus (<strong>Gehirn / Verarbeitung</strong>),
            und die Klingel läutet (<strong>Reaktion</strong>). Bei deinem Körper läuft genau so eine
            Signal-Kette ab - nur viel schneller und über Nerven.
          </div>

          <h3>Was ist ein Reiz?</h3>
          <p>Ein <strong>Reiz</strong> ist ein <strong>Einfluss aus der Umwelt</strong> auf den Körper -
          zum Beispiel Licht, ein Geräusch, ein Geruch, Hitze oder eine Berührung. Aufgenommen werden Reize
          von den <strong>Sinnesorganen</strong>: <strong>Auge</strong> (Sehen), <strong>Ohr</strong> (Hören),
          <strong>Nase</strong> (Riechen), <strong>Zunge</strong> (Schmecken) und <strong>Haut</strong> (Fühlen).</p>

          <h3>Die Reiz-Reaktions-Kette</h3>
          <p>Vom Reiz bis zur Reaktion durchläuft die Information immer dieselben Stationen:</p>

          ${chainSvg}

          <div class="reading-guide">
            <strong>So liest du die Kette:</strong>
            <ul>
              <li>Das <strong>Sinnesorgan</strong> nimmt den Reiz auf.</li>
              <li>Der <strong>sensorische Nerv</strong> leitet die Information zum Gehirn (sensorisch = "von den Sinnen hin").</li>
              <li>Das <strong>Gehirn</strong> verarbeitet und entscheidet, was zu tun ist.</li>
              <li>Der <strong>motorische Nerv</strong> leitet den Befehl zum Muskel (motorisch = "zur Bewegung hin").</li>
              <li>Der <strong>Muskel</strong> (oder eine Drüse) führt den Befehl aus = die <strong>Reaktion</strong>.</li>
            </ul>
          </div>

          <h3>Das EVA-Prinzip</h3>
          <p>Man kann die ganze Kette in <strong>drei Schritte</strong> zusammenfassen. Das nennt man das
          <strong>EVA-Prinzip</strong>: <strong>E</strong>ingabe - <strong>V</strong>erarbeitung -
          <strong>A</strong>usgabe.</p>

          ${evaSvg}

          <table class="icon-table">
            <tr><th>EVA-Schritt</th><th>Was passiert?</th><th>In der Kette</th></tr>
            <tr><td><strong>E</strong>ingabe</td><td>Der Reiz wird aufgenommen</td><td>Sinnesorgan + sensorischer Nerv</td></tr>
            <tr><td><strong>V</strong>erarbeitung</td><td>Die Information wird verarbeitet, es wird entschieden</td><td>Gehirn</td></tr>
            <tr><td><strong>A</strong>usgabe</td><td>Der Körper reagiert</td><td>motorischer Nerv + Muskel/Drüse</td></tr>
          </table>

          <div class="why-context">
            <strong>Warum lernen wir das?</strong> Auf der KA steht "Reiz-Reaktions-Prinzip" und "EVA-System".
            Eine typische Aufgabe: die Kette in der richtigen Reihenfolge nennen oder zu einem Beispiel sagen,
            welcher EVA-Schritt gerade abläuft.
          </div>

          <div class="tip-box">
            <strong>EVA merken:</strong> Denk an einen Computer - du tippst etwas ein (<strong>E</strong>ingabe,
            Tastatur), der Computer rechnet (<strong>V</strong>erarbeitung), und am Bildschirm erscheint das
            Ergebnis (<strong>A</strong>usgabe). Dein Körper macht es genauso: Sinnesorgan - Gehirn - Muskel.
          </div>

          <div class="warning-box">
            <strong>Nicht verwechseln:</strong> Der <strong>sensorische</strong> Nerv leitet <em>zum Gehirn hin</em>
            (Eingabe), der <strong>motorische</strong> Nerv leitet <em>vom Gehirn weg</em> zum Muskel (Ausgabe).
            Eselsbrücke: <strong>m</strong>otorisch = <strong>M</strong>uskel/Bewegung.
          </div>
        `
      },
      example: {
        title: "Beispiel: Der Ball fliegt auf dich zu",
        steps: [
          {
            label: "Reiz (Eingabe)",
            html: `<p>Beim Völkerball fliegt ein Ball auf dich zu. Das <strong>Auge</strong> (Sinnesorgan)
              nimmt den Reiz "sich nähernder Ball" auf. Der <strong>sensorische Nerv</strong> meldet das ans Gehirn.</p>`
          },
          {
            label: "Verarbeitung",
            html: `<p>Das <strong>Gehirn</strong> verarbeitet die Information und entscheidet blitzschnell:
              "Ausweichen!" oder "Fangen!".</p>`
          },
          {
            label: "Ausgabe (Reaktion)",
            html: `<p>Der <strong>motorische Nerv</strong> leitet den Befehl zu den <strong>Muskeln</strong>.
              Du springst zur Seite oder hebst die Hände = die <strong>Reaktion</strong>.</p>`
          }
        ]
      },
      exercisesIntro: "Denk an die Kette: Reiz - Sinnesorgan - sensor. Nerv - Gehirn - motor. Nerv - Muskel - Reaktion. Und an EVA.",
      exercises: [
        {
          type: "ordering",
          question: "Bringe die Reiz-Reaktions-Kette in die richtige Reihenfolge:",
          items: [
            "Reiz (z.B. heiße Herdplatte)",
            "Sinnesorgan nimmt den Reiz auf",
            "sensorischer Nerv leitet zum Gehirn",
            "Gehirn verarbeitet",
            "motorischer Nerv leitet zum Muskel",
            "Muskel reagiert (Hand wegziehen)"
          ],
          correctOrder: [0, 1, 2, 3, 4, 5],
          explanation: "Reiz - Sinnesorgan - sensorischer Nerv - Gehirn - motorischer Nerv - Muskel/Reaktion."
        },
        {
          type: "multiple-choice",
          question: "Wofür stehen die Buchstaben im <strong>EVA-Prinzip</strong>?",
          options: [
            "Eingabe - Verarbeitung - Ausgabe",
            "Einatmen - Verdauen - Ausscheiden",
            "Erkennen - Verstehen - Antworten",
            "Energie - Vorrat - Aufbau"
          ],
          correct: 0,
          explanation: "Richtig! EVA = Eingabe (Reiz/Sinnesorgan), Verarbeitung (Gehirn), Ausgabe (Reaktion/Muskel).",
          wrongExplanations: {
            1: "Das hat mit der Verdauung zu tun, nicht mit dem Reiz-Reaktions-Prinzip.",
            2: "Klingt ähnlich, aber die richtigen Begriffe sind Eingabe, Verarbeitung, Ausgabe.",
            3: "Nein - EVA steht für Eingabe, Verarbeitung, Ausgabe."
          }
        },
        {
          type: "matching",
          question: "Ordne jeden EVA-Schritt der richtigen Station in der Kette zu:",
          pairs: [
            { left: "Eingabe", right: "Sinnesorgan nimmt den Reiz auf" },
            { left: "Verarbeitung", right: "Gehirn entscheidet" },
            { left: "Ausgabe", right: "Muskel führt die Reaktion aus" }
          ],
          explanation: "Eingabe = Sinnesorgan, Verarbeitung = Gehirn, Ausgabe = Muskel/Reaktion."
        },
        {
          type: "fill-in-blank",
          question: "Fülle die Lücken zur Reiz-Reaktions-Kette:",
          text: "Ein {{blank}} ist ein Einfluss aus der Umwelt. Er wird vom {{blank}} aufgenommen. Das {{blank}} verarbeitet die Information, und der Muskel führt die {{blank}} aus.",
          blanks: [
            { correct: "Reiz", alternatives: ["reiz"] },
            { correct: "Sinnesorgan", alternatives: ["sinnesorgan"] },
            { correct: "Gehirn", alternatives: ["gehirn"] },
            { correct: "Reaktion", alternatives: ["reaktion"] }
          ],
          explanation: "Reiz -> Sinnesorgan (Eingabe) -> Gehirn (Verarbeitung) -> Reaktion (Ausgabe)."
        },
        {
          type: "multiple-choice",
          question: "Welcher Nerv leitet die Information vom Sinnesorgan <strong>zum Gehirn</strong>?",
          options: [
            "Der sensorische Nerv",
            "Der motorische Nerv",
            "Der Muskel",
            "Die Drüse"
          ],
          correct: 0,
          explanation: "Richtig! Der sensorische Nerv leitet zum Gehirn hin (sensorisch = von den Sinnen her). Der motorische Nerv leitet vom Gehirn zum Muskel.",
          wrongExplanations: {
            1: "Der motorische Nerv leitet den Befehl vom Gehirn zum Muskel - also in die andere Richtung.",
            2: "Der Muskel ist kein Nerv, er führt die Reaktion aus.",
            3: "Eine Drüse ist kein Nerv, sie kann die Reaktion ausführen (z.B. Schweiß)."
          }
        },
        {
          type: "free-text",
          question: "Erkläre die <strong>Reiz-Reaktions-Kette</strong> am Beispiel der heißen Herdplatte und ordne die Schritte dem <strong>EVA-Prinzip</strong> zu.",
          hint: "Gehe die Kette der Reihe nach durch (Reiz - Sinnesorgan - Nerv - Gehirn - Nerv - Muskel) und schreibe dazu, was Eingabe, Verarbeitung und Ausgabe ist.",
          minWords: 25,
          modelAnswer: "Die heiße Herdplatte ist der Reiz. Die Haut (Sinnesorgan) nimmt ihn auf und der sensorische Nerv leitet die Information zum Gehirn - das ist die Eingabe (E). Das Gehirn verarbeitet die Information und entscheidet 'Hand weg' - das ist die Verarbeitung (V). Der motorische Nerv leitet den Befehl zum Muskel, der die Hand wegzieht - das ist die Ausgabe (A) und zugleich die Reaktion."
        }
      ]
    }

  ]);

})();
