{\rtf1\ansi\ansicpg949\cocoartf2822
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;\f1\fnil\fcharset129 AppleSDGothicNeo-Regular;\f2\fnil\fcharset0 LucidaGrande;
}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 // 
\f1 \'b9\'cc\'b8\'ae
\f0  
\f1 \'c1\'a4\'c7\'d8\'c1\'f8
\f0  
\f1 \'b0\'ee
\f0  
\f1 \'b8\'f1\'b7\'cf
\f0 \
const songs = [\
   "
\f1 \'c1\'d6\'c1\'a6\'b4\'c2
\f0  
\f1 \'bb\'e7\'b6\'fb
\f0 ", \
"
\f1 \'b0\'a1\'c0\'a7
\f0 , 
\f1 \'b9\'d9\'c0\'a7
\f0 , 
\f1 \'ba\'b8
\f0 !", \
"RESCUE!", \
"Convenient Love", \
"
\f1 \'b0\'c5\'c1\'fe\'b8\'bb
\f0  
\f1 \'c0\'da\'c6\'c7\'b1\'e2
\f0 ", \
"
\f1 \'c2\'a1\'c5\'a9\'bd\'ba
\f0 ", \
"
\f1 \'bb\'b7\'c7\'d1
\f0  
\f1 \'b9\'e6\'b9\'fd
\f0 ", \
"
\f1 \'c0\'fd\'c3\'eb\'bc\'b1
\f0 ", \
"
\f1 \'bf\'e4\'b1\'ab\'c0\'ce\'b0\'a3
\f0 ", \
"
\f1 \'be\'c8\'b0\'b3
\f0 ", \
"
\f1 \'c2\'cc\'b4\'d9
\f0 ", \
"The Mom of Moms", \
"
\f1 \'b4\'d9\'c0\'cc\'be\'f3
\f0 ", \
"TEATIME", \
"
\f1 \'c1\'cb\'be\'c7\'b1\'d8\'bc\'ba
\f0 ",\
   "
\f1 \'bc\'ad\'b9\'ae
\f0 ",\
   "
\f1 \'c7\'a5\'c1\'a4\'c0\'cc\'b3\'aa
\f0  
\f1 \'b0\'a1\'b8\'e9
\f0  
\f1 \'b5\'fb\'c0\'a7
\f0 ",\
   "
\f1 \'bc\'d2\'bf\'d5\'be\'df
\f0 ",\
   "
\f1 \'bf\'b5\'bf\'f5\'bf\'a1
\f0  
\f1 \'b4\'eb\'c7\'d1
\f0  
\f1 \'b0\'a3\'b4\'dc\'c7\'d1
\f0  
\f1 \'c0\'cc\'be\'df\'b1\'e2
\f0 ",\
   "
\f1 \'bc\'d2\'c0\'bd\'c0\'cc
\f0  
\f1 \'be\'c6\'b4\'d1
\f0  
\f1 \'b0\'cd
\f0 ",\
   "
\f1 \'b9\'cc\'bf\'cf
\f0  & 
\f1 \'b9\'dd\'ba\'b9
\f0 ",\
"
\f1 \'b8\'b6\'c1\'f6\'b8\'b7
\f0  
\f1 \'b1\'ab\'bc\'f6
\f0 ",\
   "
\f1 \'be\'e0
\f0  
\f1 \'c3\'b5
\f0  
\f1 \'b3\'e2
\f0  
\f1 \'c0\'fc
\f0 ",\
   "
\f1 \'c0\'cc\'bb\'f3
\f0 ",\
   "
\f1 \'b6\'df\'b0\'c5\'bf\'ee
\f0  
\f1 \'b8\'f0\'b7\'a1\'bf\'a1
\f0  
\f1 \'bc\'d5\'c0\'bb
\f0  
\f1 \'b4\'e3\'b1\'dd
\f0 ",\
   "
\f1 \'c0\'fd\'c3\'bc\'c0\'fd\'b8\'ed\'c0\'c7
\f0  
\f1 \'bb\'e7\'b6\'f7
\f0 ",\
   "
\f1 \'b5\'bf\'bb\'e7\'bc\'ad\'b5\'b6
\f0 ",\
   "
\f1 \'c0\'cc\'bf\'f9
\f0 ",\
   "Mr. Moumantai",\
   "
\f1 \'c8\'af\'bb\'f3\'c7\'e0\'c1\'f8
\f0 "\
];\
\
let comparisons = [];\
let i = 0, j = 1;\
let totalComparisons = 0;\
let currentComparison = 0;\
\
function shuffleArray(array) \{\
    // Fisher-Yates 
\f1 \'be\'cb\'b0\'ed\'b8\'ae\'c1\'f2\'c0\'bb
\f0  
\f1 \'bb\'e7\'bf\'eb\'c7\'d1
\f0  
\f1 \'b9\'e8\'bf\'ad
\f0  
\f1 \'bc\'af\'b1\'e2
\f0 \
    for (let k = array.length - 1; k > 0; k--) \{\
        const randomIndex = Math.floor(Math.random() * (k + 1));\
        [array[k], array[randomIndex]] = [array[randomIndex], array[k]];\
    \}\
\}\
\
\
let sortedSongs = [];\
let shuffledSongs = [];\
let currentSongIndex = 1;\
\
let low = 0;\
let high = 0;\
let mid = 0;\
let currentComparison = 0;\
\
function startSorting() \{\
    shuffledSongs = songs.slice();\
    shuffleArray(shuffledSongs);\
\
    sortedSongs = shuffledSongs.length ? [shuffledSongs[0]] : [];\
    currentSongIndex = 1;\
    currentComparison = 0;\
\
    low = 0;\
    high = sortedSongs.length;\
\
    document.getElementById("compare-section").style.display = "block";\
    document.getElementById("result-section").style.display = "none";\
\
    showNextComparison();\
\}\
\
function showNextComparison() \{\
    // 
\f1 \'c7\'f6\'c0\'e7
\f0  
\f1 \'b0\'ee\'c0\'c7
\f0  
\f1 \'bb\'f0\'c0\'d4
\f0  
\f1 \'c0\'a7\'c4\'a1\'b8\'a6
\f0  
\f1 \'c3\'a3\'be\'d2\'b4\'d9\'b8\'e9
\f0  
\f1 \'bc\'f8\'c0\'a7\'c7\'a5\'bf\'a1
\f0  
\f1 \'c3\'df\'b0\'a1
\f0 \
    while (\
        currentSongIndex < shuffledSongs.length &&\
        low >= high\
    ) \{\
        sortedSongs.splice(low, 0, shuffledSongs[currentSongIndex]);\
        currentSongIndex++;\
\
        low = 0;\
        high = sortedSongs.length;\
    \}\
\
    // 
\f1 \'b8\'f0\'b5\'e7
\f0  
\f1 \'b0\'ee\'c0\'c7
\f0  
\f1 \'bc\'f8\'c0\'a7
\f0  
\f1 \'b0\'e1\'c1\'a4
\f0  
\f1 \'bf\'cf\'b7\'e1
\f0 \
    if (currentSongIndex >= shuffledSongs.length) \{\
        showResults();\
        return;\
    \}\
\
    // 
\f1 \'c1\'a4\'b7\'c4\'b5\'c8
\f0  
\f1 \'b8\'f1\'b7\'cf\'c0\'c7
\f0  
\f1 \'c1\'df\'b0\'a3
\f0  
\f1 \'b0\'ee\'b0\'fa
\f0  
\f1 \'ba\'f1\'b1\'b3
\f0 \
    mid = Math.floor((low + high) / 2);\
\
    document.getElementById("song1").innerText =\
        shuffledSongs[currentSongIndex];\
\
    document.getElementById("song2").innerText =\
        sortedSongs[mid];\
\
    // 
\f1 \'bf\'de\'c2\'ca
\f0  
\f1 \'b0\'ee\'c0\'cc
\f0  
\f1 \'b4\'f5
\f0  
\f1 \'c1\'c1\'c0\'bd
\f0  
\f2 \uc0\u8594 
\f0  
\f1 \'b1\'e2\'c1\'b8
\f0  
\f1 \'b0\'ee\'ba\'b8\'b4\'d9
\f0  
\f1 \'be\'d5\'bf\'a1
\f0  
\f1 \'b9\'e8\'c4\'a1
\f0 \
    document.getElementById("song1").onclick = () => chooseSong(true);\
\
    // 
\f1 \'bf\'c0\'b8\'a5\'c2\'ca
\f0  
\f1 \'b0\'ee\'c0\'cc
\f0  
\f1 \'b4\'f5
\f0  
\f1 \'c1\'c1\'c0\'bd
\f0  
\f2 \uc0\u8594 
\f0  
\f1 \'b1\'e2\'c1\'b8
\f0  
\f1 \'b0\'ee\'ba\'b8\'b4\'d9
\f0  
\f1 \'b5\'da\'bf\'a1
\f0  
\f1 \'b9\'e8\'c4\'a1
\f0 \
    document.getElementById("song2").onclick = () => chooseSong(false);\
\
    updateProgress();\
\}\
\
function chooseSong(newSongWins) \{\
    currentComparison++;\
\
    if (newSongWins) \{\
        high = mid;\
    \} else \{\
        low = mid + 1;\
    \}\
\
    showNextComparison();\
\}\
\
function updateProgress() \{\
    const total = shuffledSongs.length;\
    const placed = sortedSongs.length;\
\
    document.getElementById("progress").innerText =\
        `
\f1 \'bc\'f8\'c0\'a7
\f0  
\f1 \'b0\'e1\'c1\'a4
\f0 : $\{placed\} / $\{total\}
\f1 \'b0\'ee
\f0  \'b7 ` +\
        `
\f1 \'ba\'f1\'b1\'b3
\f0 : $\{currentComparison\}
\f1 \'c8\'b8
\f0 `;\
\}\
\
function showResults() \{\
    document.getElementById("compare-section").style.display = "none";\
    document.getElementById("result-section").style.display = "block";\
\
    const tableBody = document.getElementById("result-table");\
    tableBody.innerHTML = "";\
\
    sortedSongs.forEach((song, index) => \{\
        const row = document.createElement("tr");\
        const rankCell = document.createElement("td");\
        const songCell = document.createElement("td");\
\
        rankCell.textContent = index + 1;\
        songCell.textContent = song;\
\
        row.appendChild(rankCell);\
        row.appendChild(songCell);\
        tableBody.appendChild(row);\
    \});\
\
    document.getElementById("progress").innerText =\
        `
\f1 \'c1\'a4\'b7\'c4
\f0  
\f1 \'bf\'cf\'b7\'e1
\f0 ! 
\f1 \'c3\'d1
\f0  $\{currentComparison\}
\f1 \'c8\'b8
\f0  
\f1 \'ba\'f1\'b1\'b3
\f0 `;\
\}\
\
window.onload = startSorting;\
}