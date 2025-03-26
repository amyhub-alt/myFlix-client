#  myFlix Client App (React)

##  Overview

The **myFlix React Client** is the client-side interface for the myFlix movie app, built using **React**, **Bootstrap**, and **Parcel**. It provides users with access to movie data, the ability to create and manage their profiles, and interact with a fully functional REST API built in the server-side portion of the myFlix application.

This single-page application (SPA) offers a responsive and modern user experience, giving movie enthusiasts a streamlined way to discover, explore, and save their favorite films.

---

##  Objective

To build the **client-side** of the myFlix app using **React**, integrating it with the existing REST API developed in the previous phase of the project. This app is part of a full-stack MERN project and demonstrates the developer’s front-end skills, usability thinking, and component-driven development using React.

---

##  Technologies Used

- React (ES2015+)
- Parcel (as the build tool)
- Bootstrap (for UI styling and responsiveness)
- React Router (for navigation between views)
- Axios (for HTTP requests)
- React Redux (optional - used for state management in filtering)
- GitHub Pages (for deployment)

---

##  The 5 W’s

- **Who:** Users of myFlix—movie enthusiasts seeking an interactive platform to discover, save, and explore movie details.
- **What:** A responsive single-page web app built with React, connected to a REST API.
- **When:** Available to users anytime to browse movie data or manage their profile.
- **Where:** Hosted online, usable from any device with internet access.
- **Why:** To give users a personalized and informative experience with their favorite films, and to showcase full-stack MERN development skills.

---

##  Key Features

###  Main View
- View all movies (title, image, and short description)
- Filter/search movies by title
- Select a movie to view more details
- Navigate to user profile
- Log out

###  Single Movie View
- View full movie details (description, genre, director, image)
- Add or remove the movie from favorites

###  Login View
- Log in with username and password

###  Signup View
- Register with username, password, email, and birthday

###  Profile View
- View and update user information
- See and manage list of favorite movies
- Deregister user account

###  Optional Views
- Genre view with name and description
- Director view with bio and filmography
- Actor view (if implemented)

---

##  Design Criteria

- Responsive layout using Bootstrap
- Clean and intuitive UI
- Single-page application behavior using React Router
- Optional: Tooltips, modals, or sidebars to enhance navigation without page reloads

---

##  Getting Started

To run the project locally:

```bash
git clone https://github.com/amyhub-alt/myFlix-client.git
cd myflix-client
npm install
npm start
```

## Build & Deployment

- To build the app using Parcel: npm run build
- To deploy on GitHub Pages: npm run deploy


The app is deployed at: https://dynamic-phoenix-7d9a80.netlify.app/ 

```
