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

/**
 * @swagger
 * /search:
 *   post:
 *     summary: Search for reviews
 *     description: This endpoint retrieves reviews based on a provided review ID.
 *     tags:
 *       - Reviews
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               reviewid:
 *                 type: integer
 *                 description: The ID of the review to search for.
 *                 required: true
 *     responses:
 *       200:
 *         description: OK. Returns the review data.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 # Replace with the actual properties of your review objects
 *                 # (e.g., reviewerName, reviewText, rating, etc.)
 *                 properties:
 *                   # ...
 *       500:
 *         description: Internal Server Error.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: An error message.
 */

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

/**
 * @swagger
 * /reviews/search:
 *   post:
 *     summary: Creates a new user (simulated response)
 *     description: This endpoint simulates a user creation process and returns a response containing the provided user ID, token, and geo data. It does not perform any actual user creation functionality.
 *     parameters:
 *       - in: body
 *         name: user
 *         description: User object containing ID, token, and geo data
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             searchValue:
 *               type: string
 *               description: The user's ID
 *               required: true
 *             SearchType:
 *               type: string
 *               description: The user's token
 *               required: true
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 user_id:
 *                   type: string
 *                   description: The provided user ID
 *                 token:
 *                   type: string
 *                   description: The provided token
 *                 geo:
 *                   type: object
 *                   description: The provided geo data
 */

app.post('/reviews/search', (req, res) => {
  const { searchType, searchValue } = req.body;

  const reviews = 
  [
    {
      sch000_uid: null,
      trip_uid: 29200,
      trip_id: "190644SP",
      Name: "SAVE THE CHILDREN FEDERATION INC",
      review_date: "05/13/19 - 05/17/19",
      trip_status: " ",
      review_type: "Review",
      operation: null,
      fed_grantee_id: "06CH7121",
    },
    {
      sch000_uid: 0,
      trip_uid: 29004,
      trip_id: "190653C",
      Name: "MIDDLE GEORGIA COMMUNITY ACTION AGENCY",
      review_date: "03/26/19 - 03/29/19",
      trip_status: " ",
      review_type: "Review",
      operation: null,
      fed_grantee_id: "04CH010426",
    },
    {
      sch000_uid: 0,
      trip_uid: 28668,
      trip_id: "190653F2",
      Name: "MIDDLE GEORGIA COMMUNITY ACTION AGENCY",
      review_date: "01/22/19 - 01/25/19",
      trip_status: " ",
      review_type: "Review",
      operation: null,
      fed_grantee_id: "04CH010426",
    }
  ]
  const filteredReviews = reviews;

  res.send(filteredReviews);
});

/**
 * @swagger
 * /api/users:
 *   post:
 *     summary: Creates a new user (simulated response)
 *     description: This endpoint simulates a user creation process and returns a response containing the provided user ID, token, and geo data. It does not perform any actual user creation functionality.
 *     parameters:
 *       - in: body
 *         name: user
 *         description: User object containing ID, token, and geo data
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             id:
 *               type: string
 *               description: The user's ID
 *               required: true
 *             token:
 *               type: string
 *               description: The user's token
 *               required: true
 *             geo:
 *               type: object
 *               description: The user's geo data (format may vary depending on your implementation)
 *               required: true
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 user_id:
 *                   type: string
 *                   description: The provided user ID
 *                 token:
 *                   type: string
 *                   description: The provided token
 *                 geo:
 *                   type: object
 *                   description: The provided geo data
 */

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


app.post('/reviews/search', function(req, res) {
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