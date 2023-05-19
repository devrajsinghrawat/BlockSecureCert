import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import FooterAdmin from './FooterAdmin';
import TopBarAdmin from './TopBarAdmin';
import SideBarAdmin from './SideBarAdmin';

const AdminDashboard = () => {

  return (
    <>
      <div className='adm'>
        <div className='mb-3'>
          <div className='row' id='main'>
            <div id='page-top'>
              <div id='wrapper'>
                <SideBarAdmin />

                <div id='content-wrapper' className='d-flex flex-column'>
                  <div id='content'>
                    <TopBarAdmin />

                    <div className='container-fluid'>
                      <div className='tw-mb-4 tw-flex tw-justify-between tw-items-center tw-w-full'>
                        <h1 className='tw-text-black tw-text-[32px] tw-font-bold'>
                          Dashboard
                        </h1>
                      </div>

                      <div className=''>
                        
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
export default withRouter(AdminDashboard);
