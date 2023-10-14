import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import AddVehicle from "../components/vehicleManagement/vehicleAdd";
import vehicleList from "../components/vehicleManagement/vehicleList";
import DeletedList from "../components/vehicleManagement/deletedList";
import VehicleReport from "../components/vehicleManagement/VehicleReport";

// Adding event
import Event from "../components/eventReservationManagement/Event";
import ViewEvent from "../components/eventReservationManagement/viewEvent";
import EventReport from "../components/eventReservationManagement/EventReport";
import DeleteRecord from "../components/eventReservationManagement/DeleteRecord";

import RentalPlacement from "../components/rentalManagement/rentalPlacement";
import rentalList from "../components/rentalManagement/rentalList";

//employee management
import AddEmployee from "../components/employeeManagement/AddEmployee";
import AllEmployee from "../components/employeeManagement/AllEmployee";
import UpdateEmployee from "../components/employeeManagement/UpdateEmployee";
import RemovedEmployee from "../components/employeeManagement/RemovedEmployee";
import CurrentEmployee from "../components/employeeManagement/CurrentEmployee";
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
            <PrivateRoutes path="/vehicle/addVehicle" exact component={WithPermission(AddVehicle, "vehicleManage")} />
            <PrivateRoutes path = "/vehicle/viewVehicle" exact component={WithPermission(vehicleList, "vehicleManage")}/>
            <PrivateRoutes path = "/vehicle/view" exact component={WithPermission(DeletedList, "vehicleManage")}/>
            <PrivateRoutes path = "/vehicle/viewVehicleReport" exact component={WithPermission(VehicleReport, "vehicleManage")}/> 
            <PublicRoutes path = "/" exact component={login}/>
            
            <PrivateRoutes path="/addRental" exact component={WithPermission(RentalPlacement, "rentalMange")} />
            <PrivateRoutes path="/rentalList" exact component={WithPermission(rentalList, "rentalMange")}/>
            
            {/*  */}
            <PrivateRoutes path="/addEvent" exact component={WithPermission(Event, "rentalMange")} />
            <PrivateRoutes path="/viewEvent"  exact component={WithPermission(ViewEvent, "rentalMange")}/>
            <PrivateRoutes path="/reservation/report" exact component={WithPermission(EventReport, "rentalMange")}/>
            <PrivateRoutes path="/display/RemoveEventlist" exact component={WithPermission(DeleteRecord, "rentalMange")}/>
            
            <PrivateRoutes path="/add-new-employee" exact component={WithPermission(AddEmployee, "employeeManage")} />
            <PrivateRoutes path="/all-employee-list" exact  component={WithPermission(AllEmployee, "employeeManage")} />
            <PrivateRoutes path="/updateEmp" exact component={WithPermission(UpdateEmployee, "employeeManage")} />
            <PrivateRoutes path="/inactive-employee-list" exact component={WithPermission(RemovedEmployee, "employeeManage")}/>
            <PrivateRoutes path="/active-employee-list" exact component={WithPermission(CurrentEmployee, "employeeManage")} />
					
            {/* <Route path="*" component={NotFound} /> */}
            </Switch>
        </Router>
		</div>
	);
};

export default Routes;
