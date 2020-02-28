```javascript
const result = await repo.post({
  parentPath: `/Root/IMS/Public`,
  contentType: 'User',
  content: {
    LoginName: 'alba',
    Enable: true
  },
})
```
