# Movie Explorer App

Welcome to the Movie Explorer App! This application allows users to browse through a collection of movies, view detailed information about each movie, and apply filters to find movies that match their preferences. The app is built using React and Tailwind CSS for a modern, responsive, and visually appealing design.

## Features

- **Responsive Navigation Bar**: Includes a search box and a filter button.
- **Movie Listing**: Displays a grid of movie cards with titles, release years, summaries, and poster images.
- **Load More**: Allows users to load additional movies by clicking a "Load More" button.
- **Filter Modal**: Provides filtering options such as genre and user ratings.
- **Movie Detail Page**: Displays detailed information about each movie, including cast, genres, and a link to watch the trailer.

## Getting Started

### Prerequisites

- Node.js
- npm (Node Package Manager)

### Installation

1. Clone the repository:

   ```
   git clone https://github.com/your-username/movie-explorer.git
   cd movie-explorer

   ```

   2. Install dependencies:

   ```
   npm install

   ```

   3. Start the development server:

   ```
   npm start

   ```

   ### Project Structure

   src
   components
   Navbar.js: Navigation bar component with search and filter functionality.
   FilterModal.js: Modal component for applying filters.
   MovieCard.js: Component to display individual movie cards.
   HomePage.js: Main page component displaying the list of movies.
   MovieDetail.js: Component for displaying detailed information about a single movie.
   App.js: Main application component with routing configuration.
   index.js: Entry point for the React application.

## API

URL: https://entertainment-app-backend-3huo.onrender.com

## Endpoints

### Retrieve all movies(GET)

https://entertainment-app-backend-3huo.onrender.com/extramovies

### Retrieve all movies based on search(GET)

https://entertainment-app-backend-3huo.onrender.com/extramovies/search?title="whatever"

### Retrieve all movies based on filter(POST)

https://entertainment-app-backend-3huo.onrender.com/extramovies/info
pass genres and rating body

### Retrieve details about a single movie based on its ID.

https://entertainment-app-backend-3huo.onrender.com/extramovies/_id
