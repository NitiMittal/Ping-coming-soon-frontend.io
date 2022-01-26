let email = document.getElementById("email");
let form = document.getElementById("form");
let error = document.getElementById("error");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  engine(email, "Whoops! It looks like you forgot to add your email");
});

form.addEventListener("input", (e) => {
  e.preventDefault();
  engine(email, "Whoops! It looks like you forgot to add your email");
});

let engine = (id, message) => {
  if (id.value.trim() === "") {
    failureMsg(id, message);
  } else if (email.value !== "") {
    let testMail = ValidateEmail(email.value);
    if (testMail) {
      successMsg(id);
    } else if (testMail == false) {
      failureMsg(id, "Please provide a valid email address");
    }
  } else {
    successMsg(id);
  }
};

// pattern for validating mail
let ValidateEmail = (mail) => {
  let pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (pattern.test(mail)) {
    return true;
  } else {
    return false;
  }
};

// function in case of success
let successMsg = (id) => {
  error.innerHTML = "";
  id.style.border = "1px solid hsl(223, 87%, 63%)";
};

// function in case of failure
let failureMsg = (id, message) => {
  error.innerHTML = message;
  id.style.border = "1px solid hsl(354, 100%, 66%)";
};
