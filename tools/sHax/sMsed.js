function saveMsed(postBody) {
  return new Promise((resolve, reject) => {
    $.post('https://tsign.jisagi.net/steelminer_msed', postBody, response => {
      resolve();
    }).fail(() => {
      reject('Msed Error. Please check try again later');
    });
  });
}
