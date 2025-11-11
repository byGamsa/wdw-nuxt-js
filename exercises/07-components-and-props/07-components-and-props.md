# 07 – Components and Props

## Ziel
In dieser Übung lernst du, wie man wiederverwendbare Komponenten erstellt und mit **Props** und **Events** zwischen Parent und Child kommuniziert.
Du lagerst den Overlay-Container, der beim Klick auf einen Post erscheint, in eine eigene Komponente aus.

---

## Ausgangspunkt
In der App ist aktuell noch der **Overlay-Container direkt in `App.vue`** eingebaut.
Dieser zeigt das ausgewählte Bild (`selectedPost`) und enthält den Schließen-Button.

Deine Aufgabe ist es nun, diesen Code in eine neue Datei zu verschieben.

---

## Aufgabenstellung

1. **Erstelle eine neue Komponente** im Ordner `components/`
   → Dateiname: **`PostOverlay.vue`**

2. **Kopiere den HTML-Code** des Overlay-Containers aus `App.vue`
   (alles zwischen `<div v-if="selectedPost" class="overlay"> ... </div>`)

3. **Erstelle Props** für die Komponente:
   - `post` – das aktuell ausgewählte Post-Objekt
   - `avatarImageRef` – das Profilbild
   - `username` – den Namen des Accounts

4. **Erstelle ein Custom-Event**, um das Overlay zu schließen:
   - `defineEmits(['close'])`
   - Der Close-Button und der Klick auf den Hintergrund sollen das Event auslösen.

5. **Binde das neue Event und die Props** in `App.vue` ein:
   - Importiere `PostOverlay`
   - Verwende sie nur noch so:

     ```vue
     <PostOverlay
       v-if="selectedPost"
       :post="selectedPost"
       :avatarImageRef="avatarImageRef"
       :username="username"
       @close="closePost"
     />
     ```

6. **Entferne den alten Overlay-Code** aus `App.vue`.
   Nur die neue Komponente soll jetzt die Anzeige übernehmen.
