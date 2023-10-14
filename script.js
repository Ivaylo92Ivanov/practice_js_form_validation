const submitButton = document.querySelector(".submit-btn");
submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  validateForm();
});

function validateForm() {
  let isValid = true;
  [
    validateEmail(),
    validateCountry(),
    validateZipCode(),
    validatePassword(),
    checkPassMatch()
  ].forEach(validation => {
    if(validation == false) {
      console.log("Still invalid fields")
      isValid = false;
    }
  })
  if (!isValid) return;
  form = document.querySelector("form");
  form.submit();
  console.log("form is valid")
}

function validateEmail() {
  if(!emailInput.validity.valid) {
    emailInput.classList.add("validation"); 
    emailError.classList.add("active");
    emailError.textContent = "Please enter a valid email";
    return false
  } else {
    emailError.classList.remove("active");
    emailError.textContent=" ";
    return true
  };
};

function validateCountry() {
  if(!countryInput.validity.valid) {
    countryInput.classList.add("validation");
    countryError.classList.add("active");
    countryError.textContent = "Please select a country from dropdown";
    return false
  } else {
    countryError.classList.remove("active");
    countryError.textContent = "";
    return true
  }
}

function validateZipCode() {
  if(!zipCodeInput.validity.valid) {
    zipCodeInput.classList.add("validation");
    zipCodeError.classList.add("active");
    if(zipCodeInput.validity.patternMismatch) {
      zipCodeError.textContent = "Zip Code must be all numeric";
    } else if(zipCodeInput.validity.tooShort || zipCodeInput.validity.valueMissing){
      zipCodeError.textContent = "Zip Code must have at least 3 digits";
    };
    return false
  } else {
    zipCodeError.classList.remove("active");
    zipCodeError.textContent = "";
    return true
  };
};

function validatePassword() {
  checkPassMatch()
  if(!passInput.validity.valid) {
    passInput.classList.add("validation");
    passError.classList.add('active');
    passError.textContent = "Password must be 8 characters long."
    return false
  } else {
    passError.classList.remove("active");
    passError.textContent="";
    return true
  }
}

function checkPassMatch(){
  if(passInput.value !== passConfirmInput.value) 
  {
    passConfirmInput.classList.remove("password-matching");
    passConfirmInput.classList.add("password-not-matching");
    passConfirmError.classList.add('active');
    passConfirmError.textContent = "Passwords do not match";
    return false
  } 
  else if (
    passConfirmInput.validity.valueMissing || 
    passConfirmInput.validity.tooShort
    ) 
  {
    passConfirmInput.classList.remove("password-matching");
    passConfirmInput.classList.add("password-not-matching");
  } 
  else 
  {
    passConfirmError.classList.remove('active');
    passConfirmInput.classList.remove("password-not-matching");
    passConfirmInput.classList.add("password-matching");
    passConfirmError.textContent = "";
    return true
  };
  if(passConfirmInput.validity.valueMissing || 
    passConfirmInput.validity.tooShort) 
  {
    passConfirmInput.classList.remove("password-matching");
    passConfirmInput.classList.add("password-not-matching");
  } 
}

const emailError = document.querySelector(".email-error");
const emailInput = document.querySelector("#email");
emailInput.addEventListener("input", () => validateEmail());
emailInput.addEventListener("blur", () => validateEmail());

const countryError = document.querySelector(".country-error");
const countryInput = document.querySelector("#country");
countryInput.addEventListener("input", () => validateCountry());
countryInput.addEventListener("blur", () => validateCountry());

const zipCodeError = document.querySelector('.zip-code-error');
const zipCodeInput = document.querySelector('#zip-code');
zipCodeInput.addEventListener("input", () => validateZipCode());
zipCodeInput.addEventListener("blur", () => validateZipCode());

const passError = document.querySelector('.password-error');
const passInput = document.querySelector('#password');
passInput.addEventListener("input", () => validatePassword());
passInput.addEventListener("blur", () => validatePassword());

const passConfirmError = document.querySelector('.password2-error');
const passConfirmInput = document.querySelector('#password2');
passConfirmInput.addEventListener("input", () => checkPassMatch());
passConfirmInput.addEventListener("blur", () => checkPassMatch());