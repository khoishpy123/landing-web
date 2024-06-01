//
// Function to start countdown
function startCountdown(days, hours, minutes) {
  // Set initial values
  let remainingDays = days;
  let remainingHours = hours;
  let remainingMinutes = minutes;

  // Get references to countdown elements
  const daysElement = document.getElementById("days");
  const hoursElement = document.getElementById("hours");
  const minutesElement = document.getElementById("minutes");

  // Update the countdown display
  function updateCountdown() {
    // Reduce the time
    if (remainingMinutes > 0) {
      remainingMinutes--;
    } else {
      if (remainingHours > 0) {
        remainingHours--;
        remainingMinutes = 59;
      } else {
        if (remainingDays > 0) {
          remainingDays--;
          remainingHours = 23;
          remainingMinutes = 59;
        }
      }
    }

    // Update the DOM elements
    daysElement.innerHTML = `${remainingDays} <span>ngày</span>`;
    hoursElement.innerHTML = `${remainingHours} <span>giờ</span>`;
    minutesElement.innerHTML = `${remainingMinutes} <span>phút</span>`;
  }

  // Call updateCountdown every minute
  setInterval(updateCountdown, 60000);

  // Initial call to set the countdown immediately
  updateCountdown();
}

// Start the countdown with initial values: 30 days, 720 hours, 430 minutes
startCountdown(30, 720, 430);
//
document
  .getElementById("languageSelect")
  .addEventListener("change", function () {
    var language = this.value;
    // Implement language switching logic here
    if (language === "vi") {
      document.getElementById("about").querySelector("h2").textContent =
        "Về Chúng Tôi";
      document.getElementById("about").querySelector("p").textContent =
        "Thêm thông tin về công ty của bạn ở đây.";
      document.getElementById("services").querySelector("h2").textContent =
        "Dịch Vụ Của Chúng Tôi";
      document.getElementById("services").querySelector("p").textContent =
        "Thêm thông tin về dịch vụ của bạn ở đây.";
      document.getElementById("contact").querySelector("h2").textContent =
        "Liên Hệ";
      document.getElementById("contact").querySelector("p").textContent =
        "Thêm thông tin liên hệ của bạn ở đây.";
      document.getElementById("countdown").querySelector("h2").textContent =
        "Đồng Hồ Đếm Ngược";
    } else {
      document.getElementById("about").querySelector("h2").textContent =
        "About Us";
      document.getElementById("about").querySelector("p").textContent =
        "Insert your company information here.";
      document.getElementById("services").querySelector("h2").textContent =
        "Our Services";
      document.getElementById("services").querySelector("p").textContent =
        "Insert your services information here.";
      document.getElementById("contact").querySelector("h2").textContent =
        "Contact Us";
      document.getElementById("contact").querySelector("p").textContent =
        "Insert your contact information here.";
      document.getElementById("countdown").querySelector("h2").textContent =
        "Countdown Timer";
    }
  });
