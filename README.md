# BDP Mädchen*treff Berlin Spandau Website

Diese Website wurde für den BDP Mädchen*treff in Berlin Spandau erstellt. Die Struktur ist bewusst einfach gehalten, damit die Website leicht zu warten und zu aktualisieren ist.

## Dateistruktur

```
maedchentreff/
├── index.html                 # Startseite
├── impressum.html             # Impressum
├── images/                    # Bilder-Verzeichnis
├── styles/                    # CSS-Dateien
│   ├── variables.css          # CSS-Variablen (Farben, Fonts, etc.)
│   └── main.css               # Haupt-Stylesheet
└── pages/                     # Unterseiten
    ├── maedchentreff.html     # Über den Mädchentreff
    ├── u16-wahlen.html        # Infos zu U16-Wahlen
    ├── aktivitaeten.html      # Aktivitäten-Übersicht
    ├── projekte-self.html     # SELF-Projekt
    ├── projekte-girls-talk.html # Girls Talk-Projekt
    ├── kontakt.html           # Kontaktformular und -infos
    └── frauenberatungsstellen.html # Beratungsstellen-Liste
```

## Wie man die Website aktualisiert

### Bearbeiten vorhandener Seiten

1. Öffne die HTML-Datei, die du bearbeiten möchtest, in einem Text-Editor.
2. Suche den Bereich, den du ändern möchtest. Der HTML-Code ist mit Kommentaren versehen, die dir helfen, die verschiedenen Abschnitte zu finden.
3. Nimm deine Änderungen vor und speichere die Datei.
4. Öffne die Seite in einem Browser, um deine Änderungen zu überprüfen.

### Erstellen einer neuen Seite

1. Kopiere eine bestehende Seite, die der neuen Seite am ähnlichsten ist (z.B. aus dem Verzeichnis `pages/`).
2. Benenne die Kopie um und speichere sie im `pages/`-Verzeichnis.
3. Passe den Inhalt der Seite an (Titel, Überschriften, Text, etc.).
4. Füge einen Link zur neuen Seite in die Navigation aller anderen Seiten ein:
   - In der `index.html` und `impressum.html` Datei
   - In allen Dateien im `pages/`-Verzeichnis

### Navigation aktualisieren

Die Navigation befindet sich im `<header>`-Bereich jeder HTML-Datei. Um einen neuen Menüpunkt hinzuzufügen, füge einen neuen `<li>`-Eintrag hinzu:

```html
<li><a href="pfad/zur/neuen-seite.html">Neuer Menüpunkt</a></li>
```

Für ein Dropdown-Menü:

```html
<li class="dropdown">
    <a href="#">Dropdown-Titel</a>
    <ul class="dropdown-content">
        <li><a href="pfad/zur/neuen-seite.html">Neuer Unterpunkt</a></li>
    </ul>
</li>
```

### Styling anpassen

- Farben, Schriftarten und andere grundlegende Stilelemente sind in `styles/variables.css` definiert.
- Layout und detaillierte Stile sind in `styles/main.css` definiert.

## Wichtig: Pfade zu Dateien

- Verwende relative Pfade für Links innerhalb der Website:
  - Von Hauptverzeichnis zu Hauptverzeichnis: `impressum.html`
  - Von Hauptverzeichnis zu Unterseite: `pages/maedchentreff.html` 
  - Von Unterseite zu Hauptverzeichnis: `../index.html`
  - Von Unterseite zu Unterseite: `aktivitaeten.html` (wenn in gleichem Verzeichnis)
  - Zu CSS-Dateien von Hauptverzeichnis: `styles/main.css`
  - Zu CSS-Dateien von Unterseiten: `../styles/main.css`

## Kontakt für technische Unterstützung

Bei technischen Fragen oder Problemen mit der Website, wende dich bitte an:

[Kontaktinformationen des Webmasters/der IT-Unterstützung einfügen]
