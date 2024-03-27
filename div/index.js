const functions = require('@google-cloud/functions-framework');

functions.http('div', (req, res) => {
    if (req.method === 'POST') {
      try {
        const data = req.body;
        if (!data || !data.X || !data.Y) {
          res.status(400).send('Invalid JSON format or missing X/Y values.');
          return;
        }

        data.Result =  parseFloat(data.X) / parseFloat(data.Y) ;
        res.status(200).json(data);
      } catch (error) {
        res.status(500).send('Internal Server Error: '+ error);
    }
  } else {
    res.status(405).send('GET Method Not Allowed');
  }
});