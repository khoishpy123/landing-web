//
// Function to start countdown
// function startCountdown(days, hours, minutes, Seconds) {
//   // Set initial values
//   let remainingDays = days;
//   let remainingHours = hours;
//   let remainingMinutes = minutes;
//   let remainingSeconds = Seconds;

//   // Get references to countdown elements
//   const daysElement = document.getElementById("days");
//   const hoursElement = document.getElementById("hours");
//   const minutesElement = document.getElementById("minutes");
//   const secondsElement = document.getElementById("seconds");

//   // Update the countdown display
//   function updateCountdown() {
//     // Reduce the time
//     if (remainingSeconds > 0) {
//       remainingSeconds--;
//     } else {
//       if (remainingMinutes > 0) {
//         remainingMinutes--;
//         remainingSeconds = 59;
//       } else {
//         if (remainingHours > 0) {
//           remainingHours--;
//           remainingMinutes = 59;
//           remainingSeconds = 59;
//         } else {
//           if (remainingDays > 0) {
//             remainingDays--;
//             remainingHours = 23;
//             remainingMinutes = 59;
//             remainingSeconds = 59;
//           }
//         }
//       }
//     }

//     // Update the DOM elements
//     daysElement.innerHTML = `${remainingDays} <span>ngày</span>`;
//     hoursElement.innerHTML = `${remainingHours} <span>giờ</span>`;
//     minutesElement.innerHTML = `${remainingMinutes} <span>phút</span>`;
//     secondsElement.innerHTML = `${remainingSeconds} <span>giây</span>`;
//   }

//   // Call updateCountdown every minute
//   setInterval(updateCountdown, 1000);

//   // Initial call to set the countdown immediately
//   updateCountdown();
// }

// // Start the countdown with initial values: 30 days, 720 hours, 430 minutes
// startCountdown(18, 2, 27, 20);
//
document.addEventListener("DOMContentLoaded", function () {
  emailjs.init("fqCu0rU0f8PdraPgd");

  const popup = document.getElementById("popup");
  const btn = document.querySelector(".header__button");
  const span = document.getElementsByClassName("close")[0];
  const confirmButton = document.getElementById("confirmButton");
  btn.onclick = function () {
    popup.style.display = "block";
  };

  span.onclick = function () {
    popup.style.display = "none";
  };

  window.onclick = function (event) {
    if (event.target === popup) {
      popup.style.display = "none";
    }
  };
  //mail
  confirmButton.addEventListener("click", function () {
    const name = document.getElementById("name").value;
    if (name) {
      const templateParams = {
        to_email: "ARON@gmail.com",
        from_name: "ARON 15th Anniversary",
        message: `Họ Tên Khách Hàng: ${name}`,
      };

      emailjs.send("service_oeyzchk", "template_z4k5i58", templateParams).then(
        function (response) {
          // Swal.fire({
          //   icon: "success",
          //   title: "Thank you see you soon",
          //   text: "No one likes big deltas between forecasts and actuals. Most models though are too limited, relying on sample datasets or just gut feel. Oracle Cloud ERP introduces machine-learning to",
          // });
          popupSuccessEl.classList.remove("hidden-popup");
          customerForm.reset();
          formContainer.classList.add("hidden");
        },
        function (error) {
          Swal.fire({
            icon: "error",
            title: "Lỗi",
            text: "Gửi email thất bại...",
          });
        }
      );
    } else {
      Swal.fire({
        icon: "warning",
        title: "Cảnh báo",
        text: "Vui lòng điền họ tên.",
      });
    }
  });
  customerForm.reset();
});

// Slider
const dot = document.querySelectorAll(".dot");
const imageContainer = document.querySelectorAll(".image__container");
const slideOne = document.querySelector(".wrab_about--one");
const slideTwo = document.querySelector(".wrab_about--two");
const slideThree = document.querySelector(".wrab_about--three");
const dotOne = document.querySelector(".dot-one");
const dotTwo = document.querySelector(".dot-two");
const dotThree = document.querySelector(".dot-three");
let countIndex = 1;
let countDot = dotOne;

const changeSlide = (event, index) => {
  dot.forEach((element) => {
    element.classList.remove("dot--active");
  });
  event.target.classList.add("dot--active");

  imageContainer.forEach((element) => {
    element.classList.remove("image__container--display");
  });
  switch (index) {
    case 1:
      slideOne.classList.add("image__container--display");
      countIndex = 2;
      countDot = dotTwo;
      break;
    case 2:
      slideTwo.classList.add("image__container--display");
      countIndex = 3;
      countDot = dotThree;
      break;
    case 3:
      slideThree.classList.add("image__container--display");
      countIndex = 1;
      countDot = dotOne;
      break;
  }
};

const imageListLoop = setInterval(() => {
  changeSlide({ target: countDot }, countIndex);
}, 6000);

