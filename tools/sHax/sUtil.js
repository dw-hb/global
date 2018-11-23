function sliceArr(arr, offset, length) {
  return arr.slice(offset, offset + length);
}

function abort(message = 'Error') {
  $('.btn-start')[0].disabled = false;
  document.getElementById("p-error").innerHTML = message;
}

function byteArrToHexStr(byteArr) {
  return Array.from(byteArr, b => `0${(b & 0xFF).toString(16)}`.slice(-2)).join('').toUpperCase();
}

function parseHexString(str) {
  if (str.length % 2 !== 0) str = `0${str}`;
  var result = [];
  while (str.length >= 2) {
    result.push(parseInt(str.substring(0, 2), 16));
    str = str.substring(2, str.length);
  }
  return new Uint8Array(result);
}
