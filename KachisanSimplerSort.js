// 미리 정해진 곡 목록
const songs = [
   "주제는 사랑", 
"가위, 바위, 보!", 
"RESCUE!", 
"Convenient Love", 
"거짓말 자판기", 
"징크스", 
"뻔한 방법",
"절취선", 
"요괴인간", 
"안개", 
"쫄다", 
"The Mom of Moms", 
"다이얼", 
"TEATIME", 
"죄악극성",
   "서문",
   "표정이나 가면 따위",
   "소왕야",
   "영웅에 대한 간단한 이야기",
   "소음이 아닌 것",
   "미완 & 반복",
"마지막 괴수",
   "약 천 년 전",
   "이상",
   "뜨거운 모래에 손을 담금",
   "절체절명의 사람",
   "동사서독",
   "이월",
   "Mr. Moumantai",
   "환상행진"
];

let comparisons = [];
let i = 0, j = 1;
let totalComparisons = 0;
let currentComparison = 0;

function shuffleArray(array) {
    // Fisher-Yates 알고리즘을 사용한 배열 섞기
    for (let k = array.length - 1; k > 0; k--) {
        const randomIndex = Math.floor(Math.random() * (k + 1));
        [array[k], array[randomIndex]] = [array[randomIndex], array[k]];
    }
}


let sortedSongs = [];
let shuffledSongs = [];
let currentSongIndex = 1;

let low = 0;
let high = 0;
let mid = 0;
let currentComparison = 0;

function startSorting() {
    shuffledSongs = songs.slice();
    shuffleArray(shuffledSongs);

    sortedSongs = shuffledSongs.length ? [shuffledSongs[0]] : [];
    currentSongIndex = 1;
    currentComparison = 0;

    low = 0;
    high = sortedSongs.length;

    document.getElementById("compare-section").style.display = "block";
    document.getElementById("result-section").style.display = "none";

    showNextComparison();
}

function showNextComparison() {
    // 현재 곡의 삽입 위치를 찾았다면 순위표에 추가
    while (
        currentSongIndex < shuffledSongs.length &&
        low >= high
    ) {
        sortedSongs.splice(low, 0, shuffledSongs[currentSongIndex]);
        currentSongIndex++;

        low = 0;
        high = sortedSongs.length;
    }

    // 모든 곡의 순위 결정 완료
    if (currentSongIndex >= shuffledSongs.length) {
        showResults();
        return;
    }

    // 정렬된 목록의 중간 곡과 비교
    mid = Math.floor((low + high) / 2);

    document.getElementById("song1").innerText =
        shuffledSongs[currentSongIndex];

    document.getElementById("song2").innerText =
        sortedSongs[mid];

    // 왼쪽 곡이 더 좋음 → 기존 곡보다 앞에 배치
    document.getElementById("song1").onclick = () => chooseSong(true);

    // 오른쪽 곡이 더 좋음 → 기존 곡보다 뒤에 배치
    document.getElementById("song2").onclick = () => chooseSong(false);

    updateProgress();
}

function chooseSong(newSongWins) {
    currentComparison++;

    if (newSongWins) {
        high = mid;
    } else {
        low = mid + 1;
    }

    showNextComparison();
}

function updateProgress() {
    const total = shuffledSongs.length;
    const placed = sortedSongs.length;

    document.getElementById("progress").innerText =
        `순위 결정: ${placed} / ${total}곡 · ` +
        `비교: ${currentComparison}회`;
}

function showResults() {
    document.getElementById("compare-section").style.display = "none";
    document.getElementById("result-section").style.display = "block";

    const tableBody = document.getElementById("result-table");
    tableBody.innerHTML = "";

    sortedSongs.forEach((song, index) => {
        const row = document.createElement("tr");
        const rankCell = document.createElement("td");
        const songCell = document.createElement("td");

        rankCell.textContent = index + 1;
        songCell.textContent = song;

        row.appendChild(rankCell);
        row.appendChild(songCell);
        tableBody.appendChild(row);
    });

    document.getElementById("progress").innerText =
        `정렬 완료! 총 ${currentComparison}회 비교`;
}

window.onload = startSorting;
