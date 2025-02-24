# Astro 3 App

Astro 3 App is a mobile application that allows users to explore and manage planets. The app features two main sections: **Let's Explore** and **Your Planets**, and allows users to add planets to their favorites for easy access.

## Features

- **Planet Details**: View detailed information about each planet, such as adjectives, aphelion, eccentricity, inclination, and more.
- **Favorites**: Add planets to your favorites list and remove them with a single tap.
- **Animations**: Enjoy interactive animations related to planets and astronauts, powered by Lottie.
- **Responsive Design**: The app is designed to look great on all screen sizes, using safe area insets to ensure it adapts to different devices.
- **Error Handling**: Includes error states when data cannot be fetched or when no planet details are available.

## Technologies Used

- **React Native**: The app is built using React Native for cross-platform mobile development.
- **Expo**: Utilized Expo for easy development and deployment of the app.
- **Lottie**: Lottie animations are used for interactive and engaging visuals.
- **TypeScript**: The app is written in TypeScript for static typing and better development experience.
- **npm**: Package manager used for dependencies.

## API

The app fetches planet details from the **Solar System API**. The API provides data such as:

- Planet names
- Planet attributes (e.g., aphelion, eccentricity, inclination)
- Planetary characteristics (e.g., moons, distance from the sun)

### Endpoints

- **All Planets**:  
  To get a list of all the bodies (planets, moons, etc.) in the solar system, use:
  
```
https://api.le-systeme-solaire.net/rest/bodies/
```


- **Planet Details**:  
To get detailed information about a specific planet by its ID, use:

```
https://api.le-systeme-solaire.net/rest/bodies/{id}
```

## Folder Structure
```
astro-3-app/
├── app/                # Contains main screens and routes
├── assets/             # Static files such as images, animations, etc.
├── components/         # Reusable UI components
├── contexts/           # Context providers (e.g., FavoriteProviders, SortProviders)
├── hooks/              # Custom hooks
├── types/              # Type definitions for TypeScript
├── styles/             # Global styles and constants
```

## Key Components

- **CustomTitle**: Displays a title with a specific design.
- **EmptyState**: A component to show empty states with customizable messages.
- **IconButton**: A button component with an icon, used throughout the app for actions.
- **InputWithIcon**: A component that combines a textinput and an icon.
- **Loading**: A component shown when the app is loading content.
- **PlanetCards**: Displays cards with information about planets.

## Tabs

The app features two main tabs:

1. **Let's Explore**: A section for discovering new planets.
2. **Your Planets**: A section for managing your favorite planets.

## Context Providers

- **FavoriteProviders**: Manages a list of favorite planets.
- **SortProviders**: Provides sorting functionality for the planets.

## Custom Hooks

- **useFavorites**: Custom hook for interacting with favorite planets.
- **useSort**: Custom hook for sorting planets.

## Installation

To get started with the project, clone the repository and install the dependencies:

```bash
git clone <repository-url>
cd astro-3-app
npm install
```

## Running the App

```bash
npm run start
```

