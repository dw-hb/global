function loadFiles() {
  return new Promise((resolve, reject) => {
    let fileMovable = document.getElementById("movable");
    if (!fileMovable.files.length) return reject('No movable.sed provided');
    let promises = [];
    promises.push(loadFile(fileMovable));
    Promise.all(promises).then(data => {
      resolve(data);
    });
  });
}

function loadFile(input) {
  return new Promise(resolve => {
    let reader = new FileReader();
    reader.onload = function () {
      resolve(new Uint8Array(reader.result));
    };
    reader.readAsArrayBuffer(input.files[0]);
  });
}

function download(saveFinal) {
  let a = window.document.createElement('a');
  a.href = window.URL.createObjectURL(new Blob([saveFinal], { type: 'application/octet-stream' }));
  a.download = `00000001.sav`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}
