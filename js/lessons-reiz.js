/**
 * Modul 2 - Vom Reiz zur Reaktion (Biologie KA 2, Klasse 8, M-Niveau).
 *   L3 Vom Reiz zur Reaktion & das EVA-Prinzip
 *
 * Inhalte in eigenen Worten nach dem Hefteintrag "Vom Reiz zur Reaktion".
 * Eigene SVG-Grafiken (EVA-Kette + Reiz-Reaktions-Kette). Zielgruppe: Leonie.
 */
(function () {

  // EVA-Chevron: Eingabe (gruen) -> Verarbeitung (orange) -> Ausgabe (rot)
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
    <svg viewBox="0 0 470 470" role="img" aria-label="Reiz-Reaktions-Kette vom Reiz ueber Sinnesorgan, Nerven und Gehirn bis zur Reaktion" style="max-width:470px;width:100%;height:auto;display:block;margin:1rem auto;font-family:sans-serif;">
      <defs>
        <marker id="arr" markerWidth="10" markerHeight="10" refX="5" refY="5" orient="auto">
          <path d="M0,0 L10,5 L0,10 z" fill="#6b7280"/>
        </marker>
      </defs>
      <!-- Box 1: Reiz -->
      <rect x="70" y="8" width="330" height="44" rx="8" fill="#f3f4f6" stroke="#9ca3af"/>
      <rect x="70" y="8" width="8" height="44" rx="4" fill="#9ca3af"/>
      <text x="240" y="30" text-anchor="middle" font-size="13" font-weight="bold" fill="#1f2937">Reiz (z.B. heisse Herdplatte)</text>
      <text x="240" y="46" text-anchor="middle" font-size="10" fill="#6b7280">Einfluss aus der Umwelt</text>
      <line x1="240" y1="52" x2="240" y2="74" stroke="#6b7280" stroke-width="2" marker-end="url(#arr)"/>
      <!-- Box 2: Sinnesorgan -->
      <rect x="70" y="76" width="330" height="44" rx="8" fill="#dcfce7" stroke="#16a34a"/>
      <rect x="70" y="76" width="8" height="44" rx="4" fill="#16a34a"/>
      <text x="240" y="98" text-anchor="middle" font-size="13" font-weight="bold" fill="#15803d">Sinnesorgan (Haut, Auge ...)</text>
      <text x="240" y="114" text-anchor="middle" font-size="10" fill="#1f2937">nimmt den Reiz auf</text>
      <line x1="240" y1="120" x2="240" y2="142" stroke="#6b7280" stroke-width="2" marker-end="url(#arr)"/>
      <!-- Box 3: sensorischer Nerv -->
      <rect x="70" y="144" width="330" height="44" rx="8" fill="#dcfce7" stroke="#16a34a"/>
      <rect x="70" y="144" width="8" height="44" rx="4" fill="#16a34a"/>
      <text x="240" y="166" text-anchor="middle" font-size="13" font-weight="bold" fill="#15803d">sensorischer Nerv</text>
      <text x="240" y="182" text-anchor="middle" font-size="10" fill="#1f2937">leitet die Info zum Gehirn</text>
      <line x1="240" y1="188" x2="240" y2="210" stroke="#6b7280" stroke-width="2" marker-end="url(#arr)"/>
      <!-- Box 4: Gehirn -->
      <rect x="70" y="212" width="330" height="44" rx="8" fill="#fef9c3" stroke="#ca8a04"/>
      <rect x="70" y="212" width="8" height="44" rx="4" fill="#ca8a04"/>
      <text x="240" y="234" text-anchor="middle" font-size="13" font-weight="bold" fill="#a16207">Gehirn</text>
      <text x="240" y="250" text-anchor="middle" font-size="10" fill="#1f2937">verarbeitet und entscheidet</text>
      <line x1="240" y1="256" x2="240" y2="278" stroke="#6b7280" stroke-width="2" marker-end="url(#arr)"/>
      <!-- Box 5: motorischer Nerv -->
      <rect x="70" y="280" width="330" height="44" rx="8" fill="#fee2e2" stroke="#dc2626"/>
      <rect x="70" y="280" width="8" height="44" rx="4" fill="#dc2626"/>
      <text x="240" y="302" text-anchor="middle" font-size="13" font-weight="bold" fill="#b91c1c">motorischer Nerv</text>
      <text x="240" y="318" text-anchor="middle" font-size="10" fill="#1f2937">leitet den Befehl zum Muskel</text>
      <line x1="240" y1="324" x2="240" y2="346" stroke="#6b7280" stroke-width="2" marker-end="url(#arr)"/>
      <!-- Box 6: Muskel / Reaktion -->
      <rect x="70" y="348" width="330" height="44" rx="8" fill="#fee2e2" stroke="#dc2626"/>
      <rect x="70" y="348" width="8" height="44" rx="4" fill="#dc2626"/>
      <text x="240" y="370" text-anchor="middle" font-size="13" font-weight="bold" fill="#b91c1c">Muskel / Druese = Reaktion</text>
      <text x="240" y="386" text-anchor="middle" font-size="10" fill="#1f2937">z.B. Hand schnell wegziehen</text>
      <!-- EVA-Klammern rechts -->
      <text x="430" y="120" text-anchor="middle" font-size="11" font-weight="bold" fill="#15803d" transform="rotate(-90 430 120)">Eingabe</text>
      <text x="430" y="234" text-anchor="middle" font-size="11" font-weight="bold" fill="#a16207" transform="rotate(-90 430 234)">Verarbeitung</text>
      <text x="430" y="356" text-anchor="middle" font-size="11" font-weight="bold" fill="#b91c1c" transform="rotate(-90 430 356)">Ausgabe</text>
    </svg>`;

  window.LESSON_DATA = (window.LESSON_DATA || []).concat([

    // ===================================================================
    // Lektion 3: Vom Reiz zur Reaktion & das EVA-Prinzip
    // ===================================================================
    {
      id: 3,
      title: "Vom Reiz zur Reaktion & das EVA-Prinzip",
      explanation: {
        html: `
          <h2>Wie der Koerper auf die Umwelt reagiert</h2>
          <p>Stell dir vor, du fasst aus Versehen auf eine heisse Herdplatte. Blitzschnell ziehst du die
          Hand weg - <em>ohne nachzudenken</em>. Dahinter steckt ein fester Ablauf: vom <strong>Reiz</strong>
          bis zur <strong>Reaktion</strong>.</p>

          <div class="analogy-box">
            <strong>Wie eine Tuerklingel:</strong> Jemand drueckt auf den Knopf (<strong>Reiz</strong>). Das Signal
            laeuft durch das Kabel (<strong>Nerv</strong>) zur Klingel im Haus (<strong>Gehirn / Verarbeitung</strong>),
            und die Klingel laeutet (<strong>Reaktion</strong>). Bei deinem Koerper laeuft genau so eine
            Signal-Kette ab - nur viel schneller und ueber Nerven.
          </div>

          <h3>Was ist ein Reiz?</h3>
          <p>Ein <strong>Reiz</strong> ist ein <strong>Einfluss aus der Umwelt</strong> auf den Koerper -
          zum Beispiel Licht, ein Geraeusch, ein Geruch, Hitze oder eine Beruehrung. Aufgenommen werden Reize
          von den <strong>Sinnesorganen</strong>: <strong>Auge</strong> (Sehen), <strong>Ohr</strong> (Hoeren),
          <strong>Nase</strong> (Riechen), <strong>Zunge</strong> (Schmecken) und <strong>Haut</strong> (Fuehlen).</p>

          <h3>Die Reiz-Reaktions-Kette</h3>
          <p>Vom Reiz bis zur Reaktion durchlaeuft die Information immer dieselben Stationen:</p>

          ${chainSvg}

          <div class="reading-guide">
            <strong>So liest du die Kette:</strong>
            <ul>
              <li>Das <strong>Sinnesorgan</strong> nimmt den Reiz auf.</li>
              <li>Der <strong>sensorische Nerv</strong> leitet die Information zum Gehirn (sensorisch = "von den Sinnen hin").</li>
              <li>Das <strong>Gehirn</strong> verarbeitet und entscheidet, was zu tun ist.</li>
              <li>Der <strong>motorische Nerv</strong> leitet den Befehl zum Muskel (motorisch = "zur Bewegung hin").</li>
              <li>Der <strong>Muskel</strong> (oder eine Druese) fuehrt den Befehl aus = die <strong>Reaktion</strong>.</li>
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
            <tr><td><strong>A</strong>usgabe</td><td>Der Koerper reagiert</td><td>motorischer Nerv + Muskel/Druese</td></tr>
          </table>

          <div class="why-context">
            <strong>Warum lernen wir das?</strong> Auf der KA steht "Reiz-Reaktions-Prinzip" und "EVA-System".
            Eine typische Aufgabe: die Kette in der richtigen Reihenfolge nennen oder zu einem Beispiel sagen,
            welcher EVA-Schritt gerade ablaeuft.
          </div>

          <div class="tip-box">
            <strong>EVA merken:</strong> Denk an einen Computer - du tippst etwas ein (<strong>E</strong>ingabe,
            Tastatur), der Computer rechnet (<strong>V</strong>erarbeitung), und am Bildschirm erscheint das
            Ergebnis (<strong>A</strong>usgabe). Dein Koerper macht es genauso: Sinnesorgan - Gehirn - Muskel.
          </div>

          <div class="warning-box">
            <strong>Nicht verwechseln:</strong> Der <strong>sensorische</strong> Nerv leitet <em>zum Gehirn hin</em>
            (Eingabe), der <strong>motorische</strong> Nerv leitet <em>vom Gehirn weg</em> zum Muskel (Ausgabe).
            Eselsbruecke: <strong>m</strong>otorisch = <strong>M</strong>uskel/Bewegung.
          </div>
        `
      },
      example: {
        title: "Beispiel: Der Ball fliegt auf dich zu",
        steps: [
          {
            label: "Reiz (Eingabe)",
            html: `<p>Beim Voelkerball fliegt ein Ball auf dich zu. Das <strong>Auge</strong> (Sinnesorgan)
              nimmt den Reiz "sich naehernder Ball" auf. Der <strong>sensorische Nerv</strong> meldet das ans Gehirn.</p>`
          },
          {
            label: "Verarbeitung",
            html: `<p>Das <strong>Gehirn</strong> verarbeitet die Information und entscheidet blitzschnell:
              "Ausweichen!" oder "Fangen!".</p>`
          },
          {
            label: "Ausgabe (Reaktion)",
            html: `<p>Der <strong>motorische Nerv</strong> leitet den Befehl zu den <strong>Muskeln</strong>.
              Du springst zur Seite oder hebst die Haende = die <strong>Reaktion</strong>.</p>`
          }
        ]
      },
      exercisesIntro: "Denk an die Kette: Reiz - Sinnesorgan - sensor. Nerv - Gehirn - motor. Nerv - Muskel - Reaktion. Und an EVA.",
      exercises: [
        {
          type: "ordering",
          question: "Bringe die Reiz-Reaktions-Kette in die richtige Reihenfolge:",
          items: [
            "Reiz (z.B. heisse Herdplatte)",
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
          question: "Wofuer stehen die Buchstaben im <strong>EVA-Prinzip</strong>?",
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
            2: "Klingt aehnlich, aber die richtigen Begriffe sind Eingabe, Verarbeitung, Ausgabe.",
            3: "Nein - EVA steht fuer Eingabe, Verarbeitung, Ausgabe."
          }
        },
        {
          type: "matching",
          question: "Ordne jeden EVA-Schritt der richtigen Station in der Kette zu:",
          pairs: [
            { left: "Eingabe", right: "Sinnesorgan nimmt den Reiz auf" },
            { left: "Verarbeitung", right: "Gehirn entscheidet" },
            { left: "Ausgabe", right: "Muskel fuehrt die Reaktion aus" }
          ],
          explanation: "Eingabe = Sinnesorgan, Verarbeitung = Gehirn, Ausgabe = Muskel/Reaktion."
        },
        {
          type: "fill-in-blank",
          question: "Fuelle die Luecken zur Reiz-Reaktions-Kette:",
          text: "Ein {{blank}} ist ein Einfluss aus der Umwelt. Er wird vom {{blank}} aufgenommen. Das {{blank}} verarbeitet die Information, und der Muskel fuehrt die {{blank}} aus.",
          blanks: [
            { correct: "Reiz", alternatives: ["reiz"] },
            { correct: "Sinnesorgan", alternatives: ["sinnesorgan", "Sinnesorganen"] },
            { correct: "Gehirn", alternatives: ["gehirn"] },
            { correct: "Reaktion", alternatives: ["reaktion"] }
          ],
          explanation: "Reiz -> Sinnesorgan (Eingabe) -> Gehirn (Verarbeitung) -> Reaktion (Ausgabe)."
        }
      ]
    }

  ]);

})();
