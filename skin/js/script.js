function bgm(btn) {
    const playlistId = 'PL58LiWuWl_hQlEmK8LI-JaWzfvqdWWwU7';
    const parent = document.getElementById('bgm');
    const status = document.getElementById('bgmStatus');
    const existingYoutube = document.getElementById('youtube');
    if (existingYoutube) {
        existingYoutube.remove();
    }

    if (btn === 'play') {
        let src = `https://www.youtube.com/embed/videoseries?list=${playlistId}&autoplay=1&loop=1&enablejsapi=1`;
        let newEle = document.createElement("iframe");
        newEle.setAttribute("id", "youtube");
        newEle.setAttribute("src", src);
        newEle.setAttribute("allow", "autoplay; encrypted-media");
        parent.appendChild(newEle);
        status.setAttribute("value", "play");
    } else {
        status.setAttribute("value", "stop");
    }
}


window.changeMusic = function(youtubeId, title, artist, sentence, coverImg) {
    // 텍스트 및 이미지 변경
    const titleEl = document.getElementById('display-title');
    const sentenceEl = document.getElementById('display-sentence');
    const cdEl = document.getElementById('current-cd');

    if(titleEl) titleEl.innerText = `${title} - ${artist}`;
    if(sentenceEl) sentenceEl.innerText = `"${sentence}"`;
    if(cdEl) {
        cdEl.style.backgroundImage = `url('${coverImg}')`;
        cdEl.style.animationPlayState = 'running'; // 회전 시작[cite: 29]
    }

    // 노래 재생 로직[cite: 22, 35]
    const container = document.getElementById('music-player-container');
    if (container) {
        const existing = document.getElementById('active-music');
        if (existing) existing.remove();

        const src = `https://www.youtube.com/embed/${youtubeId}?autoplay=1&enablejsapi=1`;
        const newEle = document.createElement("iframe");
        newEle.setAttribute("id", "active-music");
        newEle.setAttribute("src", src);
        newEle.setAttribute("allow", "autoplay; encrypted-media");
        newEle.style.width = "0";
        newEle.style.height = "0";
        newEle.style.position = "absolute";
        container.appendChild(newEle);
    }
};

window.stopMusic = function() {
    const existing = document.getElementById('active-music');
    if (existing) existing.remove();
    const cdEl = document.getElementById('current-cd');
    if(cdEl) cdEl.style.animationPlayState = 'paused'; // 회전 정지[cite: 29]
};