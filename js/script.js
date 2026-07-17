/* ==========================
   FOR JENNA ❤️
========================== */

const pages = document.querySelectorAll(".page");

const envelope = document.querySelector(".envelope");

const music = document.getElementById("music");

const bar = document.querySelector(".bar");

const percent = document.getElementById("percent");

const typing = document.getElementById("typing");

const nextBtn = document.querySelector(".next");

let currentPage = 0;

function showPage(index) {

    pages.forEach(page => {

        page.classList.remove("active");

    });

    pages[index].classList.add("active");

    currentPage = index;

    document.querySelectorAll(".dot").forEach(dot => {

        dot.classList.remove("active");

    });

    const active = document.getElementById("dot" + index);

    if (active) {

        active.classList.add("active");

    }

}
/* ==========================
OPENING
========================== */

envelope.addEventListener("click", () => {

    music.play().catch(() => { });

    showPage(1);

    loadingAnimation();

});
/* ==========================
LOADING
========================== */

function loadingAnimation() {

    let value = 0;

    const timer = setInterval(() => {

        value++;

        bar.style.width = value + "%";

        percent.innerHTML = value + "%";

        if (value >= 100) {

            clearInterval(timer);

            setTimeout(() => {

                showPage(2);

                typingAnimation();

            }, 500);

        }

    }, 25);

}
/* ==========================
TYPING LETTER
========================== */

const text =

    `Baby...

Aku minta maaf yaa.

Aku sadar mungkin aku udah bikin kamu sedih.

Aku juga sadar mungkin sikap aku bikin kamu kecewa.

Aku nggak bermaksud nyakitin hati kamu sedikit pun.

Aku cuma pengen kamu tahu...

Aku bener-bener sayang sama kamu.

Terima kasih ya Baby...

Udah mau hadir di hidup aku.

🤍`;

function typingAnimation() {

    typing.innerHTML = "";

    let i = 0;

    const timer = setInterval(() => {

        typing.innerHTML += text.charAt(i);

        i++;

        if (i >= text.length) {

            clearInterval(timer);

        }

    }, 40);

}
/* ==========================
NEXT BUTTON
========================== */

nextBtn.addEventListener("click", () => {

    showPage(3);

});
/* ==========================
GALLERY
========================== */

const images = [

    "assets/img/1.jpg",

    "assets/img/2.jpg",

    "assets/img/3.jpg",

    "assets/img/4.jpg",

    "assets/img/5.jpg"

];

const captions = [

    "Aku suka banget foto ini. Rasanya pengen nyimpen momen ini selamanya 🤍",

    "Baby cantik banget di sini, tiap liat foto ini aku selalu senyum ❤️",

    "Kalau boleh jujur... ini salah satu foto favorit aku 🥹",

    "Lucunya kamu tuh nggak pernah gagal bikin aku gemes 😭",

    "Semoga nanti kita punya lebih banyak foto bareng lagi ya Baby ❤️"

];

let currentPhoto = 0;

const galleryImage = document.getElementById("galleryImage");

const galleryCaption = document.getElementById("galleryCaption");

const nextPhoto = document.getElementById("nextPhoto");

const backPhoto = document.getElementById("backPhoto");

function updateGallery() {

    galleryImage.style.opacity = 0;

    setTimeout(() => {

        galleryImage.src = images[currentPhoto];

        galleryCaption.innerHTML = captions[currentPhoto];

        galleryImage.style.opacity = 1;

    }, 250);

}

nextPhoto.addEventListener("click", () => {

    currentPhoto++;

    if (currentPhoto >= images.length) {

        showPage(4);

        return;

    }

    updateGallery();

});

backPhoto.addEventListener("click", () => {

    currentPhoto--;

    if (currentPhoto < 0) {

        currentPhoto = images.length - 1;

    }

    updateGallery();

});

const toLetter2 = document.getElementById("toLetter2");

toLetter2.addEventListener("click", () => {

    showPage(5);

});
/*=========================
REASONS
=========================*/

const reasons = [

    "Aku suka cara kamu ketawa. Rasanya semua capek aku langsung hilang.",

    "Aku suka cara kamu manggil aku Baby.",

    "Aku suka kalau kamu perhatian sama aku.",

    "Aku suka senyum kamu yang bikin hati aku tenang.",

    "Aku suka semua hal kecil tentang kamu.",

    "Aku bersyukur bisa kenal sama kamu."

];

let reasonIndex = 0;

const reasonText = document.getElementById("reasonText");

const reasonNumber = document.getElementById("reasonNumber");

const nextReasonBtn = document.getElementById("nextReasonBtn");

const prevReason = document.getElementById("prevReason");

function updateReason() {

    reasonNumber.innerHTML = "❤️ Alasan #" + (reasonIndex + 1);

    reasonText.innerHTML = reasons[reasonIndex];

}

nextReasonBtn.addEventListener("click", () => {

    reasonIndex++;

    if (reasonIndex >= reasons.length) {

        showPage(7);

        reasonIndex = reasons.length - 1;

        return;

    }

    updateReason();

});

prevReason.addEventListener("click", () => {

    if (reasonIndex == 0) {

        showPage(5);
        return;

    }

    reasonIndex--;

    updateReason();

});
const timelineNext = document.getElementById("timelineNext");

timelineNext.addEventListener("click", () => {

    showPage(8);

    typeLastLetter();

});
const finalNext = document.getElementById("finalNext");

finalNext.addEventListener("click", () => {

    showPage(9);

});


const backToScrapbook = document.getElementById("backToScrapbook");
const nextReason = document.getElementById("nextReason");

nextReason.addEventListener("click", () => {

    reasonIndex = 0;
    updateReason();

    showPage(6);

});

backToScrapbook.addEventListener("click", () => {

    showPage(4);

});


backToScrapbook.addEventListener("click", () => {

    showPage(4);

});
const timelineBack = document.getElementById("timelineBack");

timelineBack.addEventListener("click", () => {

    showPage(5);

});
const lastLetter = `

Baby...

Terima kasih udah baca semuanya.

Aku cuma pengen kamu tahu...

Aku selalu bersyukur bisa kenal sama kamu.

Semoga kita selalu bisa saling jaga.

Aku sayang kamu.

❤️
`;

const lastLetterText = document.getElementById("lastLetterText");

function typeLastLetter() {

    lastLetterText.innerHTML = "";

    let i = 0;

    const timer = setInterval(() => {

        lastLetterText.innerHTML += lastLetter.charAt(i);

        i++;

        if (i >= lastLetter.length) {

            clearInterval(timer);

        }

    }, 40);

}
const toFinalPage = document.getElementById("toFinalPage");

toFinalPage.addEventListener("click", () => {

    showPage(10);

});
const hugPopup = document.getElementById("hugPopup");
const closeHug = document.getElementById("closeHug");

const heartRain = document.getElementById("heartRain");
const heartRainFinal = document.getElementById("heartRainFinal");

heartRain.addEventListener("click", () => {
    hugPopup.style.display = "flex";
});

heartRainFinal.addEventListener("click", () => {
    hugPopup.style.display = "flex";
});

closeHug.addEventListener("click", () => {
    hugPopup.style.display = "none";
});