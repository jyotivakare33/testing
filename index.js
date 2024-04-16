const express = require('express')
const app = express()
const port = 3011
var cors = require('cors')
const swaggerUi = require('swagger-ui-express');
const specs = require('./swagger');


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));


//Add routes here

/**
 * @swagger
 * /:
 *   get:
 *     summary: HSRT Next PoC (Root endpoint)
 *     responses:
 *       200:
 *         description: A simple message indicating the application is running.
 *         content:
 *           text/plain:
 *             schema:
 *               type: string
 *               example: HSRT Next PoC
 */

app.get('/', (req, res) => {
  res.send('HSRT Next PoC')
})

/**
 * @swagger
 * /reviewers:
 *   get:
 *     summary: Get a list of reviewers (limited to top 5)
 *     responses:
 *       200:
 *         description: An array of reviewer objects.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Reviewer'  
 */

app.get('/reviewers',  (req, res) => {
  const sql = require('mssql')

  sql.connect('Server=gcphsdbs06;Database=Northwnd;Application Name=HSS;User ID=maappacct;Password=He@dst@rt@)!$;Encrypt=False', function (err) {

    if (err) console.log(err);

    // create Request object
    var request = new sql.Request();

    // query to the database and get the records
    request.query('select top 5 * from reviewers', function (err, recordset) {

      if (err) console.log(err)

      // send records as a response
      res.send(recordset);

    });
  });
});

/**
 * @swagger
 * /searchreviews/{reviewid}:
 *   get:
 *     summary: Search for reviews by review ID
 *     parameters:
 *       - in: path
 *         name: reviewid
 *         required: true
 *         description: The ID of the review to search for
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: An array of review objects (if found).
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Review'  
 *       404:
 *         description: Review not found.
 */

app.get('/searchreviews/:reviewid',cors(), (req, res) => {

  console.log('Called out');
  const sql = require('mssql')
  sql.connect('Server=gcphsdbs06;Database=Northwnd;Application Name=HSS;User ID=maappacct;Password=He@dst@rt@)!$;Encrypt=False', function (err) {

    if (err) console.log(err);

    // create Request object
    var request = new sql.Request();

    // query to the database and get the records
    request.input('trip_id', sql.VarChar(100), req.params.reviewid)
    request.execute('usp_HSRT20_Review_SelectReview', function (err, recordset) {
    //  res.contentType(res.type('application/json'));
            if (err) console.log(err)

      // send records as a response
      res.send(recordset);

    });
  });
});

/**
 * @swagger
 * /searchreviews:
 *   post:
 *     summary: Search for reviews (requires valid token)
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               reviewid:
 *                 type: string
 *                 description: The ID of the review to search for
 *               token:
 *                 type: string
 *                 description: Authentication token (must be 'HSRT##2000')
 *     responses:
 *       200:
 *         description: An array of review objects (if found).
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Review'  
 *       401:
 *         description: Unauthorized (invalid token).
 */


app.post('/searchreviews', (req, res) => {
  if(req.body.token != 'HSRT##2000') {
    res.send("token mismatch");
    return;
  }
  const sql = require('mssql')
  sql.connect('Server=gcphsdbs06;Database=Northwnd;Application Name=HSS;User ID=maappacct;Password=He@dst@rt@)!$;Encrypt=False', function (err) {

    if (err) console.log(err);

    // create Request object
    var request = new sql.Request();

    // query to the database and get the records
    request.input('trip_id', sql.VarChar(100), req.body.reviewid)
    request.execute('usp_HSRT20_Review_SelectReview', function (err, recordset) {

      if (err) console.log(err)

      // send records as a response
      res.send(recordset);

    });
  });
});


app.post('/search', async (req, res) => {
  try {
    await pool.connect('Server=gcphsdbs06;Database=Northwnd;Application Name=HSS;User ID=maappacct;Password=He@dst@rt@)!$;Encrypt=False');
    const result = await pool.request()
      .input('trip_id', req.body.reviewid)
      .execute('usp_HSRT20_Review_SelectReview');
    const reviews = result.recordset;
    res.json(reviews);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

//  res.send('Review JSON here')



app.post('/api/users', function(req, res) {
  const user_id = req.body.id;
  const token = req.body.token;
  const geo = req.body.geo;

  res.send({
    'user_id': user_id,
    'token': token,
    'geo': geo
  });
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
}
)