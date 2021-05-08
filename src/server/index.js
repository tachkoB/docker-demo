const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Playing around.');
  });

  const port = process.env.PORT || 3000

app.listen(port, () => console.log(`Demo app is listening on port ${port}.`));
