```javascript
const result = await repository.load({
      idOrPath: '/Root/Content/IT',
      oDataOptions: {
        select: ['Actions'],
        scenario: 'UserMenu',
        expand: ['Actions']
      }
    })
```
