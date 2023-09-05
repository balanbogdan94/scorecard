import "./App.css";
import Scorecard from "./components/Scorecard";

function App() {
  return (
    <main className="flex color-black gap-xl flex-col bg-white w-screen min-h-screen flex-items-center overflow-x-hidden">
      <h1 className="font-900 text-stroke-sm text-stroke-black color-pink-2 mt">
        Scorecard
      </h1>
      <section className="flex justify-center flex-items-center flex-grow border-5 border-rd-2 border-solid border-pink-2 px-4 w-90% h-full mb-xl">
        <Scorecard />
      </section>
    </main>
  );
}

export default App;
