/*
 * @Descripttion: Spicy chicken
 * @Author: YuShu Xiao
 * @Date: 2023-02-27 16:50:38
 * @LastEditors: YuShu Xiao
 * @LastEditTime: 2023-02-27 20:15:18
 */
const player = document.querySelector(".player");
const video = player.querySelector(".viewer");
const toggle = player.querySelector(".toggle");
const progressBar = player.querySelector(".progress__filled");
const progress = player.querySelector(".progress");
const skipbtns=player.querySelectorAll(".player__button")
const ranges=player.querySelectorAll(".player__slider")
// 暂停播放操作
function togglePlay(e) {
  console.log("ASJK");
  video.paused ? video.play() : video.pause();
}
video.addEventListener("click", togglePlay);
toggle.addEventListener("click", togglePlay);
function updateBtnIcon() {
  toggle.textContent = this.paused ? "►" : "❚❚";
}
video.addEventListener("play", updateBtnIcon);
video.addEventListener("pause", updateBtnIcon);
// 进度条操作
let mousedown = false
function updateProgress(e) {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
}
video.addEventListener("timeupdate", updateProgress);
function scrub(e) {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}
progress.addEventListener("click", scrub);
progress.addEventListener('mousemove', (e)=>mousedown&&scrub(e));
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);
// 快进快退
function skip() {
    video.currentTime+=parseFloat(this.dataset.skip)
}
skipbtns.forEach(skipbtn=>skipbtn.addEventListener("click",skip))
// 音量和播放速度
let isSliding=false
function handleRangeUpdate() {
    if (!isSliding) return
    console.log("ashjkhjk");
    video[this.name]=this.value
}
ranges.forEach(range=>range.addEventListener("mousedown",()=>isSliding=true))
ranges.forEach(range=>range.addEventListener("mouseup",()=>isSliding=false))
ranges.forEach(range=>range.addEventListener("change",handleRangeUpdate))
ranges.forEach(range=>range.addEventListener("mousemove",handleRangeUpdate))


document.querySelector(".qp").onclick=function(e) {
        video.classList.toggle("qp")
        player.classList.toggle("qp")
}



