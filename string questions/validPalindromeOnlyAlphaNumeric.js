//Given a string, determine if it is a valid palindrome, considering only alphanumeric characters and ignoring cases.

function checkValidPalindrome(str) {
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    if (checkChar(str[i])) {
      newStr += str[i].toLowerCase();
    }
  }

  let revStr = "";
  for (let i = newStr.length - 1; i >= 0; i--) {
    if (checkChar(newStr[i])) {
      revStr += newStr[i];
    }
  }

  console.log("check rev:", revStr);
  console.log("is rev equal:", revStr === newStr);
  if (newStr === revStr) {
    return true;
  } else {
    return false;
  }
}

function checkChar(char) {
  let code = char.charCodeAt(0);
  if ((code > 64 && code < 91) || (code > 96 && code < 123)) {
    return true;
  } else {
    return false;
  }
}

console.log(checkValidPalindrome("madam"));
console.log(checkValidPalindrome("le@v/El#"));
