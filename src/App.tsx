import "./App.css";
import { EpicStackLogo } from "./assets/logos/epic-stack";
import { logos } from "./assets/logos/logos";

function App() {
  return (
    <div className="py-16 px-4 min-h-dvh grid place-items-center">
      <div className="grid grid-cols-1 xl:grid-cols-[auto_1fr] gap-12 sm:gap-16 xl:gap-24 place-items-center ">
        <div className="text-center flex flex-col items-center max-w-md xl:items-start xl:text-left xl:order-2">
          <EpicStackLogo className="size-20  mb-6 md:mb-8" />
          <h1 className="text-4xl  mb-4 font-medium sm:text-4.5xl md:text-5xl lg:text-5.5xl md:mb-6">
            The <span className="text-highlight">Epic</span> Stack
          </h1>
          <p className="text-slate-600 sm:text-lg md:text-xl">
            Check the{" "}
            <a
              className="underline text-black"
              href="https://www.google.com"
              target="_blank"
            >
              Getting Started
            </a>{" "}
            guide file for how to get your project off the ground!
          </p>
        </div>

        <ul className="flex flex-wrap gap-2 justify-center max-w-3xl sm:gap-4 ">
          {logos.map((Logo) => (
            <li key={Logo.src}>
              <a
                href={Logo.href}
                target="_blank"
                className="grid place-items-center size-20 sm:size-24 bg-highlight bg-opacity-[7%] p-4 rounded-[1rem]"
              >
                <img src={Logo.src} alt={Logo.alt} className="w-16" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
