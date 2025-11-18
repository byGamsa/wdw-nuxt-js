# 09 – Project Setup (Nuxt)

## Ziel
In dieser Übung lernst du, wie du ein neues **Nuxt-Projekt** erstellst und für die Entwicklung vorbereitest.  
Nach Abschluss dieser Aufgabe hast du eine funktionsfähige Grundstruktur, auf der du in weiteren Übungen aufbauen kannst.

## Voraussetzungen
- Node.js (empfohlen: **Version 18 oder höher**)  
- Ein Code-Editor, z. B. **Visual Studio Code**

## Aufgabe

1. **Neues Nuxt-Projekt erstellen**  
   Öffne ein Terminal und führe folgenden Befehl aus:
   ```bash
   npm create nuxt@latest
   ```

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
   > Öffne den angezeigten lokalen Link (z. B. `http://localhost:3000`) im Browser, um deine Nuxt-App zu sehen.

5.  **Ordner anlegen**\
    Lege im `app/`-Verzeichnis folgende Ordner an, falls sie noch nicht
    existieren:

    ``` text
    app/
    ├─ layouts/
    ├─ pages/
    └─ components/
    ```

    -   **layouts/** -- enthält Layout-Dateien, die als Rahmen für
        Seiten dienen\
    -   **pages/** -- enthält alle seitenbasierten Routen\
    -   **components/** -- enthält wiederverwendbare UI-Komponenten

6.  **Projektdateien übertragen**\
    Übertrage nun die bereitgestellten components aus `08-forms-and-v-model/solutions/src/components` in den neu angelegten components Ordner

7.  **Weiteres Setup**

    ### 7.1 Layout-Datei anlegen

    Lege in `app/layouts/` eine Datei namens **default.vue** an.

    Inhalt der Datei (Grundstruktur):

    ``` vue
    <template>
      <div class="app">
        <!-- Sidebar Bereich -->
        <Sidebar />

        <!-- Hauptinhalt -->
        <NuxtPage />

        <!-- Footer -->
        <footer class="footer">
          Footer Bereich
        </footer>
      </div>
    </template>

    <script setup>
      import Sidebar from '../components/Sidebar.vue'
    </script>
    ``` 

    ### 7.2 Seite für Homepage anlegen

    Lege in `pages/` eine neue Datei **index.vue** an und füge den Inhalt aus `08-forms-and-v-model/solution/src/App.vue` hier ein

    ### 7.3 App.vue anpassen

    Öffne **app.vue** und ersetze den Inhalt durch:

    ``` vue
    <template>
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </template>
    ``` 
