# 06 – Event Handling

## Ziel
In dieser Übung lernst du, wie man auf Benutzeraktionen (Events) reagiert und mit Methoden arbeitet.
Du implementierst die Logik, um auf Klick einen Beitrag groß in der Mitte des Bildschirms anzuzeigen.

---

## Ausgangspunkt
Deine Anwendung zeigt bereits eine Galerie mit mehreren Posts.
In dieser Übung ist zusätzlich ein **Container für die Bildvorschau (Post-Overlay)** vorbereitet.
Dieser Container ist unsichtbar, bis du ihn über JavaScript aktivierst.

Die CSS- und HTML-Struktur ist also schon da – du sollst **nur die Logik** implementieren.

---

## Aufgabe
1. Erstelle eine neue reaktive Variable `selectedPost` mit `ref(null)`.
   - Diese Variable soll das aktuell angeklickte Post-Objekt speichern.
2. Schreibe eine Funktion `openPost(post)`, die:
   - das angeklickte Post-Objekt in `selectedPost` speichert.
3. Füge bei jedem Post in der Liste das Click-Event hinzu
4. Die Anzeige des Overlays ist bereits an `selectedPost` gebunden.
5. Implementiere außerdem die Funktion `closePost()`,
   - die `selectedPost` wieder auf `null` setzt.

> **Wichtig:** Der Overlay-Container und sein Stil sind schon vorhanden — du musst nichts daran ändern.
> Du sollst nur die Logik schreiben, um ihn zu öffnen und zu schließen.

---

## Challenge
- Füge später eine zusätzliche Logik hinzu, sodass man auch durch Klicken außerhalb des Bildes das Overlay schließen kann.
