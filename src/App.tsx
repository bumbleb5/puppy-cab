import './App.css';
import React from 'react';
import RoutedBody from './components/RoutedBody';
import TopNav from './components/TopNav';
import { Theme, ThemeProvider } from '@mui/material';
import { lightTheme, darkTheme } from './theme';

const themes: Record<string, Theme> = {
    light: lightTheme,
    dark: darkTheme
}

function App(): React.JSX.Element {

    const [theme, setTheme] = React.useState<Theme>(themes.light);

    return (
        <React.StrictMode>
            <ThemeProvider theme={theme}>
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        height: '100vh',
                        width: '100vw'
                    }}
                >
                    <TopNav />
                    <RoutedBody />
                </div>
            </ThemeProvider>
        </React.StrictMode>
    );
   
}




export default App;
