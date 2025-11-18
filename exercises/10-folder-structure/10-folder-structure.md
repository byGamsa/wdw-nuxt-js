# 10 Folder Structure

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
    Übertrage nun die bereitgestellten components aus `app/assets` in den neu angelegten components Ordner

    - Sidebar, PostOverlay, PostList (sowohl .vue als auch .css)

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
      </div>
    </template> 
    ``` 

    ### 7.2 Seite für Homepage anlegen

    Lege in `pages/` eine neue Datei **index.vue** an und füge den Inhalt aus `app/assets/App.vue` hier ein.
    Verschiebe auch die `app/assets/index.css` in `pages/`.

    ### 7.3 App.vue anpassen

    Öffne **app.vue** und ersetze den Inhalt durch:

    ``` vue
    <template>
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </template>
    ``` 
