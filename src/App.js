import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/Topbar/Topbar";
import "./App.css" ;
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import EventList from "./pages/eventList/EventList";
import Event from "./pages/event/Event";
import NewEvent from "./pages/newEvent/NewEvent";





function App() {
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/userList">
            <UserList />
          </Route>
          <Route path="/user/:userId">
            <User />
          </Route>
          <Route path="/newUser">
            <NewUser />
          </Route>
          <Route path="/event">
            <EventList/>
          </Route>
          <Route path="/event/eventId">
            <Event/>
          </Route>
          <Route path="/newEvent">
            <NewEvent />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}


export default App;
