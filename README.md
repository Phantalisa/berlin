# BDP Mädchen*treff Berlin Spandau Website

Diese Website wurde für den BDP Mädchen*treff in Berlin Spandau erstellt. Die Struktur ist nun mit wiederverwendbaren Komponenten gestaltet, damit die Website leicht zu warten und zu aktualisieren ist.

## Dateistruktur

```
maedchentreff/
├── index.html                 # Startseite
├── impressum.html             # Impressum
├── components/                # Wiederverwendbare Komponenten
│   ├── header.html            # Header mit Navigation
│   ├── footer.html            # Footer
│   └── meta.html              # <head> Inhalte (Meta-Tags, CSS)
├── js/
│   └── component-loader.js    # Script zum Laden der Komponenten
├── images/                    # Bilder-Verzeichnis
├── styles/                    # CSS-Dateien
│   ├── variables.css          # CSS-Variablen (Farben, Fonts, etc.)
│   ├── main.css               # Haupt-Stylesheet
│   └── flyer-elements.css     # Spezielle Design-Elemente
└── pages/                     # Unterseiten
    ├── maedchentreff.html     # Über den Mädchentreff
    ├── u16-wahlen.html        # Infos zu U16-Wahlen
    ├── aktivitaeten.html      # Aktivitäten-Übersicht
    ├── projekte-self.html     # SELF-Projekt
    ├── projekte-girls-talk.html # Girls Talk-Projekt
    ├── kontakt.html           # Kontaktformular und -infos
    └── frauenberatungsstellen.html # Beratungsstellen-Liste
```

## Komponenten-System

Die Website verwendet ein einfaches Komponenten-System für gemeinsam genutzte Elemente:

1. **Komponenten**: Wiederverwendbare HTML-Fragmente in `/components/`:
   - `header.html`: Navigation
   - `footer.html`: Footer
   - `meta.html`: Meta-Tags und CSS-Links

2. **Component Loader**: Das JavaScript unter `js/component-loader.js` lädt diese Komponenten dynamisch.

## Wie man die Website aktualisiert

### Bearbeiten vorhandener Seiten

1. Öffne die HTML-Datei, die du bearbeiten möchtest, in einem Text-Editor.
2. Der Inhalt der Seite befindet sich im `<main>` Bereich - bearbeite nur diesen Teil.
3. Die Navigation, Header und Footer sind jetzt Komponenten und müssen nur einmal aktualisiert werden.
4. Speichere die Datei und teste die Änderungen in einem Browser.

### Aktualisieren der Navigation

1. Öffne die Datei `components/header.html`.
2. Bearbeite die Navigation im `<nav class="main-nav">` Bereich.
3. Da die Navigation dynamisch in jede Seite geladen wird, musst du die Änderungen nur einmal vornehmen.

### Erstellen einer neuen Seite

1. Kopiere eine bestehende Seite, die der neuen Seite am ähnlichsten ist.
2. Behalte die Komponenten-Struktur bei:

```html
<!DOCTYPE html>
<html lang="de">
<head>
    <div data-include="../components/meta.html"></div>
</head>
<body>
    <div data-include="../components/header.html"></div>

    <main class="content-page" data-page-title="Seitentitel - MÄDCHEN*TREFF">
        <!-- Seiteninhalt hier -->
    </main>

    <div data-include="../components/footer.html"></div>
    <script src="../js/component-loader.js"></script>
</body>
</html>
```

3. Bearbeite den Inhalt im `<main>` Bereich.
4. Füge einen Eintrag zur Navigation in `components/header.html` hinzu.

## Wichtig: Seitentitel definieren

Jede Seite kann ihren eigenen Titel haben, indem du das Attribut `data-page-title` im `<main>` Element setzt:

```html
<main data-page-title="Mein Seitentitel - MÄDCHEN*TREFF">
```

## GitHub Pages Deployment

Diese Website kann direkt über GitHub Pages veröffentlicht werden:

1. Lade die Dateien in ein GitHub Repository hoch
2. Aktiviere GitHub Pages in den Repository-Einstellungen 
3. Wähle als Quelle den `main` Branch aus
4. Die Website ist dann unter `https://[dein-username].github.io/[repository-name]/` erreichbar

## Lokales Testen

Beim Testen der Website lokal sollte ein einfacher Webserver verwendet werden, damit die Komponenten korrekt geladen werden:

```
# Mit Python (empfohlen)
python -m http.server

# Oder mit Node.js
npx serve
```

## Kontakt für technische Unterstützung

Bei technischen Fragen oder Problemen mit der Website, wende dich bitte an:

[Kontaktinformationen des Webmasters/der IT-Unterstützung einfügen]
