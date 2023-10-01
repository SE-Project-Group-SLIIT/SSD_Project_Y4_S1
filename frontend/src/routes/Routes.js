import React from 'react'
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";

import AddVehicle from '../components/vehicleManagement/vehicleAdd';
import vehicleList from '../components/vehicleManagement/vehicleList';
import DeletedList from '../components/vehicleManagement/deletedList';
import VehicleReport from '../components/vehicleManagement/VehicleReport';

// Adding event
import Event from "../components/eventReservationManagement/Event";
import ViewEvent from "../components/eventReservationManagement/viewEvent";
import EventReport from "../components/eventReservationManagement/EventReport";
import DeleteRecord from "../components/eventReservationManagement/DeleteRecord"

import RentalPlacement from "../components/rentalManagement/rentalPlacement"
import rentalList from "../components/rentalManagement/rentalList"

//employee management
import AddEmployee from "../components/employeeManagement/AddEmployee";
import AllEmployee from "../components/employeeManagement/AllEmployee";
import UpdateEmployee from "../components/employeeManagement/UpdateEmployee";
import RemovedEmployee from "../components/employeeManagement/RemovedEmployee";
import PrivateRoutes from './privateRoutes';
import PublicRoutes from './PublicRoutes';
// import Footer from '../Footer';
import login from '../components/login'
import WithPermission from "./withPermission"; // Import your HOC

 const Routes = () => {
  return (
    <div>
        <Router>
            <Switch>
            {/* Mew */}
            <PrivateRoutes path="/vehicle/addVehicle" exact component={AddVehicle} />
            <PrivateRoutes path = "/vehicle/viewVehicle" exact component={vehicleList}/>
            <PrivateRoutes path = "/vehicle/view" exact component={DeletedList}/>
            <PrivateRoutes path = "/vehicle/viewVehicleReport" exact component={VehicleReport}/> 
            <PublicRoutes path = "/login" exact component={login}/>
            
            <PrivateRoutes path="/addRental" exact component={RentalPlacement} />
            <PrivateRoutes path="/rentalList" exact component={rentalList} />
            
            {/*  */}
            <PrivateRoutes path="/addEvent" exact component={Event} />
            <PrivateRoutes path="/viewEvent"  exact component={ViewEvent} />
            <PrivateRoutes path="/reservation/report" exact component={EventReport} />
            <PrivateRoutes path="/display/RemoveEventlist" exact component={DeleteRecord} />
            
            <PrivateRoutes path="/addEmp" exact component={WithPermission(AddEmployee, "employeeManage")} />
            <PrivateRoutes path="/allEmp" exact  component={WithPermission(AllEmployee, "employeeManage")} />
            <PrivateRoutes path="/updateEmp" exact component={WithPermission(UpdateEmployee, "employeeManage")} />
            <PrivateRoutes path="/REmp" exact component={WithPermission(RemovedEmployee, "employeeManage")}/>
            {/* <Route path="*" component={NotFound} /> */}
            </Switch>
        </Router>
       


    </div>
  )
}

export default Routes;