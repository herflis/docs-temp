```csharp
// https://dev.demo.sensenet.com/OData.svc/Root/Content('IT')?$select=Actions&$expand=Actions&scenario=UserMenu"
dynamic content = await RESTCaller.GetContentAsync(new ODataRequest
{
    Path = "/Root/Content/IT",
    Expand = new[] { "Actions" },
    Select = new[] { "Actions" },
    Parameters = { { "scenario", "UserMenu" } }
});
//foreach(var item in content.Actions)
//    Console.WriteLine(item.Name);
```
