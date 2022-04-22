const search = document.querySelector(".search-box input"),
      emoticons = document.querySelector(".emoticons"),
      emoticonCard = document.querySelectorAll(".emoticon-card"),
      toast = document.querySelector(".toast"),
      progress = document.querySelector(".progress");

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

function copyEvent(id){
    var str = document.getElementById(id);
    window.getSelection().selectAllChildren(str);
    document.execCommand("Copy");
};

let timerOne, timerTwo;

function clicked(){
    toast.classList.add("active");
    progress.classList.add("active");
    emoticons.classList.add("disableClick");

    timerOne = setTimeout(() =>{
        toast.classList.remove("active");
        emoticons.classList.remove("disableClick")
    }, 3000);

    timerTwo = setTimeout(() =>{
        progress.classList.remove("active")
    }, 3300);
};

function closeToast(){
    toast.classList.remove("active");
    emoticons.classList.remove("disableClick")

    setTimeout(() =>{
        progress.classList.remove("active")
    }, 300);

    clearTimeout(timerOne);
    clearTimeout(timerTwo);
};
