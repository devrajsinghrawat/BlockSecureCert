import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import axios from 'axios';
import FooterAdmin from "./FooterAdmin";
import TopBarAdmin from "./TopBarAdmin";
import SideBarAdmin from "./SideBarAdmin";
import { backendUrl as url} from "./../Util/fetchUrl";
import { objectValueToUpperCase } from './../Util/utils';
import { useParams } from "react-router-dom";

const AddStudentRecord = (props) => {
  const MetamaskId = localStorage.getItem('id');
  //const { id } = useParams();
  const queryParameters = new URLSearchParams(window.location.search)
  const GetUrl = queryParameters.get("id")
 
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [require, setRequire] = useState('*');
  const [user, setUser] = useState({
    MetamaskId:MetamaskId,
    Roll_number: "",
    Course_ID: "",
    Total_Marks: "",
    Sub_1_Marks: "",
    Sub_2_Marks:"",
    Total:"",
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
    if (!values.Roll_number) {
      errors.Roll_number = 'Roll Number is required!';
    }
    if (!values.Course_ID) {
      errors.Course_ID = 'Course ID is required!';
    }
    if (!values.Total_Marks) {
      errors.Total_Marks = 'Total Marks is required!';
    }
    if (!values.Total) {
      errors.Total = 'Total is required!';
    }
    return errors;
  };

  const AdRecord = (e) => {
    setRequire('');
    e.preventDefault();
    setFormErrors(validate(user));
    setIsSubmit(true);
    const {
    MetamaskId,
    Roll_number,
    Course_ID,
    Total_Marks,
    Sub_1_Marks,
    Sub_2_Marks,
    Total,
    } = user;
    if (
      Roll_number &&
      Course_ID &&
      Total_Marks &&
      Total 
    ) {
      axios
        .post(`${url}/addStudentRecord`, objectValueToUpperCase(user))
        .then((res) => {
          toast.success('Student Record Added successfully!', {
            position: 'top-right',
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          setTimeout(() => {
            props.history.push('/dashboard');
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
                          Add Student Record
                        </div>
                        
                      </div>

                      <div className="compny">
                        <div className="col-sm-12 rsp">
                            {/* <!-- Content Row --> */}
                        <h5>Student Record Detalis</h5>
                        <div className='col-sm-9 rsp'>
                          <div className='row'>
                            
                          </div>

                          <div className='row'>
                            {console.log("user__",user)}
                            <div className='col'>
                              
                            
                            {(() => {
              if (GetUrl != null){
                  return (
                      <Text>data</Text>
                  )
              }
              
              return null;
            })()}
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
                            <div className='col'>
                              <label>
                              Course Id{' '}
                                <p className='erromsg lft'>{require}</p>{' '}
                              </label>
                              <input
                                type='text'
                                className='form-control'
                                name='Course_ID'
                                value={user.Course_ID}
                                onChange={handleChange}
                                placeholder=''
                              ></input>
                              <p className='erromsg'>{formErrors.Course_ID}</p>
                            </div>
                          </div>
                          <div className='row'>
                            <div className='col'>
                              <label>
                              Total Marks <p className='erromsg lft'>{require}</p>{' '}
                              </label>
                              <input
                                type='text'
                                className='form-control'
                                name='Total_Marks'
                                value={user.Total_Marks}
                                onChange={handleChange}
                                placeholder=''
                              ></input>
                              <p className='erromsg'>{formErrors.Total_Marks}</p>
                            </div>
                            <div className='col'>
                              <label>
                              Sub 1 Marks <p className='erromsg lft'>{require}</p>{' '}
                              </label>
                              <input
                                type='text'
                                className='form-control'
                                name='Sub_1_Marks'
                                value={user.Sub_1_Marks}
                                onChange={handleChange}
                                placeholder=''
                              ></input>
                              <p className='erromsg'>{formErrors.Sub_1_Marks}</p>
                            </div>
                          </div>

                          <div className='row'>
                            <div className='col'>
                              <label>
                              Sub 2 Marks <p className='erromsg lft'>{require}</p>{' '}
                              </label>
                              <input
                                type='text'
                                className='form-control'
                                name='Sub_2_Marks'
                                value={user.Sub_2_Marks}
                                onChange={handleChange}
                                placeholder=''
                              ></input>
                              <p className='erromsg'>{formErrors.Sub_2_Marks}</p>
                            </div>
                            <div className='col'>
                              <label>
                              Total % <p className='erromsg lft'>{require}</p>{' '}
                              </label>
                              <input
                                type='text'
                                className='form-control'
                                name='Total'
                                value={user.Total}
                                onChange={handleChange}
                                placeholder=''
                              ></input>
                              <p className='erromsg'>{formErrors.Total}</p>
                            </div>
                            
                          </div>

                          <div className='col-sm'>
                            <div className='button2'>
                              <button
                                type='button'
                                className='btn btn-primary'
                                onClick={AdRecord}
                              >
                                Add Record
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
export default withRouter(AddStudentRecord);
