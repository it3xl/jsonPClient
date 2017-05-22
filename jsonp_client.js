function jsonPClient(urlTarget, success, error) {
    var stamp = new Date().valueOf();
    var callbackName = 'jsonPClient_' + Math.random().toString().replace('0.', '');
    
    window[callbackName] = function(data){
        cleanUp();
        success(data);
    }

    var src = urlTarget + '?callback=' + callbackName;

    var scriptTarget = document.createElement('script');
    scriptTarget.async = "async";
    //scriptTarget.charset = ...
    scriptTarget.src = src;

    scriptTarget.onerror = function(a, b, c){
        cleanUp();
        error(a, b, c);
    };

    var scriptHost = getScriptHost();
    scriptHost.insertBefore(scriptTarget, scriptHost.firstChild );

    function cleanUp(){
        delete window[callbackName];

        scriptHost.removeChild(scriptTarget);
        scriptHost = null;
        scriptTarget.onerror = null;
        scriptTarget = null;
    }
    function getScriptHost(){
        var scriptHost = document.head || document.getElementsByTagName("head")[0] || document.documentElement;
        return scriptHost;
    };
};
