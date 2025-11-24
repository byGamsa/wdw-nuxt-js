# 11 – Routing

## Ziel
In dieser Übung lernst du, wie du mit **Nuxt 3 Routing** arbeitest, dynamische Seitenparameter nutzt und Navigation über die Sidebar steuerst.  
Am Ende kannst du zwischen Startseite, Profilen und Einstellungen wechseln – mit echten Nuxt-Routen.

---

## Ausgangspunkt
Dein Projekt besteht bereits aus folgenden Seiten:

- `pages/index.vue` → Startseite  
- `pages/profile/[username].vue` → Profilseite (dynamisch)  
- `pages/settings.vue` → Einstellungen  

In der Sidebar ist aktuell noch kein Routing aktiv. Das sollst du jetzt ändern.

---

## Aufgabe

### 1. Sidebar mit Navigation erweitern
Öffne die Datei `components/Sidebar.vue` und ersetze die bisherigen statischen Elemente durch **NuxtLinks**:
  
> Diese Links führen:
> - zur Startseite "/"
> - zum eigenen Profil (Standard-Username: `hdm.stuttgart`)  "/profile"
> - zur Einstellungsseite "/settings"

Die Sidebar bleibt durch das globale Layout (`layouts/default.vue`) auf allen Seiten sichtbar.

---

### 2. Dynamisches Profil-Routing verstehen
In Nuxt 3 erzeugt eine Datei wie `pages/profile/[username].vue` automatisch eine **dynamische Route**,  
die z. B. unter `/profile/hdm.stuttgart` oder `/profile/max.mustermann` erreichbar ist.

Du musst in dieser Datei also nur noch den Parameter auslesen.

---

### 3. Profilseite anpassen

In deiner Datei `pages/profile/[username].vue` befindet sich dieser Abschnitt:

```vue
<div class="text-info">
  <h2 class="username">{{ username }}</h2>
  <p class="fullname">{{ fullname }}</p>

  <div class="stats">
    <span><strong>{{ stats.posts }}</strong> Beiträge</span>
    <span><strong>{{ stats.followers }}</strong> Follower</span>
    <span><strong>{{ stats.following }}</strong> Gefolgt</span>
  </div>
</div>
```

Ändere die Variable `username`, sodass sie dynamisch aus der aktuellen Route gelesen wird.
 

Damit wird der Profilname automatisch aus der URL geladen.

Beispiel:
- `/profile/hdm.stuttgart` → zeigt Profil von „hdm.stuttgart“
- `/profile/anna.mueller` → zeigt Profil von „anna.mueller“ 

## Challenge
- Ergänze eine **Fallback-Route** (`pages/profile/[username].vue`), die prüft, ob ein Profil nicht existiert,  
  und eine Meldung anzeigt: „Profil wurde nicht gefunden.“