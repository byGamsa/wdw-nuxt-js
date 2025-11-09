# 03 – Attribute-Binding

## Ziel
In dieser Übung lernst du, wie man mit der Vue-Direktive `v-bind` (oder der Kurzform `:`) reaktive Daten an HTML-Attribute bindet.

## Ausgangspunkt
Deine Anwendung zeigt bereits ein Profil mit Avatar, Name, Statistik und Beschreibung.
Jetzt soll ein **Social Link** hinzugefügt werden, der auf die externe Webseite oder ein Social-Media-Profil verweist.

## Aufgabe
1. Definiere im `<script setup>`-Bereich eine neue reaktive Variable `socialLink` mit `ref()`.
2. Diese Variable soll eine vollständige URL enthalten (z. B. zur offiziellen Website oder einem Instagram-Profil).
3. Binde diese `socialLink`-Variable im Template mit `v-bind` an das `href`-Attribut eines `<a>`-Tags.
4. Füge den Link **unterhalb der Beschreibung** (`.description`) ein.
5. Gib dem Link die CSS-Klasse `social-link`.

> Hinweis: Verwende die Schreibweise `v-bind:href`, um das Konzept klar zu üben.
