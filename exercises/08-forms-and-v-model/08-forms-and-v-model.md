# 08 – Forms & v-model

## Ziel
In dieser Übung lernst du, wie du Formulare mit **`v-model`** in Vue erstellst
und Benutzereingaben reaktiv anzeigst.
Du ergänzt das Post-Overlay um ein Kommentarformular, bei dem neue Kommentare direkt im Kommentarbereich erscheinen.

---

## Ausgangspunkt
In deiner App existiert bereits:
- Ein **Post-Overlay** (`PostOverlay.vue`), das Bild, Titel und Likes eines Beitrags anzeigt.
- Ein **Kommentarbereich** (`<div class="comments">`), in dem die Kommentare erscheinen sollen.
- Das **Formular** mit einem Eingabefeld und Button ist im Template schon enthalten.
- Die **CSS-Styles** und Grundlogik (Array `comments`, Funktion `addComment()`) sind bereits vorbereitet.

---

## Aufgabe

1. Lege eine neue reaktive Variable an, die das aktuelle Texteingabefeld des Benutzers speichert.
   Diese Variable soll automatisch mit dem Eingabefeld verbunden werden.

2. Verbinde das Eingabefeld mit dieser Variable:
   - Verwende dazu die Direktive `v-model` im `<input>`-Element.

3. Implementiere die Logik in der Funktion `addComment()`:
   - Wenn der eingegebene Kommentar **nicht leer** ist:
     - Füge den Wert in das Array `comments` ein.
     - Leere danach das Eingabefeld, damit ein neuer Kommentar geschrieben werden kann.

4. Sorge dafür, dass im Template die Kommentare automatisch aktualisiert angezeigt werden.

---

## Challenge
Erweitere das Formular später so, dass:
- der Kommentar auch per **Enter-Taste** abgeschickt werden kann (`@keyup.enter="addComment"`).
- der Kommentartext automatisch **getrimmt** wird (keine Leerzeichen am Anfang/Ende).
