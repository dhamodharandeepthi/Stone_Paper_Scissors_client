import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {
    Container,
    Typography,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Button,
} from '@mui/material';

function AllGamesPage() {
    const [games, setGames] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchGames = async () => {
            const response = await axios.get('https://stone-paper-scissors-server.onrender.com/api/games');
            setGames(response.data);
            console.log("data",response.data);
            
        };
        fetchGames();
    }, []);

    return (
        <Container>
            <Typography variant="h4" align="center" gutterBottom>
                All Games
            </Typography>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Player 1</TableCell>
                            <TableCell>Player 2</TableCell>
                            <TableCell>Winner</TableCell>
                            <TableCell>Date</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {games.map((game) => (
                            <TableRow key={game._id}>
                                <TableCell>{game.player1}</TableCell>
                                <TableCell>{game.player2}</TableCell>
                                <TableCell>{game.winner}</TableCell>
                                <TableCell>{new Date(game.date).toLocaleString()}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Button
                onClick={() => navigate('/')}
                variant="contained"
                color="primary"
                fullWidth
                sx={{ mt: 3 }}
            >
                Back to Game
            </Button>
        </Container>
    );
}

export default AllGamesPage;
