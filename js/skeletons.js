const passwordInput = document.querySelector("#passwordId");
const passwordLength = document.querySelector("#lengthId");
const passwordLengthLabel = document.querySelector('label[for="lengthId"]');
const specialText = document.querySelector("#specialTextId");
const generateButton = document.querySelector("#btnGerar");
const generateButton2 = document.querySelector("#btnGerar1");
const copy = document.querySelector("#copyId");

const a = document.querySelector("#aheader");

const chkAll = document.querySelector("#chkAll");
const chkUpper = document.querySelector("#chkUppercase");
const chkLower = document.querySelector("#chkLowercase");
const chkSpecial = document.querySelector("#chkSpecial");
const chkNumbers = document.querySelector("#chkNumbers");

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const symbols = ["!", "@", "#", "$", "%", "8", "=", "@", "!", "#"];
const caracters = Array.from(Array(26)).map((_, i) => i + 97);
const lowercaseCaracters = caracters.map((item) => String.fromCharCode(item));
const uppercaseCaracters = lowercaseCaracters.map((item) => item.toUpperCase());
passwordLengthLabel.innerHTML = passwordLength.value;

const allCaracters = [];

allCaracters.push(...numbers);
allCaracters.push(...symbols);
allCaracters.push(...lowercaseCaracters);
allCaracters.push(...uppercaseCaracters);

passwordLength.addEventListener("change", () => {
  passwordLengthLabel.innerHTML = passwordLength.value;
});

generateButton.addEventListener("click", () => {
  generatePassword(
    chkAll.checked,
    chkUpper.checked,
    chkLower.checked,
    chkSpecial.checked,
    chkNumbers.checked,
    passwordLength.value
  );
});
generateButton2.addEventListener("click", () => {
  generatePassword(
    chkAll.checked,
    chkUpper.checked,
    chkLower.checked,
    chkSpecial.checked,
    chkNumbers.checked,
    passwordLength.value
  );
});

document.addEventListener("keypress", (e) => {
  if (e.key == "Enter") {
    generatePassword(
      chkAll.checked,
      chkUpper.checked,
      chkLower.checked,
      chkSpecial.checked,
      chkNumbers.checked,
      passwordLength.value
    );
  }
});

function generatePassword(
  hasAll,
  hasUpper,
  hasLower,
  hasSpecial,
  hasNumbers,
  length
) {
  passwordInput.value = "";

  let newArray = [
    ...(hasAll ? allCaracters : []),
    ...(hasUpper ? uppercaseCaracters : []),
    ...(hasLower ? lowercaseCaracters : []),
    ...(hasSpecial ? symbols : []),
    ...(hasNumbers ? numbers : []),
  ];

  if (newArray.length === 0) {
    newArray = allCaracters;
  }

  const specialTrated = specialText.value.replace(/\s/g, "");

  let password = "";

  if (specialTrated) {
    password += specialTrated;
  }

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * newArray.length);

    password += newArray[randomIndex];
  }

  passwordInput.value = password;
}

function passwordCopy() {
  copyText = passwordInput;
  copyText.select();
  copyText.setSelectionRange(0, 99999);

  document.execCommand("copy");
  alert(`Text copied: ${copyText.value}`);
}

copy.addEventListener("click", () => {
  passwordCopy();
});
