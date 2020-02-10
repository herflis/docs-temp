```javascript
  dispatch(Action.loadContent("/Root/Content('IT')",
  {
    select: ['CreatedBy/FullName'],
    expand: ['CreatedBy/CreatedBy']
  }))
```
