import "./App.css";
import { EpicStackLogo } from "./assets/logos/epic-stack";
import { logos } from "./assets/logos/logos";

function App() {
  return (
    <div className="py-16 px-4 min-h-dvh grid place-items-center">
      <div className="grid grid-cols-1 xl:grid-cols-[auto_1fr] gap-12 sm:gap-16 xl:gap-24 place-items-center ">
        <div className="text-center flex flex-col items-center max-w-md xl:items-start xl:text-left xl:order-2">
          <EpicStackLogo className="size-20  mb-6 md:mb-8 animate-slideUp xl:animate-slideLeft xl:[animation-delay:1.6s] xl:[animation-fill-mode:backwards]" />
          <h1 className="text-4xl  mb-4 font-medium sm:text-4.5xl md:text-5xl lg:text-5.5xl md:mb-6 animate-slideUp [animation-delay:0.3s] [animation-fill-mode:backwards] xl:animate-slideLeft xl:[animation-delay:2s] xl:[animation-fill-mode:backwards]">
            The <span className="text-highlight">Epic</span> Stack
          </h1>
          <p className="text-slate-600 sm:text-lg md:text-xl animate-slideUp [animation-delay:0.6s] [animation-fill-mode:backwards] xl:animate-slideLeft xl:[animation-delay:2.5s] xl:[animation-fill-mode:backwards]">
            Check the{" "}
            <a
              className="underline text-black hover:no-underline focus:ring-2 focus:ring-offset-2 focus:ring-highlight"
              href="https://www.google.com"
              target="_blank"
            >
              Getting Started
            </a>{" "}
            guide file for how to get your project off the ground!
          </p>
        </div>

        <ul className="flex flex-wrap gap-2 justify-center max-w-3xl sm:gap-4 xl:grid xl:grid-cols-5 xl:grid-rows-6 xl:grid-flow-col">
          {logos.map((Logo , index) => (
            <li
            style={{animationDelay: `${index * 0.08}s`}}
              key={Logo.src}
              className={`col-start-${Logo.column} row-start-${Logo.row} animate-roal [animation-fill-mode:backwards]`}
            >
              <a
                href={Logo.href}
                target="_blank"
                className="grid place-items-center size-20 sm:size-24 bg-highlight bg-opacity-[7%] p-4 rounded-[1rem] transition-all duration-150 ease-in-out hover:-rotate-6 hover:bg-opacity-10 focus:ring-highlight focus:outline-none focus:ring-2 focus:ring-offset-2 "
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
