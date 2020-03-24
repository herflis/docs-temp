```javascript
const response = await fetch(
  "https://dev.demo.sensenet.com/OData.svc/Root/Content/IT?query=CreatedBy%3A{{Jobtitle%3A%27developer%27}}",
  { credentials: "include" }
);
```
