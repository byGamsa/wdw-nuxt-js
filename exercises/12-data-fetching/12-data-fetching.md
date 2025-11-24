## 🧩 Lab 12: Data Fetching in Vue/Nuxt

### Ziel der Übung

In dieser Übung lernst du, wie du **Kommentare dynamisch über eine API** lädst, anstatt sie lokal zu speichern. Du erweiterst die Komponente `PostOverlay.vue`, damit sie Kommentare direkt aus der API [`https://dummyjson.com/comments/post/{postId}`](https://dummyjson.com/comments/post/1) lädt.

---

### Ausgangspunkt

In deiner `PostOverlay.vue` sind Kommentare aktuell lokal gespeichert:

```js
const comments = ref([
  { id: 1, text: 'Toller Beitrag!' },
  { id: 2, text: 'Freue mich schon auf mehr Posts 👏' }
])
```

Diese sollen nun durch echte Kommentare aus der API ersetzt werden.

---

### Aufbau der API Response

Beim Aufruf von `https://dummyjson.com/comments/post/1` erhältst du folgende JSON-Struktur:

```json
{
  "comments": [
    {
      "id": 1,
      "body": "This is some awesome thinking!",
      "postId": 1,
      "user": {
        "id": 63,
        "username": "emilys"
      }
    },
    {
      "id": 2,
      "body": "What terrific math skills you're showing!",
      "postId": 1,
      "user": {
        "id": 12,
        "username": "tomhanks"
      }
    }
  ],
  "total": 5,
  "skip": 0,
  "limit": 30
}
```

---

### Aufgabenstellung

1. Entferne das lokale `comments`-Array aus deiner `PostOverlay.vue`.
2. Lade die Kommentare stattdessen **direkt aus der API** mit dem Endpunkt:

   ```js
   https://dummyjson.com/comments/post/{postId}
   ```

   Dabei soll `{postId}` durch die ID des aktuellen Posts ersetzt werden.
3. Verwende `$fetch` (aus `ofetch`) oder `useFetch` (Nuxt 3), um die Daten zu laden.
4. Stelle die geladenen Kommentare im Template dar.
5. Zeige eine Ladeanzeige, solange die Daten noch nicht verfügbar sind.

--- 

### Template-Anpassung

Ersetze die statische Kommentarliste durch eine dynamische Anzeige:

```html
<div class="comments">
  <p v-if="isLoading">Kommentare werden geladen...</p>
  <ul v-else>
    <li v-for="comment in comments" :key="comment.id">
      <strong>{{ comment.user.username }}</strong> {{ comment.body }}
    </li>
  </ul>
</div>
``` 