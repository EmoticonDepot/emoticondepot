const search = document.querySelector(".search-box input"),
      emoticons = document.querySelector(".emoticons"),
      emoticonCard = document.querySelectorAll(".emoticon-card");

search.addEventListener("keyup", e =>{
    if(e.key == "Enter"){
        let searcValue = search.value,
            value = searcValue.toLowerCase();
            emoticonCard.forEach(emoticon =>{
                if(value === emoticon.dataset.firsttag){
                    return emoticon.style.display = "block";
                }
                else if(value === emoticon.dataset.secondtag){
                    return emoticon.style.display = "block";
                }
                emoticon.style.display = "none";
        });
    };
});

search.addEventListener("keyup", () =>{
    if(search.value != "") return;

    emoticonCard.forEach(emoticon =>{
        emoticon.style.display = "block";
    });
});

const toast = document.querySelector(".toast"),
      progress = document.querySelector(".progress");

let timerOne, timerTwo;

function copyEvent(id){
    var str = document.getElementById(id);
    window.getSelection().selectAllChildren(str);
    document.execCommand("copy");

    toast.classList.add("active");
    progress.classList.add("active");
    emoticons.classList.add("disableClick");

    timerOne = setTimeout(() =>{
        toast.classList.remove("active");
        emoticons.classList.remove("disableClick");
    }, 3000);

    timerTwo = setTimeout(() =>{
        progress.classList.remove("active");
    }, 3300);
};

function closeToast(){
    toast.classList.remove("active");
    emoticons.classList.remove("disableClick");

    setTimeout(() =>{
        progress.classList.remove("active");
    }, 300);

    clearTimeout(timerOne);
    clearTimeout(timerTwo);
};

const container = document.querySelector(".container"),
      body = document.querySelector("body"),
      warning = document.querySelector(".warning");

let userAgent = navigator.userAgent;
let browser;

if(userAgent.match(/edg/i)){
    browser = "edge";
}else if(userAgent.match(/firefox|fxios/i)){
    browser = "firefox";
}else if(userAgent.match(/opr/i)){
    browser = "opera";
}else if(userAgent.match(/chrome|chromium|crios/i)){
    browser = "chrome";
}else if(userAgent.match(/safari/i)){
    browser = "safari";
}else{
    browser = "Unknown";
}

if(browser == "chrome"){
    container.style.opacity = "1";
    container.style.pointerEvents = "auto";
    body.style.overflow = "auto";
    warning.classList.remove("active");
}else if(browser == "edge"){
    container.style.opacity = "1";
    container.style.pointerEvents = "auto";
    body.style.overflow = "auto";
    warning.classList.remove("active");
}else if(browser == "safari"){
    container.style.opacity = "1";
    container.style.pointerEvents = "auto";
    body.style.overflow = "auto";
    warning.classList.remove("active");
};

function closeWarning(){
    warning.classList.remove("active");
};
