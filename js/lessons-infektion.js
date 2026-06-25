/**
 * Modul 4 - Infektionskrankheiten (Biologie KA 2, Klasse 8, M-Niveau).
 *   L6 Bakterien & Viren - Aufbau und Vermehrung (mit Unterschied)
 *   L7 Infektionskrankheiten - Erreger, Inkubationszeit, Symptome, Uebertragung, Steckbriefe
 *
 * Inhalte in eigenen Worten nach den Buddy-Books (Viren/Bakterien), dem
 * Salmonellose-AB und der Begriffsliste. Eigene SVG-Grafiken. Zielgruppe: Leonie.
 */
(function () {

  // Virus: Eiweisshuelle + Stacheln + Erbinformation (nummeriert)
  const virusSvg = `
    <svg viewBox="0 0 300 300" role="img" aria-label="Aufbau eines Virus mit Stacheln, Eiweisshuelle und Erbinformation" style="max-width:280px;width:100%;height:auto;display:block;margin:1rem auto;font-family:sans-serif;">
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
      <circle cx="150" cy="150" r="70" fill="#c7d2fe" stroke="#4338ca" stroke-width="3"/>
      <path d="M 118 145 q 16 -22 32 0 q 16 22 32 0" fill="none" stroke="#dc2626" stroke-width="3"/>
      <g font-size="13" font-weight="bold" fill="#ffffff" text-anchor="middle">
        <circle cx="150" cy="42" r="13" fill="#1d4ed8"/><text x="150" y="47">1</text>
        <circle cx="108" cy="192" r="13" fill="#1d4ed8"/><text x="108" y="197">2</text>
        <circle cx="172" cy="150" r="13" fill="#1d4ed8"/><text x="172" y="155">3</text>
      </g>
    </svg>`;

  // Bakterie: Zellwand, Zellmembran/Plasma, Erbinformation (Ring), Geissel (nummeriert)
  const bacteriaSvg = `
    <svg viewBox="0 0 410 240" role="img" aria-label="Aufbau einer Bakterienzelle mit Zellwand, Zellplasma, Erbinformation und Geissel" style="max-width:410px;width:100%;height:auto;display:block;margin:1rem auto;font-family:sans-serif;">
      <path d="M 320 120 q 16 -16 32 0 q 16 16 32 0 q 16 -16 24 -6" fill="none" stroke="#78350f" stroke-width="3"/>
      <rect x="40" y="65" width="280" height="110" rx="55" fill="#fde68a" stroke="#b45309" stroke-width="5"/>
      <rect x="52" y="77" width="256" height="86" rx="43" fill="#fef3c7" stroke="#d97706" stroke-width="2"/>
      <ellipse cx="180" cy="120" rx="44" ry="26" fill="none" stroke="#dc2626" stroke-width="3"/>
      <ellipse cx="180" cy="120" rx="22" ry="13" fill="none" stroke="#dc2626" stroke-width="2"/>
      <g font-size="13" font-weight="bold" fill="#ffffff" text-anchor="middle">
        <circle cx="70" cy="72" r="13" fill="#1d4ed8"/><text x="70" y="77">1</text>
        <circle cx="105" cy="135" r="13" fill="#1d4ed8"/><text x="105" y="140">2</text>
        <circle cx="180" cy="120" r="13" fill="#1d4ed8"/><text x="180" y="125">3</text>
        <circle cx="360" cy="108" r="13" fill="#1d4ed8"/><text x="360" y="113">4</text>
      </g>
    </svg>`;

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
          ausgeloest. Beide sind so klein, dass man sie nur unter dem Mikroskop sieht. Aber sie sind sehr
          verschieden - und dieser Unterschied ist <strong>der wichtigste Punkt</strong> in diesem Thema.</p>

          <div class="analogy-box">
            <strong>Lebewesen oder Schmarotzer?</strong> Ein <strong>Bakterium</strong> ist wie ein selbststaendiger
            Mini-Handwerker: Es ist eine eigene Zelle, lebt und vermehrt sich selbst. Ein <strong>Virus</strong> ist
            eher wie ein Computervirus, der einen fremden Rechner braucht: Es ist <em>keine</em> Zelle und kann sich
            nur vermehren, wenn es eine fremde <strong>Wirtszelle</strong> kapert.
          </div>

          <h3>Das Bakterium - ein Lebewesen (Einzeller)</h3>
          ${bacteriaSvg}
          <table class="icon-table">
            <tr><th>Nr.</th><th>Bestandteil</th><th>Aufgabe</th></tr>
            <tr><td><strong>1</strong></td><td>Zellwand</td><td>feste Huelle, gibt dem Bakterium Halt und Form.</td></tr>
            <tr><td><strong>2</strong></td><td>Zellplasma (mit Zellmembran)</td><td>Grundmasse im Inneren; hier laufen die Lebensvorgaenge ab.</td></tr>
            <tr><td><strong>3</strong></td><td>Erbinformation</td><td>frei im Zellplasma - ein Bakterium hat <strong>keinen echten Zellkern</strong>.</td></tr>
            <tr><td><strong>4</strong></td><td>Geissel</td><td>fadenartiger "Schwanz" zur Fortbewegung (haben nicht alle Bakterien).</td></tr>
          </table>
          <p>Ein Bakterium ist eine <strong>eigene Zelle</strong> und damit ein <strong>Lebewesen</strong>. Es kann
          sich <strong>selbst vermehren</strong> - durch <strong>Zellteilung</strong>: Aus einem Bakterium werden
          zwei, aus zwei vier, und so weiter. Dafuer braucht es nur die richtigen Bedingungen:</p>
          <div class="info-card">
            <strong>Bakterien vermehren sich gut bei:</strong> Waerme (am liebsten ca. 30-37 &deg;C),
            Naehrstoffen (Nahrung) und Feuchtigkeit. Deshalb wachsen sie z.B. auf warmem, feuchtem Essen besonders schnell.
          </div>

          <h3>Das Virus - kein Lebewesen</h3>
          ${virusSvg}
          <table class="icon-table">
            <tr><th>Nr.</th><th>Bestandteil</th><th>Aufgabe</th></tr>
            <tr><td><strong>1</strong></td><td>Stacheln</td><td>aussen; damit dockt das Virus an eine Wirtszelle an.</td></tr>
            <tr><td><strong>2</strong></td><td>Eiweisshuelle</td><td>schuetzende Huelle aus Eiweiss (umgibt das Virus).</td></tr>
            <tr><td><strong>3</strong></td><td>Erbinformation</td><td>im Inneren; der "Bauplan" fuer neue Viren.</td></tr>
          </table>
          <p>Ein Virus ist <strong>keine Zelle</strong> und <strong>kein Lebewesen</strong>. Es kann sich
          <strong>nicht selbst</strong> vermehren. Stattdessen:</p>
          <div class="info-card">
            <strong>So vermehrt sich ein Virus:</strong> Es dockt mit den Stacheln an eine <strong>Wirtszelle</strong>
            an und schleust seine Erbinformation hinein. Die Zelle wird umprogrammiert und muss nun selbst viele neue
            Viren bauen. Schliesslich platzt sie, und die neuen Viren befallen weitere Zellen.
          </div>

          <h3>Der wichtigste Unterschied</h3>
          <table class="icon-table">
            <tr><th></th><th>Bakterien</th><th>Viren</th></tr>
            <tr><td>Lebewesen?</td><td><strong>ja</strong> (eigene Zelle)</td><td><strong>nein</strong> (keine Zelle)</td></tr>
            <tr><td>Vermehrung</td><td><strong>selbst</strong>, durch Zellteilung</td><td>nur in einer <strong>Wirtszelle</strong></td></tr>
            <tr><td>Groesse</td><td>groesser</td><td>viel kleiner</td></tr>
            <tr><td>Behandlung</td><td><strong>Antibiotika</strong> helfen</td><td>Antibiotika helfen <strong>nicht</strong></td></tr>
          </table>

          <div class="why-context">
            <strong>Warum lernen wir das?</strong> Auf der KA stehen "Bakterien, Viren". Die Lieblingsfrage der
            Lehrkraefte: <em>Was ist der Unterschied zwischen Bakterien und Viren?</em> Antwort-Kern: Bakterien sind
            Lebewesen und vermehren sich selbst, Viren sind keine Lebewesen und brauchen eine Wirtszelle.
          </div>

          <div class="tip-box">
            <strong>Kurz zum Merken:</strong> <strong>B</strong>akterium = <strong>B</strong>elebt (Lebewesen,
            vermehrt sich selbst). <strong>V</strong>irus = braucht eine fremde Zelle (<strong>V</strong>iren sind
            "Schmarotzer"). Antibiotika wirken nur gegen Bakterien.
          </div>

          <div class="warning-box">
            <strong>Haeufiger Fehler:</strong> "Antibiotika gegen Grippe." Grippe wird von <em>Viren</em> ausgeloest -
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
              Bei einem Bakterium waere das anders: Es wuerde sich einfach selbst teilen.</p>`
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
            1: "Umgekehrt: Bakterien sind groesser als Viren.",
            2: "Genau andersherum - Bakterien sind Lebewesen, Viren nicht.",
            3: "Nur Viren brauchen eine Wirtszelle. Bakterien teilen sich selbst."
          }
        },
        {
          type: "matching",
          question: "Ordne die Aussagen richtig zu (Bakterien oder Viren):",
          pairs: [
            { left: "vermehren sich durch Zellteilung", right: "Bakterien" },
            { left: "brauchen eine Wirtszelle", right: "Viren" },
            { left: "sind Lebewesen (eigene Zelle)", right: "Bakterien (auch)" },
            { left: "haben Stacheln und eine Eiweisshuelle", right: "Viren (auch)" }
          ],
          explanation: "Bakterien: Lebewesen, Zellteilung. Viren: keine Lebewesen, Wirtszelle, Eiweisshuelle mit Stacheln."
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
          question: "Fuelle die Luecken aus:",
          text: "Ein Bakterium ist ein {{blank}} und vermehrt sich selbst durch {{blank}}. Ein Virus ist kein Lebewesen und braucht zur Vermehrung eine {{blank}}.",
          blanks: [
            { correct: "Lebewesen", alternatives: ["lebewesen"] },
            { correct: "Zellteilung", alternatives: ["zellteilung", "Teilung"] },
            { correct: "Wirtszelle", alternatives: ["wirtszelle", "Zelle"] }
          ],
          explanation: "Bakterium = Lebewesen, Zellteilung. Virus = keine eigene Vermehrung, braucht eine Wirtszelle."
        }
      ]
    },

    // ===================================================================
    // Lektion 7: Infektionskrankheiten - Erreger, Symptome, Uebertragung
    // ===================================================================
    {
      id: 7,
      title: "Infektionskrankheiten - Erreger, Symptome, Uebertragung",
      explanation: {
        html: `
          <h2>Wie Krankheiten entstehen und sich ausbreiten</h2>
          <p>Eine <strong>Infektionskrankheit</strong> entsteht, wenn <strong>Krankheitserreger</strong>
          (z.B. Bakterien oder Viren) in den Koerper gelangen und sich dort vermehren. Damit du ueber jede
          Krankheit reden kannst, brauchst du vier <strong>Fachbegriffe</strong>.</p>

          <div class="analogy-box">
            <strong>Wie ungebetene Gaeste:</strong> Die Erreger sind wie Eindringlinge, die sich in deinem Koerper
            breit machen. Eine Zeit lang merkst du nichts (sie "richten sich erst ein"), dann zeigen sich die ersten
            Beschwerden. Und wie man sich ansteckt (die "Tuer", durch die sie kommen), ist bei jeder Krankheit anders.
          </div>

          <h3>Die 4 wichtigen Begriffe</h3>
          <table class="icon-table">
            <tr><th>Begriff</th><th>Bedeutung</th></tr>
            <tr><td><strong>Krankheitserreger</strong></td><td>das Lebewesen/Teilchen, das krank macht - z.B. Bakterien, Viren (auch Pilze).</td></tr>
            <tr><td><strong>Inkubationszeit</strong></td><td>die Zeit von der Ansteckung bis die ersten Krankheitszeichen kommen ("man hat sich angesteckt, ist aber noch nicht krank").</td></tr>
            <tr><td><strong>Symptome</strong></td><td>die Krankheitszeichen, die man merkt - z.B. Fieber, Husten, Bauchschmerzen.</td></tr>
            <tr><td><strong>Uebertragung</strong></td><td>der Weg, auf dem der Erreger von einem zum anderen kommt.</td></tr>
          </table>

          <h3>Wie werden Erreger uebertragen?</h3>
          <table class="icon-table">
            <tr><th>Uebertragungsweg</th><th>Beispiel</th></tr>
            <tr><td>Troepfcheninfektion (Einatmen)</td><td>Husten, Niesen, Sprechen - z.B. Grippe, Masern.</td></tr>
            <tr><td>Beruehrung / Schmierinfektion</td><td>verunreinigte Haende, Tuerklinken, Lebensmittel - z.B. Salmonellen.</td></tr>
            <tr><td>Blut</td><td>z.B. ueber Wunden oder Blutuebertragung.</td></tr>
          </table>

          <h3>Krankheiten und ihre Erreger</h3>
          <table class="icon-table">
            <tr><th>Durch Bakterien</th><th>Durch Viren</th></tr>
            <tr><td>Salmonellose, Tuberkulose, Scharlach, Keuchhusten, Wundstarrkrampf, Blasenentzuendung</td><td>Grippe, Masern, Erkaeltung</td></tr>
          </table>

          <div class="info-card">
            <strong>Bakterien sind nicht nur schaedlich!</strong> Viele sind sogar nuetzlich: Sie bilden den
            Saeureschutzmantel der Haut, helfen im Darm bei der Verdauung, liefern wichtige Vitamine und werden zur
            Herstellung von Lebensmitteln genutzt (z.B. Joghurt und Kaese).
          </div>

          <h3>Steckbrief-Beispiel: Salmonellose</h3>
          <table class="icon-table">
            <tr><th>Merkmal</th><th>Salmonellose</th></tr>
            <tr><td>Erreger</td><td>Salmonellen (<strong>Bakterien</strong>)</td></tr>
            <tr><td>Uebertragung</td><td>verunreinigte Nahrung: rohe Eier, Milch, Fleisch; mangelnde Hygiene; unterbrochene Kuehlkette.</td></tr>
            <tr><td>Inkubationszeit</td><td>ca. 5 Stunden bis 3 Tage</td></tr>
            <tr><td>Symptome</td><td>Bauchschmerzen, Durchfall, Fieber, Uebelkeit, manchmal Erbrechen.</td></tr>
            <tr><td>Schutz</td><td>Haende waschen, Lebensmittel gut kuehlen und durchgaren.</td></tr>
          </table>

          <div class="why-context">
            <strong>Warum lernen wir das?</strong> Auf der KA steht "Infektionskrankheiten: Bakterien, Viren".
            Typische Aufgaben: die Begriffe (Inkubationszeit, Symptome, Uebertragung) erklaeren, eine Krankheit
            ihrem Erreger zuordnen oder einen kurzen Steckbrief ausfuellen.
          </div>

          <div class="tip-box">
            <strong>Inkubationszeit merken:</strong> "Schon angesteckt, aber noch nicht krank." Es ist die
            <em>Wartezeit</em>, bis die ersten Symptome kommen.
          </div>

          <div class="warning-box">
            <strong>Schutz vor Ansteckung:</strong> regelmaessig <strong>Haende waschen</strong>, in die Armbeuge
            husten/niesen, Abstand zu Kranken, Lebensmittel kuehlen - und gegen viele Krankheiten gibt es eine
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
              <strong>Bakterien</strong>. Also helfen hier Antibiotika (bei schweren Faellen).</p>`
          },
          {
            label: "Wie steckt man sich an?",
            html: `<p>Ueber <strong>verunreinigte Nahrung</strong> (rohe Eier, Fleisch) und schlechte Hygiene.
              &rarr; Uebertragung durch Beruehrung/Schmierinfektion.</p>`
          },
          {
            label: "Was sind die Symptome?",
            html: `<p>Bauchschmerzen, Durchfall, Fieber, Uebelkeit. Sie kommen nach der
              <strong>Inkubationszeit</strong> von 5 Stunden bis 3 Tagen.</p>`
          }
        ]
      },
      exercisesIntro: "Begriffe: Erreger, Inkubationszeit (Wartezeit bis krank), Symptome (Beschwerden), Uebertragung (Ansteckungsweg).",
      exercises: [
        {
          type: "matching",
          question: "Ordne jedem Fachbegriff seine Bedeutung zu:",
          pairs: [
            { left: "Krankheitserreger", right: "macht krank, z.B. Bakterien oder Viren" },
            { left: "Inkubationszeit", right: "Zeit von der Ansteckung bis zu den ersten Symptomen" },
            { left: "Symptome", right: "die Krankheitszeichen, z.B. Fieber und Husten" },
            { left: "Uebertragung", right: "der Weg, wie der Erreger weitergegeben wird" }
          ],
          explanation: "Erreger = was krank macht; Inkubationszeit = Wartezeit; Symptome = Beschwerden; Uebertragung = Ansteckungsweg."
        },
        {
          type: "matching",
          question: "Ordne jede Krankheit ihrem Erreger zu:",
          pairs: [
            { left: "Grippe", right: "Virus" },
            { left: "Salmonellose", right: "Bakterium" },
            { left: "Masern", right: "Virus" },
            { left: "Tuberkulose", right: "Bakterium" }
          ],
          explanation: "Grippe und Masern werden von Viren ausgeloest; Salmonellose und Tuberkulose von Bakterien."
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
          question: "Fuelle den Steckbrief der Salmonellose aus:",
          text: "Der Erreger der Salmonellose ist ein {{blank}} (Salmonellen). Man steckt sich ueber verunreinigte {{blank}} an. Typische Symptome sind Durchfall und {{blank}}.",
          blanks: [
            { correct: "Bakterium", alternatives: ["bakterium", "Bakterien"] },
            { correct: "Nahrung", alternatives: ["nahrung", "Lebensmittel", "Eier"] },
            { correct: "Bauchschmerzen", alternatives: ["bauchschmerzen", "Fieber", "Uebelkeit", "Erbrechen"] }
          ],
          explanation: "Salmonellen sind Bakterien; Ansteckung ueber verunreinigte Nahrung; Symptome u.a. Durchfall, Bauchschmerzen, Fieber."
        },
        {
          type: "free-text",
          question: "Nenne <strong>zwei Moeglichkeiten</strong>, wie man sich vor einer Ansteckung schuetzen kann, und begruende kurz.",
          hint: "Denk an Hygiene, Husten/Niesen, Lebensmittel und Impfung.",
          minWords: 10,
          modelAnswer: "1. Regelmaessig die Haende waschen - so entfernt man Erreger, bevor sie in den Koerper gelangen. 2. In die Armbeuge husten und niesen sowie Abstand zu Kranken halten - so verhindert man die Troepfcheninfektion. Zusaetzlich schuetzt eine Impfung gegen viele Krankheiten und Lebensmittel sollten gut gekuehlt und durchgegart werden."
        }
      ]
    }

  ]);

})();
