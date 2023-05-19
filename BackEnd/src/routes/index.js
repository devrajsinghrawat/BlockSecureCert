const express = require('express');
const middle = require('./middleware');
const router = express.Router({ mergeParams: true });

const userController = require('../controllers/user');
const { app } = require('..');

module.exports = function () {
  //========== Student ============

  app.post('/addStudent', userController.addStudent);
  app.post('/getAllStudent', userController.getAllStudent);
  app.post('/addStudentRecord', userController.addStudentRecord);
  app.post('/getStudentRecord', userController.getStudentRecord);
  app.patch('/updateStudentStatus', userController.updateStudentStatus);
};
