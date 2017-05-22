# jsonPClient
JsonP Client for JavaScript (get and go)

Usefull for cross-domain requests / AJAX

Usage
```javascript
//function jsonPClient(urlTarget, success, error)
jsonPClient(
     "http://your_url.example.com",
     function(a, b, c){debugger},
     function(a, b, c){debugger}
    );
```