const popupSuccessEl = document.querySelector(".popup__container");

let isPopupSuccess = false;

const closePopupSuccess = () => {
  popupSuccessEl.classList.add("hidden-popup");
  isPopupSuccess = false;
};
//countdown timer events
// Set the date we're counting down to
var countDownDate = new Date("Jun 21, 2024 18:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function () {
  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Output the result in an element with id="demo"
  // document.getElementById("header__countdown").innerHTML =
  //   days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
  document.querySelector(".days").innerHTML = `${days}`;
  document.querySelector(".hours").innerHTML = `${hours}`;
  document.querySelector(".minutes").innerHTML = `${minutes}`;
  document.querySelector(".seconds").innerHTML = `${seconds}`;

  // If the count down is over, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("header__countdown").innerHTML = "EXPIRED";
  }
}, 1000);

// Initialize Splide
document.addEventListener("DOMContentLoaded", function () {
  var splide = new Splide(".splide", {
    type: "loop",
    perPage: 6,
    arrows: false,
    perMove: 1,
    rewind: true,
    autoplay: true,
    interval: 3000,
    pauseOnHover: false,
    resetProgress: false,
    pagination: false,
  }).mount();
});

// open images
const popupImageContainer = document.querySelector(".popup__image__container");
const popupImage = document.querySelector(".popup__image");

const handleZoomImage = (event) => {
  event.target.getAttribute("src");
  popupImageContainer.classList.remove("hidden-popup");
  popupImage.setAttribute("src", event.target.getAttribute("src"));
};

const closeImagePopup = () => {
  popupImageContainer.classList.add("hidden-popup");
};

// Menu language
const menuLanguage = document.querySelector(".menu__language");
const languageBtn = document.querySelector(".language");

const openMenuLanguage = () => {
  menuLanguage.classList.add("show")
}

document.addEventListener('click', (event) => {
  if (!menuLanguage.contains(event.target) && !languageBtn.contains(event.target)) {
    menuLanguage.classList.remove("show")
  }
});

document.addEventListener("click", (event) => {
  if (
    !menuLanguage.contains(event.target) &&
    !languageBtn.contains(event.target)
  ) {
    menuLanguage.classList.remove("show");
  }
});

//i18n
const resources = {
  vi: {
    translation: {
      menu__language: "Vietnamese",
      day: "ngày",
      hours: "giờ",
      minutes: "phút",
      seconds: "giây",
      receiveAndFeel: "Nhận & Cảm",
      acceptJoin: "XÁC NHẬN THAM DỰ",
      image: "HÌNH ẢNH",
      images__description:
        "Cùng nhìn lại những khoảnh khắc mà các ARONers đã ghi dấu ấn xuyên suốt hành trình 15 năm,với những cột mốc đáng nhớ đánh dấu sự trưởng thành của ARON qua từng ngày.",
      customers: "KHÁCH HÀNG",
      customer__description:
        "Để có được cột mốc 15 năm như ngày hôm nay, ARON may mắn có được sự tin tưởng và đồng hành từ quý Khách hàng - Doanh nghiệp",
      popup_label: "Anh/Chị *",
      button_confirm: "Xác nhận",
      placeholder: "vui lòng điền tên",
      description_pop_up_success:
        "Cảm ơn Anh/ Chị đã dành thời gian tham dự sự kiện quan trọng này của ARON. ARON mong chờ được đón tiếp anh chị.",
    },
  },
  en: {
    translation: {
      menu__language: "EngLish",
      day: "days",
      hours: "hours",
      minutes: "minutes",
      seconds: "seconds",
      receiveAndFeel: "Receive and Feel",
      acceptJoin: "CLICK TO JOIN",
      image: "OUR JOURNEY",
      images__description:
        "Let's revisit the cherished moments that ARONers have etched into our 15-year journey, marking significant milestones in ARON's growth each and every day",
      customers: "OUR CLIENTS",
      customer__description:
        "Reaching this 15-year milestone would not have been possible without the unwavering trust and partnership of our valued customers and businesses. We are deeply grateful for your continued support.",
      popup_label: "Full Name *",
      button_confirm: "Confirm",
      placeholder: "Full Name",
      description_pop_up_success:
        "We sincerely appreciate you taking the time to attend our important event. We eagerly await the pleasure of welcoming you.",
    },
  },
};

i18next.use(i18nextBrowserLanguageDetector).init(
  {
    resources,
    fallbackLng: "vi",
    debug: true,
  },
  function (err, t) {
    // init set content
    updateContent();
  }
);

function updateContent() {
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.getAttribute("data-i18n");
    element.textContent = i18next.t(key);
  });
}

const changeLanguage = (selectedLanguage) => {
  i18next.changeLanguage(selectedLanguage, updateContent);
  menuLanguage.classList.remove("show")
}

// languageSelect.value = i18next.language || 'en';

updateContent();
