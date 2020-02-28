```javascript
const result = await repo.post({
  parentPath: `/Root/Content/IT`,
  contentType: 'EventList',
  contentTemplate: 'Calendar',
  content: {
    DisplayName: 'Calendar',
    Index: 2
  },
})
```
