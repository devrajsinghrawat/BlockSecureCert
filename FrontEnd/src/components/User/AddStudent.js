import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import axios from 'axios';
import FooterAdmin from "./FooterAdmin";
import TopBarAdmin from "./TopBarAdmin";
import SideBarAdmin from "./SideBarAdmin";
import { backendUrl as url} from "./../Util/fetchUrl";
import { objectValueToUpperCase } from './../Util/utils';

const AddStudent = (props) => {
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [require, setRequire] = useState('*');
  const [user, setUser] = useState({
    name: "",
    Roll_number: "",
    DateOfBirth: "",
    Email: "",
    WalletAddress: "",
  });

  const handleChange = (e) => {
    // console.log("form_data",e);
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };
  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
    }
  }, [formErrors]);
  const validate = (values) => {
    const errors = {};
    if (!values.name) {
      errors.name = 'Name is required!';
    }
    if (!values.Roll_number) {
      errors.Roll_number = 'Roll Number is required!';
    }
    if (!values.DateOfBirth) {
      errors.DateOfBirth = 'Date Of Birth is required!';
    }
    if (!values.Email) {
      errors.Email = 'Email is required!';
    }
    if (!values.WalletAddress) {
      errors.WalletAddress = 'Wallet Address is required!';
    }
    return errors;
  };

  const AdJob = (e) => {
    setRequire('');
    e.preventDefault();
    setFormErrors(validate(user));
    setIsSubmit(true);
    console.log("Enter___");
    const {
    name,
    Roll_number,
    DateOfBirth,
    Email,
    WalletAddress,
    } = user;
    if (
      name &&
      Roll_number &&
      DateOfBirth &&
      Email &&
      WalletAddress 
    ) {
      axios
        .post(`${url}/addStudent`, objectValueToUpperCase(user))
        .then((res) => {
          console.log('Add_Jobs_____', res);
          toast.success('Student Added successfully!', {
            position: 'top-right',
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          setTimeout(() => {
            props.history.push('/viewStudent');
          }, 2000);
        })
        .catch((err) => {
          console.log('There was an error!', err.response.data.message);
          // this.setState({ errorMessage: error.message });
          toast.error(err.response.data.message, {
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          //console.log('There was an error!', err);
        });
    } else {
      toast.error('Invalid Input', {
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
   }

  return (
    <>
      <div className="adm">
        <div className="mb-3">
          <div className="row" id="main">
            <div id="page-top">
              <div id="wrapper">
                <SideBarAdmin />
                <div id="content-wrapper" className="d-flex flex-column">
                  <div id="content">
                    <TopBarAdmin />
                    <div className="container-fluid">
                      <div className="mb-4 d-sm-flex align-items-center justify-content-between">
                        <div
                          className="font-bold text-black"
                          style={{
                            fontSize: "18px",
                            fontWeight: "bold",
                          }}
                        >
                          Add Student
                        </div>
                        
                      </div>

                      <div className="compny">
                        <div className="col-sm-12 rsp">
                            {/* <!-- Content Row --> */}
                        <h5>Student Detalis</h5>
                        <div className='col-sm-9 rsp'>
                          <div className='row'>
                            {console.log("name__",user)}
                          </div>

                          <div className='row'>
                            <div className='col'>
                              <label>
                                Name{' '}
                                <p className='erromsg lft'>{require}</p>{' '}
                              </label>
                              <input
                                type='text'
                                className='form-control'
                                name='name'
                                value={user.name}
                                onChange={handleChange}
                                placeholder=''
                              ></input>
                              <p className='erromsg'>{formErrors.name}</p>
                            </div>
                            <div className='col'>
                              <label>
                                Roll Number{' '}
                                <p className='erromsg lft'>{require}</p>{' '}
                              </label>
                              <input
                                type='text'
                                className='form-control'
                                name='Roll_number'
                                value={user.Roll_number}
                                onChange={handleChange}
                                placeholder=''
                              ></input>
                              <p className='erromsg'>{formErrors.Roll_number}</p>
                            </div>
                          </div>
                          <div className='row'>
                            <div className='col'>
                              <label>
                                Date Of Birth <p className='erromsg lft'>{require}</p>{' '}
                              </label>
                              <input
                                type='text'
                                className='form-control'
                                name='DateOfBirth'
                                value={user.DateOfBirth}
                                onChange={handleChange}
                                placeholder=''
                              ></input>
                              <p className='erromsg'>{formErrors.DateOfBirth}</p>
                            </div>
                            <div className='col'>
                              <label>
                                Email <p className='erromsg lft'>{require}</p>{' '}
                              </label>
                              <input
                                type='Email'
                                className='form-control'
                                name='Email'
                                value={user.Email}
                                onChange={handleChange}
                                placeholder=''
                              ></input>
                              <p className='erromsg'>{formErrors.Email}</p>
                            </div>
                          </div>

                          <div className='row'>
                            <div className='col'>
                              <label>
                                Wallet Address <p className='erromsg lft'>{require}</p>{' '}
                              </label>
                              <input
                                type='text'
                                className='form-control'
                                name='WalletAddress'
                                value={user.WalletAddress}
                                onChange={handleChange}
                                placeholder=''
                              ></input>
                              <p className='erromsg'>{formErrors.WalletAddress}</p>
                            </div>
                            
                          </div>

                          <div className='col-sm'>
                            <div className='button2'>
                              <button
                                type='button'
                                className='btn btn-primary'
                                onClick={AdJob}
                              >
                                Submit
                              </button>
                            </div>
                          </div>
                        </div>
                        {/* Content Row End*/}
                        </div>
                      </div>
                    </div>
                  </div>
                  <FooterAdmin />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ToastContainer />
    </>
  );
};
export default withRouter(AddStudent);
