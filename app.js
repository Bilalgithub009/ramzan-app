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

const calendar = document.getElementById("calendar");

// Ramadan start date
const ramzanStart = new Date(2026, 1, 18); // Feb 18, 2026
const totalDays = 30;
const endDate = new Date(ramzanStart); endDate.setDate(ramzanStart.getDate() + totalDays - 1);

// Urdu days
const urduDays = ["اتوار", "پیر", "منگل", "بدھ", "جمعرات", "جمعہ", "ہفتہ"];
const monthNames = ["فروری"];




// Pehle blank cards for empty spaces
for (let i = 0; i < ramzanStart.getDay(); i++) {
    const empty = document.createElement("div");
    calendar.appendChild(empty);
}

// Generate Ramadan days
for (let day = 1; day <= totalDays; day++) {
    const currentDate = new Date(2026, 1, 18 + (day - 1));
    const weekday = currentDate.getDay();

    const card = document.createElement("div");
    card.className = "p-2 bg-yellow-100 rounded-lg shadow hover:bg-yellow-300 transition";

    card.innerHTML = `
    <div class="text-sm text-center gap-12 font-semibold text-green-900">${urduDays[weekday]}</div>
    <div class="text-lg font-bold text-center text-green-900 mt-2">${day}</div>
  `;

    calendar.appendChild(card);
}