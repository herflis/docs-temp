```javascript
const response = await fetch(
  "https://dev.demo.sensenet.com/OData.svc/Root/Content/Document_Library/Chicago('100Pages.pdf)/Delete",
  {
    credentials: "include",
    method: "POST",
    body: {
      permanent: false
    }
  }
);
```
