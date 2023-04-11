import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { sampleProducts } from "./data";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <header>Garm-Hub</header>
      <main>
        <ul>
          {sampleProducts.map((product) => (
            <li key={product.slug}>
              <img
                src={product.image}
                alt={product.name}
                className="product-image"
              />
              <h2>{product.name}</h2>
              <p>${product.price}</p>
            </li>
          ))}
        </ul>
      </main>
      <footer>
        Copyright © Garm-Hub. All rights reserved. Made with ❤️ in Lagos🇳🇬.
      </footer>
    </div>
  );
}

export default App;
