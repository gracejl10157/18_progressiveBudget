const router = require("express").Router();
const Transaction = require("../models/transaction.js");

// grace:
// create a new Transaction using our model we created using the Mongoose ORM
router.post("/api/transaction", ({ body }, res) => {
  Transaction.create(body)
    .then(dbTransaction => {
      res.json(dbTransaction);
    })
    .catch(err => {
      res.status(404).json(err);
    });
});

// grace:
// create multiple Transactions using our model we created using the Mongoose ORM
router.post("/api/transaction/bulk", ({ body }, res) => {
  Transaction.insertMany(body)
    .then(dbTransaction => {
      res.json(dbTransaction);
    })
    .catch(err => {
      res.status(404).json(err);
    });
});

// grace:
// get all Transactions using our model we created using the Mongoose ORM
router.get("/api/transaction", (req, res) => {
  Transaction.find({})
    // grace:
    // sort by date DESC
    .sort({ date: -1 })
    .then(dbTransaction => {
      res.json(dbTransaction);
    })
    .catch(err => {
      res.status(404).json(err);
    });
});

module.exports = router;
