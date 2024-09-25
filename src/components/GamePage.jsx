import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {
    Container,
    TextField,
    Button,
    Typography,
    Select,
    MenuItem,
    FormControl,
    InputLabel,
    Card,
    CardContent,
    Grid,
} from '@mui/material';

const choices = ['Stone', 'Paper', 'Scissors'];

function GamePage() {
    const [player1, setPlayer1] = useState('');
    const [player2, setPlayer2] = useState('');
    const [rounds, setRounds] = useState([]);
    const [winner, setWinner] = useState('');
    const [currentRound, setCurrentRound] = useState(1);
    const [player1Choice, setPlayer1Choice] = useState('');
    const [player2Choice, setPlayer2Choice] = useState('');
    const [score, setScore] = useState({ player1: 0, player2: 0 });

    const navigate = useNavigate();

    const playRound = () => {
        let result = '';

        if (player1Choice === player2Choice) {
            result = 'Tie';
        } else if (
            (player1Choice === 'Stone' && player2Choice === 'Scissors') ||
            (player1Choice === 'Scissors' && player2Choice === 'Paper') ||
            (player1Choice === 'Paper' && player2Choice === 'Stone')
        ) {
            result = player1;
            setScore((prevScore) => ({ ...prevScore, player1: prevScore.player1 + 1 }));
        } else {
            result = player2;
            setScore((prevScore) => ({ ...prevScore, player2: prevScore.player2 + 1 }));
        }

        setRounds((prevRounds) => [...prevRounds, { player1Choice, player2Choice, result }]);

        if (currentRound === 6) {
            const gameWinner = score.player1 > score.player2 ? player1 : player2;
            setWinner(gameWinner);
            saveGame(gameWinner); 
        } else {
            setCurrentRound((prevRound) => prevRound + 1);
        }
    };

    const saveGame = async (gameWinner) => {
        await axios.post('https://stone-paper-scissors-server.onrender.com/api/games', {
            player1,
            player2,
            rounds,
            winner: gameWinner, // Use the winner passed as a parameter
        });
    };


    return (
        <Container maxWidth="sm">
            <Typography variant="h4" align="center" gutterBottom>
                Stone, Paper, Scissors
            </Typography>
            {winner ? (
                <Card variant="outlined">
                    <CardContent>
                        <Typography variant="h5" align="center">
                            Winner: {winner}
                        </Typography>
                    </CardContent>
                </Card>
            ) : (
                <Card variant="outlined">
                    <CardContent>
                        <TextField
                            label="Player 1 Name"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            value={player1}
                            onChange={(e) => setPlayer1(e.target.value)}
                        />
                        <TextField
                            label="Player 2 Name"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            value={player2}
                            onChange={(e) => setPlayer2(e.target.value)}
                        />

                        <Typography variant="h6" gutterBottom>
                            Round {currentRound}
                        </Typography>
                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                                <FormControl fullWidth>
                                    <InputLabel>Player 1 Choice</InputLabel>
                                    <Select
                                        value={player1Choice}
                                        onChange={(e) => setPlayer1Choice(e.target.value)}
                                        label="Player 1 Choice"
                                    >
                                        {choices.map((choice, index) => (
                                            <MenuItem key={index} value={choice}>
                                                {choice}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={6}>
                                <FormControl fullWidth>
                                    <InputLabel>Player 2 Choice</InputLabel>
                                    <Select
                                        value={player2Choice}
                                        onChange={(e) => setPlayer2Choice(e.target.value)}
                                        label="Player 2 Choice"
                                    >
                                        {choices.map((choice, index) => (
                                            <MenuItem key={index} value={choice}>
                                                {choice}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </Grid>
                        </Grid>

                        <Button
                            variant="contained"
                            color="primary"
                            onClick={playRound}
                            fullWidth
                            sx={{ mt: 2 }}
                        >
                            Play Round
                        </Button>
                    </CardContent>
                </Card>
            )}
            <Button
                onClick={() => navigate('/games')}
                variant="outlined"
                color="secondary"
                fullWidth
                sx={{ mt: 3 }}
            >
                View All Games
            </Button>
        </Container>
    );
}

export default GamePage;
