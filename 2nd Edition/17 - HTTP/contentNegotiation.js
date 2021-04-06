function sendRequest(type){
    var req = new XMLHttpRequest();
    req.open("GET", "https://eloquentjavascript.net/author", false);
    req.setRequestHeader('Accept', type); 
    req.send(null);
    console.log(req.responseText);
}

sendRequest('text/plain');
sendRequest('text/html');
sendRequest('application/json');

//not acceptable input
sendRequest('application/rainbows+unicorns');