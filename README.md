Task Statement:

Create a simple Rick and Morty app that displays a list of characters from the show and allows users to view details about each character.

----------------------------------------------------------------------------------------------------------------------------------------------

Solution:

The solution to the task statement is divided into two parts:

1. Server:

Description:
The server serves as the backend for the Rick and Morty app. It interacts with the Rick and Morty API to fetch character data and provides this data to the client application.

Setup Instructions:

Create a .env file in the server directory with the following data:

	PORT=5000

	RICK_MORTY_CHAR_API=https://rickandmortyapi.com/api/character

Commands:

		To install all required packages:
		npm install

		To start the server: 
		npm run dev




2. Client:

Description:
The client is the frontend of the Rick and Morty app, built using React.js. It displays the list of characters obtained from the server and allows users to view details about each character.

Setup Instructions:

  Create a .env file in the client directory with the following data:

  	REACT_APP_SERVER_URL=http://localhost:5000

Commands:

	To install all required packages: npm install

	To start the client: npm start



UI Snapshots : 

Main page : list of characters

<img width="1438" alt="Screenshot 2024-04-10 at 7 36 06 PM" src="https://github.com/richalpandey03/blid/assets/66243723/509c578e-ead3-43fd-b777-e2820f299e4a">


Details of the Character : 

<img width="1438" alt="Screenshot 2024-04-10 at 7 38 03 PM" src="https://github.com/richalpandey03/blid/assets/66243723/6eefc4d0-6c14-454e-8ea9-660b693033d4">


