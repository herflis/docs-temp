```javascript
https://dev.demo.sensenet.com/OData.svc/Root/Content?query=CreationDate%3A<@@CurrentDate.AddDays(-5)@@

// the special characters should be html encoded
// the actual query here is ?query=CreationDat:<@@CurrentDate.AddDays(-5)@@
```
