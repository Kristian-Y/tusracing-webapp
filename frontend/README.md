# Frontend Web App

A modern React-based frontend web application built with React 19, TailwindCSS, and DaisyUI. This project demonstrates a responsive, interactive, and user-friendly web interface using popular React libraries and tools.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)
- [License](#license)

## Features

- Built with **React 19** for a fast, component-based UI
- Responsive design with **TailwindCSS** and **DaisyUI**
- Client-side routing using **React Router DOM**
- Optimized performance with **React Intersection Observer**
- User notifications with **React Hot Toast**
- Icon support via **React Icons**
- Easy testing with **React Testing Library** and **Jest**

## Tech Stack

- **Frontend:** React, TailwindCSS, DaisyUI
- **Routing:** React Router DOM
- **Notifications:** React Hot Toast
- **Icons:** React Icons
- **Testing:** React Testing Library, Jest
- **Build Tools:** React Scripts

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js >= 18
- npm >= 9 or Yarn >= 3

### Installation

1. Clone the repository:

```bash
git clone https://github.com/Kristian-Y/tusracing-webapp.git
```

2. Navigate into the project directory:

```bash
cd frontend
```

3. Install dependencies:

```bash
npm install 
# or
yarn install
```

### Running the App

To start the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### Building for Production

```bash
npm run build
# or
yarn build
```

The build files will be generated in the `build` folder.

### Running Tests

```bash
npm test
# or
yarn test
```

## Available Scripts

- `start` or `dev`: Runs the app in development mode
- `build`: Builds the app for production
- `test`: Runs the test suite
- `eject`: Ejects from Create React App (use with caution)

## Folder Structure

```
frontend/
├─ public/           # Static files
├─ src/              # Source files
│  ├─ components/    # Reusable React components
|  |  ├─ animate/    # Animation utility
|  |  ├─ footer/     # Footer
|  |  ├─ navbar/     # Navbar
|  |  ├─ up-button/  # Go up button
|  |  └─ toaster/    # Custom notifications popup
│  ├─ pages/         # Page components
|  ├─ context/       # Theme supplier
│  ├─ styles/        # TailwindCSS styles
│  ├─ App.js         # Main App component
│  └─ index.js       # Entry point
├─ package.json      # Project metadata and dependencies
└─ README.md         # Project documentation
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.

