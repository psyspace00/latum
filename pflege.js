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
          { h: "Einteilung (Erwachsene, Praxismessung, ESC/ESH)" },
          { tabelle: { kopf: ["Kategorie", "Systolisch (mmHg)", "Diastolisch (mmHg)"], zeilen: [
            ["Optimal", "< 120", "< 80"],
            ["Normal", "120–129", "80–84"],
            ["Hoch-normal", "130–139", "85–89"],
            ["Hypertonie Grad 1", "140–159", "90–99"],
            ["Hypertonie Grad 2", "160–179", "100–109"],
            ["Hypertonie Grad 3", "≥ 180", "≥ 110"]
          ] } },
          { p: "Hypotonie: meist systolisch unter 100 mmHg (bei Frauen unter ca. 100/60). Orthostatische Hypotonie: Abfall um ≥ 20 mmHg systolisch oder ≥ 10 mmHg diastolisch innerhalb von 3 Minuten nach dem Aufstehen (Schellong-Test)." },
          { h: "Fehlerquellen" },
          { tabelle: { kopf: ["Fehler", "Auswirkung"], zeilen: [
            ["Manschette zu schmal / zu locker", "Wert zu hoch"],
            ["Manschette zu breit", "Wert zu niedrig"],
            ["Arm unter Herzhöhe", "Wert zu hoch"],
            ["Zu schnelles Ablassen", "Systole zu niedrig, Diastole zu hoch abgelesen"],
            ["Messung nach Belastung, Sprechen, Kälte", "Wert zu hoch"]
          ] } },
          { h: "Maßnahmen" },
          { liste: ["Hypertensive Entgleisung (z. B. > 180/120 mit Beschwerden): Oberkörper hoch, Ruhe, Kontrolle, Arzt sofort", "Hypotonie mit Schwindel: Flachlagerung, Beine hoch (Schocklage nach Anordnung), langsam mobilisieren", "Engmaschige Kontrollen und Dokumentation"] }
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
        id: "physiologie", titel: "Physiologie", kurz: "Herzzyklus, Herzzeitvolumen, Blutdruckregulation",
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
        id: "erkrankungen_herz", titel: "Herzerkrankungen", kurz: "Hypertonie, KHK, Herzinfarkt, Herzinsuffizienz, Vorhofflimmern",
        abschnitte: [
          { h: "Arterielle Hypertonie" },
          { liste: ["Dauerhaft erhöhter Blutdruck ≥ 140/90 mmHg; meist primär (essenziell)", "Folgen: Herzinfarkt, Schlaganfall, Herzinsuffizienz, Niereninsuffizienz", "Pflege: regelmäßige RR-Kontrolle, Medikamenteneinnahme, Beratung zu salzarmer Kost, Bewegung, Gewichtsreduktion, Nikotinverzicht"] },
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
    id: "ernaehrung", titel: "Ernährung", untertitel: "Nährstoffe, Dysphagie, Kostformen, PEG, Bilanz", icon: "apfel",
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
          { liste: ["Energie: Grundumsatz ca. 1 kcal pro kg Körpergewicht pro Stunde; Gesamtbedarf abhängig von Aktivität", "Eiweiß: ca. 0,8 g/kg/Tag, bei älteren und kranken Menschen ca. 1,0–1,2 g/kg/Tag", "Flüssigkeit: ca. 30–35 ml/kg/Tag (etwa 1,5–2 l Trinkmenge), außer bei ärztlicher Beschränkung"] },
          { h: "Ernährungszustand einschätzen" },
          { tabelle: { kopf: ["BMI (kg/m²)", "Einteilung (WHO)"], zeilen: [
            ["< 18,5", "Untergewicht"],
            ["18,5–24,9", "Normalgewicht"],
            ["25,0–29,9", "Präadipositas (Übergewicht)"],
            ["≥ 30", "Adipositas"]
          ] } },
          { p: "BMI = Körpergewicht (kg) ÷ Körpergröße² (m²). Bei älteren Menschen gilt ein BMI unter ca. 20 bereits als Hinweis auf eine Mangelernährung. Screening-Instrumente: MNA (Mini Nutritional Assessment), NRS 2002, MUST. Grundlage: Expertenstandard „Ernährungsmanagement zur Sicherung und Förderung der oralen Ernährung in der Pflege“." },
          { merke: "Warnzeichen für Mangelernährung: ungewollter Gewichtsverlust (> 5 % in 3 Monaten), Essensreste, Kau- und Schluckprobleme, Appetitlosigkeit, lockere Kleidung." }
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
  }
];
