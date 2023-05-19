import React, { useState,useEffect } from "react";
import { withRouter } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { Link } from 'react-router-dom';
import axios from 'axios';
import FooterAdmin from "./FooterAdmin";
import TopBarAdmin from "./TopBarAdmin";
import SideBarAdmin from "./SideBarAdmin";
import CustomTable from '../CustomTable';
import { backendUrl as url} from "./../Util/fetchUrl";
import { objectValueToUpperCase } from './../Util/utils';
import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/Save";

// ViewStudent comoponent
const ViewStudent = () => {
  
  const [StudentList, getStudentList] = useState([]);
  const [myId, setId] = useState(12);
  const columns = [
    { title: 'Name', field: 'Name' },
    { title: 'Roll Number', field: 'RollNumber' },
    { title: 'Email', field: 'Email' },
    { title: 'DoB', field: 'DoB' },
    { title: 'WalletAddress', field: 'StudentWalletAddress' },
    {
      title: "Add Record",
      field: "internal_action",
      editable: false,
      render: (rowData) =>
          rowData && (
          <IconButton
              color="secondary"
              //onClick={() => addActionRef.current.click()}
          >
          <Link
            className='mr-2 table-button'
            to={`/addStudentRecord/?id=${rowData.RollNumber}`}
          >
            <AddIcon />{' '}
          </Link>
          </IconButton>
          )
      }
  ];
  
  useEffect(() => {
    getAllNotes(myId);
  }, [myId]);

  const getAllNotes = (id) => {
    axios
      .post(`${url}/getAllStudent`, { userId: id })
      .then((response) => {
        const allNotes = response.data.payload.payload;
         getStudentList(allNotes);
      })
      .catch((error) => console.log(`Error: ${error}`));
  };
    const addActionRef = React.useRef();
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
                          View Student List
                        </div>


                      </div>

                      <div className="compny">
                        <div className="col-sm-12 rsp">
                          <div style={{ height: 400, width: '100%' }}>
                            <CustomTable
                              title='All Candidates List'
                              columns={columns}
                              data={StudentList}
                              pageSize={5}
                              rowsPerPageOptions={[5]}
                              checkboxSelection
                            />
                          </div>
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
export default withRouter(ViewStudent);
