```javascript
const response = await repo.patch({
  idOrPath: /Root/Content/IT,
  content: {
    Customers: ['/Root/Customer1', '/Root/Customer2']
  },
})
```
