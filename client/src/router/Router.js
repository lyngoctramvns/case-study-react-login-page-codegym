import { Routes, Route } from 'react-router-dom';
import Table from '../components/Table';
import Login from '../components/Login-form';
import RegistrationForm from '../components/Registration-form';
import Dashboard from '../components/Dashboard';

function AppRoutes() {
    return(
        <Routes>
            <Route path = "/" element = {<Dashboard/>}/>
            <Route path = "/table" element = {<Table/>} />
            <Route path = "/login" element = {<Login/>}/>
            <Route path = "/register" element = {<RegistrationForm/>}/>
        </Routes>

    )
}

export default AppRoutes;

