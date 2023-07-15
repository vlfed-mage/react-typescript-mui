import './App.css';

import { Typography } from '@mui/material';
import { MuiTypography } from './components/MuiTypography';
import { MuiButton } from './components/MuiButton';

export const App = () => {
    return (
        <div className='App'>
            <Typography variant='h2' gutterBottom align='center'>
                Typography
            </Typography>
            <MuiTypography />
            <br />
            <Typography variant='h2' gutterBottom align='center'>
                Buttons
            </Typography>
            <MuiButton />
        </div>
    );
};
