const userModel = require('../model/user'),
  helper = require('../helpers/index'),
  path = require('path');

let user = {};
// add Student Register
user.addStudent = async function (req, res, next) {
  console.log('Aaaaa22', req.body);
  if (req.body.Roll_number && req.body.email != '') {
    userModel.addStudent(req.body).then(function (result) {
      console.log('result : ', result);
      if (result.status) {
        if (result.status == true) {
          helper.successHandler(
            res,
            {
              payload: result.message,
            },
            200
          );
        } else {
          helper.errorHandler(
            res,
            {
              status: false,
              message: result.message,
            },
            500
          );
        }
      } else {
        helper.errorHandler(
          res,
          {
            status: false,
            message: result.message,
          },
          500
        );
      }
    });
  } else {
    helper.errorHandler(
      res,
      {
        status: false,
        message: 'Post data empty !!',
      },
      500
    );
  }
};

// get All users list
user.getAllStudent = async function (req, res, next) {
  if (req.body.userId != '') {
    userModel.getAllStudent(req.body).then(function (result) {
      if (result.status) {
        if (result.status == true) {
          helper.successHandler(
            res,
            {
              payload: result.message,
            },
            200
          );
        } else {
          helper.errorHandler(
            res,
            {
              status: false,
              message: result.message,
            },
            500
          );
        }
      } else {
        helper.errorHandler(
          res,
          {
            status: false,
            message: result.message,
          },
          500
        );
      }
    });
  } else {
    helper.errorHandler(
      res,
      {
        status: false,
        message: 'Please provide user ID !!',
      },
      500
    );
  }
};
// add Student Record
user.addStudentRecord = async function (req, res, next) {
  //console.log('Student_Record', req.body);
  if (req.body.Roll_number && req.body.Roll_number != '') {
    userModel.addStudentRecord(req.body).then(function (result) {
      console.log('result : ', result);
      if (result.status) {
        if (result.status == true) {
          helper.successHandler(
            res,
            {
              payload: result.message,
            },
            200
          );
        } else {
          helper.errorHandler(
            res,
            {
              status: false,
              message: result.message,
            },
            500
          );
        }
      } else {
        helper.errorHandler(
          res,
          {
            status: false,
            message: result.message,
          },
          500
        );
      }
    });
  } else {
    helper.errorHandler(
      res,
      {
        status: false,
        message: 'Post data empty !!',
      },
      500
    );
  }
};
// Get All Recruiter
user.getAllRecruiter = async function (req, res, next) {
  //console.log("kanu___",req.body);
  if (req.body.userId != '') {
    userModel.getAllRecruiter(req.body).then(function (result) {
      if (result.status) {
        if (result.status == true) {
          helper.successHandler(
            res,
            {
              payload: result.message,
            },
            200
          );
        } else {
          helper.errorHandler(
            res,
            {
              status: false,
              message: result.message,
            },
            500
          );
        }
      } else {
        helper.errorHandler(
          res,
          {
            status: false,
            message: result.message,
          },
          500
        );
      }
    });
  } else {
    helper.errorHandler(
      res,
      {
        status: false,
        message: 'Please provide user ID !!',
      },
      500
    );
  }
};
// User login
user.loginUser = async function (req, res, next) {
  if (req.body.email != '' && req.body.password != '') {
    userModel.loginUser(req.body).then(function (result) {
      console.log('rrrrr', result);
      if (result.status) {
        if (result.status == true) {
          helper.successHandler(
            res,
            {
              payload: result.data,
            },
            200
          );
        } else {
          helper.errorHandler(
            res,
            {
              status: false,
              message: result.message,
            },
            500
          );
        }
      } else {
        helper.errorHandler(
          res,
          {
            status: false,
            message: result.message,
          },
          500
        );
      }
    });
  } else {
    helper.errorHandler(
      res,
      {
        status: false,
        message: 'Please provide login details !!',
      },
      500
    );
  }
};

// get All users by Id
user.getUserByUserId = async function (req, res, next) {
  if (req.body.usertoken != '') {
    console.log(req.body);
    userModel.getUserByUserId(req.body).then(function (result) {
      if (result.status) {
        if (result.status == true) {
          helper.successHandler(
            res,
            {
              payload: result.data,
            },
            200
          );
        } else {
          helper.errorHandler(
            res,
            {
              status: false,
              message: result.message,
            },
            500
          );
        }
      } else {
        helper.errorHandler(
          res,
          {
            status: false,
            message: result.message,
          },
          500
        );
      }
    });
  } else {
    helper.errorHandler(
      res,
      {
        status: false,
        message: 'Please provide user token !!',
      },
      500
    );
  }
};

user.updateUserRegStatus = function (req, res, next) {
  if (req.body.id) {
    userModel.updateUserRegStatus(req.body).then(function (result) {
      if (result) {
        res.json({
          status: true,
          code: '',
          message: 'Operation performed successfully.',
          payload: {},
        });
      } else {
        res.status(500).send({
          status: false,
          message: 'Failed, Please try again.',
          payload: {},
        });
      }
    });
  } else {
    res.status(500).send({
      status: false,
      message: 'Something went wrong.',
      payload: {},
    });
  }
};

user.updateUserStatus = function (req, res, next) {
  if (req.body.id) {
    userModel.updateUserStatus(req).then(function (result) {
      if (result) {
        res.json({
          status: true,
          code: '',
          message: 'Operation performed successfully.',
          payload: {},
        });
      } else {
        res.status(500).send({
          status: false,
          message: 'Failed, Please try again.',
          payload: {},
        });
      }
    });
  } else {
    res.status(500).send({
      status: false,
      message: 'Something went wrong.',
      payload: {},
    });
  }
};

