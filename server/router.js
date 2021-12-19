const router = require('express').Router();
const controller = require('./controller.js');

router.route('/students')
  .get(controller.students.getStudents)
  .post(controller.students.postStudent)

router.route('/students/:id')
  .patch(controller.students.updateName)

module.exports = router;