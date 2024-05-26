## Daily Prophet - Personalized & Configurable Reading App

**Daily Prophet** is a React web application that provides a personalized and configurable reading experience. It aggregates content from various sources like Reddit, Arxiv, Youtube, OpenWeatherMap, Lihkg, and Foursquare, curating a tailored feed based on your interests. This repository contains the frontend part of the project.

### Features

* **Personalized Feed**: Discover a stream of articles, videos, and other content based on your chosen subjects and sources.
* **Configurable Portfolio**: Control the sources and subjects that populate your feed, prioritizing your interests with adjustable weights.
* **Multiple Sources**: Get news, articles, discussions, videos, and weather updates from a variety of trusted sources.
* **Concise Summaries**: Read informative summaries of articles and videos, saving you time and effort.
* **Dark Mode**: Enjoy a comfortable reading experience with a customizable dark mode theme.
* **Google Sign-In**: Easily log in with your Google account to personalize your settings and sync them across devices.
* **Offline Access**: (Planned) Access your feed even without an internet connection.

### Getting Started

**Prerequisites:**

* Node.js and npm (or yarn)

**Installation:**

1. Clone the repository: `git clone https://github.com/your-username/daily-prophet.git`
2. Navigate to the project directory: `cd daily-prophet`
3. Install dependencies: `npm install`

**Running the Application:**

1. Start the development server: `npm start`

The application will be accessible at http://localhost:3000 in your browser.

### Usage

1. **Log In:**
   * Click the "Login" button in the top right corner.
   * Sign in with your Google account.
2. **Customize Your Feed:**
   * Navigate to the "Setting" tab.
   * In the "Content" section, you can:
     * **Add Sources:**  Choose sources from the dropdown menu and specify the subjects you're interested in.
     * **Adjust Weights:** Use the number input to control the prominence of different subjects in your feed.
     * **Remove Rows:** Delete rows that are no longer relevant to your interests.
3. **Explore Your Feed:**
   * Switch to the "Feed" tab.
   * Browse through the articles, videos, and other content tailored to your preferences.

### Dependencies

* React
* React Router DOM
* @mui/material
* @mui/styles
* React-helmet-async
* React Player
* lodash
* React Waypoint

### Contributing

Contributions are welcome! Please feel free to submit issues or pull requests.

### License

This project is licensed under the MIT License.
