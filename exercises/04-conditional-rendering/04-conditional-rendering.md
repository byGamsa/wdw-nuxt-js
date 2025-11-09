# 04 – Conditional Rendering

## Ziel
In dieser Übung lernst du, wie du Inhalte im Template abhängig von Bedingungen anzeigst.
Dafür verwenden wir die Vue-Direktiven `v-if`, `v-else` und `v-show`.

## Ausgangspunkt
Dein Profil enthält nun bereits:
- Avatar, Benutzername und Statistik
- Social-Link
- Follow-/Unfollow-Buttons
Unterhalb des Profils ist ein leerer **Post-Bereich** vorbereitet.

## Aufgabe
1. Definiere im `<script setup>` eine neue reaktive Variable `hasPosts` mit `ref(false)`.
2. Im Template, innerhalb des `<div class="posts">`, soll Folgendes geschehen:
   - Wenn `hasPosts` **false** ist, soll der Text **„Noch keine Beiträge vorhanden“** angezeigt werden.
   - Wenn `hasPosts` **true** ist, soll der Text **„Beiträge werden geladen...“** erscheinen.
3. Verwende dafür die Vue-Direktive `v-if` und `v-else`.
