const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000;

app.get('/download/:url', async (req, res) => {
  try {
    const fileUrl = decodeURIComponent(req.params.url);
    const response = await axios.get(fileUrl, { responseType: 'stream' });

    res.setHeader('Content-Disposition', 'attachment; filename="downloaded-file.ext"');
    response.data.pipe(res);
  } catch (error) {
    console.error('Error downloading file:', error);
    res.status(500).send('Error downloading file');
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});