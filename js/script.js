function showPage(pageNumber){

    const v1 = document.getElementById("video_1");
    const v2 = document.getElementById("video_2");

    if(pageNumber !== 12 && v1){
    v1.pause();
    v1.currentTime = 0;
    v1.load();
    }

    if(pageNumber !== 13 && v2){
    v2.pause();
    v2.currentTime = 0;
    v2.load();
    }

    document.querySelectorAll("video").forEach(video => {
    video.pause();
    video.currentTime = 0;
    });

    const music =
    document.getElementById("bgMusic");

    if(pageNumber >= 12){
s
        music.pause();

    }else{

        music.play();
    }

    document
    .querySelectorAll('.page')
    .forEach(page=>{
        page.classList.remove('active');
    });

    document
    .getElementById(
        'page'+pageNumber
    )
    .classList.add('active');
}

function checkPassword(){

    const pass =
    document.getElementById(
        'password'
    ).value;

    if(pass==="2106"){

        document
        .getElementById("bgMusic")
        .play();

        showPage(2);

        setTimeout(()=>{
            showPage(3);
        },2000);

    }else{

        document
        .getElementById("error")
        .innerText =
        "Wrong Code 😭";
    }
}

function toggleMemory(id){

    const memory =
    document.getElementById(id);

    if(memory.style.display==="block"){

        memory.style.display="none";

    }else{

        memory.style.display="block";
    }
}

function toggleMusic(){

    const music =
    document.getElementById("bgMusic");

    const btn =
    document.getElementById("musicBtn");

    if(music.paused){

        music.play();

        btn.innerHTML =
        "🔇 Music Off";

    }else{

        music.pause();

        btn.innerHTML =
        "🔊 Music On";
    }
}