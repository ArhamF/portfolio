# Portfolio

This repository contains the source code for my personal portfolio website. It showcases my projects, skills, and contact information. The site is built using modern web development technologies, focusing on TypeScript.

## Table of Contents
- [Introduction](#introduction)
- [Installation](#installation)
- [Usage](#usage)
- [Code Structure](#code-structure)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Introduction

This portfolio site is designed to provide an overview of my professional experience, projects, and skills. The site is divided into several sections to give a comprehensive view of who I am and what I do:

- **Bio**: This section provides a brief introduction about myself, including my background, interests, and professional journey.
- **Skills**: I showcase the various technical and soft skills I have acquired over the years. This includes programming languages, frameworks, tools, and methodologies I am proficient in.
- **Projects**: This section highlights some of the significant projects I have worked on. Each project includes a description of the problem it solves, the technologies used, and my role in the project. Links to live demos or GitHub repositories are also provided where applicable.
- **Contact Information**: This section provides various ways to contact me, including email and social media profiles. It also includes a contact form for direct messages.

The site is fully responsive, ensuring it looks great on desktop and mobile devices. It is built using modern web development technologies to provide a fast, interactive, and engaging user experience.

## Installation

To set up the project locally, follow these steps:

1. **Clone the repository:**
    ```sh
    git clone https://github.com/ArhamF/portfolio.git
    cd portfolio
    ```

2. **Install dependencies:**
    ```sh
    npm install
    ```

3. **Start the development server:**
    ```sh
    npm start
    ```

The site should now be running on `http://localhost:3000`.

## Usage

### Development

During development, you can use the following commands:

- `npm start`: Starts the development server.
- `npm run build`: Builds the project for production.
- `npm test`: Runs the test suite.

### Deployment

To deploy the site, you can use the `build` command to generate a production build and then deploy the contents of the `build` directory to your hosting provider.

## Code Structure

The project is organized as follows:

portfolio/

├── public/ # Static files (e.g., HTML, images)

├── src/ # Source files

│ ├── assets/ # Static assets (e.g., images, fonts)

│ ├── components/ # React components

│ ├── pages/ # Page components

│ ├── styles/ # CSS and styling files 

│ ├── App.tsx # Main app component

│ ├── index.tsx # Entry point

│ └── ... # Other utility files and configurations

├── .gitignore # Git ignore file

├── package.json # Project metadata and dependencies

├── tailwind.config.js # TailWind Configuration for js

├──tailwind.config.ts # TailWind Configuration for ts

├── tsconfig.json # TypeScript configuration

└── README.md # This file

## Technologies Used

The site is built using the following technologies:

- **TypeScript**: A strongly typed programming language that builds on JavaScript, giving you better tooling at any scale. TypeScript ensures robust code with fewer bugs by providing static type checking.
  
- **React**: A JavaScript library for building user interfaces. React's component-based architecture allows for reusable and maintainable code. It helps create dynamic and interactive user interfaces efficiently.
  
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development. Tailwind CSS provides a set of utility classes that can be composed to build custom designs without writing CSS from scratch. This approach speeds up development and ensures consistency in design.
  ```jsx
  // Example usage of Tailwind CSS
  <div className="bg-blue-500 text-white p-4 rounded">
    <h1 className="text-xl font-bold">Hello, Tailwind CSS!</h1>
  </div>
- CSS: For styling the site. Custom CSS is used to complement Tailwind CSS where necessary, ensuring a polished and cohesive look and feel for the portfolio.

- JavaScript: Used for additional scripting and interactivity. JavaScript enhances the user experience by adding dynamic behaviour to the web pages.

These technologies collectively ensure the portfolio site is robust, maintainable, and visually appealing.
## Contributing

Contributions are welcome! Please open an issue or submit a pull request if you have any suggestions or improvements.

## License

This project is licensed under the MIT License. Please take a look at the [LICENSE](LICENSE) file for details.
