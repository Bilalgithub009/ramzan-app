// 🔴 Ramzan start date yahan set karo (YYYY, MM - 1, DD)
const ramzanDate = new Date(2026, 1, 18);
// Example: 18 Feb 2026 (month 0 se start hota hai)

// Current date
const todayDate = new Date();

// Difference in milliseconds
const diffTime = ramzanDate - todayDate;

// Convert to days
const daysLeft = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

const timer = document.getElementById("ramzan-timer");

if (daysLeft > 0) {
    timer.innerText = `رمضان آنے میں ${daysLeft} دن باقی ہیں`;
} else if (daysLeft === 0) {
    timer.innerText = "🌙 آج پہلا روزہ ہے — رمضان کریم";
} else {
    timer.innerText = "🌙 رمضان مبارک";
}

const duas = [
    {
        title: "🌅 سحری کی دعا",
        text: "وَبِصَوْمِ غَدٍ نَّوَيْتُ مِنْ شَهْرِ رَمَضَانَ"
    },
    {
        title: "🌇 افطار کی دعا",
        text: "اَللّٰهُمَّ اِنِّى لَكَ صُمْتُ وَبِكَ آمَنْتُ وَعَلَيْكَ تَوَكَّلْتُ"
    },
    {
        title: "🕌 تراویح کی نیت",
        text: "سُبْحَانَ ذِی الْمُلْکِ وَالْمَلَکُوْتِ، سُبْحَانَ ذِی الْعِزَّةِ وَالْعَظَمَةِ وَالْهَيْبَةِ وَالْقُدْرَةِ وَالْکِبْرِيَآئِ وَالْجَبَرُوْتِ، سُبْحَانَ الْمَلِکِ الْحَيِ الَّذِی لَا يَنَامُ وَلَا يَمُوْتُ، سُبُّوحٌ قُدُّوْسٌ رَبُّنَا وَرَبُّ الْمَلَائِکَةِ وَالْقُ دْرُوْحِ، اَللّٰهُمَّ اَجِرْنَا مِنَ النَّارِ، يَا مُجِيْرُ، يَا مُجِيْرُ، يَا مُجِيْرُحِ"
    }
];


let index = 0;

const titleel = document.getElementById("dua-title");
const textel = document.getElementById("dua-text");


function showSlide() {
    const dua = duas[index];
    titleel.innerText = dua.title;
    textel.innerText = dua.text;
}

function nextSlide() {
    index = (index + 1) % duas.length;
    showSlide();
}

function prevSlide() {
    index = (index - 1 + duas.length) % duas.length;
    showSlide();
}

showSlide();

let count = 0;
const counterEl = document.getElementById("counter");
const btnCounter = document.getElementById("btnCounter");
const btnReset = document.getElementById("btnReset");

btnCounter.addEventListener("click", () => {
    count++;
    counterEl.innerText = count;
})

btnReset.addEventListener("click", () => {
    count = 0;
    counterEl.innerText = count;
})


const calendarEl = document.getElementById("calendar");

// Ramzan example: Feb 18 2026 start
const ramzanStart = new Date(2026, 1, 18); // month 1 = Feb
const ramzanDays = 30;
const todaydate = new Date();

// For each day of Ramzan
for (let i = 0; i < ramzanDays; i++) {
    const dayDate = new Date(ramzanStart);
    dayDate.setDate(ramzanStart.getDate() + i);

    const dayEl = document.createElement("div");
    dayEl.classList.add("p-3", "rounded-md", "border", "border-gray-200");

    // Month short name
    const monthNames = ["جنوری", "فروری", "مارچ", "اپریل", "مئی", "جون", "جولائی", "اگست", "ستمبر", "اکتوبر", "نومبر", "دسمبر"];
    const rozaNumber = i + 1; // Roz number (1-30)
    

    const monthShort = monthNames[dayDate.getMonth()];

    // Add inner HTML: Day number + small month below
    dayEl.innerHTML = `<div class="font-bold">${dayDate.getDate()}</div><div class="text-xs text-gray-500 ">${monthShort} ${rozaNumber}</div>`;

    // Past days (Sehri/Iftar done) highlight
    if (dayDate < todaydate) {
        dayEl.classList.add("bg-green-300", "text-white");
    }

    // todayDate highlight
    if (
        dayDate.getDate() === todaydate.getDate() &&
        dayDate.getMonth() === todaydate.getMonth() &&
        dayDate.getFullYear() === todaydate.getFullYear()
    ) {
        dayEl.classList.add("bg-yellow-400", "shadow-lg", "font-bold");
    }

    calendarEl.appendChild(dayEl);
}


