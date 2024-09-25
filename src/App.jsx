import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GamePage from './components/GamePage';
import AllGamesPage from './components/AllGamesPage';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#1976d2',
      },
      secondary: {
        main: '#dc004e',
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/" element={<GamePage />} />
          <Route path="/games" element={<AllGamesPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
