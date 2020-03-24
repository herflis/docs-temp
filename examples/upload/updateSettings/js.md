```javascript
const response = await fetch(
  "https://dev.demo.sensenet.com/OData.svc/Root/System('Settings')/Upload",
  {
    credentials: "include",
    method: "POST",
    body: JSON.stringify({
      ContentType: "Settings",
      FileName: "MyCustom.settings",
      Overwrite: true,
      UseChunk: false,
      PropertyName: "Binary",
      FileText: " *** file text data ***"
    })
  }
);
```
