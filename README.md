# <img src="https://user-images.githubusercontent.com/25181517/183897015-94a058a6-b86e-4e42-a37f-bf92061753e5.png" alt="react" width="30" height="30"/> ReactJS Learning <img src="https://user-images.githubusercontent.com/25181517/183897015-94a058a6-b86e-4e42-a37f-bf92061753e5.png" alt="react" width="30" height="30"/>

- This project is just for learning purpose.

## Resources

- [ReactJS Tutorial](https://www.youtube.com/watch?v=CgkZ7MvWUAA)
- [React Doc](https://react.dev/reference/react/useState)
- [NodeJS](https://nodejs.org/en)

## ReactJS

- React is a JavaScript Library, not framework
- React focuses on building web apps using components
- A component is a self-contained section of code that functions as a reusable building block
- Think of a Lego. You could say Lego is similar to react component
- Each Lego represents a section of reusable JavaScript and HTML code
- React uses a syntax extension of JavaScript known as JSX, meaning JavaScript XML
- JSX allows you to write HTML like code within your JavaScript files
- React also uses a virtual DOM, it's a lightweight version of the real DOM of a web page
- We can keep track of any changes made to the virtual DOM and only apply that specific change to the real DOM without needing to refresh the entire page, only that specific section
- This reduces rendering performance overhead

## Process

- After downloading NodeJS, we will open the console and type the following commands:

```
npm create vite@latest
Project name: my-react-app
√ Select a framework: » React
√ Select a variant: » JavaScript
```

- After creating the project, type the following commands:

```
cd my-react-app
npm install
npm run dev
```

- If you close the editor, and come back later, you just have to enter the project folder and start the server:

```
cd my-react-app
npm run dev
```

- Go to my-react-app/src/App.jsx and delete everything inside App() method and the imports.
- So you should have only those inside App.jsx:

```jsx
function App() {}

export default App;
```

- Delete App.css
- Inside src folder create a Header.jsx file and write:

```jsx
function Header() {
  return (
    <header>
      <h1>My website</h1>
      <nav>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
      <hr />
    </header>
  );
}

export default Header;
```

- Inside src folder create a Footer.jsx file and write:

```jsx
function Footer() {
  return (
    <footer>
      <p>&copy; {new Date().getFullYear()} Your website name</p>
    </footer>
  );
}

export default Footer;
```

- Inside src folder create a Food.jsx file and write:

```jsx
function Food() {
  const food1 = "Orange";
  const food2 = "Banana";

  return (
    <ul>
      <li>Apple</li>
      <li>{food1}</li>
      <li>{food2.toUpperCase()}</li>
    </ul>
  );
}

export default Food;
```

- Inside App.jsx add:

```jsx
import Header from "./Header.jsx";
import Food from "./Food.jsx";
import Footer from "./Footer.jsx";

function App() {
  return (
    <>
      <Header />
      <Food />
      <Footer />
    </>
  );
}

export default App;
```

- Now you are ready to go!
