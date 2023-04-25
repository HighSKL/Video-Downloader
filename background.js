chrome.runtime.onMessage.addListener(
    function(request) {
        if (request.greeting == "hello"){
            chrome.tabs.create({url: request.sssrc.replace("youtube.com", "ssyoutube.com")})
        }     
    }
);

