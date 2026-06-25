/**
 * Abschluss - Prüfungssimulation (Biologie KA 2, Klasse 8, M-Niveau).
 *   L8 Gemischte Aufgaben aus allen 4 Themen der Klassenarbeit.
 *
 * Mischt Aufgaben aus: Sinnesorgan Haut, Vom Reiz zur Reaktion, Die Zelle,
 * Infektionskrankheiten. Zielgruppe: Leonie - Selbsttest vor der Arbeit.
 */
(function () {

  window.LESSON_DATA = (window.LESSON_DATA || []).concat([

    {
      id: 8,
      title: "Prüfungssimulation (alle Themen)",
      explanation: {
        html: `
          <h2>Jetzt zeigst du, was du kannst!</h2>
          <p>Hier sind gemischte Aufgaben aus <strong>allen vier Themen</strong> der Klassenarbeit. So ähnlich
          könnte deine echte Arbeit aussehen.</p>

          <div class="analogy-box">
            <strong>Wie ein Probelauf vor dem Wettkampf:</strong> Bevor es ernst wird, testest du einmal alles
            zusammen. Wo es noch hakt, gehst du nochmal in die passende Lektion zurück - dann sitzt es zur Arbeit.
          </div>

          <div class="info-card">
            <strong>Die vier Themen im Überblick:</strong>
            <ul>
              <li><strong>Sinnesorgan Haut</strong> - die drei Schichten und ihre Funktionen</li>
              <li><strong>Vom Reiz zur Reaktion</strong> - die Kette und das EVA-Prinzip</li>
              <li><strong>Die Zelle</strong> - Bestandteile, Tier- und Pflanzenzelle</li>
              <li><strong>Infektionskrankheiten</strong> - Bakterien und Viren</li>
            </ul>
          </div>

          <div class="tip-box">
            <strong>Tipp:</strong> Mach die Übungen ehrlich aus dem Kopf. Wenn du bei einer Aufgabe hängst,
            ist das ein Zeichen, das Thema nochmal kurz zu wiederholen.
          </div>
        `
      },
      exercisesIntro: "Gemischte Aufgaben aus allen vier Themen - viel Erfolg!",
      exercises: [
        {
          type: "matching",
          question: "Haut: Ordne jeden Bestandteil seiner Schicht zu.",
          pairs: [
            { left: "Hornschicht", right: "Oberhaut" },
            { left: "Schweißdrüse", right: "Lederhaut" },
            { left: "Fettgewebe", right: "Unterhaut" }
          ],
          explanation: "Oberhaut (Horn-/Keimschicht), Lederhaut (Drüsen, Gefäße, Sinneszellen), Unterhaut (Fettgewebe)."
        },
        {
          type: "multiple-choice",
          question: "Haut: Welche Schicht bildet ständig neue Hautzellen?",
          options: ["Die Keimschicht", "Die Hornschicht", "Die Unterhaut", "Die Schweißdrüse"],
          correct: 0,
          explanation: "Die Keimschicht bildet neue Zellen, die nach oben wandern und verhornen.",
          wrongExplanations: {
            1: "Die Hornschicht besteht aus toten Zellen.",
            2: "Die Unterhaut ist Fettgewebe.",
            3: "Die Schweißdrüse bildet Schweiß, keine Hautzellen."
          }
        },
        {
          type: "ordering",
          question: "Reiz und Reaktion: Bringe die Kette in die richtige Reihenfolge.",
          items: [
            "Reiz",
            "Sinnesorgan nimmt den Reiz auf",
            "sensorischer Nerv zum Gehirn",
            "Gehirn verarbeitet",
            "motorischer Nerv zum Muskel",
            "Reaktion (Muskel reagiert)"
          ],
          correctOrder: [0, 1, 2, 3, 4, 5],
          explanation: "Reiz - Sinnesorgan - sensorischer Nerv - Gehirn - motorischer Nerv - Reaktion."
        },
        {
          type: "multiple-choice",
          question: "Reiz und Reaktion: Wofür steht EVA?",
          options: [
            "Eingabe - Verarbeitung - Ausgabe",
            "Erkennen - Verstehen - Antworten",
            "Einatmen - Verdauen - Ausscheiden",
            "Energie - Vorrat - Aufbau"
          ],
          correct: 0,
          explanation: "EVA = Eingabe (Sinnesorgan), Verarbeitung (Gehirn), Ausgabe (Reaktion/Muskel).",
          wrongExplanations: {
            1: "Nicht ganz - die richtigen Begriffe sind Eingabe, Verarbeitung, Ausgabe.",
            2: "Das gehört zur Verdauung, nicht zum EVA-Prinzip.",
            3: "Nein, EVA steht für Eingabe, Verarbeitung, Ausgabe."
          }
        },
        {
          type: "multiple-choice",
          question: "Zelle: Welche drei Teile hat nur die Pflanzenzelle?",
          options: [
            "Zellwand, Chloroplasten, große Vakuole",
            "Zellkern, Zellmembran, Mitochondrien",
            "Zellplasma, Zellkern, Ribosomen",
            "Mitochondrien, Zellmembran, Vakuole"
          ],
          correct: 0,
          explanation: "W-C-V: Zellwand, Chloroplasten und die große Vakuole sind pflanzentypisch.",
          wrongExplanations: {
            1: "Diese haben beide Zellen.",
            2: "Auch diese kommen in beiden vor.",
            3: "Zellmembran und Mitochondrien haben beide; nur die große Vakuole ist pflanzentypisch."
          }
        },
        {
          type: "matching",
          question: "Zelle: Ordne jedem Bestandteil seine Aufgabe zu.",
          pairs: [
            { left: "Zellkern", right: "steuert die Zelle, enthält die Erbinformation" },
            { left: "Mitochondrien", right: "liefern Energie (Kraftwerk)" },
            { left: "Zellmembran", right: "regelt, was rein- und rausgeht" }
          ],
          explanation: "Zellkern = Steuerung, Mitochondrien = Energie, Zellmembran = Hülle/Tor."
        },
        {
          type: "multiple-choice",
          question: "Infektion: Was stimmt über Bakterien und Viren?",
          options: [
            "Bakterien vermehren sich selbst; Viren brauchen eine Wirtszelle.",
            "Viren sind Lebewesen, Bakterien nicht.",
            "Beide kann man immer mit Antibiotika heilen.",
            "Bakterien brauchen eine Wirtszelle zum Vermehren."
          ],
          correct: 0,
          explanation: "Bakterien sind Lebewesen und teilen sich selbst; Viren sind keine Lebewesen und brauchen eine Wirtszelle.",
          wrongExplanations: {
            1: "Umgekehrt: Bakterien sind Lebewesen, Viren nicht.",
            2: "Antibiotika wirken nur gegen Bakterien, nicht gegen Viren.",
            3: "Nein - das gilt für Viren. Bakterien teilen sich selbst."
          }
        },
        {
          type: "multiple-choice",
          question: "Infektion: Welche dieser Krankheiten wird von einem <strong>Virus</strong> ausgelöst?",
          options: ["Grippe", "Salmonellose", "Tuberkulose", "Wundstarrkrampf"],
          correct: 0,
          explanation: "Grippe (und auch Masern) werden von Viren ausgelöst.",
          wrongExplanations: {
            1: "Salmonellose wird von Bakterien (Salmonellen) ausgelöst.",
            2: "Tuberkulose wird von Bakterien ausgelöst.",
            3: "Wundstarrkrampf wird von Bakterien ausgelöst."
          }
        },
        {
          type: "fill-in-blank",
          question: "Gemischt: Fülle die Lücken aus allen Themen.",
          text: "Die Haut hat drei Schichten: Oberhaut, Lederhaut und {{blank}}. Das EVA-Prinzip steht für Eingabe, Verarbeitung und {{blank}}. Der {{blank}} steuert die Zelle. Die Inkubationszeit ist die Zeit von der Ansteckung bis zu den ersten {{blank}}.",
          blanks: [
            { correct: "Unterhaut", alternatives: ["unterhaut"] },
            { correct: "Ausgabe", alternatives: ["ausgabe"] },
            { correct: "Zellkern", alternatives: ["zellkern"] },
            { correct: "Symptomen", alternatives: ["symptomen", "Symptome"] }
          ],
          explanation: "Unterhaut - Ausgabe - Zellkern - Symptome: ein Begriff aus jedem Thema."
        },
        {
          type: "free-text",
          question: "Erkläre mit eigenen Worten den <strong>Unterschied zwischen Bakterien und Viren</strong>.",
          hint: "Denk an: Lebewesen? Wie vermehren sie sich? Helfen Antibiotika?",
          minWords: 15,
          modelAnswer: "Bakterien sind Lebewesen und bestehen aus einer eigenen Zelle. Sie können sich selbst durch Zellteilung vermehren. Viren sind dagegen keine Lebewesen und keine Zelle. Sie können sich nicht selbst vermehren, sondern brauchen dafür eine fremde Wirtszelle, die sie umprogrammieren. Antibiotika helfen nur gegen Bakterien, nicht gegen Viren."
        }
      ]
    }

  ]);

})();
