```javascript
const result = await repo.executeAction({
  idOrPath: '/Root/Content/IT/Document_Library/Calgary/BusinessPlan.docx',
  name: 'CheckPreviews',
  method: 'POST',
  body: {
    generateMissing: true
  }
})
```
