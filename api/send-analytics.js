import faunadb, { query as q } from "faunadb";

const TABLE_NAME = "visits";

module.exports = (req, res) => {
  const client = new faunadb.Client({ secret: process.env.FAUNADB_SECRET });
  const createRequest = client.query(
    q.Create(q.Collection(TABLE_NAME), { data: req.body })
  );

  createRequest.then(() => {
    res.json({
      body: req.body,
      query: req.query,
      cookies: req.cookies,
    });
  });
};
