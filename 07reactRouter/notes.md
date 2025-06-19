# General Notes

- **React**: JavaScript library for building user interfaces.
- **React Router DOM**: Library for handling client-side routing in React applications.
- **Functional Components**: All components are written as functional components using hooks.
- **Hooks Used**:
  - `useState`: For managing local state.
  - `useEffect`: For side effects like data fetching.
  - `useParams`: To access route parameters.
  - `useLoaderData`: To access data loaded by route loaders.
- **JSX**: Syntax extension for JavaScript, used to describe UI structure.
- **ES6 Modules**: Import/export syntax for code modularity.

---

# Project-Specific Notes

- **Routing Structure**:  
  - Uses `createBrowserRouter` and `createRoutesFromElements` to define routes.
  - Main layout handled by `Layout` component with nested routes for Home, About, Contact, User, and Github pages.
  - Dynamic routing is implemented for user profiles using `/user/:userid`.

- **Data Fetching**:  
  - The Github page uses a loader (`githubInfoLoader`) to fetch user data from the GitHub API before rendering the component.
  - `useLoaderData` is used in the Github component to access this data.

- **Component Structure**:  
  - `Home`, `About`, `Contact`, `User`, and `Github` are separate components for different routes.
  - `User` component uses `useParams` to display the user ID from the URL.
  - `Github` component displays GitHub user information fetched via the loader.

- **Styling**:  
  - Tailwind CSS utility classes are used for styling components.

- **Best Practices**:  
  - Comments are added throughout the code for better understanding.
  - Loader functions are used for data fetching to keep components clean and focused on rendering.

```<!-- filepath: c:\Users\Inspiron\OneDrive\Desktop\chai-aur-react\07reactRouter\notes.md -->

# General Notes

- **React**: JavaScript library for building user interfaces.
- **React Router DOM**: Library for handling client-side routing in React applications.
- **Functional Components**: All components are written as functional components using hooks.
- **Hooks Used**:
  - `useState`: For managing local state.
  - `useEffect`: For side effects like data fetching.
  - `useParams`: To access route parameters.
  - `useLoaderData`: To access data loaded by route loaders.
- **JSX**: Syntax extension for JavaScript, used to describe UI structure.
- **ES6 Modules**: Import/export syntax for code modularity.

---

# Project-Specific Notes

- **Routing Structure**:  
  - Uses `createBrowserRouter` and `createRoutesFromElements` to define routes.
  - Main layout handled by `Layout` component with nested routes for Home, About, Contact, User, and Github pages.
  - Dynamic routing is implemented for user profiles using `/user/:userid`.

- **Data Fetching**:  
  - The Github page uses a loader (`githubInfoLoader`) to fetch user data from the GitHub API before rendering the component.
  - `useLoaderData` is used in the Github component to access this data.

- **Component Structure**:  
  - `Home`, `About`, `Contact`, `User`, and `Github` are separate components for different routes.
  - `User` component uses `useParams` to display the user ID from the URL.
  - `Github` component displays GitHub user information fetched via the loader.

- **Styling**:  
  - Tailwind CSS utility classes are used for styling components.

- **Best Practices**:  
  - Comments are added throughout the code for better understanding.
  - Loader functions are used for data fetching to keep components clean and focused on