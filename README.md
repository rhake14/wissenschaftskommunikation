# Bewerbungsportfolio – Robin Hake

Eine responsive One-Page-Website für die Bewerbung im Bereich Transfer und Wissenschaftskommunikation. Die Seite besteht bewusst nur aus HTML, CSS und JavaScript: keine Installation, kein Build-System, keine Cookies und kein Tracking.

## Website öffnen

Das veröffentlichte Portfolio ist hier erreichbar:

**[https://rhake14.github.io/wissenschaftskommunikation/](https://rhake14.github.io/wissenschaftskommunikation/)**

Für die lokale Vorschau kann alternativ [index.html](index.html) direkt im Browser geöffnet werden.

## 1. Inhalt dieses Ordners

- `index.html` – Inhalt und Struktur der Website
- `styles.css` – Gestaltung, Animationen und responsive Layouts
- `script.js` – Navigation, Scroll-Effekte, Kennzahlen, Hörtest-Auswahl und Medienkarussell
- `assets/favicon.svg` – Browser-Symbol
- `assets/images` – lokal eingebundene ESCOM- und Workshop-Bilder

Porträt, Poster, Publikationsabbildung und StudyBuddies-Logo werden aus dem öffentlichen GitHub-Repository `rhake14/deposit` geladen. Die ESCOM- und Workshop-Bilder liegen lokal im Projekt. Die Hörtests öffnen sich auf `shiny.gold-msi.org`.

## 2. Website lokal ansehen

### Einfachste Methode

`index.html` im Explorer doppelt anklicken. Die Seite öffnet sich im Standardbrowser. Fast alles funktioniert auf diesem Weg bereits.

### Empfohlene Methode: lokaler Webserver

Ein lokaler Webserver bildet die spätere GitHub-Pages-Umgebung zuverlässiger ab.

Wenn Python installiert ist:

1. PowerShell öffnen.
2. In diesen Ordner wechseln:

   ```powershell
   cd "C:\Users\robin\Documents\ChatGPT\Webpage"
   ```

3. Server starten:

   ```powershell
   python -m http.server 8000
   ```

4. Im Browser `http://localhost:8000` aufrufen.
5. Zum Beenden in PowerShell `Strg+C` drücken.

## 3. Vor Veröffentlichung prüfen und anpassen

### E-Mail-Adresse

In `index.html` nach `mailto:` suchen. Momentan wird `robinhake93@gmail.com` verwendet. Falls eine andere Adresse öffentlich erscheinen soll, diese Stelle ändern.

### Bilder

Die Seite nutzt sowohl lokale Bilder unter `assets/images` als auch öffentliche Bilder aus `https://raw.githubusercontent.com/rhake14/deposit/main/`. Die Freigabe der erkennbaren Personen auf den verwendeten Veranstaltungsbildern wurde bestätigt. Die Urheber- und Nutzungsrechte der institutionellen Bildquellen sollten dennoch vor einer langfristigen Nutzung außerhalb dieser Bewerbung separat geklärt werden.

Wenn Bilder lieber direkt mit der Website veröffentlicht werden sollen:

1. Einen Ordner `assets/images` anlegen.
2. Bilder dort hineinkopieren, zum Beispiel `portrait.png`.
3. In `index.html` die externe Adresse durch `assets/images/portrait.png` ersetzen.

### Hörtest-Links

Vor Veröffentlichung alle Optionen manuell testen:

- MSA: `https://shiny.gold-msi.org/longgold_demo/?test=MSA`
- BAT: `https://shiny.gold-msi.org/longgold_demo/?test=BAT`
- RAT: `https://shiny.gold-msi.org/longgold_demo/?test=RAT`
- EDT: `https://shiny.gold-msi.org/longgold_demo/?test=EDT`
- MDT: `https://shiny.gold-msi.org/longgold_demo/?test=MDT`

Die Tests sollten in einem privaten Browserfenster sowie auf dem Smartphone geprüft werden. Falls nur der MSA-Test zuverlässig funktioniert, können die BAT- und RAT-Schaltflächen aus dem Abschnitt `challenge-options` in `index.html` entfernt werden.

### Inhaltliche Fakten

Vor Veröffentlichung besonders diese Angaben noch einmal mit dem Lebenslauf abgleichen:

- mehr als 30 Konferenzen, Workshops und Summer Schools
- mehr als 15 Vorträge und mehr als 20 Posterpräsentationen
- mehr als 2.000 Teilnehmende in empirischen Experimenten, Befragungen und Interviews
- drei Open-Source-Testplattformen und Forschungsdatensätze
- Zeiträume und Rollen bei Golden Ear Challenge, ESCOM und Workshops

## 4. GitHub-Repository erstellen

Die folgenden Schritte benötigen ein GitHub-Konto.

1. Auf `https://github.com/new` gehen.
2. Als Repository-Namen beispielsweise `wissenschaftskommunikation` eingeben.
3. Eine kurze Beschreibung ergänzen, zum Beispiel: `Bewerbungsportfolio – Transfer und Wissenschaftskommunikation`.
4. `Public` auswählen. GitHub Pages ist bei einem kostenlosen persönlichen Konto für öffentliche Repositories verfügbar.
5. **Nicht** zusätzlich README, `.gitignore` oder Lizenz erzeugen lassen, da die Dateien bereits lokal existieren.
6. `Create repository` wählen.

## 5. Dateien über die GitHub-Weboberfläche hochladen

Das ist der einfachste Weg ohne Git-Befehle:

1. Im gerade erstellten Repository `uploading an existing file` oder `Add file → Upload files` wählen.
2. Diese vier Elemente in das Upload-Feld ziehen:
   - `index.html`
   - `styles.css`
   - `script.js`
   - den gesamten Ordner `assets`
3. Prüfen, ob anschließend auch `assets/favicon.svg` in der Vorschau erscheint.
4. Als Commit-Nachricht `Erste Version des Bewerbungsportfolios` eingeben.
5. `Commit changes` wählen.

## 6. GitHub Pages aktivieren

1. Im Repository oben `Settings` öffnen.
2. Links unter `Code and automation` den Punkt `Pages` wählen.
3. Unter `Build and deployment`:
   - `Source`: **Deploy from a branch**
   - `Branch`: **main**
   - Ordner: **/(root)**
4. `Save` wählen.
5. Ein bis fünf Minuten warten und die Seite neu laden.
6. GitHub zeigt anschließend oben die veröffentlichte Adresse an. Sie hat normalerweise diese Form:

   `https://rhake14.github.io/wissenschaftskommunikation/`

7. Den Link in einem privaten Browserfenster öffnen und vollständig testen.

## 7. Alternative: Veröffentlichung mit Git-Befehlen

Diese Variante ist praktisch, wenn später häufiger Änderungen erfolgen. Im neuen leeren GitHub-Repository wird eine URL angezeigt, beispielsweise `https://github.com/rhake14/wissenschaftskommunikation.git`.

In PowerShell im Website-Ordner:

```powershell
git init
git add index.html styles.css script.js assets
git commit -m "Erste Version des Bewerbungsportfolios"
git branch -M main
git remote add origin https://github.com/rhake14/wissenschaftskommunikation.git
git push -u origin main
```

Danach GitHub Pages wie in Abschnitt 6 aktivieren.

## 8. Spätere Änderungen veröffentlichen

### Über die GitHub-Weboberfläche

1. Gewünschte Datei im Repository öffnen.
2. Auf das Stiftsymbol `Edit this file` klicken.
3. Änderungen eintragen.
4. `Commit changes` wählen.

### Lokal mit Git

Nach Änderungen im lokalen Ordner:

```powershell
git add .
git commit -m "Portfolio aktualisiert"
git push
```

GitHub Pages veröffentlicht die neue Version normalerweise automatisch innerhalb weniger Minuten. Gegebenenfalls im Browser mit `Strg+F5` neu laden, damit der Cache umgangen wird.

## 9. Empfohlener Veröffentlichungstest

Die fertige URL in diesen Situationen prüfen:

1. Desktop-Browser bei normaler Fenstergröße.
2. Smartphone hochkant.
3. Privates/Inkognito-Fenster, damit keine GitHub-Anmeldung oder alter Cache hilft.
4. Jede Navigation im Kopfbereich anklicken.
5. Alle externen Projektlinks anklicken.
6. Im Hörlabor jede Auswahl anklicken und kontrollieren, ob der richtige Test öffnet.
7. Das Posterkarussell horizontal bewegen und mehrere Motive vergrößern.
8. Den E-Mail-Button sowie GitHub und Google Scholar testen.
9. Langsam durch die gesamte Seite scrollen und auf fehlende Bilder oder Textfehler achten.

## 10. Link in der Bewerbung verwenden

Im Anschreiben oder Lebenslauf eignet sich eine kurze, sachliche Formulierung:

> Ein interaktives Portfolio mit Beispielen meiner Arbeit im Wissenstransfer und in der Wissenschaftskommunikation finden Sie unter: **[URL]**

Zusätzlich kann die URL als klickbarer Link hinter `Interaktives Bewerbungsportfolio` gesetzt werden. Eine lange technische Erklärung ist in der Bewerbung nicht nötig – die Website soll ihre Wirkung selbst entfalten.

## 11. Optional: eigene Domain

Eine eigene Domain ist für die aktuelle Bewerbung nicht erforderlich. Falls später eine Domain gekauft wird, kann sie unter `Settings → Pages → Custom domain` eingetragen werden. Bis die Bewerbung abgeschickt ist, ist die Standardadresse von GitHub Pages die schnellere und risikoärmere Lösung.

## 12. Datenschutz und Veröffentlichung

- Die Website selbst setzt keine Cookies und verwendet keine Analysedienste.
- Beim Aufruf externer Bilder stellt der Browser eine Verbindung zu GitHub her.
- Beim Start eines Hörtests wird eine externe Website geöffnet; deren Bedingungen gelten dort separat.
- Keine Privatadresse, Geburtsdaten oder Informationen zu Familienangehörigen veröffentlichen.
- Bildrechte und Einwilligungen erkennbarer Personen vor Veröffentlichung selbst prüfen.
