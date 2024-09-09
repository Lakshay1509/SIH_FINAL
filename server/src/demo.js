const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://api.botpress.cloud/v1/admin/account/me',
  headers: {
    accept: 'application/json',
    Authorization: 'bp_pat_tZZKpbKrKe4Y0av7uVsiX6WGCqM6lYMW8fQt'
  }
};

axios
  .request(options)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });
