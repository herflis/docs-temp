```javascript
const result = await repository.loadCollection({
      idOrPath: '/Root/Content/IT',
      oDataOptions: {
        expand: ['CreatedBy']
      }
    });
```
