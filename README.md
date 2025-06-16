# Favorite Places

A React Native mobile application for saving and organizing your favorite locations. This app allows you to capture images, pick locations on a map, and save these special places for future reference.

## Features

- **Image Capture**: Take photos of your favorite places directly through the app
- **Location Picking**: Choose locations either through map selection or current GPS coordinates
- **Place Management**: Save and organize your favorite locations with titles and images
- **Interactive Map**: View your saved locations on an interactive map interface
- **Permissions Handling**: Proper management of camera and location permissions

## Technologies Used

- React Native
- Expo
- React Navigation
- Expo Image Picker
- Expo Location
- React Native Maps

## Installation

1. Clone the repository:
```bash
git clone https://github.com/7atoom/favorite-places.git
```

2. Navigate to the project directory:
```bash
cd favorite-places
```

3. Install dependencies:
```bash
npm install
```

4. Start the development server:
```bash
expo start
```

## Usage

- **Adding a new place**: Tap the "+" icon on the home screen
- **Taking a photo**: Tap the camera button in the Add Place screen
- **Picking a location**: Either use the "Locate User" button for your current location or "Pick on Map" to select manually
- **Saving a place**: Fill in the title and tap "Add Place"
- **Viewing your places**: All saved places are displayed on the home screen

## Project Structure

```
favorite-places/
├── assets/            # Static assets like images
├── components/        # Reusable UI components
│   ├── places/        # Place-related components
│   └── UI/            # General UI components
├── constants/         # App-wide constants
├── models/            # Data models
├── screens/           # Main app screens
└── util/              # Utility functions
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

Hatoom - [@7atoom](https://github.com/7atoom)

Project Link: [https://github.com/7atoom/favorite-places](https://github.com/7atoom/favorite-places)
