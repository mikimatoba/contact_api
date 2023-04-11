const Form = require('../models/form');

// create and save new form
exports.create = (req, res) => {
  // validate request
  if (!req.body) {
    res.status(400).send({message: "Content can not be empty"});
    return;
  }

  // new form
  const form = new Form({
    email: req.body.email,
    text: req.body.text,
  })

  // save form in the datebase
  form
    .save(form)
    .then(data => {
      res.send(data)
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred on Create"
      });
    });
}

// retrieve and return all forms / retrieve and return a single form
exports.find = (req, res) => {
  if(req.body.id) {
    const id = req.body.id;
    Form.findById(id)
      .then(data => {
        if(!data) {
          res.status(404).send({message: `Not found form with ${id}.`})
        } else {
          res.send(data);
        }
      })
      .catch(err => {
        res.status(500).send({message: `Error occurred on Find with ${id}.`})
      })

  } else {
    Form.find()
      .then(form => {
        res.send(form)
      })
      .catch(err => {
        res.status(500).send({
          message: err.message || "Error occurred on Find"
        });
      })
  }
}
