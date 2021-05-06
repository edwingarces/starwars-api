const charactersRoutes = (app, fs) => {
  // variables
  const dataPath = './api/id';

  app.get('/characters/page/:page', (req, res) => {
    const { page } = req.params;
    const characters = [];
    let i = (page === 1) ? page : (page*10) - 9;
    for(i;i <= page*10; i++){
      console.log(`${dataPath}/${i}.json`);
      let jsonFile = fs.readFileSync(`${dataPath}/${i}.json`, 'utf8');
      characters.push(JSON.parse(jsonFile));
    };
    res.send({
      characters: characters,
    });
  });
  // READ
  app.get('/characters/id/:id', (req, res) => {
    const { id } = req.params;
    fs.readFile(`${dataPath}/${id}.json`, 'utf8', (err, data) => {
      if (err) {
        throw err;
      }

      res.send(JSON.parse(data));
    });
  });
};

module.exports = charactersRoutes;