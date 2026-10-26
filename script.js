let audio = null;
const playButton = document.getElementById('play-button');
let isPlaying = false;
let isStarted = false;
const urlParams = new URLSearchParams(window.location.search);
const videoPath = urlParams.get('path');
const waveContainer =  document.getElementById('waveContainer');
const videoElm = document.getElementById("play-video")
function run_Video(path){
    videoElm.src=path
    videoElm.load()
    playButton.textContent = "■動画を停止"
    waveContainer.classList.remove('hidden');
    videoElm.classList.remove("hidden")
    videoElm.play()
    isPlaying = true;
    videoElm.addEventListener('ended', () => {
        isPlaying = false;
        isStarted = false;
        playButton.textContent = '▶動画を再生';
        waveContainer.classList.add('hidden');
        videoElm.classList.add("hidden")
    });
}
function stop_Video(){
    videoElm.pause();
    playButton.textContent = '▶動画を再生';
    isPlaying = false;
    waveContainer.classList.add('hidden');
    videoElm.classList.add("hidden")
}
playButton.addEventListener('click', () => {
    if (!isPlaying) {
        if (!isStarted) {
            isStarted = true;
            run_Video(`https://raw.githubusercontent.com/Itsukaichi-3project/Video_viewer-bace/main/videos/${videoPath}`);
        } else {
            videoElm.play();
            playButton.textContent = '■動画を停止';
            isPlaying = true;
            waveContainer.classList.remove('hidden');
            videoElm.classList.remove("hidden")
        }
    } else {
        stop_Video();
    }
});
window.addEventListener("DOMContentLoaded", () => {
    if (videoPath) {
        window.document.title = videoPath;
    }
});
window.document.title = videoPath;


/*
// すべてのwave-barを取得してループを回す
const bars = document.querySelectorAll('.wave-bar');

bars.forEach((bar, index) => {
  // 順番に綺麗にずらす場合
  
  // またはランダムにしたい場合はこちら：
  const delay = Math.random() * 0.6;

  bar.style.animationDelay = `${delay}s`;
});
const total = bars.length;

// 中央のインデックス（例: 7個なら 3）
const centerIndex = (total - 1) / 2;

bars.forEach((bar, index) => {
// 中央からの距離（0, 1, 2...）
const distanceFromCenter = Math.abs(index - centerIndex);

// 中央が一番高く（例: 350px）、外側に行くほど低くする（最小でも 120px は残す）
const maxHeight = Math.max(700, 820 - (distanceFromCenter * 50));

// 遅延時間も中央から外側に向けて順番にずらす
const delay = distanceFromCenter * 0.1;

// CSSカスタム変数として要素に直接セット
bar.style.setProperty('--peak-height', `${maxHeight}px`);
bar.style.animationDelay = `${delay}s`;
});
*/