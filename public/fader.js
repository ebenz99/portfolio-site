function fade(){
	($(".musicHeader")).css("opacity", 1 - (($(document)).scrollTop()) / 100);
}

const faderCheck = () => {
    if (document.getElementsByClassName("musicHeader").length === 0) {
        console.log("not music")
    }
    else {
        console.log("music")
        $(window).scroll(fade);
    }
}

setTimeout(faderCheck, 2000)