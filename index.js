const form = document.querySelector("#form");
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const password2 = document.querySelector("#password2");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  form_verify();
});

function form_verify() {
  const userValue = username.value.trim();
  const emailValue = email.value.trim();
  const pwdValue = password.value.trim();
  const pwd2Value = password2.value.trim();

  //username verify
  if (userValue === "") {
    let message = "tu dois choisir un pseudo";
    setError(username, message);
  } else if (!userValue.match(/^[a-zA-Z]/)) {
    let message = "le pseudo doit commencer par une lettre";
    setError(username, message);
  } else {
    let letterNum = userValue.length;
    if (letterNum < 3) {
      let message = "le pseudo doit avoir au moins 3 caractères";
      setError(username, message);
    } else {
      let message = "pseudo valide";
      setSuccess(username, message);
    }
  }

  //email verify
  if (emailValue === "") {
    let message = "tu dois renseigner un email";
    setError(email, message);
  } else if (!emailVerify(emailValue)) {
    let message = "email invalide";
    setError(email, message);
  } else {
    let message = "email valide";
    setSuccess(email, message);
  }

  //   password verify
  if (pwdValue === "") {
    let message = "tu dois entrer un password";
    setError(password, message);
  } else if (!passwordVerify(pwdValue)) {
    let message = "ton password est une cible sur pattes";
    setError(password, message);
  } else {
    let message = "ton password est en mode type4";
    setSuccess(password, message);
  }

  //   password confirm

  if (pwd2Value === "") {
    let message = "tu dois recommencer ici";
    setError(password2, message);
  } else if (pwd2Value !== pwdValue) {
    let message = " le password n'est pas le même";
    setError(password2, message);
  } else {
    let message = "Ok boomer!";
    setSuccess(password2, message);
  }
}

function setError(elem, message) {
  const formControl = elem.parentElement;
  const small = formControl.querySelector("small");

  small.innerText = message;

  formControl.className = "form-control error";
}

function setSuccess(elem, message) {
  const formControl = elem.parentElement;
  const small = formControl.querySelector("small");

  small.innerText = message;

  formControl.className = "form-control success";
}

function emailVerify(email) {
  return /^[a-z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/.test(email);
}

function passwordVerify(password) {
  return /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/.test(
    password
  );
}
