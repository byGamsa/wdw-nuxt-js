## ⚙️ Lab 13: State Management in Nuxt/Vue

### Ziel der Übung

In dieser Übung lernst du, wie du bestehende Eingabefelder in der Seite `/settings/profile` so umbaust, dass sie globale Zustände mit `useState()` verwenden. Dadurch werden Änderungen an den Profildaten automatisch auch im Profil (`/profile/[username]`) sichtbar – ohne die Seite neu zu laden.

---

### Ausgangssituation

In der Seite `/settings/profile` sind bereits Eingabefelder vorhanden, die lokale Refs verwenden, z. B.:

```js
const username = ref('hdm.stuttgart')
const fullname = ref('Hochschule der Medien (HdM)')
const description = ref('Offizieller Instagram-Account der #hdmstuttgart 📱')
```

Diese sollen nun durch globale States mit `useState()` ersetzt werden.

---

### Aufgabenstellung

1. **Ersetze alle lokalen Refs durch globale States:**

   ```js
   const username = useState('username', () => 'hdm.stuttgart')
   const fullname = useState('fullname', () => 'Hochschule der Medien (HdM)')
   const description = useState('description', () => 'Offizieller Instagram-Account der #hdmstuttgart 📱')
   ```

2. **Verwende dieselben States auch in der Profilseite** (`/profile/[username].vue`):
 
   So sind beide Seiten automatisch miteinander synchronisiert. 

4. **Teste die Reaktivität:**

   * Öffne `/settings/profile`
   * Ändere den Namen oder die Beschreibung
   * Wechsle zu `/profile/[username]`
   * Die Änderungen sind sofort sichtbar
 