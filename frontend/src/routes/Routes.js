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

import PrivateRoutes from "./privateRoutes";
import PublicRoutes from "./PublicRoutes";
// import Footer from '../Footer';
import login from "../components/login";

const Routes = () => {
	return (
		<div>
			<Router>
				<Switch>
					{/* Mew */}
					<PrivateRoutes
						path="/vehicle/addVehicle"
						exact
						component={AddVehicle}
					/>
					<PrivateRoutes
						path="/vehicle/viewVehicle"
						exact
						component={vehicleList}
					/>
					<PrivateRoutes
						path="/vehicle/view"
						exact
						component={DeletedList}
					/>
					<PrivateRoutes
						path="/vehicle/viewVehicleReport"
						exact
						component={VehicleReport}
					/>
					<PublicRoutes path="/login" exact component={login} />

					<PrivateRoutes
						path="/addRental"
						exact
						component={RentalPlacement}
					/>
					<PrivateRoutes
						path="/rentalList"
						exact
						component={rentalList}
					/>

					{/*  */}
					<PrivateRoutes
						path="/addEvent"
						exact
						component={Event}
					/>
					<PrivateRoutes
						path="/viewEvent"
						exact
						component={ViewEvent}
					/>
					<PrivateRoutes
						path="/reservation/report"
						exact
						component={EventReport}
					/>
					<PrivateRoutes
						path="/display/RemoveEventlist"
						exact
						component={DeleteRecord}
					/>

					<PrivateRoutes
						path="/add-new-employee"
						exact
						component={AddEmployee}
					/>
					<PrivateRoutes
						path="/all-employee-list"
						exact
						component={AllEmployee}
					/>
					<PrivateRoutes
						path="/updateEmp"
						exact
						component={UpdateEmployee}
					/>
					<PrivateRoutes
						path="/inactive-employee-list"
						exact
						component={RemovedEmployee}
					/>
					<PrivateRoutes
						path="/active-employee-list"
						exact
						component={CurrentEmployee}
					/>
					{/* <Route path="*" component={NotFound} /> */}
				</Switch>
			</Router>
		</div>
	);
};

export default Routes;
