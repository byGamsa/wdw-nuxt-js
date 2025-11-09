# 05 – List Rendering

## Ziel
In dieser Übung lernst du, wie du mit der Vue-Direktive `v-for` Daten aus einer Liste dynamisch im Template renderst.

## Ausgangspunkt
In deinem Profil gibt es bereits den Post-Bereich (`.posts`), der bisher nur anzeigt: Noch keine Beiträge vorhanden
Im Skript ist nun eine Liste von Posts vorbereitet.
Jeder Post besitzt folgende Eigenschaften:

| Eigenschaft | Beschreibung         | Beispielwert |
|--------------|----------------------|---------------|
| `id`         | Eindeutige ID        | 1 |
| `title`      | Titel des Beitrags   | "Campus bei Nacht" |
| `likes`      | Anzahl der Likes     | 42 |
| `imageUrl`   | Bildpfad oder URL    | "https://..." |

## Aufgabe
1. **Bedingte Anzeige:**
   - Wenn `posts` leer ist, soll ein Text erscheinen:
     **„Noch keine Beiträge vorhanden“**
   - Wenn `posts` **Einträge enthält**, soll dieser Hinweis verschwinden und stattdessen die Galerie mit den Posts erscheinen.

2. **Rendering mit `v-for`:**
   - Iteriere mit `v-for` über das `posts`-Array.
   - Verwende für jedes Element einen eindeutigen Schlüssel (`:key="post.id"`).

3. **Verwende folgende CSS-Klassen**, um die Galerie korrekt darzustellen:
   - `posts` – umschließt den gesamten Post-Bereich
   - `post-list` – Container für die gesamte Post-Galerie (Grid)
   - `post-card` – einzelne Post-Kachel
   - `post-info` – Bereich für Titel und Like-Zahl im Overlay
   - `title` – Titeltext im Overlay
   - `likes` – Like-Anzeige mit Herzsymbol (CSS-Icon)