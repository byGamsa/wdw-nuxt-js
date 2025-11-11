# 01 – Project Setup

## Ziel
In dieser Übung lernst du, wie du ein neues Vue.js-Projekt einrichtest und startklar machst.  
Nach Abschluss dieser Aufgabe hast du eine funktionierende Grundstruktur, in der du mit den weiteren Übungen fortfahren kannst.

## Voraussetzungen
- Node.js (empfohlen: Version 18 oder höher)  
- Ein Code-Editor, z. B. **Visual Studio Code**

## Aufgabe
1. **Neues Projekt erstellen**  
   Öffne ein Terminal und führe folgenden Befehl aus:
   ```bash
   npm create vue@latest
   ```
   > 💡 Wenn du gefragt wirst, ob du zusätzliche Features (z. B. TypeScript, Router, Pinia) aktivieren möchtest, kannst du zunächst alle deaktivieren, um einfach zu starten.

2. **Projektverzeichnis öffnen**
   ```bash
   cd <projektname>
   ```

3. **Abhängigkeiten installieren**
   ```bash
   npm install
   ```

4. **Entwicklungsserver starten**
   ```bash
   npm run dev
   ```
   > Öffne den angezeigten lokalen Link (z. B. `http://localhost:5173`) in deinem Browser, um die laufende Anwendung zu sehen.

5. **Projektstruktur prüfen**  
   - `src/App.vue` enthält die Hauptkomponente  
   - `src/components` ist der Ordner für eigene Komponenten  
   - `main.js` (oder `main.ts`) startet die App und bindet sie im Browser ein  