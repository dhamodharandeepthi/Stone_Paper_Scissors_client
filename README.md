# Stone, Paper, Scissors Game

This is a simple **Stone, Paper, Scissors** game built using the MERN stack (MongoDB, Express, React, Node.js) with an API to save and retrieve game data. Players can play multiple rounds of the game, and the results are stored in a MongoDB database. The application provides a feature to view all past games.

## Features

- **Play a Game**: Two players can play up to 6 rounds of the Stone, Paper, Scissors game.
- **Track Scores**: The app tracks and displays the score for each player.
- **Game Results**: After the game, the winner is determined and displayed.
- **Game History**: All past games are stored in the MongoDB database and can be viewed on the All Games page.
- **Responsive UI**: The application is styled using Material-UI, providing a modern and responsive design.

## App link

https://stone-papper-scissors-mern.netlify.app/

## Demo video

https://github.com/user-attachments/assets/33ed0447-eb55-4edc-90af-6caa3bb5880b

## Tech Stack

- **Frontend**: React, Material-UI
- **Backend**: Node.js, Express.js
- **Database**: MongoDB, Mongoose
- **HTTP Requests**: Axios
- **Routing**: React Router DOM

## API Endpoints

**POST /api/games**

Create a new game with the following body

```javascript
{
  "player1": "Player 1 Name",
  "player2": "Player 2 Name",
  "rounds": [
    {
      "player1Choice": "Stone",
      "player2Choice": "Scissors",
      "result": "Player 1"
    }
  ],
  "winner": "Player 1"
}
```

## Dependencies

### Backend

- **express:** Web framework for Node.js
- **mongoose:** MongoDB object modeling for Node.js
- **cors:** Middleware to enable CORS
- **dotenv:** Environment variable management

### Frontend

- **react:** JavaScript library for building user interfaces
- **axios:** Promise-based HTTP client for the browser and Node.js
- **react-router-dom:** Declarative routing for React apps
- **@mui/material:** Material-UI component library
