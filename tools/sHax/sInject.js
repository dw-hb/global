function createSave(postBody) {
  return new Promise((resolve, reject) => {
    $.post('/save/', postBody, response => {
      let data = JSON.parse(response);
      if (data.error) return reject(`Save Creation Error: ${data.error}`);
      resolve(data.response);
    }).fail(() => {
      reject('Server Error. Please check try again later');
    });
  });
}
