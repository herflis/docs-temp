index.js:

```typescript
const repoInstance = new Repository(config);
```

```html
<RepositoryContext.Provider value="{repoInstance}">
  <App />
</RepositoryContext.Provider>,
```

inside App conponent:

```typescript
const repository = useRepository();
```
