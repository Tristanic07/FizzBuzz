import { useState } from "react";

export default function App() {
  const [value, setValue] = useState<any>(0);
  const [display, setDisplay] = useState("Input Number");

  const handleClick = () => {
    if (value == 0) return;
    if (value % 3 == 0 && value % 5 == 0) {
      setDisplay("FizzBuzz");
    } else if (value % 3 == 0) {
      setDisplay("Fizz");
    } else if (value % 5 == 0) {
      setDisplay("Buzz");
    } else if (isNaN(value)) {
      setDisplay("Wrong Input");
    } else {
      setDisplay("Wrong Number");
    }
  };

  const inputEvent = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  console.log("value: " + value);
  return (
    <div className="flex flex-col items-center justify-center gap-20">
      <div>
        <h1 className="text-5xl text-blue-900 font-bold">FizzBuzz</h1>
      </div>
      <h1 className="text-2xl text-blue-700">{display}</h1>
      <div>
        <input
          type="text"
          className="border-blue-400 rounded-lg border-2 m-1"
          onChange={inputEvent}
        />
        <button
          className="bg-blue-500 h-7 w-12 rounded-lg"
          onClick={handleClick}
        >
          Enter
        </button>
      </div>
    </div>
  );
}
