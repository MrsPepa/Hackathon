/*function getJSONP(url, success) {

    var ud = '_' + +new Date,
        script = document.createElement('script'),
        head = document.getElementsByTagName('head')[0] 
               || document.documentElement;

    window[ud] = function(data) {
        head.removeChild(script);
        success && success(data);
    };

    script.src = url.replace('callback=?', 'callback=' + ud);
    head.appendChild(script);

}

getJSONP('assets/js/costo.json', function(data){
    console.log(data);
}); */
/*var chat = document.getElementById
console.log(chat);
chat.style.display = 'none'; */

function chatbot() {
    document.getElementById('chat').style.display = "block";
    document.getElementById('chat-off').style.display = "none";
}