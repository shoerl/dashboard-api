const axios = require('axios')

axios.get('https://api.ethplorer.io/getTopTokenHolders/0x95aD61b0a150d79219dCF64E1E6Cc01f0B64C4cE?apiKey=EK-3kToo-CvvnbJ5-ubCu1').then((response) => {
  console.log(response.data.holders);
});
