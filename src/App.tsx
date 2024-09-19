import "./App.css";
import { EpicStackLogo } from "./assets/logos/epic-stack";
import { logos } from "./assets/logos/logos";

function App() {
  return (
    <>
      <EpicStackLogo className="size-20" />
      <h1>The <span className="text-highlight">Epic</span> Stack</h1>
      <p>
        Check the
        <a href="https://www.google.com" target="_blank">
          Getting Started
        </a>
        guide file for how to get your project off the ground!
      </p>

      <ul>
        {logos.map((Logo) => (
          <li key={Logo.src}>
            <a href={Logo.href} target="_blank">
              <img src={Logo.src} alt={Logo.alt} className="w-16" />
            </a>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
