const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

function decode(expr) {
  let arr = [];
  while (expr.length > 0) {
    let str = expr.slice(0, 10);
    if (str.includes("*")) {
      arr.push(" ");
    } else {
      let decode = "";
      while (str.length > 0) {
        const str1 = str.slice(0, 2);
        if (str1 == "10") {
          decode += ".";
        }
        if (str1 == "11") {
          decode += "-";
        }
        str = str.slice(2);
      }
      arr.push(decode);
    }
    expr = expr.slice(10);
  }
  return arr.map(el => el == " " ? el : MORSE_TABLE[el]).join('');
}

module.exports = {
  decode,
};
