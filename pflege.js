// MediSmart - Copyright (c) 2026 Maximilian Riehn. Alle Rechte vorbehalten.
// Geistiges Eigentum von Maximilian Riehn. Kopieren, Veraendern und Weitergeben nur mit schriftlicher Genehmigung (siehe LICENSE).

// MediSmart – Pflegefachliche Lerninhalte
// Orientierung: Generalistische Pflegeausbildung (PflBG), Expertenstandards des DNQP,
// gängige Lehrbuchinhalte. Eigenständig formuliert – ersetzt nicht das Lehrbuch.
//
// Aufbau: BEREICHE → kapitel → abschnitte. Ein Abschnitt ist eines von:
//   { h: "Überschrift" }            Zwischenüberschrift
//   { p: "Text" }                   Absatz
//   { liste: ["…", "…"] }           Aufzählung
//   { merke: "…" }                  hervorgehobener Merksatz
//   { warn: "…" }                   Warnhinweis
//   { tabelle: { kopf: [], zeilen: [[]] } }
//   { anatomie: "katId" }           Verknüpfung zu einem Anatomie-Bereich
//   { modell: "herz3d" }            eingebettete 3D-Ansicht
//   { link: { bereich, kapitel } }  Verweis auf ein anderes Kapitel

const BEREICHE = [
  // ===================================================================
  {
    id: "pflegeprozess", titel: "Pflegeprozess", untertitel: "Assessment, Probleme, Ziele, Planung, Durchführung, Evaluation", icon: "zyklus",
    kapitel: [
      {
        id: "ueberblick", titel: "Überblick", kurz: "Phasenmodelle und rechtliche Grundlage",
        abschnitte: [
          { h: "Was ist der Pflegeprozess?" },
          { p: "Der Pflegeprozess ist eine systematische, zielgerichtete Arbeitsmethode. Pflege wird nicht nach Gewohnheit, sondern geplant, individuell, nachvollziehbar und überprüfbar durchgeführt – gemeinsam mit der pflegebedürftigen Person." },
          { merke: "Nach dem Pflegeberufegesetz (§ 4 PflBG) sind Pflegefachpersonen vorbehalten: die Erhebung und Feststellung des individuellen Pflegebedarfs, die Organisation, Gestaltung und Steuerung des Pflegeprozesses sowie die Analyse, Evaluation, Sicherung und Entwicklung der Pflegequalität." },
          { h: "Sechs-Phasen-Modell nach Fiechter und Meier" },
          { tabelle: { kopf: ["Phase", "Inhalt", "Leitfrage"], zeilen: [
            ["1. Informationssammlung", "Pflegeanamnese, Beobachtung, Assessment", "Wie geht es der Person, was braucht sie?"],
            ["2. Probleme und Ressourcen erkennen", "Pflegeprobleme/Pflegediagnosen und Fähigkeiten benennen", "Was kann sie, wo braucht sie Hilfe?"],
            ["3. Pflegeziele festlegen", "Nah- und Fernziele, SMART formuliert", "Was soll erreicht werden?"],
            ["4. Maßnahmen planen", "Wer macht was, wann, wie, wie oft, womit?", "Wie wird das Ziel erreicht?"],
            ["5. Durchführung", "Pflege nach Plan, Dokumentation im Pflegebericht", "Was wurde getan, was ist aufgefallen?"],
            ["6. Evaluation", "Zielerreichung überprüfen, Plan anpassen", "Wurde das Ziel erreicht?"]
          ] } },
          { p: "Das Vier-Phasen-Modell der WHO fasst zusammen: Einschätzung (Assessment) – Planung – Durchführung – Evaluation. Beide Modelle sind ein Regelkreis: Die Evaluation führt zurück zur Informationssammlung." },
          { h: "Ordnungsmodelle für die Informationssammlung" },
          { liste: [
            "AEDL nach Monika Krohwinkel (13 Aktivitäten und existenzielle Erfahrungen des Lebens)",
            "ATL nach Liliane Juchli (12 Aktivitäten des täglichen Lebens)",
            "Strukturmodell mit Strukturierter Informationssammlung (SIS) – in der Langzeitpflege weit verbreitet"
          ] }
        ]
      },
      {
        id: "assessment", titel: "Informationssammlung (Assessment)", kurz: "Pflegeanamnese, Quellen, Assessmentinstrumente",
        abschnitte: [
          { h: "Ziel" },
          { p: "Ein möglichst vollständiges Bild der Person: Gesundheitszustand, Fähigkeiten, Einschränkungen, Gewohnheiten, Wünsche, soziales Umfeld und Biografie." },
          { h: "Quellen" },
          { liste: [
            "Die pflegebedürftige Person selbst (wichtigste Quelle)",
            "Angehörige, Betreuerinnen und Betreuer",
            "Beobachtung und Messung durch Pflegende (Vitalzeichen, Haut, Mobilität, Verhalten)",
            "Arztbriefe, Überleitungsbogen, frühere Dokumentation",
            "Andere Berufsgruppen (Physio-, Ergotherapie, Logopädie, Sozialdienst)"
          ] },
          { tabelle: { kopf: ["Datenart", "Beispiel"], zeilen: [
            ["Subjektiv (Aussage der Person)", "„Ich habe Schmerzen im Rücken.“"],
            ["Objektiv (beobachtet, gemessen)", "Blutdruck 150/90 mmHg, Rötung am Kreuzbein"],
            ["Aktuell", "Heutige Atemnot"],
            ["Biografisch", "War Landwirt, steht gern früh auf"]
          ] } },
          { h: "Assessmentinstrumente (Auswahl)" },
          { tabelle: { kopf: ["Instrument", "Erfasst"], zeilen: [
            ["Braden-Skala", "Dekubitusrisiko"],
            ["Barthel-Index", "Selbstständigkeit im Alltag (0–100 Punkte)"],
            ["NRS / VAS", "Schmerzintensität (0–10)"],
            ["BESD", "Schmerz bei Menschen mit Demenz"],
            ["MNA / NRS 2002", "Ernährungszustand"],
            ["Timed Up and Go, Tinetti", "Mobilität und Sturzrisiko"],
            ["Glasgow Coma Scale", "Bewusstsein"],
            ["Mini-Mental-Status-Test (MMST)", "Kognitive Leistung"]
          ] } },
          { h: "AEDL nach Krohwinkel" },
          { liste: [
            "1. Kommunizieren",
            "2. Sich bewegen",
            "3. Vitale Funktionen des Lebens aufrechterhalten",
            "4. Sich pflegen",
            "5. Essen und trinken",
            "6. Ausscheiden",
            "7. Sich kleiden",
            "8. Ruhen und schlafen",
            "9. Sich beschäftigen",
            "10. Sich als Mann oder Frau fühlen und verhalten",
            "11. Für eine sichere Umgebung sorgen",
            "12. Soziale Bereiche des Lebens sichern",
            "13. Mit existenziellen Erfahrungen des Lebens umgehen"
          ] },
          { h: "ATL nach Juchli" },
          { liste: [
            "Wach sein und schlafen", "Sich bewegen", "Sich waschen und kleiden", "Essen und trinken", "Ausscheiden", "Körpertemperatur regulieren",
            "Atmen", "Sich sicher fühlen und verhalten", "Raum und Zeit gestalten – sich beschäftigen", "Kommunizieren", "Kind, Frau, Mann sein", "Sinn finden im Werden, Sein, Vergehen"
          ] },
          { h: "Strukturmodell: SIS" },
          { p: "Die Strukturierte Informationssammlung beginnt mit der Frage an die Person: „Was bewegt Sie im Augenblick? Was brauchen Sie? Was können wir für Sie tun?“ Danach folgen sechs Themenfelder und eine Risikomatrix." },
          { tabelle: { kopf: ["Themenfeld", "Inhalt"], zeilen: [
            ["1", "Kognitive und kommunikative Fähigkeiten"],
            ["2", "Mobilität und Beweglichkeit"],
            ["3", "Krankheitsbezogene Anforderungen und Belastungen"],
            ["4", "Selbstversorgung"],
            ["5", "Leben in sozialen Beziehungen"],
            ["6", "Haushaltsführung (ambulant) bzw. Wohnen/Häuslichkeit (stationär)"]
          ] } },
          { p: "Risikomatrix: Dekubitus, Sturz, Inkontinenz, Schmerz, Ernährung (und Sonstiges) – jeweils mit Einschätzung, ob eine weitere Einschätzung (Assessment) nötig ist." }
        ]
      },
      {
        id: "probleme", titel: "Pflegeprobleme und Ressourcen", kurz: "Arten von Problemen, PESR, Pflegediagnosen",
        abschnitte: [
          { h: "Pflegeproblem" },
          { p: "Ein Pflegeproblem ist eine Beeinträchtigung in einer Lebensaktivität, bei der die Person pflegerische Unterstützung braucht." },
          { tabelle: { kopf: ["Art", "Bedeutung", "Beispiel"], zeilen: [
            ["Aktuelles Problem", "Liegt jetzt vor", "Kann sich nicht selbstständig waschen"],
            ["Potenzielles Problem (Risiko)", "Droht, wenn nicht vorgebeugt wird", "Dekubitusgefahr bei Bettlägerigkeit"],
            ["Verdecktes Problem", "Wird nicht geäußert, aber vermutet", "Angst vor der Operation"],
            ["Generelles Problem", "Betrifft alle in dieser Situation", "Nüchternheit vor einer OP"],
            ["Individuelles Problem", "Betrifft nur diese Person", "Schluckstörung nach Schlaganfall"]
          ] } },
          { h: "Ressourcen" },
          { liste: ["Interne Ressourcen: Fähigkeiten und Stärken der Person (kann den rechten Arm bewegen, ist motiviert)", "Externe Ressourcen: Umfeld (Angehörige kommen täglich, Rollator vorhanden)", "Ressourcen immer mit erfassen – sie bestimmen, was die Person selbst übernehmen kann (aktivierende Pflege)"] },
          { h: "Formulierung: PESR-Format" },
          { tabelle: { kopf: ["Element", "Bedeutung", "Beispiel"], zeilen: [
            ["P – Problem", "Was ist beeinträchtigt?", "Eingeschränkte Mobilität"],
            ["E – Ätiologie", "Ursache", "durch Hemiparese rechts nach Schlaganfall"],
            ["S – Symptome", "Woran erkennbar?", "kann nicht allein aufstehen, unsicherer Stand"],
            ["R – Ressourcen", "Was kann die Person?", "linke Körperseite kräftig, motiviert, Rollator vorhanden"]
          ] } },
          { p: "Pflegediagnosen (z. B. nach NANDA-I) beschreiben Pflegeprobleme in einer einheitlichen Fachsprache, etwa „Beeinträchtigte körperliche Mobilität“ oder „Risiko eines Dekubitus“." }
        ]
      },
      {
        id: "ziele", titel: "Pflegeziele", kurz: "SMART formulieren, Nah- und Fernziele",
        abschnitte: [
          { h: "SMART-Regel" },
          { tabelle: { kopf: ["Buchstabe", "Bedeutung"], zeilen: [
            ["S – spezifisch", "Eindeutig und konkret"],
            ["M – messbar", "Überprüfbar (Strecke, Zeit, Wert)"],
            ["A – akzeptiert", "Mit der Person abgestimmt, für sie erstrebenswert"],
            ["R – realistisch", "Mit den Ressourcen erreichbar"],
            ["T – terminiert", "Mit Datum zur Überprüfung"]
          ] } },
          { tabelle: { kopf: ["Zielart", "Beispiel"], zeilen: [
            ["Nahziel", "Herr M. geht am 12.11. mit Rollator und Begleitung 10 m bis zum Bad."],
            ["Fernziel", "Herr M. geht bis zur Entlassung selbstständig mit Rollator über den Stationsflur."],
            ["Erhaltungsziel", "Die Haut am Kreuzbein bleibt intakt."]
          ] } },
          { merke: "Ziele werden aus Sicht der pflegebedürftigen Person als Zustand formuliert („Herr M. kann …“) – nicht als Tätigkeit der Pflegenden („Pflegekraft mobilisiert …“)." }
        ]
      },
      {
        id: "planung", titel: "Maßnahmenplanung", kurz: "Wer, was, wann, wie, wie oft, womit",
        abschnitte: [
          { p: "Pflegemaßnahmen beschreiben, wie das Ziel erreicht wird. Sie müssen so konkret sein, dass jede Pflegeperson sie gleich durchführt." },
          { tabelle: { kopf: ["Frage", "Beispiel"], zeilen: [
            ["Wer?", "Pflegefachkraft/Pflegehilfskraft nach Anleitung"],
            ["Was?", "Mobilisation vom Bett in den Stuhl"],
            ["Wann und wie oft?", "3× täglich (8, 12, 17 Uhr)"],
            ["Wie?", "Über die linke, kräftige Seite, nach Kinästhetik-Prinzipien"],
            ["Womit?", "Rollator, feste Schuhe"]
          ] } },
          { liste: ["Ressourcen einbeziehen (aktivierende Pflege)", "Wünsche und Gewohnheiten berücksichtigen", "Pflegestandards und Expertenstandards beachten", "Ärztliche Anordnungen und Therapien anderer Berufsgruppen abstimmen"] }
        ]
      },
      {
        id: "doku", titel: "Durchführung und Pflegebericht", kurz: "Dokumentationsregeln mit Beispielen",
        abschnitte: [
          { h: "Durchführung" },
          { p: "Die geplanten Maßnahmen werden umgesetzt, Durchführungsnachweise abgezeichnet. Beobachtungen und Abweichungen werden im Pflegebericht festgehalten. Beim Strukturmodell werden nur Abweichungen vom Maßnahmenplan und besondere Ereignisse berichtet." },
          { h: "Regeln für die Dokumentation" },
          { liste: [
            "Zeitnah, mit Datum, Uhrzeit und Handzeichen",
            "Sachlich, wertfrei und beschreibend – keine Wertungen oder Vermutungen als Tatsachen",
            "Eindeutig, verständlich, nur gebräuchliche Abkürzungen",
            "Dokumentenecht (kein Bleistift), nichts überkleben oder unleserlich machen; Korrekturen nachvollziehbar",
            "Nur selbst Beobachtetes oder Durchgeführtes dokumentieren",
            "Die Dokumentation ist eine Urkunde und kann vor Gericht als Beweismittel dienen"
          ] },
          { h: "Beispiele" },
          { tabelle: { kopf: ["Ungünstig", "Besser"], zeilen: [
            ["„Patient war heute schwierig.“", "„Herr M. lehnte um 8 Uhr die Körperpflege ab und sagte, er sei zu müde. Um 10 Uhr Körperpflege mit Unterstützung durchgeführt.“"],
            ["„Hat wenig gegessen.“", "„Frühstück: ½ Scheibe Brot, 100 ml Tee.“"],
            ["„Haut gerötet.“", "„Nicht wegdrückbare Rötung am Kreuzbein, ca. 3 × 4 cm, Haut intakt.“"],
            ["„Patient ist dement und aggressiv.“", "„Frau K. schlug bei der Hilfe beim Ankleiden mit der Hand nach der Pflegekraft und rief: ‚Lassen Sie mich!‘“"]
          ] } }
        ]
      },
      {
        id: "evaluation", titel: "Evaluation", kurz: "Zielerreichung prüfen und Plan anpassen",
        abschnitte: [
          { p: "In der Evaluation wird überprüft, ob die Pflegeziele erreicht wurden und die Maßnahmen wirksam waren." },
          { tabelle: { kopf: ["Ergebnis", "Konsequenz"], zeilen: [
            ["Ziel erreicht", "Neues Ziel festlegen oder Maßnahmen beenden"],
            ["Ziel teilweise erreicht", "Maßnahmen beibehalten oder anpassen, Termin neu setzen"],
            ["Ziel nicht erreicht", "Ursachen analysieren: Ziel realistisch? Maßnahmen passend? Neue Informationen?"]
          ] } },
          { liste: ["Zu festgelegten Terminen und bei jeder Zustandsänderung", "Gemeinsam mit der Person und ggf. Angehörigen", "Ergebnis dokumentieren – der Kreislauf beginnt erneut"] },
          { h: "Durchgehendes Fallbeispiel" },
          { tabelle: { kopf: ["Phase", "Herr M., 72 Jahre, Schlaganfall mit Hemiparese rechts"], zeilen: [
            ["Information", "Kann nicht allein aufstehen, linke Seite kräftig, möchte wieder selbst ins Bad gehen"],
            ["Problem/Ressource", "Eingeschränkte Mobilität durch Hemiparese rechts; Ressource: motiviert, linke Seite kräftig"],
            ["Ziel", "Geht am 12.11. mit Rollator und Begleitung 10 m ins Bad"],
            ["Maßnahme", "3× täglich Gehtraining mit Rollator, Transfer über links, feste Schuhe"],
            ["Durchführung", "Pflegebericht: „12.11., 8:10 Uhr: 10 m mit Rollator und Begleitung, sicherer Stand.“"],
            ["Evaluation", "Ziel erreicht → neues Ziel: 20 m mit Rollator ohne Begleitung"]
          ] } }
        ]
      }
    ]
  },

  // ===================================================================
  {
    id: "prophylaxen", titel: "Prophylaxen", untertitel: "Definition, Risiken, Skalen und Maßnahmen", icon: "schild",
    kapitel: [
      {
        id: "sturz", titel: "Sturzprophylaxe", kurz: "Expertenstandard, Risikofaktoren, Timed Up and Go",
        abschnitte: [
          { h: "Definition" },
          { p: "Ein Sturz ist ein Ereignis, bei dem eine Person unbeabsichtigt auf dem Boden oder einer tieferen Ebene zu liegen kommt. Sturzprophylaxe umfasst alle Maßnahmen, die Stürze und sturzbedingte Verletzungen verhindern sollen." },
          { merke: "Grundlage ist der Expertenstandard „Sturzprophylaxe in der Pflege“ (DNQP). Ziel: Stürze und Sturzfolgen minimieren – bei möglichst großer Selbstständigkeit und Mobilität." },
          { h: "Risikofaktoren" },
          { liste: [
            "Personenbezogen: eingeschränkte Mobilität, Kraft und Gleichgewicht, Gangunsicherheit",
            "Stürze in der Vorgeschichte, Sturzangst",
            "Kognitive Einschränkungen (Demenz, Delir), Sehstörungen",
            "Inkontinenz, nächtlicher Harndrang (Nykturie)",
            "Orthostatische Hypotonie, Schwindel, Synkopen",
            "Medikamente: Psychopharmaka, Sedativa, Antihypertensiva, Diuretika, Antidiabetika (Hypoglykämie), Polypharmazie",
            "Umgebungsbezogen: Stolperfallen, schlechte Beleuchtung, nasser Boden, ungeeignetes Schuhwerk, fehlende Haltegriffe"
          ] },
          { h: "Einschätzung" },
          { p: "Der Expertenstandard empfiehlt keine einzelne Risikoskala, sondern eine systematische Erfassung der Risikofaktoren bei Aufnahme und bei Veränderungen. Ergänzende Tests:" },
          { tabelle: { kopf: ["Test", "Durchführung", "Hinweis auf Risiko"], zeilen: [
            ["Timed Up and Go (TUG)", "Aufstehen vom Stuhl, 3 m gehen, umdrehen, zurück, hinsetzen", "> 13,5 s: erhöhtes Sturzrisiko; > 20 s: deutlich eingeschränkte Mobilität"],
            ["Tinetti-Test (POMA)", "Balance- und Gangtest, max. 28 Punkte", "< 20 Punkte: erhöhtes Sturzrisiko"],
            ["Sturzprotokoll", "Dokumentation jedes Sturzes mit Umständen", "Wiederholte Stürze → Ursachen analysieren"]
          ] } },
          { h: "Maßnahmen" },
          { liste: [
            "Umgebung anpassen: Stolperfallen entfernen, Nachtlicht, Bett in niedrigste Position, Bremsen feststellen, Klingel in Reichweite",
            "Feste, geschlossene Schuhe mit rutschfester Sohle; keine Pantoffeln",
            "Hilfsmittel prüfen und anleiten: Rollator, Gehstock, Brille, Hörgerät",
            "Kraft- und Balancetraining in Zusammenarbeit mit der Physiotherapie",
            "Langsames Aufstehen (erst sitzen, dann stehen) bei orthostatischer Hypotonie",
            "Regelmäßige Toilettengänge anbieten, Toilettenstuhl in Bettnähe",
            "Hüftprotektoren bei hohem Risiko",
            "Medikamente ärztlich überprüfen lassen",
            "Information und Beratung der Betroffenen und Angehörigen"
          ] },
          { warn: "Freiheitsentziehende Maßnahmen (Bettgitter, Gurte) verhindern Stürze nicht zuverlässig und erhöhen die Verletzungsgefahr. Sie benötigen Einwilligung oder richterliche Genehmigung." },
          { h: "Nach einem Sturz" },
          { liste: ["Ruhe bewahren, Person nicht sofort hochziehen", "Bewusstsein, Vitalzeichen und Verletzungen prüfen (Schmerz, Fehlstellung, Kopfverletzung)", "Ärztin/Arzt informieren", "Sturzereignisprotokoll ausfüllen, Ursachen analysieren, Maßnahmen anpassen"] }
        ]
      },
      {
        id: "thrombose", titel: "Thromboseprophylaxe", kurz: "Virchow-Trias, MTS, Bewegung, Antikoagulation",
        abschnitte: [
          { h: "Definition" },
          { p: "Eine Thrombose ist ein Blutgerinnsel (Thrombus) in einem Blutgefäß, meist in den tiefen Bein- und Beckenvenen (tiefe Venenthrombose, TVT). Gefürchtete Komplikation: Lungenembolie." },
          { h: "Entstehung: Virchow-Trias" },
          { tabelle: { kopf: ["Faktor", "Beispiele"], zeilen: [
            ["Verlangsamte Blutströmung (Stase)", "Bettlägerigkeit, Lähmung, Gips, lange Flug-/Busreisen, Herzinsuffizienz, Varizen"],
            ["Gefäßwandschaden", "Operation, Trauma, Entzündung, Venenkatheter"],
            ["Erhöhte Gerinnbarkeit", "Exsikkose, Tumorerkrankung, Schwangerschaft, Östrogene (Pille), Gerinnungsstörungen, Rauchen"]
          ] } },
          { h: "Weitere Risikofaktoren" },
          { liste: ["Höheres Alter", "Adipositas", "Frühere Thrombose oder Lungenembolie", "Große Operationen, besonders Hüft- und Knie-OP", "Infektionen, Sepsis"] },
          { h: "Einschätzung und Anzeichen" },
          { p: "Das individuelle Thromboserisiko wird ärztlich eingeschätzt (z. B. nach der AWMF-S3-Leitlinie). Pflegende beobachten auf Warnzeichen:" },
          { liste: ["Schwellung und Umfangsdifferenz eines Beins", "Spannungsgefühl, Schmerz in Wade oder Leiste", "Überwärmung, glänzende, livide (bläuliche) Haut", "Hinweiszeichen: Wadenschmerz bei Dorsalflexion (Homans), Fußsohlenschmerz bei Druck (Payr) – nicht beweisend"] },
          { warn: "Plötzliche Atemnot, Brustschmerz, Tachykardie → Verdacht auf Lungenembolie: Notfall! Bettruhe, Oberkörper hoch, Arzt sofort informieren." },
          { h: "Maßnahmen" },
          { liste: [
            "Frühmobilisation – die wichtigste Maßnahme",
            "Bewegungsübungen im Bett: Fußkreisen, Fußwippen (Sprunggelenkspumpe), Zehen krallen, Beine anwinkeln",
            "Atemübungen: tiefe Atmung fördert den venösen Rückfluss",
            "Ausreichende Flüssigkeitszufuhr (wenn nicht eingeschränkt)",
            "Medizinische Thromboseprophylaxestrümpfe (MTS) nach Anordnung: korrekt abmessen, morgens im Liegen anziehen, faltenfrei",
            "Beine leicht hochlagern (ca. 20°) – nicht bei pAVK",
            "Beine nicht übereinanderschlagen, keine einschnürende Kleidung",
            "Medikamentöse Prophylaxe nach ärztlicher Anordnung (z. B. niedermolekulares Heparin s.c.)"
          ] },
          { warn: "Kontraindikationen für MTS u. a.: pAVK, dekompensierte Herzinsuffizienz, ausgeprägte Ödeme, Hautschäden oder Entzündungen am Bein, Neuropathie mit Sensibilitätsstörung." }
        ]
      },
      {
        id: "dekubitusp", titel: "Dekubitusprophylaxe", kurz: "Kurzüberblick – Vertiefung im Modul Dekubitus",
        abschnitte: [
          { p: "Ein Dekubitus ist eine lokal begrenzte Schädigung von Haut und/oder darunterliegendem Gewebe, meist über Knochenvorsprüngen, durch Druck oder Druck in Verbindung mit Scherkräften." },
          { h: "Kernpunkte" },
          { liste: [
            "Risiko bei Aufnahme und bei Veränderungen einschätzen (klinische Einschätzung, ergänzend Braden-Skala)",
            "Bewegung fördern, individueller Bewegungs- und Positionierungsplan",
            "Druckentlastung: 30°-Schräglage, 135°-Lage, Mikrolagerung, Fersen freilagern",
            "Druckverteilende Hilfsmittel (Weichlagerung, Wechseldruck) gezielt einsetzen",
            "Scherkräfte vermeiden: Kopfteil möglichst ≤ 30°, Transfer ohne Reiben",
            "Hautinspektion und Fingertest, Haut trocken und gepflegt halten",
            "Ernährung und Flüssigkeit sichern"
          ] },
          { merke: "Details zu Entstehung, Kategorien I–IV, Braden-Skala und Wundversorgung findest du im Bereich „Kontrakturen & Dekubitus“." },
          { link: { bereich: "kontrakturen", kapitel: "dekubitus" } }
        ]
      },
      {
        id: "pneumonie", titel: "Pneumonieprophylaxe", kurz: "Atemübungen, Lagerungen, Sekretmanagement",
        abschnitte: [
          { h: "Definition" },
          { p: "Maßnahmen zur Verhütung einer Lungenentzündung (Pneumonie). Ziele: gute Belüftung aller Lungenabschnitte, Sekret lösen und abhusten, Infektionen und Aspiration vermeiden." },
          { h: "Risikofaktoren" },
          { liste: [
            "Immobilität, Bettlägerigkeit",
            "Schonatmung (z. B. Schmerzen nach Bauch-/Thorax-OP)",
            "Aspirationsgefahr (Schluckstörung, Bewusstseinsstörung)",
            "Beatmung, Intubation, Sonden",
            "Vorerkrankungen: COPD, Herzinsuffizienz, Diabetes, Immunschwäche",
            "Höheres Alter, Rauchen, Exsikkose, mangelnde Mundhygiene"
          ] },
          { h: "Einschätzung" },
          { p: "Atemskala nach Bienstein (Punktwerte für Bewusstsein, Atemfrequenz, Mobilität, Sekret, Vorerkrankungen u. a.; je höher, desto größer das Risiko). Zusätzlich Beobachtung von Atmung, Sputum, Temperatur und Sauerstoffsättigung." },
          { h: "Maßnahmen" },
          { liste: [
            "Frühmobilisation und regelmäßiger Positionswechsel",
            "Atemübungen: tiefe Ein- und Ausatmung, Lippenbremse, Kontaktatmung",
            "Atemtrainer (z. B. SMI-Trainer) nach Anleitung",
            "Atemunterstützende Lagerungen: V-, A-, T- und I-Lagerung, Halbmondlage, Oberkörperhochlagerung",
            "Atemstimulierende Einreibung (ASE)",
            "Sekret lösen: ausreichend trinken, Inhalation nach Anordnung, Vibrationen",
            "Richtig abhusten lassen (Wunde mit Hand oder Kissen abstützen)",
            "Gute Schmerztherapie, damit tief geatmet werden kann",
            "Mundpflege und Aspirationsprophylaxe, Händehygiene"
          ] },
          { merke: "V-Lagerung: Belüftung der Lungenspitzen. A-Lagerung: Belüftung der Lungenbasis. T-Lagerung: Belüftung der seitlichen Lungenabschnitte. Lagerungen nur zeitlich begrenzt (ca. 10–30 min, je nach Toleranz)." }
        ]
      },
      {
        id: "aspiration", titel: "Aspirationsprophylaxe", kurz: "Schluckstörung, Positionierung, Notfall",
        abschnitte: [
          { h: "Definition" },
          { p: "Aspiration ist das Eindringen von Speichel, Nahrung, Flüssigkeit oder Mageninhalt in die Atemwege unterhalb der Stimmlippen. Folge kann eine Aspirationspneumonie oder Ersticken sein." },
          { h: "Risikofaktoren" },
          { liste: [
            "Dysphagie, z. B. nach Schlaganfall, bei Parkinson, Demenz, MS",
            "Bewusstseinsstörung, Sedierung",
            "Magensonde, Sondenernährung, Erbrechen, Reflux",
            "Flache Rückenlage beim Essen",
            "Zahnlosigkeit, schlecht sitzende Prothese, Mundtrockenheit"
          ] },
          { h: "Einschätzung" },
          { liste: [
            "Schluck-Screening z. B. Gugging Swallowing Screen (GUSS) oder Wasserschlucktest – nach Hausstandard, ggf. Logopädie",
            "Warnzeichen beim Essen: Husten, Räuspern, gurgelnde („feuchte“) Stimme, Atemnot, Zyanose, Speisereste im Mund",
            "Stille Aspiration (ohne Husten) ist möglich – besonders nach Schlaganfall"
          ] },
          { h: "Maßnahmen" },
          { liste: [
            "Aufrechte Sitzposition (ca. 90°) beim Essen und mindestens 30 Minuten danach",
            "Kopf leicht nach vorne geneigt (Kinn Richtung Brust) beim Schlucken",
            "Ruhige Atmosphäre, nicht ablenken, kein Sprechen beim Schlucken",
            "Kleine Bissen, Konsistenz anpassen (angedickte Flüssigkeiten, pürierte Kost nach Anordnung)",
            "Nach dem Essen Mundhöhle auf Reste kontrollieren, Mundpflege",
            "Bei Sondenernährung Oberkörper mindestens 30° hoch",
            "Absaugbereitschaft bei hohem Risiko"
          ] },
          { warn: "Bei akuter Aspiration: Oberkörper nach vorne beugen, zum Husten auffordern, ggf. absaugen, Notruf/Arzt. Bei Bolusverlegung mit Atemstillstand: Rückenschläge, Heimlich-Manöver nach Schulung." }
        ]
      },
      {
        id: "kontrakturp", titel: "Kontrakturenprophylaxe", kurz: "Kurzüberblick – Vertiefung im Modul Kontrakturen",
        abschnitte: [
          { p: "Kontrakturen sind Funktions- und Bewegungseinschränkungen von Gelenken durch Verkürzung von Weichteilen. Sie entwickeln sich bei fehlender Bewegung oft schon in wenigen Tagen bis Wochen." },
          { h: "Kernpunkte" },
          { liste: ["Mobilität erhalten und fördern (Expertenstandard „Erhaltung und Förderung der Mobilität“)", "Gelenke täglich aktiv oder passiv bewegen", "Lagerung in physiologischer Mittelstellung, häufige Positionswechsel", "Schmerzen behandeln, Schonhaltungen vermeiden", "Spitzfuß vorbeugen: Bettdecke anheben (Bettbogen)"] },
          { link: { bereich: "kontrakturen", kapitel: "kontrakturen" } }
        ]
      },
      {
        id: "intertrigo", titel: "Intertrigoprophylaxe", kurz: "Hautfalten trocken und belüftet halten",
        abschnitte: [
          { h: "Definition" },
          { p: "Intertrigo ist eine Hautentzündung in Hautfalten, wo Haut auf Haut liegt. Durch Wärme, Feuchtigkeit und Reibung weicht die Haut auf (Mazeration) und wird leicht von Pilzen (Candida) oder Bakterien besiedelt." },
          { h: "Typische Stellen" },
          { liste: ["Unter der Brust", "Bauchfalte", "Leisten und Genitalbereich", "Achseln", "Gesäßfalte", "Zwischen den Zehen"] },
          { h: "Risikofaktoren" },
          { liste: ["Adipositas", "Starkes Schwitzen, Fieber", "Inkontinenz", "Diabetes mellitus", "Immobilität, Bettlägerigkeit", "Synthetische, enge Kleidung"] },
          { h: "Einschätzung" },
          { p: "Tägliche Hautinspektion der Hautfalten auf Rötung, Nässen, Schuppung, Juckreiz, Brennen, Geruch." },
          { h: "Maßnahmen" },
          { liste: [
            "Hautfalten nach dem Waschen gründlich, aber sanft trocken tupfen (nicht reiben, nicht fönen)",
            "Haut-auf-Haut-Kontakt vermeiden: Baumwoll- oder Leinenstreifen oder spezielle Textilien einlegen",
            "pH-hautneutrale, milde Waschlotion",
            "Keine Puder (verklumpen) und keine fettenden Salben in den Falten",
            "Luftdurchlässige Baumwollkleidung, Inkontinenzmaterial rechtzeitig wechseln",
            "Bei Zeichen einer Pilzinfektion: Arzt informieren"
          ] }
        ]
      },
      {
        id: "soor", titel: "Soor- und Parotitisprophylaxe", kurz: "Mundpflege, Speichelfluss anregen",
        abschnitte: [
          { h: "Definition" },
          { p: "Soor ist eine Pilzinfektion der Mundschleimhaut, meist durch Candida albicans: weiße, abwischbare Beläge auf geröteter Schleimhaut. Parotitis ist eine Entzündung der Ohrspeicheldrüse, oft durch verminderten Speichelfluss, wenn nicht gekaut wird." },
          { h: "Risikofaktoren" },
          { liste: [
            "Nahrungskarenz, Sondenernährung, fehlendes Kauen",
            "Mundtrockenheit: Mundatmung, Sauerstofftherapie, Fieber, Exsikkose",
            "Medikamente: Antibiotika, Kortison (auch inhalativ), Zytostatika, Psychopharmaka",
            "Abwehrschwäche, Diabetes, hohes Alter",
            "Unzureichende Mund- und Prothesenpflege"
          ] },
          { h: "Einschätzung" },
          { liste: [
            "Tägliche Inspektion der Mundhöhle mit Lampe und Spatel (Zunge, Wangen, Gaumen, Lippen)",
            "Hinweise auf Soor: weiße, abwischbare Beläge, Brennen, Geschmacksstörung",
            "Hinweise auf Parotitis: schmerzhafte Schwellung vor dem Ohr, Schmerzen beim Kauen, Fieber",
            "Strukturierte Einschätzung z. B. mit dem Oral Assessment Guide (OAG)"
          ] },
          { h: "Maßnahmen" },
          { liste: [
            "Mundpflege mehrmals täglich, Zahnreinigung mindestens 2× täglich",
            "Zahnprothese nach jeder Mahlzeit reinigen, nachts trocken oder nach Herstellerangabe lagern",
            "Ausreichend Flüssigkeit, Mundschleimhaut feucht halten",
            "Kauen und Speichelfluss anregen: Brotrinde, Kaugummi, Lutschen (wenn kein Aspirationsrisiko)",
            "Lippenpflege gegen Rhagaden",
            "Nach Kortison-Inhalation Mund ausspülen oder etwas essen",
            "Mundpflegemittel nach Hausstandard; bei Soor ärztlich verordnete Antimykotika"
          ] },
          { merke: "Bei Patientinnen und Patienten ohne orale Nahrungsaufnahme ist die Mundpflege besonders wichtig – sie ist gleichzeitig Pneumonie- und Aspirationsprophylaxe." }
        ]
      },
      {
        id: "obstipation", titel: "Obstipationsprophylaxe", kurz: "Bristol-Skala, Ballaststoffe, Bewegung",
        abschnitte: [
          { h: "Definition" },
          { p: "Obstipation (Verstopfung) bedeutet erschwerte oder seltene Darmentleerung. Hinweise nach Rom-IV-Kriterien: weniger als 3 Stuhlgänge pro Woche, harter oder klumpiger Stuhl, starkes Pressen, Gefühl der unvollständigen Entleerung." },
          { h: "Risikofaktoren" },
          { liste: [
            "Bewegungsmangel, Bettlägerigkeit",
            "Ballaststoffarme Ernährung, zu wenig Flüssigkeit",
            "Medikamente: Opioide, Eisen, Anticholinergika, Diuretika, Antazida mit Aluminium",
            "Unterdrücken des Stuhldrangs, fehlende Intimsphäre, Benutzung des Steckbeckens",
            "Neurologische Erkrankungen (Parkinson, MS), Hypothyreose, Depression"
          ] },
          { h: "Einschätzung" },
          { tabelle: { kopf: ["Bristol-Typ", "Beschreibung", "Bedeutung"], zeilen: [
            ["1", "Einzelne, feste Kügelchen", "Starke Verstopfung"],
            ["2", "Wurstförmig, klumpig", "Leichte Verstopfung"],
            ["3", "Wurstförmig mit Rissen", "Normal"],
            ["4", "Wurstförmig, glatt und weich", "Normal (ideal)"],
            ["5", "Weiche Klümpchen mit glatten Rändern", "Neigung zu Durchfall"],
            ["6", "Breiig, ausgefranste Stücke", "Leichter Durchfall"],
            ["7", "Wässrig, ohne feste Bestandteile", "Durchfall"]
          ] } },
          { p: "Zusätzlich Stuhlprotokoll (Häufigkeit, Menge, Konsistenz) und Erfragen der Stuhlgewohnheiten." },
          { h: "Maßnahmen" },
          { liste: [
            "Bewegung und Mobilisation fördern",
            "Ausreichend trinken (ca. 1,5–2 l/Tag, wenn nicht eingeschränkt)",
            "Ballaststoffreiche Kost (ca. 30 g/Tag): Vollkorn, Gemüse, Obst, Leinsamen, Trockenpflaumen",
            "Feste Toilettenzeiten, z. B. nach dem Frühstück (gastrokolischer Reflex nutzen)",
            "Intimsphäre wahren, Toilettenstuhl statt Steckbecken",
            "Sitzhaltung: Füße auf einen Hocker stellen (Hockstellung erleichtert die Entleerung)",
            "Kolonmassage im Uhrzeigersinn",
            "Abführmittel nur nach ärztlicher Anordnung; bei Opioidtherapie prophylaktisch"
          ] }
        ]
      },
      {
        id: "deprivation", titel: "Deprivationsprophylaxe", kurz: "Reize, Orientierung, soziale Kontakte",
        abschnitte: [
          { h: "Definition" },
          { p: "Deprivation bezeichnet einen Mangel an Reizen, Zuwendung und sozialen Kontakten. Folgen: Rückzug, Antriebslosigkeit, Desorientierung, Halluzinationen, Hospitalismus, Abbau von Fähigkeiten." },
          { h: "Risikofaktoren" },
          { liste: [
            "Isolation (z. B. Einzelzimmer, Isolierung bei Infektion)",
            "Immobilität, Bettlägerigkeit",
            "Seh- und Hörbeeinträchtigungen",
            "Demenz, Depression, Sprachstörungen (Aphasie)",
            "Lange Klinik- oder Heimaufenthalte, Intensivstation",
            "Fehlende Angehörige, Verlust des Partners"
          ] },
          { h: "Einschätzung" },
          { liste: ["Beobachtung von Verhalten, Stimmung, Orientierung und Antrieb", "Biografie, Gewohnheiten und Interessen erfassen", "Seh- und Hörfähigkeit prüfen"] },
          { h: "Maßnahmen" },
          { liste: [
            "Kommunikation: ansprechen, Blickkontakt, Berührung (wenn erwünscht)",
            "Tagesstruktur und Rituale, Tageslicht, Tag-Nacht-Rhythmus",
            "Orientierungshilfen: Uhr, Kalender, Namensschilder, persönliche Gegenstände",
            "Hilfsmittel nutzen: Brille, Hörgerät, Kommunikationstafel",
            "Basale Stimulation, biografieorientierte Beschäftigung, Musik",
            "Kontakte zu Angehörigen und Mitbewohnern fördern, Ehrenamt einbinden",
            "Mobilisation, Aufenthalt außerhalb des Zimmers",
            "Bei Demenz: Validation, wertschätzende Kommunikation"
          ] }
        ]
      },
      {
        id: "zystitis", titel: "Zystitisprophylaxe", kurz: "Trinkmenge, Intimpflege, Katheterhygiene",
        abschnitte: [
          { h: "Definition" },
          { p: "Zystitis ist eine Entzündung der Harnblase, meist durch aufsteigende Bakterien (häufig E. coli). Harnwegsinfektionen gehören zu den häufigsten Krankenhausinfektionen – vor allem bei liegendem Blasenkatheter." },
          { h: "Risikofaktoren" },
          { liste: [
            "Weibliches Geschlecht (kurze Harnröhre)",
            "Transurethraler Blasenkatheter",
            "Geringe Trinkmenge, seltene Blasenentleerung, Restharn",
            "Inkontinenz, unsachgemäße Intimpflege",
            "Diabetes mellitus, Abwehrschwäche",
            "Postmenopause, Schwangerschaft, Prostatavergrößerung"
          ] },
          { h: "Einschätzung" },
          { liste: ["Symptome: Brennen beim Wasserlassen (Dysurie), häufiger Harndrang (Pollakisurie), Schmerzen im Unterbauch", "Urin trüb, übelriechend, evtl. blutig", "Fieber und Flankenschmerz → Hinweis auf aufsteigende Infektion (Pyelonephritis)", "Urinteststreifen (Leukozyten, Nitrit) nach Anordnung"] },
          { h: "Maßnahmen" },
          { liste: [
            "Ausreichend trinken (ca. 1,5–2 l/Tag), wenn nicht eingeschränkt",
            "Regelmäßige, vollständige Blasenentleerung, Harndrang nicht unterdrücken",
            "Intimpflege von vorne nach hinten (Richtung Anus)",
            "Inkontinenzmaterial rechtzeitig wechseln",
            "Blasenkatheter nur bei strenger Indikation, täglich Notwendigkeit prüfen",
            "Katheter aseptisch legen, geschlossenes Ableitungssystem nicht diskonnektieren",
            "Urinbeutel immer unter Blasenniveau, nicht auf dem Boden, Rückfluss vermeiden",
            "Wärme (keine Unterkühlung im Unterleib)"
          ] }
        ]
      },
      {
        id: "dehydratation", titel: "Dehydratationsprophylaxe", kurz: "Flüssigkeitsmangel (Exsikkose) früh erkennen und vermeiden",
        abschnitte: [
          { h: "Definition" },
          { p: "Bei einer Dehydratation verliert der Körper mehr Flüssigkeit, als er aufnimmt. Eine ausgeprägte Austrocknung heißt Exsikkose. Ältere Menschen sind besonders gefährdet, weil ihr Durstgefühl nachlässt und ihr Körper weniger Wasser speichert." },
          { h: "Risikofaktoren" },
          { liste: ["Vermindertes Durstgefühl, Demenz, Depression", "Schluckstörungen, Hilfebedarf beim Trinken", "Angst vor Toilettengängen oder Inkontinenz", "Fieber, Schwitzen, Hitze, Erbrechen, Durchfall", "Diuretika und Abführmittel"] },
          { h: "Einschätzung" },
          { liste: ["Trinkmenge und Trinkverhalten beobachten, ggf. Trinkprotokoll", "Trockene Schleimhäute, borkige Zunge, stehende Hautfalten (bei Älteren nur eingeschränkt aussagekräftig)", "Dunkler, wenig Urin, Obstipation", "Schwindel, niedriger Blutdruck, schneller Puls", "Neue Verwirrtheit, Müdigkeit, Sturz"] },
          { h: "Maßnahmen" },
          { liste: ["Orientierung: ca. 1,5–2 l/Tag oder ca. 30 ml/kg Körpergewicht, wenn keine ärztliche Beschränkung besteht", "Lieblingsgetränke erfragen, Getränke sichtbar und in Reichweite stellen", "Regelmäßig anbieten, feste Trinkzeiten und Rituale nutzen", "Trinkhilfen und bei Schluckstörung angedickte Getränke nach Anordnung", "Wasserreiche Speisen anbieten, z. B. Suppe, Melone, Joghurt", "Bei Hitze, Fieber, Erbrechen und Durchfall mehr anbieten und Arzt informieren"] },
          { warn: "Bei Herz- oder Niereninsuffizienz gilt die ärztlich festgelegte Trinkmenge. Plötzliche Verwirrtheit, Kreislaufprobleme oder sehr wenig Urin: Arzt informieren." },
          { link: { bereich: "ernaehrung", kapitel: "bilanz" } }
        ]
      },
      {
        id: "mangelernaehrung", titel: "Mangelernährungsprophylaxe", kurz: "Screening, Gewicht, Wunschkost und Hilfe beim Essen",
        abschnitte: [
          { h: "Definition" },
          { p: "Mangelernährung entsteht, wenn der Körper über längere Zeit zu wenig Energie, Eiweiß oder andere Nährstoffe erhält. Folgen sind Muskelabbau, Stürze, schlechte Wundheilung, Infektionen und Dekubitus. Auch übergewichtige Menschen können mangelernährt sein." },
          { merke: "Grundlage ist der DNQP-Expertenstandard „Ernährungsmanagement zur Sicherung und Förderung der oralen Ernährung in der Pflege“." },
          { h: "Risikofaktoren" },
          { liste: ["Kau- und Schluckprobleme, schlechte Mundgesundheit, schlecht sitzende Zahnprothese", "Appetitlosigkeit, Schmerzen, Übelkeit, Tumorerkrankung", "Demenz, Depression, Einsamkeit", "Bewegungseinschränkung, Hilfebedarf beim Essen", "Medikamente, die Geschmack oder Appetit verändern"] },
          { h: "Einschätzung" },
          { liste: ["Screening bei Aufnahme und regelmäßig danach, z. B. MNA oder NRS 2002", "Gewicht regelmäßig kontrollieren und dokumentieren", "Warnzeichen: ungewollter Gewichtsverlust über 5 % in 3 Monaten oder über 10 % in 6 Monaten", "Essverhalten, Vorlieben und Portionen beobachten, ggf. Ernährungsprotokoll"] },
          { h: "Maßnahmen" },
          { liste: ["Wunschkost und Gewohnheiten aus der Biografie berücksichtigen", "Ruhige, angenehme Atmosphäre, gemeinsam essen, genug Zeit einplanen", "Kleine Mahlzeiten und Zwischenmahlzeiten, Fingerfood bei Demenz", "Speisen mit Sahne, Butter oder Eiweiß anreichern", "Trinknahrung nach Anordnung, Ernährungsfachkraft einbeziehen", "Mundpflege, Zahnprothese prüfen, Schmerzen behandeln lassen", "Aufrechte Position, Hilfsmittel und Unterstützung beim Essen anbieten"] },
          { link: { bereich: "ernaehrung", kapitel: "dysphagie" } }
        ]
      }
    ]
  },

  // ===================================================================
  {
    id: "kontrakturen", titel: "Kontrakturen & Dekubitus", untertitel: "Vertiefende Lernmodule", icon: "gelenk",
    kapitel: [
      {
        id: "kontrakturen", titel: "Kontrakturen", kurz: "Entstehung, Arten, Risikogruppen, Übungen",
        abschnitte: [
          { h: "Definition" },
          { p: "Eine Kontraktur ist eine Funktions- und Bewegungseinschränkung eines Gelenks durch Verkürzung, Schrumpfung oder Verklebung von Weichteilen (Muskeln, Sehnen, Bänder, Gelenkkapsel, Haut). Sie kann bis zur vollständigen Gelenksteife (Ankylose) führen." },
          { h: "Entstehung" },
          { liste: [
            "Bewegungsmangel: Muskeln und Bindegewebe passen sich an die Ruheposition an und verkürzen sich – erste Veränderungen schon nach wenigen Tagen",
            "Schonhaltung bei Schmerzen (z. B. angewinkeltes Knie)",
            "Fehlpositionierung im Bett (z. B. dauerhafte Knierolle, Druck der Bettdecke auf die Füße)",
            "Lähmungen: schlaff oder spastisch (Ungleichgewicht der Muskelspannung)",
            "Narben, Verbrennungen, Entzündungen, Gelenkerkrankungen"
          ] },
          { merke: "Die häufigsten Kontrakturen sind Beugekontrakturen – denn die Beugemuskulatur ist meist kräftiger und Menschen nehmen bei Schwäche und Schmerz eine gebeugte Haltung ein." },
          { h: "Arten nach Gelenkstellung" },
          { tabelle: { kopf: ["Art", "Beschreibung", "Typisches Beispiel"], zeilen: [
            ["Beugekontraktur", "Gelenk kann nicht mehr gestreckt werden", "Hüfte, Knie, Ellenbogen, Finger"],
            ["Streckkontraktur", "Gelenk kann nicht mehr gebeugt werden", "Knie nach langer Ruhigstellung in Streckung"],
            ["Spitzfuß", "Fuß in Plantarflexion fixiert, Fußheben unmöglich", "Druck der Bettdecke, fehlende Bewegung, Lähmung des N. fibularis"],
            ["Adduktionskontraktur", "Glied kann nicht abgespreizt werden", "Schulter bei Halbseitenlähmung, Hüfte"],
            ["Abduktionskontraktur", "Glied kann nicht herangeführt werden", "Seltener"]
          ] } },
          { h: "Arten nach Ursache" },
          { tabelle: { kopf: ["Bezeichnung", "Ursache im Gewebe"], zeilen: [
            ["dermatogen", "Haut (z. B. Narben, Verbrennungen)"],
            ["desmogen", "Bänder, Faszien, Sehnen"],
            ["myogen", "Muskulatur (Verkürzung, Ischämie)"],
            ["neurogen", "Nervensystem (Lähmung, Spastik)"],
            ["arthrogen", "Gelenk selbst (Arthrose, Entzündung, Gelenkkapsel)"]
          ] } },
          { h: "Risikogruppen" },
          { liste: [
            "Bettlägerige und immobile Menschen",
            "Neurologische Erkrankungen: Schlaganfall, Parkinson, MS, Querschnittlähmung",
            "Menschen mit Demenz (Neigung zur Embryonalhaltung)",
            "Patientinnen und Patienten auf der Intensivstation, nach Operationen, mit Gips oder Schiene",
            "Menschen mit Schmerzen (Schonhaltung) oder Verbrennungen",
            "Hochbetagte, Menschen mit rheumatischen Erkrankungen"
          ] },
          { h: "Einschätzung" },
          { liste: ["Gelenkbeweglichkeit bei jeder Pflegehandlung beobachten", "Bewegungsausmaß nach der Neutral-Null-Methode (ärztlich/physiotherapeutisch)", "Schonhaltungen, Schmerzen und Muskeltonus erfassen", "Grundlage: Expertenstandard „Erhaltung und Förderung der Mobilität in der Pflege“ (DNQP)"] },
          { h: "Bewegungsübungen" },
          { tabelle: { kopf: ["Form", "Durchführung"], zeilen: [
            ["aktiv", "Die Person bewegt selbstständig – am wirksamsten, so viel wie möglich fördern"],
            ["aktiv-assistiv", "Die Person bewegt selbst, Pflegende unterstützen die Bewegung"],
            ["passiv", "Pflegende bewegen das Gelenk, wenn keine Eigenaktivität möglich ist"],
            ["resistiv", "Bewegung gegen Widerstand – Kräftigung (meist Physiotherapie)"]
          ] } },
          { liste: [
            "Jedes Gelenk in alle physiologischen Richtungen bewegen, mehrmals täglich",
            "Langsam, rhythmisch und schmerzfrei, nur bis zur Bewegungsgrenze",
            "Gelenk nah oberhalb und unterhalb umfassen, Extremität gut unterstützen",
            "Übungen in Alltagshandlungen einbauen (Waschen, Anziehen, Essen)",
            "Kinästhetik nutzen, Physio- und Ergotherapie einbeziehen"
          ] },
          { warn: "Keine passiven Übungen am betroffenen Bein bei akuter Thrombose (bis zur ärztlichen Freigabe), nicht bei frischen Frakturen oder akuten Entzündungen im Gelenk. Bei Spastik: keine ruckartigen Bewegungen." },
          { h: "Prophylaktische Maßnahmen" },
          { liste: [
            "Frühmobilisation, Bewegungsplan, häufige Positionswechsel",
            "Lagerung in physiologischer Mittelstellung bzw. Funktionsstellung",
            "Spitzfußprophylaxe: Bettbogen/Bettdeckenhebung, Füße nicht unter der Decke einklemmen; Fußstützen nur individuell (können bei Spastik Tonus erhöhen)",
            "Hand in Funktionsstellung (leicht gebeugte Finger, z. B. Rolle in der Hand) – bei Spastik nach Therapeutenempfehlung",
            "Knierolle nur kurzzeitig – sie fördert eine Beugekontraktur in Hüfte und Knie",
            "Schulter bei Hemiplegie: nicht am Arm ziehen, Arm unterstützt positionieren",
            "Schmerzmanagement, damit Bewegung möglich ist",
            "Anleitung von Betroffenen und Angehörigen"
          ] }
        ]
      },
      {
        id: "dekubitus", titel: "Dekubitus", kurz: "Druck × Zeit, Kategorien I–IV, Braden, Lagerung",
        abschnitte: [
          { h: "Definition (NPIAP/EPUAP)" },
          { p: "Ein Dekubitus ist eine lokal begrenzte Schädigung der Haut und/oder des darunterliegenden Gewebes, in der Regel über knöchernen Vorsprüngen, infolge von Druck oder von Druck in Kombination mit Scherkräften." },
          { h: "Entstehung: Druck × Zeit" },
          { liste: [
            "Druck auf das Gewebe drückt die Kapillaren zusammen (Kapillardruck ca. 25–32 mmHg)",
            "Liegt der Auflagedruck länger darüber, entsteht Sauerstoffmangel (Ischämie) → Stoffwechselprodukte sammeln sich an → Zelltod (Nekrose)",
            "Je höher der Druck, desto kürzer die Zeit bis zur Schädigung – hoher Druck kurz kann so schädlich sein wie geringer Druck lang",
            "Scherkräfte (z. B. Herunterrutschen im Bett) verziehen Gewebeschichten gegeneinander und reißen Gefäße ab",
            "Begünstigend: Feuchtigkeit (Inkontinenz, Schweiß), Mangelernährung, Exsikkose, Durchblutungsstörungen, Fieber, Sensibilitätsstörungen"
          ] },
          { merke: "Ein Dekubitus kann innen größer sein als außen sichtbar: Die tiefen Gewebeschichten über dem Knochen werden zuerst geschädigt („Eisberg-Phänomen“)." },
          { h: "Prädilektionsstellen" },
          { tabelle: { kopf: ["Position", "Gefährdete Stellen"], zeilen: [
            ["Rückenlage", "Kreuzbein (Os sacrum), Fersen, Hinterkopf, Schulterblätter, Dornfortsätze, Ellenbogen"],
            ["Seitenlage", "Großer Rollhügel (Trochanter major), Knöchel, Knieinnen-/-außenseite, Ohr, Schulter, Darmbeinkamm"],
            ["Sitzen", "Sitzbeinhöcker (Tuber ischiadicum), Steißbein, Fersen, Schulterblätter"],
            ["Medizinprodukte", "Unter Sonden, Sauerstoffbrillen, Kathetern, Masken, Schienen"]
          ] } },
          { anatomie: "regionen" },
          { h: "Kategorien nach NPIAP/EPUAP" },
          { tabelle: { kopf: ["Kategorie", "Merkmale"], zeilen: [
            ["I – nicht wegdrückbare Rötung", "Intakte Haut mit Rötung, die beim Fingerdruck nicht abblasst; evtl. Schmerz, Verhärtung, Überwärmung"],
            ["II – Teilverlust der Haut", "Flache, offene Wunde mit rosa Wundbett ohne Beläge oder intakte/rupturierte Blase"],
            ["III – Verlust der Haut", "Subkutanes Fett sichtbar, Knochen/Sehne/Muskel nicht sichtbar; Beläge, Unterminierungen möglich"],
            ["IV – vollständiger Gewebeverlust", "Knochen, Sehne oder Muskel freiliegend oder tastbar; oft Beläge, Taschen, Unterminierungen"],
            ["Keiner Kategorie zuordenbar", "Tiefe unbekannt, da Wundgrund von Belag oder Schorf bedeckt"],
            ["Vermutete tiefe Gewebeschädigung", "Intakte oder verletzte Haut mit lila oder kastanienbraun verfärbtem Bereich, blutgefüllte Blase"]
          ] } },
          { p: "Fingertest: Mit dem Finger kurz auf die Rötung drücken. Blasst sie ab (wegdrückbar), liegt noch kein Dekubitus vor. Bleibt sie rot, entspricht dies Kategorie I." },
          { h: "Risikoeinschätzung" },
          { p: "Nach dem Expertenstandard „Dekubitusprophylaxe in der Pflege“ (DNQP) schätzt die Pflegefachperson das Risiko zu Beginn der Versorgung und bei Veränderungen ein – zuerst mit einem Screening, bei Hinweisen mit einer differenzierten klinischen Einschätzung. Skalen können ergänzend genutzt werden, ersetzen aber nicht den fachlichen Blick." },
          { h: "Braden-Skala" },
          { tabelle: { kopf: ["Kriterium", "Punkte", "Erläuterung"], zeilen: [
            ["Sensorisches Empfindungsvermögen", "1–4", "Fähigkeit, Druck und Schmerz zu spüren und zu äußern"],
            ["Feuchtigkeit", "1–4", "Wie oft ist die Haut feucht (Schweiß, Urin)?"],
            ["Aktivität", "1–4", "Bettlägerig, sitzt, geht wenig, geht regelmäßig"],
            ["Mobilität", "1–4", "Fähigkeit, die Position selbst zu verändern"],
            ["Ernährung", "1–4", "Gewohnte Nahrungsaufnahme"],
            ["Reibung und Scherkräfte", "1–3", "Rutscht im Bett/Stuhl herunter?"]
          ] } },
          { tabelle: { kopf: ["Gesamtpunkte (6–23)", "Risiko"], zeilen: [
            ["19–23", "Kein erhöhtes Risiko"],
            ["15–18", "Geringes Risiko (bei Hochbetagten bereits beachten)"],
            ["13–14", "Mittleres Risiko"],
            ["10–12", "Hohes Risiko"],
            ["≤ 9", "Sehr hohes Risiko"]
          ] } },
          { merke: "Bei der Braden-Skala gilt: Je niedriger die Punktzahl, desto höher das Risiko. Andere Skalen: Norton-Skala, Waterlow-Skala." },
          { h: "Druckentlastung und Bewegungsförderung" },
          { liste: [
            "Eigenbewegung fördern und erhalten – wichtigste Maßnahme",
            "Individueller Bewegungs- und Positionierungsplan: Intervalle richten sich nach Hautzustand und Risiko, nicht nach starrem 2-Stunden-Takt",
            "30°-Schräglagerung: Person um ca. 30° zur Seite gedreht, Rücken mit Kissen gestützt – Kreuzbein und Trochanter sind frei",
            "135°-Lagerung: angedeutete Bauchlage, entlastet Kreuzbein und Rücken",
            "Mikrolagerung: kleine Positionsveränderungen (z. B. Kissen unter Schulter oder Becken leicht verschieben) – wichtig bei Schmerzen, in der Palliativpflege und nachts",
            "Fersen freilagern: Unterschenkel auf ein Kissen legen, sodass die Ferse frei schwebt",
            "Sitzen zeitlich begrenzen, Gewicht regelmäßig verlagern",
            "Druckverteilende Hilfsmittel nach Risiko: Weichlagerungsmatratze, Wechseldrucksystem"
          ] },
          { h: "Scherkräfte und Haut" },
          { liste: [
            "Kopfteil möglichst nicht über 30° (Herunterrutschen), Knie leicht unterstützen",
            "Transfer und Positionswechsel ohne Ziehen: anheben, Gleitmatte, Kinästhetik",
            "Haut täglich inspizieren, trocken halten, pH-neutrale Pflege",
            "Inkontinenzversorgung, keine luftundurchlässigen Unterlagen in mehreren Lagen",
            "Ausreichend Eiweiß, Energie und Flüssigkeit"
          ] },
          { warn: "Obsolet: Massage geröteter Stellen, Eis und Fönen, Fell, Watteverbände, Sitzringe („Ringe“ erhöhen den Druck am Ringrand)." },
          { h: "Grundsätze der Wundversorgung" },
          { liste: [
            "Druckentlastung der Wunde ist die Grundvoraussetzung für jede Heilung",
            "Ärztliche Diagnose und Therapieplan; Expertenstandard „Pflege von Menschen mit chronischen Wunden“",
            "Wunddokumentation: Lokalisation, Kategorie, Größe (Länge × Breite × Tiefe), Wundgrund, Exsudat, Wundrand, Geruch, Schmerz, Fotodokumentation",
            "Aseptisches Vorgehen (Non-Touch-Technik), hygienischer Verbandwechsel",
            "Wundreinigung/Spülung nach Anordnung (z. B. sterile Spüllösung, Antiseptikum)",
            "Phasengerechte, feuchte Wundtherapie mit modernen Wundauflagen",
            "Débridement von Nekrosen und Belägen durch Ärztin/Arzt oder Wundexpertin",
            "Schmerzmanagement vor dem Verbandwechsel, Ernährung optimieren",
            "Keine Farbstoffe, keine austrocknenden Mittel"
          ] },
          { tabelle: { kopf: ["Wundheilungsphase", "Kennzeichen"], zeilen: [
            ["Exsudationsphase (Reinigung)", "Entzündung, Exsudat, Abbau von Gewebetrümmern (ca. 1.–4. Tag)"],
            ["Granulationsphase", "Neues, rotes, gekörntes Gewebe füllt die Wunde"],
            ["Epithelisierungsphase", "Wundverschluss vom Rand her, Narbenbildung"]
          ] } }
        ]
      }
    ]
  },

  // ===================================================================
  {
    id: "vitalzeichen", titel: "Vitalzeichen", untertitel: "Messung, Normwerte, Abweichungen, Maßnahmen", icon: "puls",
    kapitel: [
      {
        id: "puls", titel: "Puls", kurz: "Messorte, Normwerte, Qualitäten",
        abschnitte: [
          { h: "Messung" },
          { liste: [
            "Messorte: A. radialis (Standard), A. carotis (Notfall, nie beidseitig gleichzeitig), A. femoralis, A. brachialis, A. dorsalis pedis, A. tibialis posterior",
            "Mit Zeige-, Mittel- und Ringfinger tasten – nicht mit dem Daumen (Eigenpuls)",
            "15 s zählen × 4; bei Unregelmäßigkeit 60 s zählen",
            "In Ruhe messen, ca. 5 Minuten nach Belastung"
          ] },
          { anatomie: "gefaesse" },
          { h: "Normwerte (Ruhe)" },
          { tabelle: { kopf: ["Alter", "Schläge pro Minute"], zeilen: [
            ["Neugeborene", "ca. 120–160"],
            ["Säuglinge", "ca. 100–140"],
            ["Kleinkinder", "ca. 90–130"],
            ["Schulkinder", "ca. 75–115"],
            ["Erwachsene", "ca. 60–80 (bis 100 noch normal)"]
          ] } },
          { h: "Pulsqualitäten" },
          { tabelle: { kopf: ["Qualität", "Normal", "Abweichung"], zeilen: [
            ["Frequenz", "60–100/min", "Tachykardie > 100/min, Bradykardie < 60/min"],
            ["Rhythmus", "regelmäßig", "Arrhythmie, Extrasystolen, absolute Arrhythmie bei Vorhofflimmern"],
            ["Stärke/Füllung", "gut tastbar", "schwach, fadenförmig (Schock), hart/gespannt (Hypertonie)"]
          ] } },
          { p: "Pulsdefizit: Differenz zwischen Herzfrequenz (am Herzen auskultiert) und peripher getastetem Puls – typisch bei Vorhofflimmern. Zwei Pflegende messen gleichzeitig." },
          { h: "Maßnahmen bei Abweichungen" },
          { liste: ["Kontrollmessung, weitere Vitalzeichen erheben (RR, SpO₂, Atmung, Bewusstsein)", "Begleitsymptome erfragen: Schwindel, Brustschmerz, Atemnot", "Arzt informieren, ggf. EKG nach Anordnung", "Dokumentation in der Kurve"] }
        ]
      },
      {
        id: "blutdruck", titel: "Blutdruck", kurz: "Messung nach Riva-Rocci, Normwerte, Fehlerquellen",
        abschnitte: [
          { h: "Messung" },
          { liste: [
            "Indirekte Messung nach Riva-Rocci (RR) mit Manschette und Stethoskop über der A. brachialis",
            "Person sitzt oder liegt mindestens 3–5 Minuten ruhig, Arm auf Herzhöhe",
            "Manschette ca. 2–3 cm oberhalb der Ellenbeuge, passende Breite wählen",
            "Aufpumpen ca. 30 mmHg über das Verschwinden des Radialispulses, langsam ablassen (2–3 mmHg/s)",
            "Systolischer Wert: erstes hörbares Geräusch (Korotkow-Geräusch); diastolischer Wert: Verschwinden des Geräusches"
          ] },
          { warn: "Nicht messen am Arm mit Shunt (Dialyse), nach Brust-OP mit Lymphknotenentfernung, mit Infusion, Lähmung oder Verletzung." },
          { h: "Einteilung (Erwachsene, Praxismessung, ESH 2023)" },
          { tabelle: { kopf: ["Kategorie", "Systolisch (mmHg)", "Diastolisch (mmHg)"], zeilen: [
            ["Optimal", "< 120", "< 80"],
            ["Normal", "120–129", "80–84"],
            ["Hoch-normal", "130–139", "85–89"],
            ["Hypertonie Grad 1", "140–159", "90–99"],
            ["Hypertonie Grad 2", "160–179", "100–109"],
            ["Hypertonie Grad 3", "≥ 180", "≥ 110"]
          ] } },
          { p: "Die ESC-Leitlinie 2024 teilt anders ein: nicht erhöht unter 120/70, erhöht von 120/70 bis 139/89, Hypertonie ab 140/90 mmHg. Die Grenze von 140/90 mmHg gilt in beiden Einteilungen. Für Prüfungen zählt die Einteilung, die deine Schule verwendet." },
          { p: "Hypotonie: dauerhaft unter etwa 100/60 mmHg (die Angaben schwanken je nach Quelle). Ohne Beschwerden ist das meist keine Krankheit. Orthostatische Hypotonie: Abfall um ≥ 20 mmHg systolisch oder ≥ 10 mmHg diastolisch innerhalb von 3 Minuten nach dem Aufstehen (Schellong-Test)." },
          { h: "Fehlerquellen" },
          { tabelle: { kopf: ["Fehler", "Auswirkung"], zeilen: [
            ["Manschette zu schmal / zu locker", "Wert zu hoch"],
            ["Manschette zu breit", "Wert zu niedrig"],
            ["Arm unter Herzhöhe", "Wert zu hoch"],
            ["Zu schnelles Ablassen", "Systole zu niedrig, Diastole zu hoch abgelesen"],
            ["Messung nach Belastung, Sprechen, Kälte", "Wert zu hoch"]
          ] } },
          { h: "Maßnahmen" },
          { liste: ["Hypertensive Entgleisung (über 180/110 mmHg ohne akute Organzeichen): Oberkörper hoch, Ruhe, Kontrolle, Arzt informieren", "Hypertensiver Notfall (zusätzlich z. B. Brustschmerz, Atemnot, Sehstörung, Lähmung, Verwirrtheit): Notruf", "Hypotonie mit Schwindel: Hinsetzen oder hinlegen, Beine hochlagern, wenn keine Gegenanzeige besteht (z. B. Herzinsuffizienz), langsam mobilisieren", "Engmaschige Kontrollen und Dokumentation"] }
        ]
      },
      {
        id: "temperatur", titel: "Körpertemperatur", kurz: "Messorte, Fieber, Fieberphasen",
        abschnitte: [
          { h: "Messorte und Normwerte" },
          { tabelle: { kopf: ["Messort", "Normbereich (ca.)", "Hinweis"], zeilen: [
            ["Rektal", "36,5–37,5 °C", "Entspricht am ehesten der Kerntemperatur"],
            ["Ohr (tympanal)", "36,3–37,5 °C", "Ohr gerade ziehen, nicht bei Otitis/Cerumen"],
            ["Oral (sublingual)", "ca. 0,3–0,5 °C unter rektal", "Mund 5 min geschlossen, nicht nach Essen/Trinken"],
            ["Axillar", "ca. 0,5 °C unter rektal", "Ungenauer, Achsel trocken"],
            ["Stirn (Infrarot)", "orientierend", "Störanfällig"]
          ] } },
          { h: "Einteilung" },
          { tabelle: { kopf: ["Bezeichnung", "Temperatur (rektal)"], zeilen: [
            ["Untertemperatur", "< 36,0 °C"],
            ["Hypothermie", "< 35,0 °C"],
            ["Normal", "36,0–37,5 °C"],
            ["Subfebril (erhöht)", "37,5–38,0 °C"],
            ["Fieber", "> 38,0 °C"],
            ["Hohes Fieber", "> 39,0 °C"],
            ["Hyperpyrexie", "> 41,0 °C (lebensbedrohlich)"]
          ] } },
          { h: "Fieberphasen und Pflege" },
          { tabelle: { kopf: ["Phase", "Zeichen", "Pflege"], zeilen: [
            ["Fieberanstieg", "Frieren, Schüttelfrost, kalte, blasse Haut", "Wärmen (Decke, warme Getränke), keine kühlenden Maßnahmen"],
            ["Fieberhöhe", "Heiße, gerötete Haut, Durst, Tachykardie, evtl. Verwirrtheit", "Leichte Decke, Flüssigkeit, Mundpflege, kühlende Maßnahmen bei warmen Extremitäten"],
            ["Fieberabfall", "Schwitzen, Kreislaufbelastung (lytisch langsam, kritisch schnell)", "Wäsche wechseln, RR/Puls kontrollieren, Kollapsgefahr beachten"]
          ] } },
          { warn: "Wadenwickel nur bei warmen Händen und Füßen und nach Anordnung – nicht im Fieberanstieg, nicht bei Schüttelfrost oder Kreislaufinstabilität." },
          { merke: "Pro 1 °C Temperaturerhöhung steigt der Flüssigkeitsbedarf um ca. 500 ml/Tag und die Herzfrequenz um ca. 8–10 Schläge/min." }
        ]
      },
      {
        id: "atmung", titel: "Atmung", kurz: "Frequenz, Atemtypen, Sauerstoffsättigung",
        abschnitte: [
          { h: "Beobachtung" },
          { liste: ["Unauffällig zählen (Brustkorbbewegung), 30–60 s", "Frequenz, Tiefe, Rhythmus, Atemgeräusche, Geruch", "Hautfarbe (Zyanose), Einsatz der Atemhilfsmuskulatur, Körperhaltung", "Sauerstoffsättigung mit Pulsoxymeter"] },
          { anatomie: "atmung" },
          { h: "Normwerte" },
          { tabelle: { kopf: ["Alter", "Atemzüge pro Minute"], zeilen: [
            ["Neugeborene", "ca. 40–60"],
            ["Säuglinge", "ca. 30–40"],
            ["Kleinkinder", "ca. 20–30"],
            ["Schulkinder", "ca. 16–25"],
            ["Erwachsene", "ca. 12–18 (bis 20)"]
          ] } },
          { p: "Sauerstoffsättigung (SpO₂) normal ca. 95–99 %. Bei COPD-Patienten wird nach ärztlicher Vorgabe oft ein niedrigerer Zielbereich (ca. 88–92 %) angestrebt." },
          { h: "Pathologische Atemtypen" },
          { tabelle: { kopf: ["Atemtyp", "Kennzeichen", "Vorkommen"], zeilen: [
            ["Kussmaul-Atmung", "Tief, regelmäßig, beschleunigt", "Metabolische Azidose (diabetisches Koma)"],
            ["Cheyne-Stokes-Atmung", "An- und abschwellende Atemtiefe mit Pausen", "Schwere Herzinsuffizienz, Hirnschädigung, Sterbephase"],
            ["Biot-Atmung", "Gleich tiefe Atemzüge mit plötzlichen Pausen", "Hirnverletzungen, erhöhter Hirndruck"],
            ["Schnappatmung", "Einzelne, schnappende Atemzüge", "Kurz vor dem Atemstillstand – Reanimation!"],
            ["Orthopnoe", "Atemnot nur im Sitzen erträglich, Atemhilfsmuskulatur", "Linksherzinsuffizienz, Asthma, Lungenödem"]
          ] } },
          { h: "Maßnahmen bei Atemnot" },
          { liste: ["Oberkörper hoch, Arme abgestützt (Kutschersitz), Fenster öffnen", "Beengende Kleidung lockern, beruhigen", "Lippenbremse anleiten", "Sauerstoff nur nach Anordnung", "Vitalzeichen überwachen, Arzt informieren"] }
        ]
      },
      {
        id: "bewusstsein", titel: "Bewusstsein", kurz: "Bewusstseinsgrade, Glasgow Coma Scale, Pupillen",
        abschnitte: [
          { h: "Quantitative Bewusstseinsstörungen" },
          { tabelle: { kopf: ["Grad", "Beschreibung"], zeilen: [
            ["Wach (klar)", "Orientiert, reagiert adäquat"],
            ["Benommenheit", "Verlangsamt, leicht eingeschränkt"],
            ["Somnolenz", "Schläfrig, aber durch Ansprache weckbar"],
            ["Sopor", "Nur durch starke (Schmerz-)Reize kurz weckbar"],
            ["Koma", "Nicht weckbar, keine gezielte Reaktion auf Schmerz"]
          ] } },
          { h: "Glasgow Coma Scale (GCS)" },
          { tabelle: { kopf: ["Bereich", "Reaktion", "Punkte"], zeilen: [
            ["Augen öffnen", "spontan / auf Ansprache / auf Schmerz / keine", "4 / 3 / 2 / 1"],
            ["Verbale Antwort", "orientiert / verwirrt / einzelne Wörter / Laute / keine", "5 / 4 / 3 / 2 / 1"],
            ["Motorische Reaktion", "befolgt Aufforderung / gezielte Abwehr / ungezielte Abwehr / Beugesynergismen / Strecksynergismen / keine", "6 / 5 / 4 / 3 / 2 / 1"]
          ] } },
          { merke: "GCS 15 = voll wach, 3 = tiefstes Koma. Ab GCS ≤ 8 sind die Schutzreflexe gefährdet: Atemwege sichern (stabile Seitenlage, ärztlich ggf. Intubation)." },
          { h: "Qualitative Bewusstseinsstörungen" },
          { liste: ["Verwirrtheit, Desorientierung (zeitlich, örtlich, situativ, zur Person)", "Delir: akut, schwankender Verlauf, Aufmerksamkeitsstörung – häufig bei Älteren, nach OP, bei Infektionen", "Halluzinationen, Wahn"] },
          { h: "Pupillenkontrolle" },
          { liste: ["Größe, Form, Seitengleichheit, Lichtreaktion (direkt und konsensuell)", "Einseitig weite, lichtstarre Pupille: Hinweis auf Hirndruck – Notfall!", "Stecknadelkopfgroße Pupillen: z. B. bei Opiatvergiftung"] },
          { h: "Frühwarnsystem NEWS2" },
          { p: "Der National Early Warning Score bewertet Atemfrequenz, SpO₂, Sauerstoffgabe, systolischen Blutdruck, Puls, Bewusstsein und Temperatur mit 0–3 Punkten. Je höher die Summe, desto dringlicher die ärztliche Beurteilung." },
          { tabelle: { kopf: ["Parameter", "0 Punkte", "3 Punkte"], zeilen: [
            ["Atemfrequenz", "12–20/min", "≤ 8 oder ≥ 25/min"],
            ["SpO₂ (Skala 1)", "≥ 96 %", "≤ 91 %"],
            ["Systolischer Blutdruck", "111–219 mmHg", "≤ 90 oder ≥ 220 mmHg"],
            ["Puls", "51–90/min", "≤ 40 oder ≥ 131/min"],
            ["Bewusstsein", "wach (A)", "neu verwirrt, nur auf Ansprache/Schmerz, nicht reagierend"],
            ["Temperatur", "36,1–38,0 °C", "≤ 35,0 °C"]
          ] } },
          { merke: "NEWS2 ab 5 Punkten (oder 3 Punkte in einem Parameter): dringliche ärztliche Beurteilung. Ab 7 Punkten: Notfallteam." }
        ]
      }
    ]
  },

  // ===================================================================
  {
    id: "herzkreislauf", titel: "Herz-Kreislauf & Herz-Lunge", untertitel: "Anatomie, Physiologie, Krankheitsbilder", icon: "herz",
    kapitel: [
      {
        id: "anatomie_hk", titel: "Anatomie im Überblick", kurz: "Herz, Gefäße, Lunge – mit 3D-Modell",
        abschnitte: [
          { modell: "herz3d" },
          { h: "Herz" },
          { liste: [
            "Hohlmuskel, etwa faustgroß, ca. 300 g, im Mediastinum hinter dem Brustbein, Herzspitze links unten",
            "Wandschichten: Endokard – Myokard – Epikard, umgeben vom Perikard (Herzbeutel)",
            "Vier Räume: rechter und linker Vorhof, rechte und linke Kammer",
            "Segelklappen (Trikuspidal-, Mitralklappe) zwischen Vorhof und Kammer; Taschenklappen (Pulmonal-, Aortenklappe) am Ausgang",
            "Versorgung durch die Herzkranzgefäße (Koronararterien)"
          ] },
          { anatomie: "herz" },
          { h: "Kreisläufe" },
          { tabelle: { kopf: ["Kreislauf", "Weg des Blutes"], zeilen: [
            ["Lungenkreislauf (klein)", "Rechte Kammer → Truncus pulmonalis → Lunge (Gasaustausch) → Lungenvenen → linker Vorhof"],
            ["Körperkreislauf (groß)", "Linke Kammer → Aorta → Organe → Hohlvenen → rechter Vorhof"]
          ] } },
          { merke: "Arterien führen Blut vom Herzen weg, Venen zum Herzen hin – unabhängig vom Sauerstoffgehalt. Lungenarterien führen deshalb sauerstoffarmes Blut." },
          { anatomie: "gefaesse" },
          { h: "Lunge und Atemwege" },
          { liste: ["Obere Atemwege: Nase, Rachen, Kehlkopf", "Untere Atemwege: Luftröhre, Bronchien, Bronchiolen, Alveolen", "Rechte Lunge 3 Lappen, linke Lunge 2 Lappen", "Gasaustausch in ca. 300 Mio. Alveolen (Fläche ca. 100 m²)"] },
          { anatomie: "atmung" }
        ]
      },
      {
        id: "physiologie", medizin: true, titel: "Physiologie", kurz: "Herzzyklus, Herzzeitvolumen, Blutdruckregulation",
        abschnitte: [
          { h: "Herzzyklus" },
          { liste: ["Systole: Anspannungsphase (alle Klappen zu) und Austreibungsphase (Taschenklappen offen)", "Diastole: Entspannungsphase und Füllungsphase (Segelklappen offen)", "Erregung: Sinusknoten (60–80/min) → Vorhöfe → AV-Knoten → His-Bündel → Tawara-Schenkel → Purkinje-Fasern"] },
          { h: "Herzzeitvolumen" },
          { p: "Herzzeitvolumen (HZV) = Schlagvolumen × Herzfrequenz. In Ruhe ca. 70 ml × 70/min ≈ 5 l/min. Unter Belastung bis über 20 l/min." },
          { h: "Blutdruckregulation" },
          { tabelle: { kopf: ["Mechanismus", "Wirkung", "Zeit"], zeilen: [
            ["Barorezeptoren (Aortenbogen, Karotissinus)", "Melden Druckänderungen an das Kreislaufzentrum; Anpassung über Sympathikus/Parasympathikus", "Sekunden"],
            ["Renin-Angiotensin-Aldosteron-System (RAAS)", "Gefäßverengung, Natrium- und Wasserrückhalt → Blutdruck steigt", "Minuten bis Stunden"],
            ["ADH (Vasopressin)", "Wasserrückresorption in der Niere", "Stunden"],
            ["ANP aus den Vorhöfen", "Natrium- und Wasserausscheidung → Blutdruck sinkt", "Stunden"]
          ] } },
          { h: "Atmung und Gasaustausch" },
          { liste: ["Einatmung aktiv (Zwerchfell, äußere Zwischenrippenmuskeln), Ausatmung in Ruhe passiv", "Gasaustausch durch Diffusion an der alveolokapillären Membran", "Atemantrieb vor allem durch den CO₂-Gehalt des Blutes (Atemzentrum in der Medulla oblongata)", "Sauerstofftransport an Hämoglobin gebunden"] }
        ]
      },
      {
        id: "erkrankungen_herz", titel: "Herzerkrankungen", kurz: "Hypertonie, Hypotonie, KHK, Herzinfarkt, Herzinsuffizienz, Vorhofflimmern",
        abschnitte: [
          { h: "Arterielle Hypertonie" },
          { liste: ["Dauerhaft erhöhter Blutdruck ≥ 140/90 mmHg; meist primär (essenziell)", "Oft lange ohne Beschwerden; möglich sind Kopfschmerz, Schwindel, Nasenbluten, Sehstörungen", "Folgen: Herzinfarkt, Schlaganfall, Herzinsuffizienz, Niereninsuffizienz", "Pflege: regelmäßige RR-Kontrolle, Medikamenteneinnahme, Beratung zu salzarmer Kost, Bewegung, Gewichtsreduktion, Nikotinverzicht"] },
          { warn: "Über 180/110 mmHg mit Brustschmerz, Atemnot, Sehstörung, Lähmung oder Verwirrtheit: hypertensiver Notfall, sofort Notruf." },
          { h: "Arterielle Hypotonie" },
          { liste: ["Dauerhaft unter etwa 100/60 mmHg; ohne Beschwerden meist nicht behandlungsbedürftig", "Zeichen: Schwindel, Schwarzwerden vor den Augen, Müdigkeit, kalte Hände und Füße, Synkope", "Ursachen: Veranlagung, Flüssigkeitsmangel, Medikamente, Herzerkrankungen, Blutverlust", "Pflege: langsam aufstehen, vorher im Sitzen kurz warten, ausreichend trinken, Bewegung, Kompressionsstrümpfe nach Anordnung, Sturzgefahr beachten"] },
          { h: "Koronare Herzkrankheit (KHK) und Angina pectoris" },
          { liste: ["Verengung der Koronararterien durch Arteriosklerose → Sauerstoffmangel des Herzmuskels", "Angina pectoris: Brustenge, Druck, Ausstrahlung in linken Arm, Hals, Kiefer, Oberbauch – bessert sich in Ruhe oder durch Nitro", "Pflege: Belastung dosieren, Nitrospray nach Anordnung (vorher RR messen!), Risikofaktoren reduzieren"] },
          { h: "Herzinfarkt (Myokardinfarkt)" },
          { liste: ["Verschluss einer Koronararterie → Absterben von Herzmuskelgewebe", "Zeichen: anhaltender Brustschmerz > 20 min, nicht nitrosensibel, Vernichtungsgefühl, Kaltschweißigkeit, Übelkeit, Atemnot", "Bei Frauen, Älteren und Diabetikern oft untypisch (Oberbauchschmerz, Übelkeit, Müdigkeit)"] },
          { warn: "Verdacht auf Herzinfarkt: Notruf/Notfallteam, Oberkörper hoch, Ruhe, nicht allein lassen, Vitalzeichen überwachen, Sauerstoff nur bei SpO₂ < 90 % nach Anordnung, keine i.m.-Injektionen, Defibrillator bereithalten." },
          { h: "Herzinsuffizienz" },
          { tabelle: { kopf: ["Form", "Typische Zeichen"], zeilen: [
            ["Linksherzinsuffizienz", "Rückstau in die Lunge: Atemnot, Orthopnoe, nächtlicher Husten, Rasselgeräusche, Lungenödem"],
            ["Rechtsherzinsuffizienz", "Rückstau in den Körperkreislauf: Beinödeme, Halsvenenstauung, Gewichtszunahme, Nykturie, Stauungsleber"]
          ] } },
          { tabelle: { kopf: ["NYHA-Stadium", "Beschwerden"], zeilen: [
            ["I", "Keine Beschwerden bei Alltagsbelastung"],
            ["II", "Beschwerden bei stärkerer Belastung"],
            ["III", "Beschwerden bei leichter Belastung"],
            ["IV", "Beschwerden in Ruhe"]
          ] } },
          { liste: ["Pflege: Oberkörperhochlage, ggf. Herzbett (Beine tief)", "Tägliches Wiegen (morgens, nüchtern, gleiche Waage) – Zunahme > 1 kg/Tag oder > 2 kg in 3 Tagen melden", "Flüssigkeitsbilanz, Trinkmengenbeschränkung nach Anordnung", "Ödeme, Atmung und Belastbarkeit beobachten, Haut- und Dekubitusprophylaxe"] },
          { h: "Vorhofflimmern" },
          { liste: ["Häufigste Herzrhythmusstörung: unregelmäßiger, oft schneller Puls (absolute Arrhythmie), Pulsdefizit", "Gefahr: Thrombenbildung im linken Vorhof → Schlaganfall", "Therapie: Frequenz- oder Rhythmuskontrolle, Antikoagulation (Blutungszeichen beobachten)"] }
        ]
      },
      {
        id: "erkrankungen_gefaesse", titel: "Gefäß- und Lungenerkrankungen", kurz: "pAVK, TVT, Lungenembolie, COPD, Asthma, Pneumonie",
        abschnitte: [
          { h: "Periphere arterielle Verschlusskrankheit (pAVK)" },
          { tabelle: { kopf: ["Stadium (Fontaine)", "Beschwerden"], zeilen: [
            ["I", "Keine Beschwerden"],
            ["II", "Belastungsschmerz (Schaufensterkrankheit, Claudicatio intermittens); IIa > 200 m, IIb < 200 m Gehstrecke"],
            ["III", "Ruheschmerz"],
            ["IV", "Nekrose, Gangrän"]
          ] } },
          { liste: ["Pflege: Beine tief lagern, warm halten (keine Wärmflasche – Verbrennungsgefahr), Gehtraining nach Anordnung, sorgfältige Fußpflege", "Keine Kompressionsstrümpfe, keine Hochlagerung der Beine"] },
          { h: "Tiefe Venenthrombose und Lungenembolie" },
          { liste: ["TVT: Schwellung, Schmerz, Überwärmung, Blaufärbung eines Beins", "Lungenembolie: plötzliche Atemnot, Brustschmerz, Tachykardie, Angst, Husten, evtl. Schock – Notfall", "Pflege: Notruf, Oberkörper hoch, Ruhe, nicht aufstehen lassen, Vitalzeichen, Sauerstoff nach Anordnung"] },
          { link: { bereich: "prophylaxen", kapitel: "thrombose" } },
          { h: "COPD" },
          { liste: ["Chronisch obstruktive Lungenerkrankung, meist durch Rauchen", "Leitsymptome AHA: Auswurf, Husten, Atemnot", "Pflege: Lippenbremse, Kutschersitz, atemerleichternde Positionen, Inhalation anleiten, Rauchstopp", "Sauerstoff nur nach Anordnung und mit Zielsättigung (oft 88–92 %)"] },
          { h: "Asthma bronchiale" },
          { liste: ["Anfallsartige Atemnot durch Verengung der Bronchien (Entzündung, Schleim, Bronchospasmus)", "Zeichen: verlängerte Ausatmung, Giemen, Pfeifen", "Pflege im Anfall: beruhigen, aufrecht sitzen, Lippenbremse, Notfallspray nach Plan, Arzt"] },
          { h: "Pneumonie" },
          { liste: ["Entzündung des Lungengewebes, meist bakteriell", "Zeichen: Fieber, Husten, Auswurf, Atemnot, Brustschmerz beim Atmen, bei Älteren oft nur Verwirrtheit", "Pflege: Vitalzeichen, Atemunterstützung, Flüssigkeit, Sekretmanagement, Fiebermanagement"] },
          { link: { bereich: "prophylaxen", kapitel: "pneumonie" } }
        ]
      }
    ]
  },

  // ===================================================================
  {
    id: "ernaehrung", titel: "Ernährung", untertitel: "Nährstoffe, DGE, Alter, Trinken, Demenz, Dysphagie, PEG, Bilanz", icon: "apfel",
    kapitel: [
      {
        id: "naehrstoffe", titel: "Nährstofflehre", kurz: "Makro- und Mikronährstoffe, Energie- und Flüssigkeitsbedarf",
        abschnitte: [
          { h: "Makronährstoffe" },
          { tabelle: { kopf: ["Nährstoff", "Energie", "Aufgaben / Beispiele"], zeilen: [
            ["Kohlenhydrate", "ca. 4 kcal (17 kJ) pro g", "Hauptenergielieferant; Vollkorn, Kartoffeln, Obst; Ballaststoffe für die Verdauung"],
            ["Fette", "ca. 9 kcal (37 kJ) pro g", "Energiespeicher, Zellmembranen, Träger fettlöslicher Vitamine"],
            ["Eiweiß (Proteine)", "ca. 4 kcal (17 kJ) pro g", "Baustoff für Muskeln, Enzyme, Antikörper; Wundheilung"],
            ["Alkohol", "ca. 7 kcal pro g", "Kein Nährstoff, aber Energiequelle"]
          ] } },
          { h: "Mikronährstoffe" },
          { liste: ["Fettlösliche Vitamine: A, D, E, K (Merkhilfe „EDeKA“)", "Wasserlösliche Vitamine: B-Vitamine, C", "Mineralstoffe: z. B. Natrium, Kalium, Kalzium, Magnesium", "Spurenelemente: z. B. Eisen, Jod, Zink, Fluor"] },
          { h: "Bedarf (Erwachsene, Orientierung)" },
          { liste: ["Energie: Grundumsatz ca. 1 kcal pro kg Körpergewicht pro Stunde; Gesamtbedarf abhängig von Aktivität", "Eiweiß: ca. 0,8 g/kg/Tag, bei älteren und kranken Menschen ca. 1,0–1,2 g/kg/Tag", "Flüssigkeit: ca. 30–35 ml/kg/Tag; DGE: rund 1,5 l Getränke am Tag (ältere Menschen mindestens 1,3 l), außer bei ärztlicher Beschränkung"] },
          { h: "Ernährungszustand einschätzen" },
          { tabelle: { kopf: ["BMI (kg/m²)", "Einteilung (WHO)"], zeilen: [
            ["< 18,5", "Untergewicht"],
            ["18,5–24,9", "Normalgewicht"],
            ["25,0–29,9", "Präadipositas (Übergewicht)"],
            ["≥ 30", "Adipositas"]
          ] } },
          { p: "BMI = Körpergewicht (kg) ÷ Körpergröße² (m²). Bei älteren Menschen gilt ein BMI unter ca. 20 bereits als Hinweis auf eine Mangelernährung. Screening-Instrumente: MNA (Mini Nutritional Assessment), NRS 2002, MUST. Grundlage: Expertenstandard „Ernährungsmanagement zur Sicherung und Förderung der oralen Ernährung in der Pflege“." },
          { merke: "Warnzeichen für Mangelernährung: ungewollter Gewichtsverlust (> 5 % in 3 Monaten), Essensreste, Kau- und Schluckprobleme, Appetitlosigkeit, lockere Kleidung." },
          { h: "Nährstoffgruppen im Überblick" },
          { liste: [
            "Energieliefernd: Kohlenhydrate, Fette und Eiweiße",
            "Lebensnotwendig, aber ohne Energie: Vitamine und Mineralstoffe – der Körper kann sie nicht selbst bilden",
            "Sekundäre Pflanzenstoffe: nur in Pflanzen, z. B. Farb- und Duftstoffe; sie wirken als Antioxidantien, fangen freie Radikale ab und schützen Herz und Gefäße",
            "Ballaststoffe: kaum verdauliche Pflanzenfasern; sie sättigen lange, fördern die Verdauung und senken Cholesterin und Blutzucker",
            "Wasser: ohne Wasser kein Leben"
          ] },
          { h: "Kohlenhydrate" },
          { tabelle: { kopf: ["Gruppe", "Beispiele"], zeilen: [
            ["Einfachzucker (Monosaccharide)", "Glucose (Traubenzucker), Fructose (Fruchtzucker)"],
            ["Zweifachzucker (Disaccharide)", "Saccharose (Haushaltszucker), Maltose (Malzzucker), Lactose (Milchzucker)"],
            ["Mehrfachzucker (Polysaccharide)", "Stärke, einige Ballaststoffe wie Cellulose"]
          ] } },
          { p: "Lebensmittel mit Mehrfachzuckern und Ballaststoffen (Vollkorn, Kartoffeln, Hülsenfrüchte, Gemüse, Obst) sättigen lange und liefern zusätzlich Vitamine und Mineralstoffe. Viel Zucker liefert dagegen „leere“ Energie ohne Vitamine, fördert Heißhunger, Übergewicht und Karies." },
          { h: "Fette" },
          { liste: [
            "Gesättigte Fettsäuren: vor allem in tierischen Lebensmitteln wie Butter, Sahne, Wurst – sparsam verwenden",
            "Ungesättigte Fettsäuren: in Pflanzenölen, Nüssen und Fisch; besonders die mehrfach ungesättigten (z. B. Omega-3) sind wertvoll",
            "Trans-Fettsäuren: entstehen beim industriellen Härten von Fett, z. B. in Blätterteig, Frittiertem und Chips; ungünstig für das Cholesterin",
            "Viel Cholesterin (Innereien, Eigelb, fetter Käse) und gesättigte Fette fördern Arteriosklerose, Herzinfarkt und Schlaganfall"
          ] },
          { h: "Energiebedarf" },
          { p: "Der Gesamtbedarf setzt sich aus dem Ruheenergieverbrauch (abhängig von Alter, Geschlecht, Größe, Gewicht und Hormonen) und dem Verbrauch für Bewegung zusammen. Die körperliche Aktivität wird als PAL-Wert angegeben: von ca. 1,2 (bettlägerig) bis 2,4 (sehr schwere Arbeit). Taillenumfang: erhöhtes Risiko ab über 94 cm (Männer) bzw. über 80 cm (Frauen), deutlich erhöht ab über 102 cm bzw. über 88 cm." }
        ]
      },
      {
        id: "dge", titel: "Die DGE und ihre Empfehlungen", kurz: "Wer die DGE ist, Gründung, Aufgaben, Ernährungskreis",
        abschnitte: [
          { h: "Was ist die DGE?" },
          { p: "Die Deutsche Gesellschaft für Ernährung e. V. (DGE) ist die wissenschaftliche Fachgesellschaft für Ernährung in Deutschland. Sie ist ein eingetragener Verein mit Sitz in Bonn. Ihr wissenschaftliches Präsidium arbeitet unabhängig. Die DGE ist bundesweit und in regionalen Sektionen aktiv und vertritt Deutschland auch in Europa und international." },
          { h: "Gründung" },
          { p: "Die DGE wurde am 4. November 1953 in Bad Neuenahr gegründet. Dabei schlossen sich mehrere Vereinigungen zusammen, die sich schon vorher mit Ernährung und der Versorgung der Bevölkerung beschäftigt hatten. Nach den Hunger- und Mangeljahren von Krieg und Nachkriegszeit sollte es eine gemeinsame, wissenschaftliche Stelle geben. Sie sollte die Ernährungsforschung bündeln und daraus verlässliche Empfehlungen für die Gesundheit der Bevölkerung ableiten." },
          { merke: "Kurz gesagt: Die DGE wurde gegründet, damit Wissen aus der Ernährungsforschung neutral geprüft und verständlich an die Menschen weitergegeben wird." },
          { h: "Grundsätze" },
          { liste: ["Aussagen sind wissenschaftlich begründet", "Sie entstehen neutral, unabhängig und transparent", "Offener, ganzheitlicher und nachhaltiger Blick auf Ernährung", "Leitidee: Wissenschaft und Praxis verbinden"] },
          { h: "Ziele" },
          { p: "Auf Grundlage der Forschung erarbeitet die DGE die Ernährungsempfehlungen, die für Deutschland gelten. Diese gibt sie passend für die jeweilige Zielgruppe weiter. Ziel ist, die Gesundheit der Bevölkerung langfristig zu fördern und zu erhalten und dabei auf Nachhaltigkeit zu achten." },
          { h: "Aufgaben und Leistungen" },
          { liste: [
            "Wissenschaftliche Empfehlungen erarbeiten, z. B. Referenzwerte für die Nährstoffzufuhr, Leitlinien, Stellungnahmen und Inhalte für den Ernährungsbericht",
            "Ergebnisse bekannt machen: Broschüren, Internet, soziale Medien und Veranstaltungen",
            "Angebote für Ernährungsbildung und -beratung, z. B. Fachmedien, zertifizierte Präventionskurse und Ernährungssoftware",
            "Qualität sichern: DGE-Qualitätsstandards für die Gemeinschaftsverpflegung, z. B. in Senioreneinrichtungen und bei „Essen auf Rädern“, mit Zertifizierung („Fit im Alter“)",
            "Fortbildung für Multiplikatoren, z. B. Lehrgänge, Seminare und Lehrpläne",
            "Forschungsbedarf in der Ernährungswissenschaft erkennen und fördern"
          ] },
          { h: "Für wen arbeitet die DGE?" },
          { p: "Für Wissenschaft und Fachkräfte, für Multiplikatoren wie Pflegekräfte, Lehrkräfte und Ernährungsberatung, für Politik und Verwaltung, Verbände und Unternehmen, für die Gemeinschaftsverpflegung und für die Medien – und über die Medien für alle Verbraucherinnen und Verbraucher." },
          { h: "Der DGE-Ernährungskreis" },
          { liste: [
            "Teilt die Lebensmittel in 7 Gruppen ein: je größer das Segment, desto mehr davon",
            "In der Mitte stehen die Getränke als größte Gruppe",
            "Pflanzliche Lebensmittel machen mehr als ¾ aus: Gemüse und Obst, Hülsenfrüchte und Nüsse, Getreide und Kartoffeln, Öle",
            "Tierische Lebensmittel machen knapp ¼ aus: Milch und Milchprodukte sowie Fisch, Fleisch, Wurst und Eier"
          ] },
          { tabelle: { kopf: ["Gruppe", "Orientierung (DGE 2024)"], zeilen: [
            ["Getränke", "Rund 1,5 Liter am Tag, am besten Wasser oder ungesüßter Tee"],
            ["Gemüse und Obst", "Mindestens 5 Portionen am Tag: 3 Portionen Gemüse und 2 Portionen Obst (1 Portion ≈ eine Handvoll)"],
            ["Hülsenfrüchte und Nüsse", "Hülsenfrüchte mindestens 1× pro Woche, täglich eine kleine Handvoll Nüsse"],
            ["Getreide und Kartoffeln", "Täglich, am besten Vollkorn („dunkel“ heißt nicht automatisch Vollkorn)"],
            ["Öle und Fette", "Pflanzliche Öle bevorzugen, z. B. Rapsöl; versteckte Fette in Wurst, Gebäck und Fertiggerichten meiden"],
            ["Milch und Milchprodukte", "Jeden Tag, etwa 2 Portionen"],
            ["Fisch, Fleisch, Wurst, Eier", "Fisch 1–2× pro Woche (davon 1× fetter Seefisch); Fleisch und Wurst höchstens 300 g pro Woche"]
          ] } },
          { h: "Die DGE-Empfehlungen „Gut essen und trinken“ (2024)" },
          { liste: ["Am besten Wasser trinken", "Obst und Gemüse – viel und bunt", "Hülsenfrüchte und Nüsse regelmäßig essen", "Vollkorn ist die beste Wahl", "Pflanzliche Öle bevorzugen", "Milch und Milchprodukte jeden Tag", "Fisch jede Woche", "Fleisch und Wurst – weniger ist mehr", "Süßes, Salziges und Fettiges – besser stehen lassen", "Mahlzeiten genießen", "In Bewegung bleiben und auf das Gewicht achten"] },
          { merke: "Grundidee: mehr pflanzliche und weniger tierische Lebensmittel. Das schützt die Gesundheit und schont Umwelt und Klima." },
          { h: "Tipps für ältere Menschen" },
          { liste: [
            "Nüsse bei Kauproblemen gemahlen oder als Mus anbieten",
            "Langsam an Vollkorn gewöhnen, z. B. Weiß- und Vollkornmehl mischen; fein gemahlenes Vollkornbrot ist weich",
            "Milch zählt als Lebensmittel, nicht als Getränk",
            "Joghurt, Kefir, Buttermilch und gereifter Käse sind oft gut verträglich",
            "Je stärker ein Lebensmittel verarbeitet ist, desto ungünstiger ist es meist für die Gesundheit"
          ] }
        ]
      },
      {
        id: "alter", titel: "Ernährung im Alter", kurz: "Veränderungen, Energie, kritische Nährstoffe, Mangelernährung",
        abschnitte: [
          { h: "Altersstufen" },
          { tabelle: { kopf: ["Alter", "Bezeichnung"], zeilen: [
            ["65–74 Jahre", "Junge, aktive Alte"],
            ["75–89 Jahre", "Hochbetagte"],
            ["90–99 Jahre", "Höchstbetagte"],
            ["ab 100 Jahre", "Langlebige"]
          ] } },
          { p: "Ältere Menschen sind sehr verschieden: von rüstigen Seniorinnen und Senioren, die sich selbst versorgen, bis zu kranken und pflegebedürftigen Menschen in Tagespflege oder Pflegeheim. Die Ernährung wird deshalb immer individuell geplant." },
          { h: "Was sich im Körper verändert" },
          { tabelle: { kopf: ["Bereich", "Veränderung", "Folge für die Ernährung"], zeilen: [
            ["Sinne", "Schlechter sehen, riechen und schmecken", "Essen wird schlechter erkannt und schmeckt fad, es wird weniger gegessen"],
            ["Mund", "Zahnverlust, schlecht sitzende Prothese, weniger Speichel", "Kau- und Schluckprobleme; Vollkorn, Obst und Gemüse werden gemieden"],
            ["Magen", "Dehnt sich weniger, leert sich langsamer, weniger Magensäure und Intrinsic Factor", "Früh und lange satt; Vitamin B12, Calcium und Eisen werden schlechter aufgenommen"],
            ["Bauchspeicheldrüse, Leber, Galle", "Weniger Verdauungsenzyme und Insulin", "Verdauungsbeschwerden, höheres Diabetesrisiko"],
            ["Darm", "Träger, eventuell weniger Enzyme", "Verstopfung; Milchzucker wird teils schlechter vertragen"],
            ["Nieren", "Können den Harn schlechter konzentrieren", "Mehr Wasserverlust – ausreichend trinken ist wichtig"],
            ["Muskeln und Knochen", "Muskel- und Knochenmasse nehmen ab, Fettanteil steigt", "Weniger Energiebedarf, mehr Sturz- und Bruchgefahr; Eiweiß, Calcium und Vitamin D sind wichtig"],
            ["Haut", "Bildet weniger Vitamin D", "Calcium wird schlechter aufgenommen, Osteoporosegefahr"],
            ["Hormone", "Mehr Sättigungshormone, weniger Durstgefühl", "Weniger Appetit, zu wenig Trinken"]
          ] } },
          { merke: "Kernsatz: Der Energiebedarf sinkt, der Nährstoffbedarf bleibt gleich oder steigt. Das Essen im Alter muss deshalb besonders nährstoffreich sein." },
          { h: "Energie und Eiweiß" },
          { liste: [
            "Energie: grobe Orientierung ca. 30 kcal pro kg Körpergewicht am Tag (bei Normalgewicht)",
            "Mehr Energie nötig z. B. bei großen Wunden, schweren Infekten, Krebs oder Demenz mit starkem Bewegungsdrang",
            "Eiweiß: ca. 1 g pro kg Körpergewicht am Tag (jüngere Erwachsene 0,8 g), bei Untergewicht, Entzündungen oder Wunden mehr",
            "Eiweiß auf alle Hauptmahlzeiten verteilen und mit Bewegung verbinden, damit Muskeln erhalten bleiben",
            "Bei BMI 25–30 keine Diät: Abnehmen kostet im Alter vor allem Muskeln"
          ] },
          { h: "Kritische Nährstoffe im Alter – und warum" },
          { tabelle: { kopf: ["Nährstoff", "Warum kritisch?", "Gute Quellen"], zeilen: [
            ["Vitamin D", "Die Haut bildet im Alter weniger, viele sind selten draußen. Mangel fördert Osteoporose, Stürze und Knochenbrüche", "Sonnenlicht; aus Lebensmitteln nur wenig (fetter Fisch, Eigelb). Oft Präparat mit 20 µg (800 IE) am Tag, ärztlich abklären"],
            ["Calcium", "Baustein von Knochen und Zähnen, wichtig für Nerven, Muskeln und Blutgerinnung. Mangel fördert Osteoporose", "Milch und Milchprodukte, grünes Gemüse (Brokkoli, Grünkohl), Sesam, Mineralwasser mit mind. 150 mg/l Calcium"],
            ["Vitamin B12", "Weniger Magensäure und Intrinsic Factor, dazu Medikamente: Es wird schlechter aufgenommen. Mangel führt zu Blutarmut, Nervenstörungen und Verwirrtheit", "Fleisch, Fisch, Eier, Milchprodukte; Wert regelmäßig ärztlich prüfen lassen"],
            ["Folat", "Wichtig für Zellteilung und Blutbildung; Mangel z. B. durch Medikamente oder Alkohol führt zu Blutarmut", "Grünes Gemüse, Salat, Hülsenfrüchte, Vollkorn, Orangen"],
            ["Eisen", "Für den Sauerstofftransport im Blut; Aufnahme bei Magen-Darm-Erkrankungen gestört", "Fleisch, Vollkorn, Haferflocken, Hülsenfrüchte; mit Vitamin C kombinieren"],
            ["Eiweiß (Protein)", "Erhält Muskeln, Abwehr und Wundheilung; zu wenig führt zu Sarkopenie und Gebrechlichkeit", "Milchprodukte, Fisch, Fleisch, Eier, Hülsenfrüchte"],
            ["Ballaststoffe", "Der Darm wird träger; Ballaststoffe beugen Verstopfung, Divertikeln und Darmkrebs vor", "Vollkorn, Gemüse, Obst, Hülsenfrüchte, Nüsse – nur mit genug Flüssigkeit"],
            ["Wasser", "Weniger Durst, weniger Körperwasser, Nieren konzentrieren schlechter", "Wasser, Tee, Saftschorle, wasserreiche Speisen"]
          ] } },
          { p: "Außerdem werden oft Vitamin E, Vitamin C und Magnesium als kritische Nährstoffe im Alter genannt." },
          { h: "Eiweiß clever kombinieren" },
          { p: "Die biologische Wertigkeit zeigt, wie gut der Körper Nahrungseiweiß in eigenes Eiweiß umbauen kann. Werden pflanzliche Eiweißquellen miteinander oder mit tierischen kombiniert, steigt sie." },
          { liste: ["Getreide + Hülsenfrüchte: Erbseneintopf mit Brot, Linsen mit Reis oder Spätzle", "Getreide + Milchprodukt: Vollkornbrot mit Käse, Milchreis, Nudelauflauf mit Käse", "Kartoffeln + Milchprodukt: Pellkartoffeln mit Quark, Kartoffelpüree", "Kartoffeln + Ei: Kartoffeln mit Spiegel- oder Rührei"] },
          { h: "Besondere Anforderungen" },
          { liste: [
            "Körperlich: nachlassende Fingerfertigkeit, Lähmungen nach Schlaganfall, Zittern bei Parkinson, Kau- und Schluckstörungen",
            "Krankheiten und Medikamente, die den Appetit mindern",
            "Geistig: Vergesslichkeit, Verwirrtheit, Demenz",
            "Seelisch und sozial: Einsamkeit, Depression, fehlende Lust am Essen"
          ] },
          { h: "Malnutrition, Frailty und Sarkopenie" },
          { tabelle: { kopf: ["Begriff", "Bedeutung"], zeilen: [
            ["Malnutrition", "Sammelbegriff für Fehl- und Mangelernährung durch zu wenig Energie und/oder Nährstoffe; führt zu messbaren Veränderungen am Körper und wird oft übersehen"],
            ["Quantitative Mangelernährung", "Über längere Zeit weniger Energie aufgenommen als gebraucht"],
            ["Qualitative Mangelernährung", "Bestimmte Nährstoffe fehlen, z. B. Eiweiß, Vitamine oder Mineralstoffe – auch bei Normal- oder Übergewicht möglich"],
            ["Frailty (Gebrechlichkeit)", "Die Reserven schwinden, Belastungen werden schlecht verkraftet. Diagnose bei mindestens 3 von 5 Zeichen: Gewichtsverlust (ca. 5 kg in 12 Monaten), Erschöpfung, schwache Handkraft, langsamer Gang, wenig Aktivität"],
            ["Sarkopenie", "Altersbedingter Verlust von Muskelmasse und -kraft; zwischen dem 30. und 80. Lebensjahr geht mehr als 30 % der Muskelmasse verloren, mit Folgen für Atmung, Beweglichkeit und Stabilität"]
          ] } },
          { h: "Folgen einer Mangelernährung" },
          { liste: ["Weniger Muskelkraft, mehr Stürze und Knochenbrüche", "Langsamere Genesung", "Schlechtere Wundheilung, höheres Dekubitusrisiko", "Mehr Infekte", "Neurologische und geistige Störungen"] },
          { h: "Warnzeichen im Pflegealltag" },
          { liste: ["Der Teller wird nicht mehr leer gegessen oder Mahlzeiten werden ganz abgelehnt", "Getränke werden abgelehnt, Haut und Schleimhäute sind trocken und rissig", "Kein Appetit, „es schmeckt nicht mehr“", "Ringe, Gürtel und Kleidung sitzen immer lockerer", "Beschwerden an den Zähnen oder beim Schlucken"] },
          { h: "Erkennen und behandeln" },
          { liste: [
            "Regelmäßig wiegen und aufmerksam beobachten",
            "Screening, z. B. MNA, MUST, SGA oder PEMU (Pflegerische Erfassung von Mangelernährung und deren Ursachen)",
            "Ess- und Trinkprotokolle führen, Essbiografie berücksichtigen, individuelle Ursachen suchen",
            "Bei Bedarf weitere Untersuchungen, z. B. BIA (Messung der Körperzusammensetzung) oder Laborwerte",
            "Im Team arbeiten: Pflege, Ernährungsfachkraft, Ärztin oder Arzt, Logopädie, Ergotherapie, Küche und Hauswirtschaft"
          ] },
          { tabelle: { kopf: ["Stufe", "Behandlung einer Mangelernährung"], zeilen: [
            ["1", "Normale Ernährung über den Mund, angepasst und angereichert"],
            ["2", "Zusätzlich Trinknahrung oder Nährstoffkonzentrate"],
            ["3", "Enterale Ernährung über eine Sonde"],
            ["4", "Parenterale Ernährung über die Vene"]
          ] } },
          { merke: "Früh erkannt, Gefahr gebannt: Mangelernährung ist behandelbar, wenn man genau hinschaut und sofort handelt." },
          { link: { bereich: "prophylaxen", kapitel: "mangelernaehrung" } }
        ]
      },
      {
        id: "trinken", titel: "Trinken im Alter", kurz: "Wie viel, warum, Mangel erkennen und vorbeugen",
        abschnitte: [
          { h: "Warum trinken?" },
          { p: "Der Körper eines Erwachsenen besteht zu 50–60 % aus Wasser, im Alter nur noch zu etwa 40–50 %. Ohne Wasser überlebt ein Mensch nur 2–4 Tage, ohne feste Nahrung 30 Tage und länger." },
          { liste: [
            "Wasser ist Bestandteil aller Zellen und Körperflüssigkeiten",
            "Es transportiert Nährstoffe zu den Organen und Abbauprodukte zu den Nieren",
            "Es ist an chemischen Reaktionen im Stoffwechsel beteiligt",
            "Es hält die Körpertemperatur konstant (Schwitzen kühlt)",
            "Es lässt den Speisebrei im Darm quellen und beugt Verstopfung vor"
          ] },
          { p: "Über Nieren, Darm, Haut und Atmung geht ständig Wasser verloren. Durst entsteht erst, wenn etwa 0,5 % des Körpergewichts als Wasser fehlen – bei 60 kg sind das rund 300 ml." },
          { h: "Wie viel trinken?" },
          { tabelle: { kopf: ["Gruppe", "Richtwert"], zeilen: [
            ["Erwachsene allgemein (DGE 2024)", "Rund 1,5 Liter Getränke am Tag"],
            ["Ältere Menschen (ab 65)", "Mindestens 1,3 Liter, besser 1,5 Liter über Getränke"],
            ["Gesamtwasser ab 65 Jahren", "Ca. 2,25 l am Tag: 1,31 l aus Getränken, 0,68 l aus fester Nahrung, 0,26 l Oxidationswasser (≈ 30 ml pro kg Körpergewicht)"]
          ] } },
          { tabelle: { kopf: ["Wasseraufnahme (Erwachsene)", "Wasserabgabe"], zeilen: [
            ["Getränke ca. 1,4 l", "Urin ca. 1,4 l"],
            ["Feste Nahrung ca. 0,9 l", "Stuhl ca. 0,2 l"],
            ["Oxidationswasser ca. 0,3 l", "Haut ca. 0,5 l und Lunge ca. 0,5 l"],
            ["Gesamt ca. 2,6 l", "Gesamt ca. 2,6 l"]
          ] } },
          { liste: [
            "Mehr trinken bei Hitze, Kälte, Heizungs- oder Klimaanlagenluft",
            "… bei körperlicher Aktivität, Unruhe oder Bewegungsdrang",
            "… bei Fieber, Erbrechen oder Durchfall",
            "… bei harntreibenden oder abführenden Medikamenten",
            "… bei viel Salz oder Eiweiß und wenn nur wenig gegessen wird"
          ] },
          { warn: "Bei Herzinsuffizienz und bestimmten Nieren- oder Lebererkrankungen kann die Trinkmenge ärztlich begrenzt sein. Dann wird bilanziert, und alle Flüssigkeiten zählen mit, auch Milch und Suppe." },
          { h: "Ursachen für Flüssigkeitsmangel im Alter" },
          { tabelle: { kopf: ["Zu wenig getrunken", "Zu viel verloren"], zeilen: [
            ["Weniger Durstgefühl", "Nieren konzentrieren schlechter, es wird mehr Urin ausgeschieden"],
            ["Angst vor dem Toilettengang, z. B. bei Inkontinenz oder Prostatabeschwerden", "Schwitzen bei Hitze, überheizten Räumen, Fieber oder Bewegungsdrang"],
            ["Schluckstörungen", "Durchfall und Erbrechen"],
            ["Vergesslichkeit, Demenz, fehlende Unterstützung", "Diuretika (harntreibend) und Abführmittel (Laxanzien)"],
            ["Erziehung: „Beim Essen wird nicht getrunken!“", "–"]
          ] } },
          { h: "Symptome eines Flüssigkeitsmangels" },
          { liste: [
            "Früh: trockene Haut und Schleimhäute, rissige Lippen, trockener Mund",
            "Müdigkeit, Schwäche, Konzentrationsprobleme, Kopfschmerzen, Schwindel",
            "Dunkler, konzentrierter Urin, wenig Urin, Verstopfung",
            "Bei älteren Menschen: plötzliche Verwirrtheit",
            "Später: Herzrasen, Temperaturanstieg, Muskelschwäche und -krämpfe, Harnwegsinfekte",
            "Schwer: Delir, Apathie, Bewusstseinstrübung, Thrombose, Kreislauf- und Nierenversagen – Lebensgefahr"
          ] },
          { tabelle: { kopf: ["Wasserverlust (älterer Mann, 75 kg)", "Zeichen"], zeilen: [
            ["ab 0,5 %", "Durst – wird im Alter oft nicht bemerkt"],
            ["bis 3 % (ca. 2,5 l)", "Gewichtsabnahme, weniger Urin und Speichel, trockener Mund"],
            ["ab 5 % (ca. 4 l)", "Schlaffe Haut, geschwollene Zunge, Schluckbeschwerden, schneller Puls, Temperaturanstieg, Bluteindickung"],
            ["ab 10 % (ca. 7 l)", "Starker körperlicher und geistiger Leistungsabfall, Verwirrtheit, Krämpfe, Kreislaufkollaps – ohne Flüssigkeit Lebensgefahr"]
          ] } },
          { merke: "Dehydratation bzw. Exsikkose entsteht im Alter schnell. Bei ersten Zeichen sofort handeln, bei schweren Zeichen sofort ärztliche Hilfe holen." },
          { h: "Prävention: Trinken fördern" },
          { liste: [
            "Zu jeder Mahlzeit ein Getränk anbieten, leere Gläser sofort nachfüllen",
            "Getränke sichtbar und gut erreichbar hinstellen, die Tagesmenge schon morgens bereitstellen",
            "Lieblingsgetränke und gewünschte Temperatur erfragen, Abwechslung anbieten",
            "Farbige Gläser oder farbige Getränke, damit das Wasser gesehen wird",
            "Wasser mit Obst, Kräutern oder einem Schuss Saft aromatisieren",
            "Trinkrituale, z. B. ein Glas Wasser nach dem Aufstehen oder der Nachmittagstee",
            "Trinksprüche und Trinklieder, gemeinsam trinken und zuprosten (Vorbild)",
            "Trinkstationen („Trink-Oasen“) auf dem Wohnbereich, Hygiene beachten",
            "Passende Trinkhilfen, z. B. Becher mit zwei Griffen, mit Nasenausschnitt oder kippsicher",
            "Bei Gefährdeten ein Trinkprotokoll führen, täglich auswerten und Maßnahmen im Team anpassen",
            "Ermutigen, aber niemals zum Trinken zwingen"
          ] },
          { h: "Geeignete Getränke" },
          { liste: [
            "Am besten Leitungs- oder Mineralwasser und ungesüßte Kräuter- oder Früchtetees",
            "Saftschorle aus 3 Teilen Wasser und 1 Teil Saft",
            "Kaffee sowie schwarzer und grüner Tee zählen mit, aber nur in Maßen (bis ca. 4 Tassen am Tag)",
            "Milch zählt nicht als Getränk, sondern als Lebensmittel",
            "Bei Bluthochdruck auf natriumarmes Wasser achten",
            "Zuckerhaltige und alkoholische Getränke sind nicht empfehlenswert; Alkohol kann mit Medikamenten wechselwirken"
          ] },
          { h: "Bei Mundtrockenheit und Schluckstörung" },
          { liste: [
            "Mundtrockenheit entsteht oft durch Medikamente oder zu wenig Trinken: häufig kleine Schlucke anbieten, Mund ausspülen, weiche, wasserreiche Speisen; Saures regt den Speichel an",
            "Bei Schluckstörung fließen dünne Getränke zu schnell: mit Dickungsmittel andicken, Dosierung im Team einheitlich festlegen",
            "Ruhe und Zeit beim Anreichen, aufrecht sitzen",
            "Temperatur heißer Getränke prüfen, besonders bei Schnabelbechern"
          ] },
          { link: { bereich: "prophylaxen", kapitel: "dehydratation" } }
        ]
      },
      {
        id: "demenz_ernaehrung", titel: "Ernährung bei Demenz", kurz: "Essverhalten verstehen, Fingerfood, Trinken, Essumfeld",
        abschnitte: [
          { h: "Demenz kurz erklärt" },
          { p: "Demenz ist ein Oberbegriff für Erkrankungen des Gehirns, bei denen geistige Fähigkeiten wie Gedächtnis, Orientierung, Sprache und Urteilsvermögen nachlassen. Gefühle und Sinneseindrücke bleiben lange erhalten. In Deutschland leben etwa 1,8 Millionen Menschen mit Demenz." },
          { tabelle: { kopf: ["Einteilung", "Merkmale"], zeilen: [
            ["Primäre Demenz (ca. 90 %)", "Erkrankung des Gehirns selbst, nicht heilbar; Alzheimer ca. 60–65 %, vaskuläre (gefäßbedingte) Demenz ca. 20–25 %"],
            ["Sekundäre Demenz (ca. 10 %)", "Folge anderer Ursachen, z. B. Vitaminmangel, Stoffwechselstörung, Alkohol oder Medikamente – oft behandelbar"]
          ] } },
          { tabelle: { kopf: ["Stadium", "Auswirkung auf Essen und Trinken"], zeilen: [
            ["Leicht", "Noch selbstständig, aber Einkauf, Planung und Vorrat werden schwierig; Essen und Trinken werden vergessen"],
            ["Mittelschwer", "Auf Hilfe angewiesen; Konzentration beim Essen fällt schwer, Besteck wird schwierig, Unruhe"],
            ["Schwer", "Kein selbstständiges Leben mehr; Schluckstörungen, starke Ablenkbarkeit, Mahlzeiten werden abgelehnt"]
          ] } },
          { h: "Wie Demenz das Essen und Trinken verändert" },
          { liste: [
            "Gedächtnis: Essen und Trinken werden vergessen – oder es wird immer weiter gegessen",
            "Hunger, Sättigung und Durst werden nicht mehr richtig gespürt",
            "Geschmack und Geruch verändern sich, oft Vorliebe für Süßes",
            "Besteck und Speisen werden nicht mehr erkannt (Agnosie), Handlungen gelingen nicht mehr (Apraxie)",
            "Sprachverlust (Aphasie) erschwert, Wünsche zu äußern; Rückzug und Depression",
            "Unruhe und Bewegungsdrang: Der Energiebedarf kann bis auf das Doppelte steigen",
            "Misstrauen, z. B. Angst vor Vergiftung; Überforderung, z. B. durch ein volles Tablett",
            "Schluckstörungen im späten Stadium"
          ] },
          { warn: "Teufelskreis: Demenz → weniger Essen und Trinken → Gewichtsverlust, Nährstoffmangel und Austrocknung → Muskelabbau (Sarkopenie), Gebrechlichkeit und noch schlechtere geistige Leistung. Ein ungewollter Gewichtsverlust kann schon Jahre vor der Diagnose ein Hinweis auf eine Demenz sein." },
          { h: "Kann Ernährung das Fortschreiten bremsen?" },
          { p: "Eine Diät, die Demenz heilt oder sicher aufhält, gibt es nicht. Die Ernährung kann aber verhindern, dass sich der Zustand zusätzlich verschlechtert, und sie erhält Kraft und Lebensqualität." },
          { liste: [
            "Genug trinken: Flüssigkeitsmangel löst akute Verwirrtheit (Delir) aus und verstärkt die Demenz",
            "Mangelernährung verhindern: Energie- und Nährstoffmangel schwächt Muskeln, Abwehr und geistige Leistung zusätzlich",
            "Bei Gewichtsverlust oder Bewegungsdrang energiereich anreichern, z. B. mit Rapsöl, Sahne, Butter, gemahlenen Nüssen, Eiweißpulver oder Trinknahrung",
            "Vitamin B12, Folat und Vitamin D ärztlich prüfen lassen: Ein Vitaminmangel kann eine Demenz verursachen oder verstärken und ist behandelbar",
            "Herz- und gefäßfreundlich essen (viel Gemüse, Obst, Vollkorn, Fisch, pflanzliche Öle, wenig Salz): Das senkt Risikofaktoren wie Bluthochdruck und Diabetes, die besonders bei der vaskulären Demenz wichtig sind",
            "Gemeinsame Mahlzeiten, Bewegung und Beschäftigung fördern Appetit, Teilhabe und geistige Aktivität"
          ] },
          { merke: "Für Menschen mit Demenz gelten die gleichen Ernährungsempfehlungen wie für andere ältere Menschen. Entscheidend sind Genuss, Selbstständigkeit und die individuelle Essbiografie." },
          { h: "Essbiografie" },
          { p: "Die Essbiografie hält Vorlieben, Abneigungen und Gewohnheiten rund ums Essen und Trinken fest. Sie gehört in die Pflegedokumentation, wird laufend aktualisiert und ist besonders wichtig, wenn sich die Person nicht mehr selbst äußern kann. Angehörige, Pflege, Küche und Hauswirtschaft tragen dazu bei." },
          { liste: [
            "Herkunft: Wo hat die Person gelebt, welche regionalen Gerichte kennt sie?",
            "Kindheit: Lieblingsessen, Trostessen, Hungerzeiten in Krieg oder Nachkriegszeit?",
            "Tagesablauf: Wie viele Mahlzeiten, wann warm gegessen, spätes Frühstück?",
            "Getränke: Was, wann und wie viel wurde getrunken?",
            "Beruf: Wann und was wurde bei der Arbeit gegessen?",
            "Allergien, Unverträglichkeiten und Abneigungen",
            "Religion und Kultur: Feste, Tischgebete, Speiseregeln",
            "Essumgebung: lieber allein oder in Gesellschaft, Ruhe oder Gespräche?"
          ] },
          { h: "Speisen anpassen" },
          { liste: [
            "Süße Speisen bevorzugt anbieten, auch herzhafte Gerichte leicht süßen",
            "Energiereich, wenn nötig angereichert",
            "Kräftige Farben, frische Kräuter statt viel Salz",
            "Mehrere kleine Mahlzeiten statt weniger großer",
            "Flexible Essenszeiten, auch abends oder nachts eine warme Mahlzeit möglich",
            "Bei ständigem Essverlangen energiearme Snacks wie Gemüsesticks oder Gurkenscheiben"
          ] },
          { h: "Fingerfood" },
          { p: "Fingerfood hilft, wieder selbstständig zu essen, wenn Besteck nicht mehr gelingt. Das Anfassen regt die Sinne an und stärkt das Selbstwertgefühl. Die Stücke sollen 1–2 Bissen groß, gut greifbar, nicht krümelig, nicht klebrig und leicht zu kauen und zu schlucken sein." },
          { tabelle: { kopf: ["Mahlzeit", "Beispiele"], zeilen: [
            ["Frühstück, Abend, zwischendurch", "Obst- und Gemüsestücke mit Quarkdip, Trockenobst, weiche Müsliriegel, zusammengeklappte kleine Brote, belegte Kräcker, Grießschnitten, Kuchenstücke, geviertelte Eier, Käsewürfel, gefüllte Mini-Windbeutel"],
            ["Mittag", "Gemüsestücke, Kartoffelecken oder Kroketten, Pizza- oder Quichestücke, Tortellini oder Penne, zarte Hähnchenstreifen, kleine Frikadellen, Fischstäbchen; Soße als Dip oder im Becher zum Trinken"]
          ] } },
          { liste: [
            "„Eat by walking“: Essen zum Mitnehmen für Menschen mit Bewegungsdrang",
            "Essstationen mit Fingerfood und Getränken entlang der Laufwege, Hygiene beachten",
            "Fingerfood auch einmal für alle anbieten, damit sich niemand ausgeschlossen fühlt"
          ] },
          { h: "Trinken bei Demenz" },
          { liste: [
            "Richtwert etwa 1,3 l am Tag, bei Unruhe, Hitze oder Krankheit mehr",
            "Getränke jederzeit sichtbar hinstellen und immer wieder aktiv anbieten",
            "Farbige Trinkgefäße, große weiche Henkel, kippsichere Becher oder Trinkhalme",
            "Getränke bei Bedarf süßen; warme Getränke werden oft lieber getrunken – Temperatur prüfen",
            "Trinkrituale, gemeinsam zuprosten, Trinklieder",
            "Bei Schluckstörung andicken; bei Gewichtsverlust energiereiche Getränke wie Milchmixgetränke oder Kakao"
          ] },
          { h: "Unterstützendes Essumfeld" },
          { liste: [
            "Ruhige, helle Umgebung, Radio und Fernseher aus; geschützte Essenszeiten ohne Visite oder Putzen",
            "Feste Plätze, feste Tischnachbarn und Bezugspersonen, Rituale wie Tischgebet oder Lied",
            "Kontrast: Das Essen hebt sich vom Teller ab, der Teller von der Tischdecke; keine gemusterten Teller",
            "Speisen einzeln nacheinander servieren, nur das nötige Besteck – Überforderung vermeiden",
            "Gemeinsam essen: Pflegende essen mit und sind Vorbild",
            "Einbeziehen: Tisch decken oder Kartoffeln schälen gibt Orientierung und das Gefühl, gebraucht zu werden",
            "So wenig Hilfe wie möglich, so viel wie nötig; Hilfen wie Anreichen oder Kleiderschutz vorher ankündigen",
            "Essverhalten nicht kommentieren, Essen mit den Fingern erlauben",
            "Ruhig, klar und wertschätzend sprechen (Validation), nicht widersprechen"
          ] },
          { link: { bereich: "ernaehrung", kapitel: "dysphagie" } }
        ]
      },
      {
        id: "dysphagie", titel: "Dysphagie", kurz: "Schluckstörung erkennen und Essen sicher anreichen",
        abschnitte: [
          { h: "Definition und Ursachen" },
          { p: "Dysphagie ist eine Störung des Schluckaktes. Häufige Ursachen: Schlaganfall, Parkinson, Demenz, MS, ALS, Tumoren im Kopf-Hals-Bereich, hohes Alter (Presbyphagie)." },
          { h: "Anzeichen" },
          { liste: ["Husten oder Räuspern beim oder nach dem Essen", "Gurgelnde, feuchte Stimme", "Speisereste in den Wangentaschen, Herauslaufen von Speichel", "Lange Essensdauer, Verweigerung von Essen", "Wiederkehrende Pneumonien, Fieber unklarer Ursache, Gewichtsverlust"] },
          { h: "Maßnahmen beim Essen" },
          { liste: [
            "Aufrecht sitzen (ca. 90°), Kopf leicht nach vorne geneigt",
            "Ruhige Umgebung, ausreichend Zeit, ganz wach sein",
            "Kleine Bissen und Schlucke, erst weiter nach vollständigem Schlucken",
            "Konsistenzen nach logopädischer Empfehlung anpassen (z. B. nach IDDSI-Stufen), Getränke andicken",
            "Mischkonsistenzen meiden (z. B. Suppe mit Einlage)",
            "Nach dem Essen 30 min aufrecht bleiben, Mundhöhle kontrollieren, Mundpflege",
            "Logopädie einbeziehen (Schluckdiagnostik, Schlucktraining)"
          ] },
          { h: "Kaustörung oder Schluckstörung?" },
          { tabelle: { kopf: ["", "Kaustörung", "Schluckstörung"], zeilen: [
            ["Ort", "Zähne und Mundraum", "Rachen und Speiseröhre"],
            ["Ursachen", "Zahnverlust, schlecht sitzende Prothese, Druckstellen, Pilzbefall, Karies, Parodontitis, Mundtrockenheit", "Folge von Krankheiten wie Schlaganfall, Parkinson oder Demenz"],
            ["Behandlung", "Meist leichter zu behandeln, z. B. Zahnarzt, Prothese anpassen", "Logopädie, Schlucktraining, Haltung und Konsistenz anpassen"]
          ] } },
          { h: "Folgen und indirekte Hinweise" },
          { liste: [
            "Weniger Lebensqualität, weil der Genuss am Essen verloren geht",
            "Angst vor Verschlucken: Essen und Trinken werden abgelehnt, es drohen Mangelernährung und Dehydratation",
            "Aspirationspneumonie, wenn Schutzreflexe wie Husten fehlen",
            "Indirekte Hinweise: unklares Fieber (stille Aspiration), Gewichtsverlust, Austrocknung"
          ] },
          { h: "Konsistenzstufen" },
          { tabelle: { kopf: ["Kostform", "Beschreibung"], zeilen: [
            ["Passierte Kost", "Durch ein Sieb gestrichen, ganz ohne Fasern"],
            ["Pürierte Kost", "Im Mixer püriert; Komponenten getrennt und ansprechend anrichten"],
            ["Teilpürierte Kost", "Weiche Bestandteile bleiben, faserige werden püriert"],
            ["Adaptierte Kost", "Weiche Kost, nicht püriert"],
            ["Angedickte Getränke", "Mit Dickungsmittel; Dosierung im Team einheitlich festlegen"]
          ] } },
          { merke: "Die Diagnose stellt die Ärztin oder der Arzt, meist zusammen mit der Logopädie. Für erste Schluckversuche eignen sich eher Götterspeise oder angedickte Getränke als eiweiß- und fettreiche Speisen wie Milchprodukte." },
          { link: { bereich: "prophylaxen", kapitel: "aspiration" } }
        ]
      },
      {
        id: "kostformen", titel: "Kostformen", kurz: "Vollkost bis Nahrungskarenz",
        abschnitte: [
          { tabelle: { kopf: ["Kostform", "Merkmale / Einsatz"], zeilen: [
            ["Vollkost", "Ausgewogene Ernährung ohne Einschränkungen"],
            ["Leichte Vollkost", "Ohne schwer verdauliche, blähende, scharf gebratene oder sehr fette Speisen; bei Magen-Darm-Beschwerden"],
            ["Diabeteskost", "Ausgewogene, ballaststoffreiche Kost; Kohlenhydrate abgestimmt auf die Therapie"],
            ["Natriumarme Kost", "Wenig Kochsalz; bei Hypertonie, Herzinsuffizienz, Ödemen"],
            ["Eiweißdefinierte Kost", "Eiweißmenge angepasst; z. B. bei Niereninsuffizienz"],
            ["Purinarme Kost", "Wenig Innereien, Fleisch, Alkohol; bei Gicht"],
            ["Glutenfreie Kost", "Ohne Weizen, Roggen, Gerste; bei Zöliakie"],
            ["Passierte/pürierte Kost", "Bei Kau- und Schluckstörungen; ansprechend anrichten"],
            ["Flüssige Kost / Trinknahrung", "Bei Schluckproblemen oder erhöhtem Bedarf, z. B. hochkalorische Trinknahrung"],
            ["Nahrungskarenz („nüchtern“)", "Vor OPs/Untersuchungen nach Anordnung; Mundpflege besonders wichtig"]
          ] } },
          { merke: "Kostformen werden ärztlich angeordnet. Wünsche, Gewohnheiten, Religion und Kultur (z. B. kein Schweinefleisch, vegetarisch) berücksichtigen." }
        ]
      },
      {
        id: "sonde", titel: "Sondenernährung (PEG)", kurz: "Sondenarten, Lagekontrolle, Applikation, Pflege",
        abschnitte: [
          { h: "Sondenarten" },
          { tabelle: { kopf: ["Sonde", "Lage", "Einsatz"], zeilen: [
            ["Nasogastrale Sonde", "Durch die Nase in den Magen", "Kurzfristig (wenige Wochen)"],
            ["PEG", "Perkutane endoskopische Gastrostomie: durch die Bauchwand in den Magen", "Langfristig (> 2–4 Wochen)"],
            ["PEJ / Jejunalsonde", "Im Jejunum", "Bei Magenentleerungsstörung, Aspirationsrisiko"]
          ] } },
          { h: "Vor der Nahrungsgabe" },
          { liste: ["Oberkörper mindestens 30° (besser 30–45°) hoch – während und ca. 30–60 min nach der Gabe", "Lage der Sonde kontrollieren: Markierung/Länge am Austritt, bei nasogastraler Sonde nach Hausstandard (z. B. pH-Messung des Aspirats)", "Sondennahrung auf Zimmertemperatur, Verfallsdatum, angebrochene Flaschen max. nach Herstellerangabe (meist 24 h im Kühlschrank)"] },
          { h: "Applikation" },
          { tabelle: { kopf: ["Methode", "Beschreibung"], zeilen: [
            ["Bolus", "Portionsweise mit Spritze (nur Magensonde), langsam"],
            ["Schwerkraft", "Über Überleitsystem mit Rollenklemme"],
            ["Ernährungspumpe", "Kontinuierlich, genau dosierbar – bei Jejunalsonden immer"]
          ] } },
          { liste: ["Vor und nach jeder Gabe sowie vor/nach Medikamenten mit ca. 20–50 ml Wasser spülen (Verstopfung vermeiden)", "Medikamente einzeln geben, nur wenn für die Sonde geeignet (keine Retardtabletten, keine magensaftresistenten Präparate mörsern) – mit der Apotheke klären", "Langsam beginnen, Verträglichkeit beobachten (Übelkeit, Völlegefühl, Durchfall)"] },
          { h: "PEG-Pflege" },
          { liste: [
            "Verbandwechsel steril: in der ersten Woche täglich, danach nach Abheilung ca. 2–3× pro Woche oder nach Hausstandard",
            "Einstichstelle beobachten: Rötung, Schwellung, Sekret, Schmerz, Geruch",
            "Halteplatte nicht zu fest – nach Abheilung (meist ab ca. Tag 7–10) Sonde nach Anordnung mobilisieren: lösen, vorschieben, drehen, zurückziehen (Buried-Bumper-Prophylaxe)",
            "Mundpflege mehrmals täglich trotz fehlender oraler Ernährung"
          ] },
          { warn: "Komplikationen: Aspiration, Durchfall (zu schnell, zu kalt, Keime), Verstopfung der Sonde, Dislokation, Infektion der Einstichstelle, Buried-Bumper-Syndrom (Halteplatte wächst in die Magenwand ein)." }
        ]
      },
      {
        id: "bilanz", titel: "Flüssigkeitsbilanzierung", kurz: "Ein- und Ausfuhr berechnen, Exsikkose erkennen",
        abschnitte: [
          { h: "Prinzip" },
          { p: "Bei der Flüssigkeitsbilanz wird über einen festgelegten Zeitraum (meist 24 h) die gesamte Einfuhr der gesamten Ausfuhr gegenübergestellt. Bilanz = Einfuhr − Ausfuhr." },
          { tabelle: { kopf: ["Einfuhr", "Ausfuhr"], zeilen: [
            ["Getränke", "Urin (ca. 1,5 l/Tag)"],
            ["Wasser in fester Nahrung (ca. 700–900 ml)", "Stuhl (ca. 100–200 ml)"],
            ["Oxidationswasser aus dem Stoffwechsel (ca. 300 ml)", "Perspiratio insensibilis über Haut und Lunge (ca. 800–900 ml)"],
            ["Infusionen, Sondenkost, Spülungen", "Erbrochenes, Drainagen, Magensonde, Wundsekret, Schweiß"]
          ] } },
          { merke: "Positive Bilanz: mehr Einfuhr als Ausfuhr (Gefahr: Ödeme, Herzbelastung). Negative Bilanz: mehr Ausfuhr als Einfuhr (Gefahr: Exsikkose). Pro 1 °C Fieber zusätzlich ca. 500 ml Flüssigkeitsverlust." },
          { h: "Durchführung" },
          { liste: ["Alle Ein- und Ausfuhren genau messen und sofort dokumentieren (Bilanzbogen)", "Fester Bilanzzeitraum, z. B. 6–6 Uhr", "Zusätzlich tägliches Wiegen", "Patientinnen, Patienten und Angehörige einbeziehen (Trinkprotokoll)"] },
          { h: "Zeichen einer Exsikkose (Austrocknung)" },
          { liste: ["Trockene Schleimhäute, borkige Zunge, Durst (bei Älteren oft vermindert!)", "Stehende Hautfalten (verminderter Hautturgor)", "Konzentrierter, dunkler Urin, wenig Urin", "Tachykardie, Hypotonie, Schwindel", "Verwirrtheit, Müdigkeit, Fieber (Durstfieber), Obstipation"] },
          { h: "Maßnahmen" },
          { liste: ["Trinkplan, Lieblingsgetränke, Getränke sichtbar und erreichbar", "Regelmäßig zum Trinken anregen, Trinkhilfen", "Wasserreiche Lebensmittel (Suppe, Obst, Joghurt)", "Bei Bedarf Infusion oder s.c.-Flüssigkeit nach Anordnung"] }
        ]
      }
    ]
  },

  // ===================================================================
  // STOMA & DAUERKATHETER (Ausscheidung)
  {
    id: "ausscheidung", titel: "Stoma & Dauerkatheter", untertitel: "Blasenkatheter und künstliche Darm- und Harnausgänge", icon: "tropfen",
    kapitel: [
      {
        id: "dk_grundlagen", titel: "Dauerkatheter (DK): Grundlagen", kurz: "Indikationen, Zugangswege, Material, Charrière",
        abschnitte: [
          { h: "Was ist ein Dauerkatheter?" },
          { p: "Ein Dauerkatheter (DK) ist ein Schlauch, der über längere Zeit in der Harnblase bleibt und den Urin in ein geschlossenes Ableitungssystem führt. Ein aufgefüllter Ballon (Blockung) hält ihn in der Blase. Im Gegensatz dazu wird ein Einmalkatheter sofort nach der Entleerung wieder entfernt." },
          { merke: "Jeder Katheter ist ein Infektionsrisiko. Deshalb gilt: nur bei klarer Indikation legen, täglich die Notwendigkeit prüfen und so früh wie möglich entfernen." },
          { h: "Mögliche Indikationen" },
          { liste: [
            "Akuter Harnverhalt oder Abflussbehinderung, z. B. bei Prostatavergrößerung",
            "Genaue Urinausscheidung bei schwerkranken Menschen (Bilanzierung)",
            "Operationen mit langer Dauer oder an den Harnwegen",
            "Schutz von Wunden im Intim- und Gesäßbereich bei Inkontinenz, z. B. Dekubitus Kategorie III/IV",
            "Palliativsituation, wenn jede Bewegung starke Schmerzen auslöst"
          ] },
          { warn: "Inkontinenz allein oder ein geringerer Pflegeaufwand sind keine Indikation für einen Dauerkatheter." },
          { h: "Zugangswege im Vergleich" },
          { tabelle: { kopf: ["", "Transurethral", "Suprapubisch"], zeilen: [
            ["Weg", "Durch die Harnröhre (Urethra)", "Durch die Bauchdecke oberhalb der Symphyse"],
            ["Anlage", "Pflegefachperson oder Arzt nach Anordnung", "Ärztlicher Eingriff (Punktion)"],
            ["Vorteile", "Einfach und schnell zu legen", "Harnröhre wird geschont, Spontanurin kann getestet werden"],
            ["Nachteile", "Harnröhrenverletzung, Strikturen, Keime steigen leicht auf", "Eingriffsrisiken wie Blutung oder Darmverletzung, Eintrittsstelle braucht Pflege"]
          ] } },
          { h: "Material und Größe" },
          { tabelle: { kopf: ["Merkmal", "Bedeutung"], zeilen: [
            ["Charrière (Ch)", "Außendurchmesser: 1 Ch = 1/3 mm. So dünn wie möglich, so dick wie nötig"],
            ["Übliche Größen", "Frauen meist 12–14 Ch, Männer meist 14–16 Ch"],
            ["Silikon", "Gut verträglich, für längere Liegedauer geeignet"],
            ["Latex", "Nur für kurze Liegedauer, Allergie erfragen"],
            ["Nélaton-Spitze", "Gerade, abgerundete Standardform"],
            ["Tiemann-Spitze", "Gebogen, für Männer mit erschwerter Passage, z. B. bei Prostatavergrößerung"]
          ] } },
          { anatomie: "harn" },
          { link: { bereich: "prophylaxen", kapitel: "zystitis" } }
        ]
      },
      {
        id: "dk_legen", titel: "DK legen", kurz: "Schritt für Schritt aseptisch, bei Frau und Mann",
        abschnitte: [
          { h: "Vorbereitung" },
          { liste: [
            "Ärztliche Anordnung und Indikation prüfen, Allergien erfragen (Latex, Antiseptikum, Gel)",
            "Person informieren, Einverständnis einholen, Intimsphäre schützen",
            "Rückenlage, Intimpflege durchführen, Händedesinfektion",
            "Steriles Set, passenden Katheter, geschlossenes Ableitungssystem, Gleitgel, Schleimhautantiseptikum und Blockflüssigkeit bereitlegen",
            "Am sichersten zu zweit: Eine Person arbeitet steril, die andere reicht an"
          ] },
          { merke: "Das Legen ist ein aseptischer Eingriff: sterile Handschuhe, steriles Material und die Einwirkzeit des Antiseptikums nach Herstellerangabe einhalten." },
          { h: "Ablauf" },
          { tabelle: { kopf: ["Schritt", "Frau", "Mann"], zeilen: [
            ["Desinfizieren", "Labien spreizen, von der Symphyse Richtung Anus wischen, jeden Tupfer nur einmal", "Vorhaut zurückschieben, Eichel kreisförmig von der Harnröhrenöffnung nach außen"],
            ["Gleitmittel", "Gel auf die Katheterspitze oder in die Harnröhre", "Steriles Gel in die Harnröhre, Einwirkzeit beachten"],
            ["Einführen", "Ohne Gewalt vorschieben, bis Urin fließt", "Penis nach oben strecken, bei Widerstand senken, vorschieben, bis Urin fließt"],
            ["Sicherheitsstrecke", "Noch einige Zentimeter weiter", "Bis nahe an die Katheter-Gabelung"],
            ["Abschluss", "Blocken, zurückziehen bis Widerstand, fixieren", "Blocken, zurückziehen, Vorhaut unbedingt wieder vorschieben"]
          ] } },
          { h: "Blocken" },
          { liste: [
            "Erst blocken, wenn Urin fließt: Dann liegt der Ballon in der Blase",
            "Steriles Aqua destillata oder 8–10-%-Glycerinlösung, Menge nach Herstellerangabe (meist 5–10 ml)",
            "Kein NaCl: Es kann auskristallisieren und den Blockkanal verstopfen",
            "Keine Luft: Der Ballon würde aufschwimmen und schnell an Volumen verlieren"
          ] },
          { warn: "Schmerzen beim Blocken sprechen für eine Fehllage in der Harnröhre: Sofort stoppen, Flüssigkeit zurückziehen, Arzt informieren." },
          { h: "Problemsituationen" },
          { liste: [
            "Katheter in der Vagina: Gilt als unsteril. Neuen sterilen Katheter verwenden",
            "Widerstand: Niemals mit Gewalt schieben, sonst droht ein falscher Weg (Via falsa)",
            "Blut in der Harnröhre oder starke Schmerzen: Abbrechen, Arzt informieren",
            "Große Urinmenge bei Harnverhalt: Kreislauf beobachten, eine Entlastungsblutung ist möglich. Anordnung und Hausstandard beachten"
          ] },
          { warn: "Bleibt die Vorhaut zurückgestreift, kann eine Paraphimose entstehen: Die Eichel schwillt schmerzhaft an und wird schlechter durchblutet. Das ist ein Notfall." },
          { h: "Dokumentation" },
          { p: "Datum und Uhrzeit, Indikation, Kathetertyp und -größe, Charge, Blockmenge und -flüssigkeit, Urinmenge und -aussehen, Besonderheiten, Handzeichen." }
        ]
      },
      {
        id: "dk_pflege", titel: "DK-Pflege und Komplikationen", kurz: "Infektionen vermeiden, Probleme erkennen, Katheter entfernen",
        abschnitte: [
          { h: "Pflege bei liegendem DK" },
          { liste: [
            "Vor und nach jedem Kontakt Hände desinfizieren, bei möglichem Urinkontakt Handschuhe tragen",
            "Täglich Intimpflege mit Wasser und milder Waschlotion, dabei den Katheter von der Harnröhre weg reinigen",
            "Keine Antiseptika für die routinemäßige Pflege des Harnröhrenausgangs",
            "Katheter zugfrei fixieren: Bei Frauen am Oberschenkel, bei Männern je nach Hausstandard",
            "Beutel immer unter Blasenniveau, Schlauch nicht abknicken, Beutel nicht auf den Boden legen",
            "Beutel rechtzeitig über den Ablasshahn leeren, vorher und nachher desinfizieren, eigener Behälter für jede Person",
            "Ausreichend trinken lassen, wenn keine Einschränkung besteht",
            "Täglich dokumentieren: Urinmenge, Farbe, Trübung, Notwendigkeit des Katheters"
          ] },
          { merke: "Das Ableitungssystem bleibt geschlossen. Urinproben werden nach Desinfektion an der Entnahmestelle des Systems gewonnen, nie aus dem Beutel." },
          { h: "Katheterwechsel" },
          { p: "Der Wechsel richtet sich nach Material, Herstellerangabe und Bedarf, z. B. bei Verstopfung, Inkrustation oder Infektion. Ein routinemäßiger Wechsel in festen Abständen ist nicht generell vorgesehen. Routinemäßige Blasenspülungen werden ebenfalls nicht empfohlen." },
          { h: "Komplikationen" },
          { tabelle: { kopf: ["Problem", "Anzeichen", "Maßnahme"], zeilen: [
            ["Harnwegsinfektion", "Trüber, übelriechender Urin, Fieber, Flankenschmerz, Verwirrtheit", "Vitalzeichen messen, Arzt informieren, Probe nach Anordnung"],
            ["Verstopfung", "Kein Urin im Beutel, Unterbauchschmerz, volle Blase", "Schlauch prüfen, Arzt informieren, Wechsel oder Spülung nach Anordnung"],
            ["Blasenspasmen", "Krampfartige Schmerzen, Urin läuft neben dem Katheter", "Lage und Durchfluss prüfen, Arzt informieren"],
            ["Harnröhrenschäden", "Blutung, Schmerzen, später Harnröhrenenge (Striktur)", "Zugfrei fixieren, Indikation prüfen, Arzt informieren"],
            ["Ballon entleert sich nicht", "Keine Flüssigkeit lässt sich zurückziehen", "Nicht ziehen, Arzt informieren"]
          ] } },
          { warn: "Fieber, Schüttelfrost, Blutdruckabfall oder neue Verwirrtheit können auf eine Urosepsis hindeuten: Sofort Arzt informieren." },
          { h: "Suprapubischer Katheter: Besonderheiten" },
          { liste: [
            "Bis zur Abheilung aseptischer Verbandswechsel nach Anordnung",
            "Danach Einstichstelle täglich auf Rötung, Sekret und Schmerzen prüfen",
            "Katheter zugfrei fixieren, Lage kontrollieren",
            "Nur das Ablassen über das geschlossene System nutzen, nicht diskonnektieren"
          ] },
          { h: "Katheter entfernen" },
          { liste: [
            "Anordnung prüfen, Person informieren, Handschuhe, Unterlage",
            "Ballon über das Blockventil vollständig entleeren und die Menge mit der Dokumentation vergleichen",
            "Katheter langsam und ohne Widerstand herausziehen, am besten beim Ausatmen",
            "Danach Intimpflege, Trinken anregen, erste Spontanmiktion und Urinmenge beobachten",
            "Bei Harnverhalt oder Beschwerden Arzt informieren und ggf. Restharn kontrollieren"
          ] }
        ]
      },
      {
        id: "stoma_grundlagen", titel: "Stoma: Grundlagen", kurz: "Colostoma, Ileostoma, Urostoma und ihre Unterschiede",
        abschnitte: [
          { h: "Was ist ein Stoma?" },
          { p: "Ein Stoma ist eine operativ angelegte Öffnung eines Hohlorgans nach außen. In der Pflege sind vor allem künstliche Darmausgänge (Enterostoma) und künstliche Harnableitungen (Urostoma) wichtig. Ein Stoma kann vorübergehend (temporär) oder dauerhaft (permanent) sein." },
          { h: "Häufige Gründe" },
          { liste: ["Darm- oder Blasenkrebs", "Chronisch-entzündliche Darmerkrankungen wie Morbus Crohn und Colitis ulcerosa", "Divertikulitis, Darmverschluss (Ileus), Darmdurchbruch", "Schutz einer Darmnaht nach einer Operation", "Verletzungen"] },
          { h: "Stomaarten im Vergleich" },
          { tabelle: { kopf: ["", "Colostoma", "Ileostoma", "Urostoma"], zeilen: [
            ["Ausgang", "Dickdarm", "Dünndarm", "Harnableitung, z. B. Ileum-Conduit"],
            ["Typische Lage", "Meist links unten", "Meist rechts unten", "Meist rechts unten"],
            ["Ausscheidung", "Breiig bis geformt", "Flüssig bis breiig, sehr häufig", "Urin, ununterbrochen"],
            ["Haut", "Geringeres Risiko", "Hohes Risiko durch Verdauungsenzyme", "Risiko durch dauernde Nässe"],
            ["Beutel", "Geschlossen mit Filter", "Ausstreifbeutel", "Urostomiebeutel mit Rücklaufschutz und Ablass"]
          ] } },
          { h: "Weitere Einteilung" },
          { liste: [
            "Endständig: Ein Darmende wird ausgeleitet, oft dauerhaft",
            "Doppelläufig: Eine Darmschlinge mit zwei Öffnungen wird ausgeleitet, oft vorübergehend",
            "Der Ort am Dickdarm beeinflusst die Ausscheidung: Je weiter hinten das Stoma liegt, desto fester ist der Stuhl"
          ] },
          { h: "So sieht ein gesundes Stoma aus" },
          { liste: ["Rosig bis kräftig rot und feucht, ähnlich der Mundschleimhaut", "Leicht über dem Hautniveau, bei Ileostoma deutlich erhaben", "Kleine Blutungen beim Reinigen sind meist harmlos", "Schmerzunempfindlich, weil die Schleimhaut keine Schmerznerven hat"] },
          { warn: "Dunkelrot, blau oder schwarz verfärbtes Stoma: Das kann eine Durchblutungsstörung (Nekrose) sein. Sofort Arzt informieren." },
          { h: "Vor der Operation" },
          { p: "Die Stomatherapie berät und zeichnet die Lage im Liegen, Sitzen und Stehen an. Das Stoma muss für die Person gut sichtbar und erreichbar sein und soll nicht in Hautfalten, an Narben oder am Hosenbund liegen." },
          { anatomie: "verdauung" }
        ]
      },
      {
        id: "stoma_versorgung", titel: "Stomaversorgung", kurz: "Systeme, Wechsel der Versorgung, Hautschutz",
        abschnitte: [
          { h: "Versorgungssysteme" },
          { tabelle: { kopf: ["System", "Aufbau", "Wechsel als Orientierung"], zeilen: [
            ["Einteilig", "Hautschutzplatte und Beutel sind fest verbunden", "Meist täglich oder nach Bedarf"],
            ["Zweiteilig", "Platte bleibt auf der Haut, Beutel wird angekoppelt", "Platte etwa alle 2–3 Tage, Beutel nach Bedarf"]
          ] } },
          { p: "Die Abstände hängen von Produkt, Haut und Ausscheidung ab. Undichte Versorgungen werden immer sofort gewechselt. Beutel werden entleert oder gewechselt, bevor sie etwa zu einem Drittel bis zur Hälfte gefüllt sind." },
          { h: "Versorgungswechsel Schritt für Schritt" },
          { liste: [
            "Material bereitlegen: neue Versorgung, Schablone, Schere, Kompressen, Wasser, Abwurf",
            "Person einbeziehen, Händedesinfektion, Handschuhe, Bett und Kleidung schützen",
            "Alte Platte von oben nach unten vorsichtig ablösen und die Haut dabei gegenhalten",
            "Stuhl abnehmen, Stoma von außen nach innen mit Wasser reinigen und die Haut gut trocknen",
            "Stoma und Haut beobachten: Farbe, Größe, Rötung, Hautdefekte",
            "Stoma ausmessen und die Plattenöffnung passend zuschneiden (etwa 1–2 mm größer als das Stoma)",
            "Platte faltenfrei von unten nach oben aufkleben und einige Minuten mit der warmen Hand andrücken",
            "Beutel ankoppeln, Sitz prüfen und alles dokumentieren"
          ] },
          { merke: "Die Haut um das Stoma muss sauber, trocken und fettfrei sein, sonst hält die Platte nicht. Eine zu große Öffnung lässt Ausscheidung an die Haut." },
          { h: "Hautschutz" },
          { liste: [
            "Nur Wasser oder pH-neutrale, rückfettungsfreie Reinigung und bei Bedarf Pflasterlöser verwenden",
            "Kein Benzin, Alkohol oder Öl und keine fettenden Cremes",
            "Haare in der Umgebung vorsichtig entfernen",
            "Unebenheiten und Falten mit Stomapaste oder Hautschutzringen ausgleichen",
            "Bei Rötung oder Hautdefekten Stomatherapie einbeziehen"
          ] },
          { h: "Besonderheiten" },
          { liste: [
            "Ileostoma: Haut besonders schützen, weil der Dünndarminhalt aggressive Enzyme enthält",
            "Urostoma: Der Urin läuft beim Wechsel weiter, deshalb saugfähiges Material bereithalten. Nachts einen größeren Beutel anschließen",
            "Irrigation: Darmspülung über ein Colostoma im Sigma- oder Descendens-Bereich, nur nach ärztlicher Absprache und Anleitung"
          ] }
        ]
      },
      {
        id: "stoma_alltag", titel: "Stoma: Komplikationen und Alltag", kurz: "Probleme erkennen, Ernährung, Psyche, Anleitung",
        abschnitte: [
          { h: "Komplikationen" },
          { tabelle: { kopf: ["Komplikation", "Bedeutung", "Was tun?"], zeilen: [
            ["Nekrose", "Stoma dunkel bis schwarz, Durchblutungsstörung", "Sofort Arzt informieren"],
            ["Retraktion", "Stoma zieht sich unter das Hautniveau zurück", "Arzt und Stomatherapie, angepasste Versorgung"],
            ["Prolaps", "Darm tritt verstärkt aus dem Stoma aus", "Arzt informieren, bei Verfärbung sofort"],
            ["Parastomale Hernie", "Bruch neben dem Stoma, Vorwölbung", "Schweres Heben vermeiden, Bauchstütze und Arzt"],
            ["Stenose", "Stomaöffnung verengt, Entleerung erschwert", "Arzt informieren"],
            ["Hautentzündung", "Rötung und Nässen durch undichte Versorgung", "Versorgung und Öffnung prüfen, Stomatherapie"],
            ["Pilzinfektion", "Rötung mit kleinen Satellitenherden, Juckreiz", "Arzt informieren, Behandlung nach Anordnung"]
          ] } },
          { warn: "Keine Ausscheidung, Bauchkrämpfe, Erbrechen und ein aufgeblähter Bauch können auf einen Darmverschluss hinweisen: Sofort Arzt informieren." },
          { h: "Ernährung" },
          { liste: [
            "Meist ist keine spezielle Diät nötig: Neue Lebensmittel einzeln ausprobieren und gut kauen",
            "Blähend: Kohl, Hülsenfrüchte, Zwiebeln, kohlensäurehaltige Getränke",
            "Geruchsbildend: Eier, Fisch, Zwiebeln, Knoblauch, bestimmter Käse",
            "Geruchshemmend: Joghurt, Preiselbeeren, Petersilie, Spinat",
            "Stopfend: Reis, Banane, Weißbrot. Abführend: rohes Obst, Alkohol, Kaffee"
          ] },
          { h: "Besonderheiten je nach Stoma" },
          { liste: [
            "Ileostoma: Viel Flüssigkeit und Elektrolyte, Austrocknung früh erkennen",
            "Ileostoma: Faserreiches wie Spargel, Pilze, Nüsse oder Zitrusfrüchte kann das Stoma verlegen",
            "Ileostoma: Tabletten mit verzögerter Wirkstofffreisetzung werden möglicherweise nicht ausreichend aufgenommen. Mit Arzt oder Apotheke klären",
            "Urostoma: Reichlich trinken, Urin auf Trübung und Geruch beobachten"
          ] },
          { h: "Psychosoziale Begleitung" },
          { p: "Ein Stoma verändert das Körperbild und kann Scham, Ekel, Angst vor Geruch und Sorgen um Partnerschaft und Sexualität auslösen. Nimm diese Gefühle ernst, wahre die Intimsphäre und achte auf deine eigene Mimik beim Versorgungswechsel." },
          { h: "Anleitung und Alltag" },
          { liste: [
            "Selbstständigkeit Schritt für Schritt fördern: Erst zuschauen, dann mithelfen, dann selbst versorgen",
            "Angehörige auf Wunsch einbeziehen, früh Stomatherapie und Hilfsmittelversorgung organisieren",
            "Selbsthilfe anbieten, z. B. Deutsche ILCO",
            "Duschen, Baden, Reisen und Sport sind meist möglich. Schweres Heben vermeiden",
            "Immer ein Notfallset mit Ersatzversorgung mitnehmen"
          ] },
          { merke: "Die Abkürzung „AP“ (Anus praeter) ist im Alltag noch üblich. Fachlich genauer sind die Begriffe Colostoma und Ileostoma." }
        ]
      }
    ]
  },

  // ===================================================================
  // SCHLAF
  {
    id: "schlaf", titel: "Schlaf", untertitel: "Schlafphasen, Schlaf im Alter, Schlafstörungen mit Fachbegriffen, Pflege", icon: "mond",
    kapitel: [
      {
        id: "schlaf_grundlagen", titel: "Schlaf: Grundlagen", kurz: "Aufgaben, Schlafphasen, Schlafzyklus, Rhythmus, Schlafbedarf",
        abschnitte: [
          { h: "Warum schlafen wir?" },
          { p: "Schlaf ist ein aktiver, lebenswichtiger Zustand. Das Bewusstsein ist herabgesetzt, der Mensch ist aber jederzeit weckbar. Im Pflegemodell nach Krohwinkel gehört Schlaf zur AEDL „Ruhen und schlafen können“, bei Juchli zur ATL „Wach sein und schlafen“." },
          { liste: ["Erholung von Körper und Gehirn, Energie wird gespart", "Gedächtnis: Gelerntes wird gefestigt und sortiert", "Abwehr: Das Immunsystem wird gestärkt", "Zellerneuerung und Wundheilung, Ausschüttung von Wachstumshormon im Tiefschlaf", "Seelisches Gleichgewicht und Stimmung", "Regulation von Stoffwechsel, Blutzucker und Appetit"] },
          { h: "Schlafphasen" },
          { p: "Man unterscheidet den Non-REM-Schlaf (N1 bis N3) und den REM-Schlaf. REM steht für „Rapid Eye Movements“, also schnelle Augenbewegungen. Gemessen werden die Phasen im Schlaflabor mit der Polysomnografie (u. a. EEG für die Hirnströme)." },
          { tabelle: { kopf: ["Phase", "Was passiert?", "Anteil"], zeilen: [
            ["N1 – Einschlafphase", "Übergang vom Wachsein, leicht weckbar, Muskeln entspannen, evtl. Zuckungen", "ca. 5 %"],
            ["N2 – leichter Schlaf", "Puls, Atmung und Temperatur sinken, Umgebung wird kaum noch wahrgenommen", "ca. 45–55 %"],
            ["N3 – Tiefschlaf", "Langsame Hirnwellen, schwer weckbar, wichtigste Phase für die körperliche Erholung", "ca. 15–20 %"],
            ["REM-Schlaf", "Lebhafte Träume, schnelle Augenbewegungen, Muskeln fast völlig erschlafft, Puls und Atmung unregelmäßig", "ca. 20–25 %"]
          ] } },
          { merke: "Ein Schlafzyklus dauert etwa 90 Minuten. Pro Nacht gibt es 4 bis 6 Zyklen. In der ersten Nachthälfte überwiegt der Tiefschlaf, in der zweiten der REM-Schlaf." },
          { p: "Ältere Lehrbücher teilen nach Rechtschaffen und Kales in die Stadien 1 bis 4 ein. Die Stadien 3 und 4 entsprechen zusammen dem heutigen N3 (Tiefschlaf)." },
          { h: "Schlaf-Wach-Rhythmus" },
          { p: "Die innere Uhr (zirkadianer Rhythmus, von lat. circa = ungefähr und dies = Tag) steuert Schlafen und Wachen in einem Rhythmus von etwa 24 Stunden. Bei Dunkelheit bildet die Zirbeldrüse (Epiphyse) das Schlafhormon Melatonin. Helles Licht hemmt die Bildung." },
          { liste: ["Zeitgeber der inneren Uhr: Tageslicht, feste Mahlzeiten, Bewegung, soziale Kontakte, feste Zeiten", "Fehlen Zeitgeber, z. B. bei Bettlägerigkeit in dunklen Zimmern, gerät der Rhythmus durcheinander"] },
          { h: "Schlafbedarf nach Alter" },
          { tabelle: { kopf: ["Alter", "Empfohlene Schlafdauer pro Tag"], zeilen: [
            ["Neugeborene (0–3 Monate)", "14–17 Stunden"],
            ["Säuglinge (4–11 Monate)", "12–15 Stunden"],
            ["Kleinkinder (1–2 Jahre)", "11–14 Stunden"],
            ["Kindergartenkinder (3–5 Jahre)", "10–13 Stunden"],
            ["Schulkinder (6–13 Jahre)", "9–11 Stunden"],
            ["Jugendliche (14–17 Jahre)", "8–10 Stunden"],
            ["Erwachsene (18–64 Jahre)", "7–9 Stunden"],
            ["Ältere Menschen (ab 65 Jahre)", "7–8 Stunden"]
          ] } },
          { p: "Richtwerte nach der amerikanischen National Sleep Foundation. Der Bedarf ist individuell: Entscheidend ist, ob sich der Mensch am Tag erholt und leistungsfähig fühlt." }
        ]
      },
      {
        id: "schlaf_alter", titel: "Schlaf im Alter und Störfaktoren", kurz: "Veränderungen im Alter, Einflussfaktoren, Folgen von Schlafmangel",
        abschnitte: [
          { h: "So verändert sich der Schlaf im Alter" },
          { tabelle: { kopf: ["Veränderung", "Folge"], zeilen: [
            ["Weniger Tiefschlaf (N3)", "Schlaf ist leichter, man wird schneller wach"],
            ["Häufigeres nächtliches Aufwachen", "Schlaf wirkt „zerstückelt“, Durchschlafen fällt schwer"],
            ["Innere Uhr verschiebt sich nach vorn", "Früh müde am Abend, sehr frühes Erwachen am Morgen"],
            ["Weniger Melatonin", "Einschlafen dauert länger"],
            ["Mehr Nickerchen am Tag", "Der Schlafdruck in der Nacht sinkt"],
            ["Längere Zeit im Bett", "Schlafdauer im Verhältnis zur Liegezeit nimmt ab"]
          ] } },
          { merke: "Leichterer und kürzerer Schlaf im Alter ist normal. Eine Schlafstörung liegt erst vor, wenn die Person darunter leidet oder am Tag beeinträchtigt ist." },
          { h: "Was den Schlaf stört" },
          { tabelle: { kopf: ["Bereich", "Beispiele"], zeilen: [
            ["Körperlich", "Schmerzen, Atemnot, Husten, Juckreiz, häufiger nächtlicher Harndrang (Nykturie), Hunger, Restless Legs, Fieber"],
            ["Seelisch", "Angst, Sorgen, Trauer, Einsamkeit, Depression, Heimweh nach Umzug ins Heim"],
            ["Umgebung", "Lärm, Licht, zu warmes Zimmer, ungewohntes Bett, Mitbewohnerin oder Mitbewohner, Kontrollgänge"],
            ["Medikamente und Genussmittel", "Koffein, Alkohol, Nikotin, Entwässerungsmittel am Abend, Kortison, manche Antidepressiva"],
            ["Tagesablauf", "Zu wenig Bewegung und Tageslicht, lange Mittagsschläfe, sehr frühe Bettzeit im Heim"]
          ] } },
          { p: "Für erholsamen Schlaf empfiehlt sich ein ruhiges, dunkles, gut gelüftetes Schlafzimmer mit etwa 16–18 °C." },
          { h: "Folgen von Schlafmangel" },
          { liste: ["Müdigkeit, Konzentrations- und Gedächtnisstörungen", "Reizbarkeit, gedrückte Stimmung, Angst", "Erhöhtes Sturz- und Unfallrisiko, Sekundenschlaf", "Schwächere Abwehr, schlechtere Wundheilung", "Stärkeres Schmerzempfinden", "Langfristig: Bluthochdruck, Übergewicht, Diabetes, Depression", "Bei älteren Menschen: Gefahr eines Delirs (akute Verwirrtheit)"] },
          { diagnose: "delir" }
        ]
      },
      {
        id: "schlaf_begriffe", titel: "Schlafstörungen: Fachbegriffe", kurz: "Einteilung, Wortherkunft und Übersetzung aller Diagnosen",
        abschnitte: [
          { h: "Einteilung der Schlafstörungen" },
          { p: "In der Pflegeausbildung werden Schlafstörungen meist in zwei große Gruppen eingeteilt:" },
          { tabelle: { kopf: ["Gruppe", "Bedeutung", "Beispiele"], zeilen: [
            ["Dyssomnien", "Menge, Qualität oder Zeitpunkt des Schlafes sind gestört", "Insomnie, Hypersomnie, Narkolepsie, Schlafapnoe"],
            ["Parasomnien", "Ungewöhnliches Verhalten oder Erleben während des Schlafes, der Schlaf an sich ist normal lang", "Somnambulismus, Pavor nocturnus, Enuresis nocturna, Albträume"]
          ] } },
          { p: "Die internationale Einteilung (ICSD-3) ist feiner: Insomnien, schlafbezogene Atmungsstörungen (Schnarchen, Schlafapnoe), Hypersomnien (z. B. Narkolepsie), Störungen des Schlaf-Wach-Rhythmus (z. B. Schichtarbeit, Jetlag), Parasomnien und schlafbezogene Bewegungsstörungen (z. B. Restless Legs, Bruxismus)." },
          { h: "Wortbausteine" },
          { tabelle: { kopf: ["Baustein", "Herkunft", "Bedeutung"], zeilen: [
            ["somnus", "lateinisch", "Schlaf"],
            ["in-", "lateinisch", "un-, nicht"],
            ["hyper-", "griechisch", "über, übermäßig"],
            ["hypo-", "griechisch", "unter, zu wenig"],
            ["para-", "griechisch", "neben, abweichend"],
            ["dys-", "griechisch", "gestört, fehlerhaft"],
            ["a- / an-", "griechisch", "ohne, nicht"],
            ["pnoe", "griechisch", "Atmung, Atem"],
            ["nocturnus", "lateinisch", "nächtlich (nox = Nacht)"],
            ["-pathie (pathos)", "griechisch", "Leiden, Krankheit"]
          ] } },
          { h: "Die Diagnosen auf einen Blick" },
          { tabelle: { kopf: ["Fachwort", "Wortherkunft", "Übersetzung"], zeilen: [
            ["Parasomnie", "griech. para = neben, abweichend + lat. somnus = Schlaf", "Ungewöhnliches Verhalten im Schlaf"],
            ["Hypersomnie", "griech. hyper = übermäßig + lat. somnus = Schlaf", "Schlafsucht, übermäßige Schläfrigkeit"],
            ["Hyposomnie", "griech. hypo = unter, zu wenig + lat. somnus = Schlaf", "Zu wenig Schlaf"],
            ["Insomnie", "lat. in = nicht, un- + somnus = Schlaf", "Schlaflosigkeit"],
            ["Schlafapnoe", "griech. a = ohne + pnoe = Atmung", "Atemstillstand im Schlaf"],
            ["Narkolepsie", "griech. narke = Erstarrung, Betäubung + lepsis = Anfall, Ergriffenwerden", "Schlafanfälle, Schlummersucht"],
            ["Pavor nocturnus", "lat. pavor = Angst, Schrecken + nocturnus = nächtlich", "Nachtschreck"],
            ["Enuresis nocturna", "griech. enurein = Harn lassen, einnässen + lat. nocturnus = nächtlich", "Nächtliches Einnässen, Bettnässen"],
            ["Rhonchopathie", "griech. rhonchos = Schnarchen + pathos = Leiden", "Schnarchkrankheit, krankhaftes Schnarchen"],
            ["Bruxismus", "griech. brychein = mit den Zähnen knirschen", "Zähneknirschen und Zähnepressen"],
            ["Somnambulismus", "lat. somnus = Schlaf + ambulare = umhergehen", "Schlafwandeln"]
          ] } },
          { merke: "Hyposomnie und Insomnie meinen beide zu wenig Schlaf. „Insomnie“ ist der heute übliche Fachbegriff für Ein- und Durchschlafstörungen." },
          { h: "Verwechslungsgefahr" },
          { tabelle: { kopf: ["Begriff", "Bedeutung"], zeilen: [
            ["Nykturie", "Nächtliches Wasserlassen: Die Person wacht auf und geht zur Toilette (griech. nyx = Nacht + uron = Harn)"],
            ["Enuresis nocturna", "Nächtliches Einnässen im Schlaf, ohne aufzuwachen"],
            ["Pavor nocturnus", "Aufschrecken aus dem Tiefschlaf, keine Erinnerung"],
            ["Albtraum", "Angsttraum im REM-Schlaf, man wacht auf und erinnert sich"]
          ] } }
        ]
      },
      {
        id: "schlaf_dyssomnien", titel: "Insomnie, Hypersomnie und Narkolepsie", kurz: "Zu wenig oder zu viel Schlaf: Zeichen, Ursachen, Pflege",
        abschnitte: [
          { h: "Insomnie / Hyposomnie" },
          { p: "Übersetzung: Schlaflosigkeit bzw. zu wenig Schlaf. Insomnie kommt von lat. in = nicht und somnus = Schlaf, Hyposomnie von griech. hypo = unter und lat. somnus. Es ist die häufigste Schlafstörung, besonders im Alter." },
          { liste: ["Einschlafstörung: Einschlafen dauert länger als etwa 30 Minuten", "Durchschlafstörung: häufiges oder langes Wachliegen in der Nacht", "Früherwachen: deutlich zu frühes Erwachen ohne wieder einzuschlafen", "Nicht erholsamer Schlaf mit Folgen am Tag: Müdigkeit, Reizbarkeit, Konzentrationsprobleme", "Chronisch: mindestens 3 Nächte pro Woche über mindestens 3 Monate"] },
          { p: "Ursachen: Stress, Sorgen, Depression, Schmerzen, Atemnot, Nykturie, Medikamente, Koffein und Alkohol, ungünstige Schlafgewohnheiten. Oft entsteht ein Teufelskreis aus Angst vor der nächsten schlechten Nacht und Anspannung." },
          { liste: ["Behandlung der ersten Wahl: kognitive Verhaltenstherapie bei Insomnie (KVT-I)", "Schlafhygiene, feste Aufsteh- und Bettzeiten", "Bett nur zum Schlafen nutzen, bei langem Wachliegen kurz aufstehen", "Ursachen behandeln, z. B. Schmerzen", "Schlafmittel nur kurzzeitig und ärztlich verordnet"] },
          { link: { bereich: "schlaf", kapitel: "schlaf_pflege" } },
          { h: "Hypersomnie (Schlafsucht)" },
          { p: "Übersetzung: Schlafsucht, übermäßiger Schlaf. Das Wort kommt von griech. hyper = über, übermäßig und lat. somnus = Schlaf. Die Betroffenen sind am Tag stark schläfrig oder schlafen sehr lange, obwohl sie nachts ausreichend geschlafen haben." },
          { liste: ["Häufige Ursachen: Schlafapnoe, Schlafmangel, Medikamente (z. B. Beruhigungsmittel), Depression", "Körperliche Ursachen: Schilddrüsenunterfunktion, Blutarmut, Nierenschwäche, Erkrankungen des Gehirns", "Seltenere Formen ohne erkennbare Ursache, z. B. Narkolepsie"] },
          { warn: "Neu auftretende, starke Schläfrigkeit bei älteren Menschen immer melden. Dahinter können ein Delir, eine Infektion, Medikamente, Unterzucker oder ein Schlaganfall stecken." },
          { h: "Narkolepsie" },
          { p: "Übersetzung: Schlafanfallskrankheit, im Volksmund „Schlummersucht“. Das Wort kommt von griech. narke = Erstarrung, Betäubung und lepsis = Anfall, Ergriffenwerden. Es ist eine seltene, chronische Erkrankung des Gehirns. Meist fehlt der wach haltende Botenstoff Orexin (Hypocretin)." },
          { tabelle: { kopf: ["Zeichen", "Erklärung"], zeilen: [
            ["Tagesschläfrigkeit mit Schlafattacken", "Plötzliches, nicht unterdrückbares Einschlafen, auch beim Essen oder Sprechen"],
            ["Kataplexie", "Plötzlicher Verlust der Muskelspannung bei starken Gefühlen, z. B. Lachen, bei vollem Bewusstsein"],
            ["Schlaflähmung", "Beim Einschlafen oder Aufwachen kann man sich kurz nicht bewegen"],
            ["Halluzinationen beim Einschlafen", "Sehr lebhafte, traumartige Bilder"],
            ["Gestörter Nachtschlaf", "Häufiges Erwachen trotz großer Müdigkeit"]
          ] } },
          { liste: ["Behandlung: geplante kurze Schlafpausen am Tag, feste Schlafzeiten, Medikamente", "Pflege: Sicherheit bei Schlafattacken (Sturz, Verbrühung, Straßenverkehr), Tagesstruktur, Aufklärung des Umfelds", "Autofahren ist oft nur eingeschränkt erlaubt"] }
        ]
      },
      {
        id: "schlaf_atmung", titel: "Schnarchen und Schlafapnoe", kurz: "Rhonchopathie, Atemaussetzer, CPAP-Therapie",
        abschnitte: [
          { h: "Rhonchopathie (Schnarchen)" },
          { p: "Übersetzung: Schnarchkrankheit, krankhaftes Schnarchen. Das Wort kommt von griech. rhonchos = Schnarchen und pathos = Leiden. Beim Einatmen erschlaffen Gaumensegel, Zäpfchen und Zunge, das Gewebe flattert im Luftstrom." },
          { liste: ["Primäres Schnarchen: Lautes Schnarchen ohne Atemaussetzer, vor allem eine Belastung für die Partnerin oder den Partner", "Gefährlich wird es, wenn unregelmäßiges Schnarchen mit Pausen auftritt: Hinweis auf eine Schlafapnoe", "Begünstigt durch Übergewicht, Rückenlage, Alkohol und Schlafmittel am Abend, Rauchen, verstopfte Nase, große Rachenmandeln"] },
          { h: "Schlafapnoe" },
          { p: "Übersetzung: Atemstillstand im Schlaf. Das Wort kommt von griech. a = ohne und pnoe = Atmung. Es kommt im Schlaf wiederholt zu Atemaussetzern (Apnoen) von mindestens 10 Sekunden. Der Sauerstoffgehalt im Blut sinkt, das Gehirn löst kurze Weckreaktionen aus. Der Schlaf ist dadurch nicht erholsam." },
          { tabelle: { kopf: ["Form", "Ursache", "Häufigkeit"], zeilen: [
            ["Obstruktive Schlafapnoe (OSA)", "Die oberen Atemwege fallen im Schlaf zusammen, der Atemantrieb ist vorhanden", "Häufigste Form"],
            ["Zentrale Schlafapnoe", "Das Atemzentrum im Gehirn gibt zeitweise keinen Atemimpuls, z. B. bei Herzinsuffizienz oder Opioiden", "Seltener"]
          ] } },
          { liste: ["Lautes, unregelmäßiges Schnarchen mit beobachteten Atempausen", "Plötzliches Aufschrecken mit Luftschnappen oder Erstickungsgefühl", "Starke Tagesmüdigkeit, Sekundenschlaf", "Morgendliche Kopfschmerzen und Mundtrockenheit", "Konzentrationsstörungen, Gereiztheit, Nykturie"] },
          { p: "Risikofaktoren: Übergewicht, männliches Geschlecht, höheres Alter, Alkohol und Schlafmittel, Rauchen, Rückenlage. Die Diagnose stellt ein Schlaflabor. Der Schweregrad richtet sich nach den Atemaussetzern pro Stunde (Apnoe-Hypopnoe-Index, ab 5 pro Stunde krankhaft)." },
          { warn: "Unbehandelt erhöht die Schlafapnoe das Risiko für Bluthochdruck, Herzrhythmusstörungen, Herzinfarkt, Schlaganfall und Unfälle. Beruhigungs-, Schlafmittel und Opioide können die Atemaussetzer verstärken." },
          { h: "Behandlung und Pflege" },
          { liste: ["CPAP-Therapie: Eine Maske gibt nachts einen leichten Überdruck und hält die Atemwege offen", "Gewicht reduzieren, abends kein Alkohol, Schlafmittel vermeiden", "Seitenlage statt Rückenlage, z. B. mit Lagerungskissen", "Bei leichter OSA: Unterkieferschiene vom Zahnarzt", "Pflege: Atempausen im Nachtdienst beobachten und dokumentieren (Dauer, Häufigkeit, Hautfarbe, ggf. SpO₂)", "Pflege: CPAP-Gerät bei Aufnahme mitbringen lassen und jede Nacht nutzen", "Pflege: Maskensitz prüfen, Druckstellen vermeiden, Maske und Schlauch nach Herstellerangabe reinigen"] },
          { merke: "Wer eine CPAP-Maske hat, braucht sie auch im Krankenhaus und im Heim. Ohne Maske treten die Atemaussetzer sofort wieder auf." }
        ]
      },
      {
        id: "schlaf_parasomnien", titel: "Parasomnien", kurz: "Somnambulismus, Pavor nocturnus, Enuresis nocturna, Bruxismus",
        abschnitte: [
          { h: "Was ist eine Parasomnie?" },
          { p: "Übersetzung: ungewöhnliches Verhalten im Schlaf. Das Wort kommt von griech. para = neben, abweichend und lat. somnus = Schlaf. Es sind Ereignisse, die beim Einschlafen, im Schlaf oder beim Aufwachen auftreten. Die Schlafdauer ist meist normal. Viele Parasomnien kommen vor allem bei Kindern vor und verschwinden mit dem Älterwerden." },
          { tabelle: { kopf: ["Aus dem Tiefschlaf (Non-REM)", "Aus dem REM-Schlaf"], zeilen: [
            ["Meist im ersten Drittel der Nacht", "Meist in der zweiten Nachthälfte"],
            ["Somnambulismus, Pavor nocturnus, Schlaftrunkenheit", "Albträume, REM-Schlaf-Verhaltensstörung"],
            ["Kaum weckbar, am Morgen keine Erinnerung", "Wach und orientiert, Erinnerung an den Traum"]
          ] } },
          { p: "Bei der REM-Schlaf-Verhaltensstörung fehlt die normale Muskelerschlaffung: Ältere Menschen, meist Männer, schlagen oder treten im Traum um sich. Sie kann ein frühes Zeichen von Parkinson sein und sollte ärztlich abgeklärt werden." },
          { h: "Somnambulismus (Schlafwandeln)" },
          { p: "Übersetzung: Schlafwandeln. Das Wort kommt von lat. somnus = Schlaf und ambulare = umhergehen. Die Person steht aus dem Tiefschlaf auf, läuft mit offenen, „leeren“ Augen umher und führt einfache Handlungen aus. Sie ist kaum ansprechbar und erinnert sich am Morgen nicht. Häufig bei Kindern zwischen etwa 4 und 12 Jahren." },
          { liste: ["Auslöser: Schlafmangel, Stress, Fieber, volle Blase, ungewohnte Umgebung, manche Medikamente", "Nicht abrupt wecken, das kann Verwirrung oder Abwehr auslösen", "Ruhig ansprechen und sanft zurück ins Bett führen", "Umgebung sichern: Fenster und Balkontür verschließen, Treppen sichern, Stolperfallen und gefährliche Gegenstände entfernen", "Für regelmäßigen und ausreichenden Schlaf sorgen", "Episoden dokumentieren und weitergeben"] },
          { h: "Pavor nocturnus (Nachtschreck)" },
          { p: "Übersetzung: Nachtschreck, nächtliches Aufschrecken. Das Wort kommt von lat. pavor = Angst, Schrecken und nocturnus = nächtlich. Meist bei Kindern im Vorschul- und Grundschulalter. Das Kind schreckt im ersten Drittel der Nacht aus dem Tiefschlaf hoch, schreit, wirkt panisch und schwitzt, das Herz rast. Es ist kaum weckbar, lässt sich nicht trösten und erinnert sich am Morgen nicht." },
          { liste: ["Nicht wecken und nicht festhalten, die Episode dauert meist nur wenige Minuten", "Dabeibleiben, ruhig bleiben, vor Verletzungen schützen", "Ausreichend Schlaf und feste Abendrituale", "Eltern beruhigen: Der Pavor ist meist harmlos und verschwindet von allein", "Ärztlich abklären bei sehr häufigen Episoden oder Beginn im Erwachsenenalter"] },
          { tabelle: { kopf: ["Merkmal", "Pavor nocturnus", "Albtraum"], zeilen: [
            ["Schlafphase", "Tiefschlaf (N3)", "REM-Schlaf"],
            ["Zeitpunkt", "Erstes Drittel der Nacht", "Zweite Nachthälfte, morgens"],
            ["Ansprechbar", "Nein, nicht zu beruhigen", "Ja, wacht auf und sucht Trost"],
            ["Erinnerung", "Keine", "Oft lebhafte Erinnerung"]
          ] } },
          { h: "Enuresis nocturna (Bettnässen)" },
          { p: "Übersetzung: nächtliches Einnässen. Das Wort kommt von griech. enurein = Harn lassen, einnässen und lat. nocturnus = nächtlich. Gemeint ist unwillkürliches Einnässen im Schlaf bei Kindern ab 5 Jahren, ohne körperliche Ursache." },
          { tabelle: { kopf: ["Form", "Bedeutung"], zeilen: [
            ["Primäre Enuresis", "Das Kind war noch nie längere Zeit nachts trocken. Häufig familiär, die Reifung der Blasenkontrolle ist verzögert"],
            ["Sekundäre Enuresis", "Erneutes Einnässen nach mindestens 6 trockenen Monaten. Oft seelische Auslöser, z. B. Geburt eines Geschwisters, Trennung, oder körperliche Ursachen wie Harnwegsinfekt, Diabetes"]
          ] } },
          { liste: ["Nie schimpfen, bestrafen oder beschämen", "Tagsüber ausreichend trinken, in den letzten Stunden vor dem Schlafen weniger", "Vor dem Schlafen zur Toilette gehen", "Belohnung für trockene Nächte, z. B. Sonnen-Kalender", "Klingelhose oder Weckgerät (Alarmtherapie) nach ärztlicher Beratung", "Ärztliche Abklärung, vor allem bei sekundärer Enuresis"] },
          { p: "Bei Erwachsenen spricht man bei nächtlichem Urinverlust von nächtlicher Harninkontinenz. Ursachen und Pflege stehen bei der Diagnose Harninkontinenz." },
          { diagnose: "inkontinenz" },
          { h: "Bruxismus (Zähneknirschen)" },
          { p: "Übersetzung: Zähneknirschen und Zähnepressen. Das Wort kommt von griech. brychein = mit den Zähnen knirschen. Die Kaumuskeln arbeiten unbewusst, nachts im Schlaf (Schlafbruxismus) oder am Tag (Wachbruxismus)." },
          { liste: ["Zeichen: Knirschgeräusche in der Nacht, abgenutzte oder abgebrochene Zähne", "Zeichen: Schmerzen in Kiefer, Kaumuskeln und Ohren, morgendliche Kopfschmerzen, Verspannungen im Nacken", "Ursachen: Stress und Anspannung, Fehlstellung der Zähne, Alkohol, Koffein, Nikotin, manche Medikamente, Schlafapnoe", "Behandlung: Aufbissschiene vom Zahnarzt, Stressabbau, Entspannung, Physiotherapie", "Pflege: Beobachtung weitergeben, Schiene reinigen und einsetzen helfen, Mund und Zähne kontrollieren"] }
        ]
      },
      {
        id: "schlaf_pflege", titel: "Pflege: Schlaf fördern", kurz: "Schlafanamnese, Schlafprotokoll, Schlafhygiene, Nachtdienst, Schlafmittel",
        abschnitte: [
          { h: "Informationen sammeln" },
          { liste: ["Schlafanamnese: Bettzeit, Aufstehzeit, Mittagsschlaf, Einschlafrituale, Lieblingskissen, Licht an oder aus, Tür offen oder zu", "Biografie: Schichtarbeit, Landwirtschaft, frühere Gewohnheiten", "Schlafprotokoll oder Schlaftagebuch über 1–2 Wochen: Einschlafen, Wachphasen, Aufwachen, Befinden am Tag", "Beobachtung im Nachtdienst: Unruhe, Atmung, Schnarchen, Atempausen, Toilettengänge, Schmerzen", "Fragebögen, z. B. Pittsburgher Schlafqualitätsindex (PSQI) oder Epworth-Schläfrigkeitsskala für die Tagesmüdigkeit"] },
          { link: { bereich: "biografie", kapitel: "bio_methoden" } },
          { h: "Schlafhygiene – Tipps für guten Schlaf" },
          { liste: ["Regelmäßige Bett- und Aufstehzeiten, auch am Wochenende", "Am Tag Bewegung und Tageslicht, Beschäftigung statt Langeweile", "Mittagsschlaf höchstens 20–30 Minuten und nicht am späten Nachmittag", "Ab dem Nachmittag kein Kaffee, schwarzer Tee oder Cola", "Abends keine schweren Mahlzeiten, kein Alkohol, nicht rauchen", "Schlafzimmer ruhig, dunkel, gut gelüftet, etwa 16–18 °C", "Bett nur zum Schlafen nutzen, nicht zum Fernsehen", "Nicht ins Bett gehen, bevor man müde ist", "Abends zur Ruhe kommen: Abendrituale, keine aufregenden Filme, Bildschirm aus"] },
          { h: "Schlaffördernde Pflegemaßnahmen" },
          { tabelle: { kopf: ["Maßnahme", "Beispiele"], zeilen: [
            ["Abendrituale", "Gewohnte Abläufe aus der Biografie, z. B. Gebet, Musik, Lesen, warme Milch mit Honig"],
            ["Entspannung", "Beruhigende Waschung in Haarwuchsrichtung, Rückeneinreibung, warmes Fußbad, Wärmflasche"],
            ["Getränke", "Kräutertee, z. B. Melisse, Lavendel, Baldrian, Hopfen"],
            ["Beschwerden lindern", "Schmerzen, Juckreiz und Atemnot vor der Nacht behandeln, bequeme Lagerung, Toilettengang"],
            ["Sicherheit und Geborgenheit", "Klingel in Reichweite, Nachtlicht, vertraute Gegenstände, Gespräch bei Sorgen"],
            ["Störungen vermeiden", "Pflegemaßnahmen bündeln, leise Kontrollgänge, gedimmtes Licht, nicht ohne Grund wecken"]
          ] } },
          { merke: "Bewohnerinnen und Bewohner sollen nicht nach dem Dienstplan, sondern nach ihren eigenen Gewohnheiten ins Bett gehen. Wer um 18 Uhr ins Bett gebracht wird, ist um 3 Uhr ausgeschlafen." },
          { h: "Schlaf und Demenz" },
          { liste: ["Häufig: Tag-Nacht-Umkehr, nächtliche Unruhe und Umherlaufen", "Sundowning: Unruhe und Verwirrtheit nehmen am späten Nachmittag und Abend zu", "Hilfen: viel Tageslicht und Aktivität am Tag, feste Tagesstruktur, kurze Ruhezeiten", "Biografie beachten: Wer früher nachts arbeitete, ist vielleicht nachts aktiv", "Nachtcafé oder Begleitung statt Zwang, Bewegungsdrang sicher ermöglichen", "Freiheitsentziehende Maßnahmen nur mit richterlicher Genehmigung bzw. Einwilligung, Alternativen nutzen"] },
          { h: "Schlafmittel – Vorsicht im Alter" },
          { p: "Schlafmittel (Hypnotika) werden nur ärztlich verordnet und möglichst kurz eingesetzt, meist höchstens 3–4 Wochen. Häufig sind Benzodiazepine (z. B. Lorazepam) und sogenannte Z-Substanzen (Zolpidem, Zopiclon)." },
          { liste: ["Sturzgefahr durch Benommenheit und Muskelschwäche, auch noch am Morgen (Hang-over)", "Abhängigkeit und Gewöhnung, Entzugssymptome beim plötzlichen Absetzen", "Verwirrtheit, Gedächtnisstörungen, Delir", "Paradoxe Reaktion: Unruhe und Erregung statt Müdigkeit", "Atemdämpfung, besonders bei Schlafapnoe oder zusammen mit Alkohol oder Opioiden", "Viele dieser Mittel stehen auf der PRISCUS-Liste der für ältere Menschen ungeeigneten Medikamente"] },
          { warn: "Nach der Gabe eines Schlafmittels: Sturzrisiko beachten, Klingel und Nachtlicht bereitstellen, beim nächtlichen Toilettengang begleiten. Wirkung und Nebenwirkungen beobachten und dokumentieren." },
          { link: { bereich: "prophylaxen", kapitel: "sturz" } },
          { h: "Dokumentation" },
          { tabelle: { kopf: ["Ungünstig", "Besser"], zeilen: [
            ["„Hat schlecht geschlafen.“", "„War von 1 bis 3 Uhr wach, unruhig, äußerte Schmerzen im rechten Knie. Bedarfsmedikation nach AVO gegeben, ab 3:30 Uhr geschlafen.“"],
            ["„Schnarcht.“", "„Lautes, unregelmäßiges Schnarchen mit Atempausen von etwa 15 Sekunden, ca. 5-mal in 10 Minuten beobachtet. Arzt informiert.“"]
          ] } }
        ]
      }
    ]
  },

  // ===================================================================
  // BIOGRAFIEARBEIT
  {
    id: "biografie", titel: "Biografiearbeit", untertitel: "Den Menschen und sein Leben verstehen und in die Pflege einbeziehen", icon: "buch",
    kapitel: [
      {
        id: "bio_grundlagen", titel: "Grundlagen", kurz: "Definition, Ziele, Bedeutung für die Pflege",
        abschnitte: [
          { h: "Was ist Biografiearbeit?" },
          { p: "Biografiearbeit bedeutet, sich gemeinsam mit einem Menschen mit seiner Lebensgeschichte zu beschäftigen und dieses Wissen in die tägliche Pflege einzubeziehen. Sie ist keine einmalige Datenerhebung, sondern ein fortlaufender Prozess, der von Vertrauen lebt." },
          { tabelle: { kopf: ["Begriff", "Bedeutung"], zeilen: [
            ["Lebenslauf", "Äußere Daten: Geburt, Schule, Beruf, Familie"],
            ["Biografie", "Die persönliche Geschichte: Erlebnisse, Gefühle, Werte, Bedeutungen"],
            ["Biografiearbeit", "Bewusste, wertschätzende Nutzung dieser Geschichte in Beziehung und Pflege"]
          ] } },
          { h: "Ziele" },
          { liste: ["Den Menschen als einzigartige Person sehen und seine Würde achten", "Verhalten besser verstehen, statt es vorschnell als „schwierig“ zu bewerten", "Vertrauen, Sicherheit und Orientierung geben", "Identität und Selbstwertgefühl stärken", "Gewohnheiten und Ressourcen erhalten", "Pflege individuell planen und Angehörige einbeziehen"] },
          { merke: "Pflegekraft kann fragen, der Mensch entscheidet: Biografiearbeit ist immer freiwillig." },
          { h: "Einordnung im Pflegeprozess" },
          { liste: ["Informationssammlung: Gewohnheiten, Vorlieben, Abneigungen und wichtige Ereignisse erfragen", "SIS: Eigene Sicht der Person im Eingangsgespräch festhalten", "AEDL nach Krohwinkel: besonders „Mit existenziellen Erfahrungen des Lebens umgehen“ und „Soziale Bereiche des Lebens sichern“", "Maßnahmenplanung: Tagesablauf, Essen, Kleidung und Rituale anpassen", "Evaluation: Prüfen, ob die Angebote der Person guttun"] },
          { link: { bereich: "pflegeprozess", kapitel: "assessment" } }
        ]
      },
      {
        id: "bio_methoden", titel: "Methoden und Gesprächsführung", kurz: "Biografiebogen, Erinnerungspflege, gute Fragen",
        abschnitte: [
          { h: "Informationsquellen" },
          { liste: ["Die Person selbst: Gespräche im Alltag, z. B. bei der Körperpflege", "Angehörige und Freunde, wenn die Person einverstanden ist", "Fotos, Erinnerungsstücke, Musik und Lieblingsgegenstände", "Beobachtung von Verhalten, Vorlieben und Reaktionen", "Überleitungsbogen und frühere Pflegedokumentation"] },
          { h: "Methoden" },
          { tabelle: { kopf: ["Methode", "So geht es"], zeilen: [
            ["Biografiebogen", "Strukturierte Sammlung; Schritt für Schritt ausfüllen, nicht als Verhör"],
            ["Erinnerungspflege", "Einzeln oder in der Gruppe mit Themen wie Schulzeit, Feste, Beruf"],
            ["Erinnerungskiste", "Gegenstände aus früherer Zeit zum Anfassen und Erzählen"],
            ["Lebensbuch", "Fotos und Texte, gemeinsam gestaltet"],
            ["Musik und Düfte", "Vertraute Lieder oder Gerüche wecken Erinnerungen"],
            ["Alltagsaktivität", "Vertraute Tätigkeiten, z. B. Wäsche falten, Gartenarbeit, Backen"]
          ] } },
          { h: "Wichtige Themen" },
          { liste: ["Herkunft, Familie, wichtige Bezugspersonen", "Beruf, Hobbys, Stolz und Erfolge", "Tagesablauf: Aufstehen, Schlafen, Körperpflege, Kleidung", "Essen und Trinken: Vorlieben, Rituale, Abneigungen", "Glaube, Werte, Kultur, Lebensweise", "Einschneidende Ereignisse, Verluste, Ängste", "Wünsche für die Pflege und das Lebensende"] },
          { h: "Gesprächsführung" },
          { liste: ["Ruhigen Moment und passenden Ort wählen", "Offene Fragen stellen: „Wie war das damals für Sie?“", "Aktiv zuhören, Pausen aushalten, nicht bewerten", "Nur so viel fragen, wie die Person erzählen möchte", "Auf Gefühle eingehen und Gespräche behutsam beenden"] },
          { warn: "Keine belastenden Themen „ausgraben“. Wenn jemand traurig wird oder abblockt: Thema wechseln, da sein, bei Bedarf Unterstützung holen." }
        ]
      },
      {
        id: "bio_demenz", titel: "Biografiearbeit bei Demenz", kurz: "Validation, Böhm, Trigger und Beispiele",
        abschnitte: [
          { h: "Warum ist sie bei Demenz so wichtig?" },
          { p: "Das Kurzzeitgedächtnis lässt früher nach als viele alte Erinnerungen. Betroffene leben daher oft in ihrer früheren Lebenswelt. Wer die Biografie kennt, kann Verhalten besser verstehen und passend reagieren. Besonders prägend sind oft Kindheit und junges Erwachsenenalter." },
          { h: "Beispiele aus dem Pflegealltag" },
          { tabelle: { kopf: ["Beobachtung", "Möglicher Hintergrund", "Pflegeidee"], zeilen: [
            ["Unruhe jeden Abend um 17 Uhr", "Früher Feierabend, Kinder von der Schule abholen", "Begleiten, Aufgabe oder Abendritual anbieten"],
            ["Will um 5 Uhr aufstehen", "Früher Landwirtschaft oder Frühschicht", "Tagesablauf anpassen, nicht zum Liegen drängen"],
            ["Lehnt das Duschen ab", "Früher nur Waschen am Becken, Scham, schlimme Erfahrung", "Waschen am Waschbecken, Vorlieben beachten"],
            ["Sammelt Lebensmittel", "Hungerzeiten im Krieg", "Sicherheit geben, Vorrat zeigen, nicht schimpfen"]
          ] } },
          { h: "Passende Konzepte" },
          { tabelle: { kopf: ["Konzept", "Kerngedanke"], zeilen: [
            ["Validation (Naomi Feil)", "Gefühle annehmen und ernst nehmen, statt die Person zu korrigieren"],
            ["Integrative Validation (Nicole Richard)", "Gefühle und Antriebe erkennen und bestätigen, Lebensthemen nutzen"],
            ["Psychobiografisches Modell (Erwin Böhm)", "Prägungen verstehen, um die Seele wiederzubeleben"],
            ["Personzentrierte Pflege (Tom Kitwood)", "Die Person steht im Mittelpunkt, nicht die Krankheit"]
          ] } },
          { merke: "Der DNQP-Expertenstandard „Beziehungsgestaltung in der Pflege von Menschen mit Demenz“ stellt die personzentrierte Haltung in den Mittelpunkt. Das Wissen über die Person ist dafür wichtig." },
          { h: "Trauma und Auslöser" },
          { liste: ["Krieg, Flucht, Gewalt, sexuelle Übergriffe und Verluste können wieder aufbrechen", "Mögliche Auslöser: Sirenen, Enge, Dunkelheit, Duschen, Berührung im Intimbereich", "Abwehr nicht persönlich nehmen, Ruhe bewahren und jeden Schritt ankündigen", "Wunsch nach bestimmter Pflegeperson möglichst berücksichtigen", "Auslöser im Team weitergeben und dokumentieren"] },
          { diagnose: "demenz" }
        ]
      },
      {
        id: "bio_praxis", titel: "Dokumentation, Grenzen und Vielfalt", kurz: "Datenschutz, Kultur, Teamarbeit, Formulierungen",
        abschnitte: [
          { h: "Datenschutz und Schweigepflicht" },
          { liste: ["Biografische Angaben sind besonders persönlich und vertraulich", "Teilnahme ist freiwillig, Einwilligung beachten", "Nur dokumentieren, was für die Pflege wichtig ist", "Im Team nur fachlich und nicht als Gesprächsstoff austauschen", "Schweigepflicht (§ 203 StGB) und Datenschutz (DSGVO) gelten auch hier"] },
          { h: "Gut dokumentieren" },
          { tabelle: { kopf: ["Ungünstig", "Besser"], zeilen: [
            ["„Ist immer schwierig beim Duschen.“", "„Lehnt Duschen ab. Waschen am Waschbecken wird morgens gut angenommen.“"],
            ["„Isst nichts.“", "„Trinkt morgens gern Filterkaffee, mag warmes Frühstück um 8 Uhr, lehnt Fisch ab.“"],
            ["„War im Krieg, deswegen komisch.“", "„Laute Geräusche lösen Angst aus. Tür leise schließen und Maßnahmen ankündigen.“"]
          ] } },
          { h: "Vielfalt achten" },
          { liste: ["Kultur, Religion, Sprache und Migrationsgeschichte erfragen, keine Annahmen treffen", "Rituale, Speisevorschriften, Gebetszeiten und Wünsche zum Sterben berücksichtigen", "Sexuelle Orientierung und geschlechtliche Identität respektieren", "Bei Sprachbarrieren qualifizierte Hilfe nutzen, wenn möglich", "Biografie und eigene Werte auseinanderhalten: Lebensentscheidungen nicht bewerten"] },
          { h: "Grenzen" },
          { liste: ["Pflegende sind keine Therapeutinnen und Therapeuten", "Bei schweren Krisen oder Traumafolgen Fachleute hinzuziehen", "Biografie erklärt Verhalten, sie schreibt es aber nicht fest", "Menschen dürfen ihre Geschichte verschweigen oder anders erzählen", "Eigene Belastung im Team oder in der Supervision ansprechen"] },
          { merke: "Biografiewissen wirkt erst, wenn es im Alltag ankommt: in der Pflegeplanung, im Tagesablauf und in der Übergabe." }
        ]
      }
    ]
  }
];
