const express = require('express');
const movieRoutes = express.Router();



movieRoutes.get('/movieList',(req, res, next) => {

    const jsonString = fs.readFileSync("./movie.json");
      
      const city = JSON.parse(jsonString);
      
      if (city) {

                res.status(200).json({
                    status: 'true',
                    data: {
                        city
                    }
                });



            } else {
                res.status(200).json({
                    status: 'false',
                    data: '',
                    error: "Data Not Found
                });
            }


});
});

  
module.exports = bookmarkRoutes;






