const formSub = document.getElementById("subscribe");
const signup = document.getElementById("signup");
const thanks = document.getElementById("thanks");
const confirmEmail = document.getElementById("successEmail");
const dismiss = document.getElementById("dismiss");
const invalid = document.getElementById("invalid");
const inputEmail = document.getElementById("email");

formSub.addEventListener("submit", (e) => {
  e.preventDefault();
  let email = document.getElementById("email");
  if (email.value == "") {
    invalid.innerHTML = "<h5>Valid e-mail required</h5>";
    inputEmail.classList.add("invalid");
  } else {
    ValidateEmail(email);
    confirmEmail.innerText = email.value;
  }
  email.addEventListener("keypress", (e) => {
    invalid.innerHTML = "";
    inputEmail.classList.remove("invalid");
  });
});

dismiss.addEventListener("click", (e) => {
  window.location.replace("/");
});

function ValidateEmail(inputText) {
  let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (inputText.value.match(mailformat)) {
    signup.style.display = "none";
    thanks.style.display = "block";
    return true;
  } else {
    invalid.innerHTML = "<h5>Valid e-mail required</h5>";
    inputEmail.classList.add("invalid");
    return false;
  }
}
