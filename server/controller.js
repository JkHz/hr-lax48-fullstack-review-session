const Student = require('../db/Student.js');

const controller = {
  students: {
    getStudents: function (req, res) {
      Student.find()
        .then(students => res.status(200).send(students))
        .catch(err => res.status(404).send(err))
    },

    postStudent: function (req, res) {
      Student.create(req.body)
        .then(() => res.status(200).send('Student added'))
        .catch(err => res.status(404).send(err))
    },

    updateName: function (req, res) {
      Student.updateOne({ _id: req.params.id }, { name: req.body.name })
      .then(() => res.status(200).send('Student name updated!'))
      .catch(err => res.status(404).send(err))
    }
  }
};

module.exports = controller