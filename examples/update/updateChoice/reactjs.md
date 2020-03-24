```javascript
const response = await repo.patch({
  idOrPath: /Root/Content/IT/Calendar/Release,
  content: {
    EventType: ['Demo','Meeting'],
  },
})
```
