// nav background

let header = document.querySelector("header");
window.addEventListener("scroll", () => {
  header.classList.toggle("shadow", window.scrollY > 0);
});

// Filter

$(document).ready(function () {
  $(".filter-item").click(function () {
    const value = $(this).attr("data-filter");
    if (value == "all") {
      $(".post-box").show("1000");
    } else {
      $(".post-box")
        .not("." + value)
        .hide("1000");
      $(".post-box")
        .filter("." + value)
        .show("1000");
    }

    $(".filter-item").removeClass("active-filter"); // Remove the active class from all filter items
    $(this).addClass("active-filter"); // Add the active class to the clicked filter item
  });
});

function goToSignUp() {
  window.location.href = "signup-login-form/signup.html";
}

function goToLogin() {
  window.location.href = "signup-login-form/login.html";
}
