```csharp
var result = await Content.QueryAsync("CreatedBy:{{JobTitle:'developer'}}");

// foreach (dynamic content in result)
//     Console.WriteLine($"{content.Id} {content.Name}");
```