// Email Send Forget Password
user.ForgetPwdSendEmail = async function (req, res) {
  let body = req.body;
  if (req.body.email != '') {
    userModel.ForgetPwdSendEmail(req.body).then(function (result) {
      console.log('result : ', result);
      if (result.status) {
        if (result.status == true) {
          helper.successHandler(
            res,
            {
              payload: result.message,
            },
            200
          );
        } else {
          helper.errorHandler(
            res,
            {
              status: false,
              message: result.message,
            },
            500
          );
        }
      } else {
        helper.errorHandler(
          res,
          {
            status: false,
            message: result.message,
          },
          500
        );
      }
    });
  } else {
    helper.errorHandler(
      res,
      {
        status: false,
        message: " Email can't be empty !!",
      },
      500
    );
  }
};

// set Forgot Password
user.setForgotPassword = async function (req, res) {
  let body = req.body;

  if (req.body.email && req.body.email != '') {
    userModel.setForgotPassword(req.body).then(function (result) {
      console.log('result : ', result.data);
      if (result.status) {
        if (result.status == true) {
          helper.successHandler(
            res,
            {
              payload: result.data,
            },
            200
          );
        } else {
          helper.errorHandler(
            res,
            {
              status: false,
              message: result.message,
            },
            500
          );
        }
      } else {
        helper.errorHandler(
          res,
          {
            status: false,
            message: result.message,
          },
          500
        );
      }
    });
  } else {
    helper.errorHandler(
      res,
      {
        status: false,
        message: " email can't be empty !!",
      },
      500
    );
  }
};

//Update user password by admin
user.UpdateUserPwdbyAdmin = async function (req, res) {
  let body = req.body;
  //console.log("body_____",req.body);
  if (req.body.UserEmailId && req.body.passwordUser != '') {
    userModel.UpdateUserPwdbyAdmin(req.body).then(function (result) {
      console.log('result : ', result.message);
      if (result.status) {
        if (result.status == true) {
          helper.successHandler(
            res,
            {
              payload: result.message,
            },
            200
          );
        } else {
          helper.errorHandler(
            res,
            {
              status: false,
              message: result.message,
            },
            500
          );
        }
      } else {
        helper.errorHandler(
          res,
          {
            status: false,
            message: result.message,
          },
          500
        );
      }
    });
  } else {
    helper.errorHandler(
      res,
      {
        status: false,
        message: "Password Can't be empty !!",
      },
      500
    );
  }
};
//change Password
user.changePwd = async function (req, res) {
  let body = req.body;

  if (req.body.email && req.body.password != '') {
    userModel.changePwd(req.body).then(function (result) {
      console.log('result : ', result.message);
      if (result.status) {
        if (result.status == true) {
          helper.successHandler(
            res,
            {
              payload: result.message,
            },
            200
          );
        } else {
          helper.errorHandler(
            res,
            {
              status: false,
              message: result.message,
            },
            500
          );
        }
      } else {
        helper.errorHandler(
          res,
          {
            status: false,
            message: result.message,
          },
          500
        );
      }
    });
  } else {
    helper.errorHandler(
      res,
      {
        status: false,
        message: "Password Can't be empty !!",
      },
      500
    );
  }
};

// invite teammate
user.inviteTeamMate = async function (req, res, next) {
  if (req.body.formData && req.body.userData) {
    userModel.inviteTeamMate(req.body).then(function (result) {
      console.log('result : ', result);
      if (result.status) {
        if (result.status == true) {
          helper.successHandler(
            res,
            {
              payload: result.message,
            },
            200
          );
        } else {
          helper.errorHandler(
            res,
            {
              status: false,
              message: result.message,
            },
            500
          );
        }
      } else {
        helper.errorHandler(
          res,
          {
            status: false,
            message: result.message,
          },
          500
        );
      }
    });
  } else {
    helper.errorHandler(
      res,
      {
        status: false,
        message: 'Post data empty !!',
      },
      500
    );
  }
};
//get student record
user.getStudentRecord = async function (req, res, next) {
  if (req.body.studentWalletAddress != '') {
    userModel.getStudentRecord(req.body).then(function (result) {
      if (result.status) {
        if (result.status == true) {
          helper.successHandler(
            res,
            {
              payload: result.message,
            },
            200
          );
        } else {
          helper.errorHandler(
            res,
            {
              status: false,
              message: result.message,
            },
            500
          );
        }
      } else {
        helper.errorHandler(
          res,
          {
            status: false,
            message: result.message,
          },
          500
        );
      }
    });
  } else {
    helper.errorHandler(
      res,
      {
        status: false,
        message: 'Please provide studentWalletAddress !!',
      },
      500
    );
  }
};

user.updateStudentStatus = async function (req, res, next) {
  if (req.body.id) {
    userModel.getStudentRecord(req.body).then(function (result) {
      if (result.status) {
        if (result.status == true) {
          helper.successHandler(
            res,
            {
              payload: result.message,
            },
            200
          );
        } else {
          helper.errorHandler(
            res,
            {
              status: false,
              message: result.message,
            },
            500
          );
        }
      } else {
        helper.errorHandler(
          res,
          {
            status: false,
            message: result.message,
          },
          500
        );
      }
    });
  } else {
    helper.errorHandler(
      res,
      {
        status: false,
        message: 'Please provide id !!',
      },
      500
    );
  }
};

module.exports = user;
