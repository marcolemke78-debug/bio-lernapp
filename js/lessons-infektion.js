/**
 * Modul 4 - Infektionskrankheiten (Biologie KA 2, Klasse 8, M-Niveau).
 *   L6 Bakterien & Viren - Aufbau und Vermehrung (mit Unterschied)
 *   L7 Infektionskrankheiten - Erreger, Inkubationszeit, Symptome, Übertragung, Steckbriefe
 *
 * Inhalte in eigenen Worten nach den Buddy-Books (Viren/Bakterien), dem
 * Salmonellose-AB und der Begriffsliste. Eigene SVG-Grafiken. Zielgruppe: Leonie.
 */
(function () {

  // Virus: Eiweißhülle + Stacheln + Erbinformation (nummeriert)
  const virusSvg = `
    <div class="clickable-figure">
    <svg viewBox="0 0 300 300" role="img" aria-label="Aufbau eines Virus mit Stacheln, Eiweißhülle und Erbinformation" style="max-width:280px;width:100%;height:auto;display:block;margin:0 auto;font-family:sans-serif;">
      <g class="bio-part" data-name="Stacheln" data-info="Außen am Virus; damit dockt es an eine Wirtszelle an.">
        <g stroke="#4338ca" stroke-width="3">
          <line x1="220" y1="150" x2="238" y2="150"/><line x1="199.5" y1="199.5" x2="212.2" y2="212.2"/>
          <line x1="150" y1="220" x2="150" y2="238"/><line x1="100.5" y1="199.5" x2="87.8" y2="212.2"/>
          <line x1="80" y1="150" x2="62" y2="150"/><line x1="100.5" y1="100.5" x2="87.8" y2="87.8"/>
          <line x1="150" y1="80" x2="150" y2="62"/><line x1="199.5" y1="100.5" x2="212.2" y2="87.8"/>
        </g>
        <g fill="#4338ca">
          <circle cx="242" cy="150" r="5"/><circle cx="215" cy="215" r="5"/><circle cx="150" cy="242" r="5"/>
          <circle cx="85" cy="215" r="5"/><circle cx="58" cy="150" r="5"/><circle cx="85" cy="85" r="5"/>
          <circle cx="150" cy="58" r="5"/><circle cx="215" cy="85" r="5"/>
        </g>
      </g>
      <circle class="bio-part" data-name="Eiweißhülle" data-info="Schützende Hülle aus Eiweiß, die das Virus umgibt." cx="150" cy="150" r="70" fill="#c7d2fe" stroke="#4338ca" stroke-width="3"/>
      <path class="bio-part" data-name="Erbinformation" data-info="Im Inneren des Virus; der Bauplan für neue Viren." d="M 118 145 q 16 -22 32 0 q 16 22 32 0" fill="none" stroke="#dc2626" stroke-width="3"/>
      <g pointer-events="none" font-size="13" font-weight="bold" fill="#ffffff" text-anchor="middle">
        <circle cx="150" cy="42" r="13" fill="#1d4ed8"/><text x="150" y="47">1</text>
        <circle cx="108" cy="192" r="13" fill="#1d4ed8"/><text x="108" y="197">2</text>
        <circle cx="172" cy="150" r="13" fill="#1d4ed8"/><text x="172" y="155">3</text>
      </g>
    </svg>
    <div class="figure-readout">Tipp: Tippe auf ein Teil des Virus.</div>
    </div>`;

  // Bakterie: Zellwand, Zellmembran/Plasma, Erbinformation (Ring), Geißel (nummeriert)
  const bacteriaSvg = `
    <div class="clickable-figure">
    <svg viewBox="0 0 410 240" role="img" aria-label="Aufbau einer Bakterienzelle mit Zellwand, Zellplasma, Erbinformation und Geißel" style="max-width:410px;width:100%;height:auto;display:block;margin:0 auto;font-family:sans-serif;">
      <path class="bio-part" data-name="Geißel" data-info="Fadenförmiger Schwanz zur Fortbewegung (haben nicht alle Bakterien)." d="M 320 120 q 16 -16 32 0 q 16 16 32 0 q 16 -16 24 -6" fill="none" stroke="#78350f" stroke-width="3"/>
      <rect class="bio-part" data-name="Zellwand" data-info="Feste Hülle; gibt dem Bakterium Halt und Form." x="40" y="65" width="280" height="110" rx="55" fill="#fde68a" stroke="#b45309" stroke-width="5"/>
      <rect class="bio-part" data-name="Zellplasma (mit Zellmembran)" data-info="Grundmasse im Inneren; hier laufen die Lebensvorgänge ab." x="52" y="77" width="256" height="86" rx="43" fill="#fef3c7" stroke="#d97706" stroke-width="2"/>
      <g class="bio-part" data-name="Erbinformation" data-info="Frei im Zellplasma - ein Bakterium hat keinen echten Zellkern.">
        <ellipse cx="180" cy="120" rx="44" ry="26" fill="none" stroke="#dc2626" stroke-width="3"/>
        <ellipse cx="180" cy="120" rx="22" ry="13" fill="none" stroke="#dc2626" stroke-width="2"/>
      </g>
      <g pointer-events="none" font-size="13" font-weight="bold" fill="#ffffff" text-anchor="middle">
        <circle cx="70" cy="72" r="13" fill="#1d4ed8"/><text x="70" y="77">1</text>
        <circle cx="105" cy="135" r="13" fill="#1d4ed8"/><text x="105" y="140">2</text>
        <circle cx="180" cy="120" r="13" fill="#1d4ed8"/><text x="180" y="125">3</text>
        <circle cx="360" cy="108" r="13" fill="#1d4ed8"/><text x="360" y="113">4</text>
      </g>
    </svg>
    <div class="figure-readout">Tipp: Tippe auf ein Teil des Bakteriums.</div>
    </div>`;

  // Übertragungswege als anklickbare Panels (Lektion 7).
  const transmissionSvg = `
    <div class="clickable-figure">
    <svg viewBox="0 0 540 200" role="img" aria-label="Übertragungswege von Krankheitserregern" style="max-width:540px;width:100%;height:auto;display:block;margin:0 auto;font-family:sans-serif;">
      <g class="bio-part" data-name="Tröpfcheninfektion (Einatmen)" data-info="Beim Husten, Niesen oder Sprechen fliegen winzige Tröpfchen mit Erregern durch die Luft - z.B. Grippe und Masern.">
        <rect x="10" y="10" width="160" height="160" rx="12" fill="#eff6ff" stroke="#2563EB" stroke-width="2"/>
        <circle cx="58" cy="70" r="22" fill="#fde68a" stroke="#d99b1c" stroke-width="2"/>
        <circle cx="98" cy="60" r="5" fill="#60a5fa"/>
        <circle cx="115" cy="73" r="4" fill="#60a5fa"/>
        <circle cx="106" cy="88" r="3" fill="#60a5fa"/>
        <text x="90" y="128" text-anchor="middle" font-size="14" font-weight="bold" fill="#1e3a8a">Tröpfchen</text>
        <text x="90" y="148" text-anchor="middle" font-size="12" fill="#475569">(Einatmen)</text>
      </g>
      <g class="bio-part" data-name="Berührung (Schmierinfektion)" data-info="Über verunreinigte Hände, Türklinken oder Lebensmittel - zum Beispiel Salmonellen.">
        <rect x="190" y="10" width="160" height="160" rx="12" fill="#fef9c3" stroke="#ca8a04" stroke-width="2"/>
        <rect x="245" y="52" width="50" height="42" rx="10" fill="#fcd34d" stroke="#b45309" stroke-width="2"/>
        <line x1="253" y1="52" x2="253" y2="36" stroke="#b45309" stroke-width="3" stroke-linecap="round"/>
        <line x1="264" y1="52" x2="264" y2="32" stroke="#b45309" stroke-width="3" stroke-linecap="round"/>
        <line x1="275" y1="52" x2="275" y2="34" stroke="#b45309" stroke-width="3" stroke-linecap="round"/>
        <line x1="286" y1="52" x2="286" y2="38" stroke="#b45309" stroke-width="3" stroke-linecap="round"/>
        <text x="270" y="130" text-anchor="middle" font-size="14" font-weight="bold" fill="#a16207">Berührung</text>
      </g>
      <g class="bio-part" data-name="Blut" data-info="Über Wunden oder eine Blutübertragung gelangen Erreger ins Blut.">
        <rect x="370" y="10" width="160" height="160" rx="12" fill="#fef2f2" stroke="#dc2626" stroke-width="2"/>
        <path d="M450 44 Q474 82 450 106 Q426 82 450 44 Z" fill="#ef4444" stroke="#b91c1c" stroke-width="2"/>
        <text x="450" y="142" text-anchor="middle" font-size="14" font-weight="bold" fill="#991b1b">Blut</text>
      </g>
    </svg>
    <div class="figure-readout">Tipp: Tippe auf einen Übertragungsweg, um mehr zu erfahren.</div>
    </div>`;

  window.LESSON_DATA = (window.LESSON_DATA || []).concat([

    // ===================================================================
    // Lektion 6: Bakterien & Viren - Aufbau und Vermehrung
    // ===================================================================
    {
      id: 6,
      title: "Bakterien & Viren - Aufbau und Vermehrung",
      explanation: {
        html: `
          <h2>Zwei winzige Krankheitserreger</h2>
          <p>Viele Infektionskrankheiten werden durch <strong>Bakterien</strong> oder <strong>Viren</strong>
          ausgelöst. Beide sind so klein, dass man sie nur unter dem Mikroskop sieht. Aber sie sind sehr
          verschieden - und dieser Unterschied ist <strong>der wichtigste Punkt</strong> in diesem Thema.</p>

          <div class="analogy-box">
            <strong>Lebewesen oder Schmarotzer?</strong> Ein <strong>Bakterium</strong> ist wie ein selbstständiger
            Mini-Handwerker: Es ist eine eigene Zelle, lebt und vermehrt sich selbst. Ein <strong>Virus</strong> ist
            eher wie ein Computervirus, der einen fremden Rechner braucht: Es ist <em>keine</em> Zelle und kann sich
            nur vermehren, wenn es eine fremde <strong>Wirtszelle</strong> kapert.
          </div>

          <div class="reading-guide">
            <strong>So liest du die Bilder unten:</strong> Beide Grafiken sind anklickbar - tippe auf ein Teil
            (z.B. Zellwand, Geißel, Stacheln, Erbinformation), dann erscheint unter dem Bild, was es ist und wozu es dient.
          </div>

          <h3>Das Bakterium - ein Lebewesen (Einzeller)</h3>
          ${bacteriaSvg}
          <table class="icon-table">
            <tr><th>Nr.</th><th>Bestandteil</th><th>Aufgabe</th></tr>
            <tr><td><strong>1</strong></td><td>Zellwand</td><td>feste Hülle, gibt dem Bakterium Halt und Form.</td></tr>
            <tr><td><strong>2</strong></td><td>Zellplasma (mit Zellmembran)</td><td>Grundmasse im Inneren; hier laufen die Lebensvorgänge ab.</td></tr>
            <tr><td><strong>3</strong></td><td>Erbinformation</td><td>frei im Zellplasma - ein Bakterium hat <strong>keinen echten Zellkern</strong>.</td></tr>
            <tr><td><strong>4</strong></td><td>Geißel</td><td>fadenartiger "Schwanz" zur Fortbewegung (haben nicht alle Bakterien).</td></tr>
          </table>
          <p>Ein Bakterium ist eine <strong>eigene Zelle</strong> und damit ein <strong>Lebewesen</strong>. Es kann
          sich <strong>selbst vermehren</strong> - durch <strong>Zellteilung</strong>: Aus einem Bakterium werden
          zwei, aus zwei vier, und so weiter. Dafür braucht es nur die richtigen Bedingungen:</p>
          <div class="info-card">
            <strong>Bakterien vermehren sich gut bei:</strong> Wärme (am liebsten ca. 30-37 &deg;C),
            Nährstoffen (Nahrung) und Feuchtigkeit. Deshalb wachsen sie z.B. auf warmem, feuchtem Essen besonders schnell.
          </div>

          <h3>Das Virus - kein Lebewesen</h3>
          ${virusSvg}
          <table class="icon-table">
            <tr><th>Nr.</th><th>Bestandteil</th><th>Aufgabe</th></tr>
            <tr><td><strong>1</strong></td><td>Stacheln</td><td>außen; damit dockt das Virus an eine Wirtszelle an.</td></tr>
            <tr><td><strong>2</strong></td><td>Eiweißhülle</td><td>schützende Hülle aus Eiweiß (umgibt das Virus).</td></tr>
            <tr><td><strong>3</strong></td><td>Erbinformation</td><td>im Inneren; der "Bauplan" für neue Viren.</td></tr>
          </table>
          <p>Ein Virus ist <strong>keine Zelle</strong> und <strong>kein Lebewesen</strong>. Es kann sich
          <strong>nicht selbst</strong> vermehren. Stattdessen:</p>
          <div class="info-card">
            <strong>So vermehrt sich ein Virus:</strong> Es dockt mit den Stacheln an eine <strong>Wirtszelle</strong>
            an und schleust seine Erbinformation hinein. Die Zelle wird umprogrammiert und muss nun selbst viele neue
            Viren bauen. Schließlich platzt sie, und die neuen Viren befallen weitere Zellen.
          </div>

          <h3>Der wichtigste Unterschied</h3>
          <table class="icon-table">
            <tr><th></th><th>Bakterien</th><th>Viren</th></tr>
            <tr><td>Lebewesen?</td><td><strong>ja</strong> (eigene Zelle)</td><td><strong>nein</strong> (keine Zelle)</td></tr>
            <tr><td>Vermehrung</td><td><strong>selbst</strong>, durch Zellteilung</td><td>nur in einer <strong>Wirtszelle</strong></td></tr>
            <tr><td>Größe</td><td>größer</td><td>viel kleiner</td></tr>
            <tr><td>Behandlung</td><td><strong>Antibiotika</strong> helfen</td><td>Antibiotika helfen <strong>nicht</strong></td></tr>
          </table>

          <div class="why-context">
            <strong>Warum lernen wir das?</strong> Auf der KA stehen "Bakterien, Viren". Die Lieblingsfrage der
            Lehrkräfte: <em>Was ist der Unterschied zwischen Bakterien und Viren?</em> Antwort-Kern: Bakterien sind
            Lebewesen und vermehren sich selbst, Viren sind keine Lebewesen und brauchen eine Wirtszelle.
          </div>

          <div class="tip-box">
            <strong>Kurz zum Merken:</strong> <strong>B</strong>akterium = <strong>B</strong>elebt (Lebewesen,
            vermehrt sich selbst). <strong>V</strong>irus = braucht eine fremde Zelle (<strong>V</strong>iren sind
            "Schmarotzer"). Antibiotika wirken nur gegen Bakterien.
          </div>

          <div class="warning-box">
            <strong>Häufiger Fehler:</strong> "Antibiotika gegen Grippe." Grippe wird von <em>Viren</em> ausgelöst -
            da helfen Antibiotika <strong>nicht</strong>. Antibiotika wirken nur gegen <em>Bakterien</em>.
          </div>
        `
      },
      example: {
        title: "Beispiel: Wie sich ein Virus vermehrt",
        steps: [
          {
            label: "1. Andocken",
            html: `<p>Das Virus heftet sich mit seinen <strong>Stacheln</strong> an eine passende
              <strong>Wirtszelle</strong> (z.B. eine Zelle in deiner Lunge).</p>`
          },
          {
            label: "2. Einschleusen",
            html: `<p>Es schleust seine <strong>Erbinformation</strong> in die Zelle ein und programmiert sie um.</p>`
          },
          {
            label: "3. Neue Viren bauen",
            html: `<p>Die Zelle baut jetzt lauter <strong>neue Viren</strong>, statt ihre eigene Arbeit zu machen.</p>`
          },
          {
            label: "4. Freisetzen",
            html: `<p>Die Zelle platzt, die neuen Viren werden frei und befallen <strong>weitere Zellen</strong>.
              Bei einem Bakterium wäre das anders: Es würde sich einfach selbst teilen.</p>`
          }
        ]
      },
      exercisesIntro: "Kerngedanke: Bakterien = Lebewesen, teilen sich selbst. Viren = keine Lebewesen, brauchen eine Wirtszelle.",
      exercises: [
        {
          type: "multiple-choice",
          question: "Was ist der wichtigste Unterschied zwischen Bakterien und Viren?",
          options: [
            "Bakterien sind Lebewesen und vermehren sich selbst; Viren brauchen eine Wirtszelle.",
            "Bakterien sind kleiner als Viren.",
            "Viren sind Lebewesen, Bakterien nicht.",
            "Beide vermehren sich nur in einer Wirtszelle."
          ],
          correct: 0,
          explanation: "Richtig! Bakterien sind eigene Zellen (Lebewesen) und teilen sich selbst. Viren sind keine Lebewesen und vermehren sich nur in einer fremden Zelle.",
          wrongExplanations: {
            1: "Umgekehrt: Bakterien sind größer als Viren.",
            2: "Genau andersherum - Bakterien sind Lebewesen, Viren nicht.",
            3: "Nur Viren brauchen eine Wirtszelle. Bakterien teilen sich selbst."
          }
        },
        {
          type: "matching",
          question: "Vervollständige jeden Satz - ordne das passende Satzende zu:",
          pairs: [
            { left: "Bakterien vermehren sich ...", right: "selbst durch Zellteilung" },
            { left: "Viren vermehren sich ...", right: "nur in einer Wirtszelle" },
            { left: "Ein Bakterium ist ...", right: "ein Lebewesen (eigene Zelle)" },
            { left: "Ein Virus ist ...", right: "kein Lebewesen, sondern braucht einen Wirt" }
          ],
          explanation: "Bakterien: Lebewesen, vermehren sich selbst durch Zellteilung. Viren: keine Lebewesen, brauchen eine Wirtszelle."
        },
        {
          type: "ordering",
          question: "Bringe die Vermehrung eines Virus in die richtige Reihenfolge:",
          items: [
            "Das Virus dockt an eine Wirtszelle an",
            "Es schleust seine Erbinformation in die Zelle",
            "Die Zelle baut neue Viren",
            "Die Zelle platzt, die Viren werden frei"
          ],
          correctOrder: [0, 1, 2, 3],
          explanation: "Andocken - Einschleusen - neue Viren bauen - freisetzen."
        },
        {
          type: "fill-in-blank",
          question: "Fülle die Lücken aus:",
          text: "Ein Bakterium ist ein {{blank}} und vermehrt sich selbst durch {{blank}}. Ein Virus ist kein Lebewesen und braucht zur Vermehrung eine {{blank}}.",
          blanks: [
            { correct: "Lebewesen", alternatives: ["lebewesen"] },
            { correct: "Zellteilung", alternatives: ["zellteilung", "Teilung"] },
            { correct: "Wirtszelle", alternatives: ["wirtszelle", "Zelle"] }
          ],
          explanation: "Bakterium = Lebewesen, Zellteilung. Virus = keine eigene Vermehrung, braucht eine Wirtszelle."
        },
        {
          type: "free-text",
          question: "Erkläre mit eigenen Worten den <strong>Unterschied zwischen Bakterien und Viren</strong> (nenne mindestens zwei Punkte).",
          hint: "Denk an: Lebewesen oder nicht? Wie vermehren sie sich? Helfen Antibiotika?",
          minWords: 15,
          modelAnswer: "Bakterien sind Lebewesen und bestehen aus einer eigenen Zelle; sie vermehren sich selbst durch Zellteilung. Viren sind keine Lebewesen und brauchen zur Vermehrung eine fremde Wirtszelle. Außerdem helfen Antibiotika nur gegen Bakterien, nicht gegen Viren."
        }
      ]
    },

    // ===================================================================
    // Lektion 7: Infektionskrankheiten - Erreger, Symptome, Übertragung
    // ===================================================================
    {
      id: 7,
      title: "Infektionskrankheiten - Erreger, Symptome, Übertragung",
      explanation: {
        html: `
          <h2>Wie Krankheiten entstehen und sich ausbreiten</h2>
          <p>Eine <strong>Infektionskrankheit</strong> entsteht, wenn <strong>Krankheitserreger</strong>
          (z.B. Bakterien oder Viren) in den Körper gelangen und sich dort vermehren. Damit du über jede
          Krankheit reden kannst, brauchst du vier <strong>Fachbegriffe</strong>.</p>

          <div class="analogy-box">
            <strong>Wie ungebetene Gäste:</strong> Die Erreger sind wie Eindringlinge, die sich in deinem Körper
            breit machen. Eine Zeit lang merkst du nichts (sie "richten sich erst ein"), dann zeigen sich die ersten
            Beschwerden. Und wie man sich ansteckt (die "Tür", durch die sie kommen), ist bei jeder Krankheit anders.
          </div>

          <h3>Die 4 wichtigen Begriffe</h3>
          <table class="icon-table">
            <tr><th>Begriff</th><th>Bedeutung</th></tr>
            <tr><td><strong>Krankheitserreger</strong></td><td>das Lebewesen/Teilchen, das krank macht - z.B. Bakterien, Viren (auch Pilze).</td></tr>
            <tr><td><strong>Inkubationszeit</strong></td><td>die Zeit von der Ansteckung bis die ersten Krankheitszeichen kommen ("man hat sich angesteckt, ist aber noch nicht krank").</td></tr>
            <tr><td><strong>Symptome</strong></td><td>die Krankheitszeichen, die man merkt - z.B. Fieber, Husten, Bauchschmerzen.</td></tr>
            <tr><td><strong>Übertragung</strong></td><td>der Weg, auf dem der Erreger von einem zum anderen kommt.</td></tr>
          </table>

          <h3>Wie werden Erreger übertragen?</h3>
          ${transmissionSvg}
          <table class="icon-table">
            <tr><th>Übertragungsweg</th><th>Beispiel</th></tr>
            <tr><td>Tröpfcheninfektion (Einatmen)</td><td>Husten, Niesen, Sprechen - z.B. Grippe, Masern.</td></tr>
            <tr><td>Berührung / Schmierinfektion</td><td>verunreinigte Hände, Türklinken, Lebensmittel - z.B. Salmonellen.</td></tr>
            <tr><td>Blut</td><td>z.B. über Wunden oder Blutübertragung.</td></tr>
          </table>

          <h3>Krankheiten und ihre Erreger</h3>
          <table class="icon-table">
            <tr><th>Durch Bakterien</th><th>Durch Viren</th></tr>
            <tr><td>Salmonellose, Tuberkulose, Scharlach, Keuchhusten, Wundstarrkrampf, Blasenentzündung</td><td>Grippe, Masern, Erkältung</td></tr>
          </table>

          <div class="info-card">
            <strong>Bakterien sind nicht nur schädlich!</strong> Viele sind sogar nützlich: Sie bilden den
            Säureschutzmantel der Haut, helfen im Darm bei der Verdauung, liefern wichtige Vitamine und werden zur
            Herstellung von Lebensmitteln genutzt (z.B. Joghurt und Käse).
          </div>

          <h3>Steckbrief-Beispiel: Salmonellose</h3>
          <table class="icon-table">
            <tr><th>Merkmal</th><th>Salmonellose</th></tr>
            <tr><td>Erreger</td><td>Salmonellen (<strong>Bakterien</strong>)</td></tr>
            <tr><td>Übertragung</td><td>verunreinigte Nahrung: rohe Eier, Milch, Fleisch; mangelnde Hygiene; unterbrochene Kühlkette.</td></tr>
            <tr><td>Inkubationszeit</td><td>ca. 5 Stunden bis 3 Tage</td></tr>
            <tr><td>Symptome</td><td>Bauchschmerzen, Durchfall, Fieber, Übelkeit, manchmal Erbrechen.</td></tr>
            <tr><td>Schutz</td><td>Hände waschen, Lebensmittel gut kühlen und durchgaren.</td></tr>
          </table>

          <div class="why-context">
            <strong>Warum lernen wir das?</strong> Auf der KA steht "Infektionskrankheiten: Bakterien, Viren".
            Typische Aufgaben: die Begriffe (Inkubationszeit, Symptome, Übertragung) erklären, eine Krankheit
            ihrem Erreger zuordnen oder einen kurzen Steckbrief ausfüllen.
          </div>

          <div class="tip-box">
            <strong>Inkubationszeit merken:</strong> "Schon angesteckt, aber noch nicht krank." Es ist die
            <em>Wartezeit</em>, bis die ersten Symptome kommen.
          </div>

          <div class="warning-box">
            <strong>Schutz vor Ansteckung:</strong> regelmäßig <strong>Hände waschen</strong>, in die Armbeuge
            husten/niesen, Abstand zu Kranken, Lebensmittel kühlen - und gegen viele Krankheiten gibt es eine
            <strong>Impfung</strong> (z.B. Masern, Wundstarrkrampf).
          </div>
        `
      },
      example: {
        title: "Beispiel: Steckbrief lesen und verstehen",
        steps: [
          {
            label: "Welcher Erreger?",
            html: `<p>Bei der <strong>Salmonellose</strong> sind es <strong>Salmonellen</strong> - das sind
              <strong>Bakterien</strong>. Also helfen hier Antibiotika (bei schweren Fällen).</p>`
          },
          {
            label: "Wie steckt man sich an?",
            html: `<p>Über <strong>verunreinigte Nahrung</strong> (rohe Eier, Fleisch) und schlechte Hygiene.
              &rarr; Übertragung durch Berührung/Schmierinfektion.</p>`
          },
          {
            label: "Was sind die Symptome?",
            html: `<p>Bauchschmerzen, Durchfall, Fieber, Übelkeit. Sie kommen nach der
              <strong>Inkubationszeit</strong> von 5 Stunden bis 3 Tagen.</p>`
          }
        ]
      },
      exercisesIntro: "Begriffe: Erreger, Inkubationszeit (Wartezeit bis krank), Symptome (Beschwerden), Übertragung (Ansteckungsweg).",
      exercises: [
        {
          type: "matching",
          question: "Ordne jedem Fachbegriff seine Bedeutung zu:",
          pairs: [
            { left: "Krankheitserreger", right: "macht krank, z.B. Bakterien oder Viren" },
            { left: "Inkubationszeit", right: "Zeit von der Ansteckung bis zu den ersten Symptomen" },
            { left: "Symptome", right: "die Krankheitszeichen, z.B. Fieber und Husten" },
            { left: "Übertragung", right: "der Weg, wie der Erreger weitergegeben wird" }
          ],
          explanation: "Erreger = was krank macht; Inkubationszeit = Wartezeit; Symptome = Beschwerden; Übertragung = Ansteckungsweg."
        },
        {
          type: "multiple-choice",
          question: "Welche dieser Krankheiten wird von <strong>Bakterien</strong> ausgelöst?",
          options: ["Tuberkulose", "Grippe", "Masern", "Erkältung"],
          correct: 0,
          explanation: "Richtig! Tuberkulose wird von Bakterien ausgelöst (auch Salmonellose und Scharlach). Antibiotika können dagegen helfen.",
          wrongExplanations: {
            1: "Grippe wird von Viren ausgelöst - dagegen helfen keine Antibiotika.",
            2: "Masern werden von Viren ausgelöst.",
            3: "Eine Erkältung wird von Viren ausgelöst."
          }
        },
        {
          type: "multiple-choice",
          question: "Was bedeutet <strong>Inkubationszeit</strong>?",
          options: [
            "Die Zeit von der Ansteckung bis die ersten Symptome auftreten.",
            "Die Zeit, in der man ansteckend ist.",
            "Die Zeit, die der Arztbesuch dauert.",
            "Die Zeit, bis eine Wunde verheilt ist."
          ],
          correct: 0,
          explanation: "Richtig! In der Inkubationszeit hat man sich schon angesteckt, ist aber noch nicht krank.",
          wrongExplanations: {
            1: "Das ist die ansteckende Phase - nicht gemeint.",
            2: "Mit dem Arztbesuch hat der Begriff nichts zu tun.",
            3: "Das ist die Heilungszeit, nicht die Inkubationszeit."
          }
        },
        {
          type: "fill-in-blank",
          question: "Fülle den Steckbrief der Salmonellose aus:",
          text: "Der Erreger der Salmonellose ist ein {{blank}} (Salmonellen). Man steckt sich über verunreinigte {{blank}} an. Typische Symptome sind Durchfall und {{blank}}.",
          blanks: [
            { correct: "Bakterium", alternatives: ["bakterium", "Bakterien"] },
            { correct: "Nahrung", alternatives: ["nahrung", "Lebensmittel", "Eier"] },
            { correct: "Bauchschmerzen", alternatives: ["bauchschmerzen", "Fieber", "Übelkeit", "Erbrechen"] }
          ],
          explanation: "Salmonellen sind Bakterien; Ansteckung über verunreinigte Nahrung; Symptome u.a. Durchfall, Bauchschmerzen, Fieber."
        },
        {
          type: "free-text",
          question: "Nenne <strong>zwei Möglichkeiten</strong>, wie man sich vor einer Ansteckung schützen kann, und begründe kurz.",
          hint: "Denk an Hygiene, Husten/Niesen, Lebensmittel und Impfung.",
          minWords: 10,
          modelAnswer: "1. Regelmäßig die Hände waschen - so entfernt man Erreger, bevor sie in den Körper gelangen. 2. In die Armbeuge husten und niesen sowie Abstand zu Kranken halten - so verhindert man die Tröpfcheninfektion. Zusätzlich schützt eine Impfung gegen viele Krankheiten und Lebensmittel sollten gut gekühlt und durchgegart werden."
        }
      ]
    }

  ]);

})();
