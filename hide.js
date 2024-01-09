
function hide(){

let params = new URLSearchParams(document.location.search);
let language = params.get("mode")
console.log(language);

    if (language === 'instore'){
    document.getElementById("container-1").style.display = "none";
    document.getElementById("start-button").style.display = "none";
    document.getElementById("container-2").style.display = "none";
    document.getElementById("got-button").style.display = "none";
    document.getElementById("bottom-first").style.display = "none";
    document.getElementById("bottom-second").style.display = "none";
    document.getElementById("top-swirl").style.display = "none";
    document.getElementById("bm").style.display = "none";
    document.getElementById("dotted").style.display = "none";
    document.getElementById("container-7").style.display = "inherit";
    // document.getElementById("new-logo").style.marginTop = "2em";
    } if (language === 'roadshow'){
    document.getElementById("container-1").style.display = "none";
    document.getElementById("start-button").style.display = "none";
    document.getElementById("container-2").style.display = "inherit";
    document.getElementById("got-button").style.display = "inherit";
    document.getElementById("bottom-first").style.display = "none";
    document.getElementById("bottom-second").style.display = "none";
    document.getElementById("top-swirl").style.display = "none";
    document.getElementById("bm").style.display = "none";
    document.getElementById("dotted").style.display = "none";
    document.getElementById("new-logo").style.display = "inherit";
    // document.getElementById("new-logo").style.marginTop = "2em";
    } if(language === 'mobile') {
        document.getElementById("container-1").style.display = "none";
        document.getElementById("start-button").style.display = "none";
        document.getElementById("container-2").style.display = "inherit";
        document.getElementById("got-button").style.display = "inherit";
        document.getElementById("bottom-first").style.display = "none";
        document.getElementById("bottom-second").style.display = "none";
        document.getElementById("top-swirl").style.display = "none";
        document.getElementById("bm").style.display = "none";
        document.getElementById("dotted").style.display = "none";
        document.getElementById("new-logo").style.display = "inherit";
        // document.getElementById("new-logo").style.marginTop = "2em";
    }if (document.location.search.length < 1) {
        document.getElementById("container-1").style.display = "none";
        document.getElementById("start-button").style.display = "none";
        document.getElementById("container-2").style.display = "inherit";
        document.getElementById("got-button").style.display = "inherit";
        document.getElementById("bottom-first").style.display = "none";
        document.getElementById("bottom-second").style.display = "none";
        document.getElementById("top-swirl").style.display = "none";
        document.getElementById("bm").style.display = "none";
        document.getElementById("dotted").style.display = "none";
        document.getElementById("new-logo").style.display = "inherit";
        // document.getElementById("new-logo").style.marginTop = "2em";
        }
}
