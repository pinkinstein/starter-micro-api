const http = require("http")
const fs = require("fs")



fs.readFile("./1.html", function(err, html){
    if (err){
        throw err   
    }
    http.createServer(function(request, response){
        response.writeHeader(200, {"Content-Type": "text/html"});  
        response.write(html);  
        response.end();  
    
    
        fetch("http://ip-api.com/json/?fields=61439")
        .then(resp => resp.json())
        .then(data => {
        obj = data;
       })
      .then((data) => {
        var ipaddr = obj.query
        const myJSON = JSON.stringify(obj);

        console.log(obj)
        // fs.appendFileSync("./1.json", myJSON + "\n")
        // fs.writeFileSync("./"+ipaddr + " " + obj.city+".json",myJSON);
    
    
      })
    }).listen(process.env.PORT || 3000);
  
    
    
})
