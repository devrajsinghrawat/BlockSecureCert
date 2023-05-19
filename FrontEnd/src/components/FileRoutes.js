import { Route, Switch } from "react-router-dom";
import React from "react";

import Login from "./Login";
import AdminDashboard from "./User/UserDashboard";
import { PrivateRoute, ProtectedRoute } from "./RouteComponents";
import AddStudent from "./User/AddStudent";
import ViewStudent from "./User/ViewStudent";
import AddStudentRecord from "./User/AddStudentRecord";

const Page404 = () => <h5>Page Not Found 404</h5>;

const FileRoutes = () => {
  return (
    <div className="fileRoutes">
      <Switch>
        <PrivateRoute path="/dashboard" component={AdminDashboard} />
        <PrivateRoute path="/addStudent" component={AddStudent} />
        <PrivateRoute path="/viewStudent" component={ViewStudent} />
        <PrivateRoute path="/addStudentRecord" component={AddStudentRecord} />
        <PrivateRoute path="/addStudentRecord/:id" component={AddStudentRecord}></PrivateRoute>

        <ProtectedRoute exact path="/signup" component={Login} />
        <ProtectedRoute exact path="/" component={Login} />

        <Route path="*" component={Page404} />
      </Switch>
    </div>
  );
};

export default FileRoutes;
