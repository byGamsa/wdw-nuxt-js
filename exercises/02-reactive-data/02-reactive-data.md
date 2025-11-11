# 02 – Reactive Data

## Ziel
In dieser Übung lernst du, wie du mit der Vue-Funktion `ref()` reaktive Daten erzeugst und diese dynamisch im Template anzeigst.

## Ausgangspunkt
Deine Anwendung enthält bereits:
- Ein Benutzerprofil mit `username`, `fullname` und `stats`
- Eine Sidebar und einen Profil-Bereich im Layout

## Aufgabe
1. Definiere im `<script setup>`-Bereich eine neue reaktive Variable namens `bio` mit `ref()`.
2. Diese Variable soll einen kurzen Beschreibungstext (Bio) des Benutzers enthalten.
3. Binde diese bio-Variable im Template unterhalb der Statistik ein. Verwende dafür ein `p` Element.
4. Verwende für das neue Element die CSS-Klasse `bio`.