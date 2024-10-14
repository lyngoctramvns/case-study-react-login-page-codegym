import * as React from 'react';
import Menubar from '../components/Menu-sidebar';
import { StyledEngineProvider } from '@mui/material/styles';
import Login from '../components/Login-form';

function Dashboard() {
    return (
        <div className="App">
            <React.StrictMode>
                <StyledEngineProvider injectFirst>
                    <Menubar />
                    <Login />
                </StyledEngineProvider>
            </React.StrictMode>
        </div>
    )
}

export default Dashboard;