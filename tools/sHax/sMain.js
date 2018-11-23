function start() {
  $('.btn-start')[0].disabled = true;
  document.getElementById("p-error").innerHTML = '';
  let movable;
  loadFiles().then(data => {
    movable = data[0];

    if (movable.length !== 0x140 && movable.length !== 0x120) throw new Error('movable.sed size not valid');
    let movableKeyY = sliceArr(movable, 0x110, 0x10);
    let keyYStr = byteArrToHexStr(movableKeyY);

    return createSave({ movable: keyYStr, titleid: $('.form-control-region')[0].value });
  }).then(result => {
    console.log(result.slice(0, 4));
    console.log(result.slice(-4));

    let movableKeyHex = sliceArr(movable, 0x110, 0x10);
    saveMsed({ movableKeyHex: byteArrToHexStr(movableKeyHex) }).catch(err => console.error(err));

    let data = parseHexString(result);
    download(data);

    $('.btn-start')[0].disabled = false;
  }).catch(error => {
    abort(error.message || error);
  });
}

function byteArrToHexStr(byteArr) {
  return Array.from(byteArr, b => `0${(b & 0xFF).toString(16)}`.slice(-2)).join('').toUpperCase();
}
