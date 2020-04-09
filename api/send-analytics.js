module.exports = (req, res) => {

  console.log(req.body);
  console.log(process.env.TEST);
  console.log(process.env.FAUNADB_SECRET);

  res.json({
    body: req.body,
    query: req.query,
    cookies: req.cookies
  })
}