function fade(){
	($(".musicHeader")).css("opacity", 1 - (($(document)).scrollTop()) / 100);
}

const faderCheck = () => {
    if (document.getElementsByClassName("musicHeader").length === 0) {
        ;
    }
    else {
        $(window).scroll(fade);
    }
}

function fade2(){
	($(".bookHeadingText")).css("opacity", 1 - (($(document)).scrollTop()) / 100);
}

const faderCheck2 = () => {
    if (document.getElementsByClassName("bookHeadingText").length === 0) {
        ;
    }
    else {
        console.log("here")
        $(window).scroll(fade2);
    }
}

setTimeout(faderCheck, 1500)
setTimeout(faderCheck2, 1500)