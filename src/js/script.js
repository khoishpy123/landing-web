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
  confirmButton.addEventListener("click", function () {
    const name = document.getElementById("name").value;
    if (name) {
      const templateParams = {
        to_email: "nguyenbathanh20122000@gmail.com",
        from_name: "Website Form",
        message: `Họ Tên Khách Hàng: ${name}`,
      };

      emailjs.send("service_oeyzchk", "template_z4k5i58", templateParams).then(
        function (response) {
          Swal.fire({
            icon: "success",
            title: "Thank you see you soon",
            text: "No one likes big deltas between forecasts and actuals. Most models though are too limited, relying on sample datasets or just gut feel. Oracle Cloud ERP introduces machine-learning to",
          });
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