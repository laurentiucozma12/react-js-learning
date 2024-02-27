import { useState } from "react";

function MyComponent() {
  const [car, setCar] = useState({ year: 2020, make: "Ford", model: "Puma" });
  function handleYearChange(event) {
    //// One naming convention is to take the first letter of the object you want to update
    //// In our case we have car inside "const [car, setCar]" so we take "c" from "car"
    //// And again we use an updater function (arrow function in this case)
    //// To update an object inside an arrow function you need to wrap it between ()
    //// Otherwise this will not work:
    // setCar((c) => { ...c, year: event.target.value });
    //// This how to do it properly:
    setCar((c) => ({ ...c, year: event.target.value }));
  }
  function handleMakeChange(event) {
    setCar((c) => ({ ...c, make: event.target.value }));
  }
  function handleModelChange(event) {
    setCar((c) => ({ ...c, model: event.target.value }));
  }
  return (
    <div>
      <p>
        Your favorite car is: {car.year} {car.make} {car.model}
        <br />
        <input type="number" value={car.year} onChange={handleYearChange} />
        <br />
        <input type="text" value={car.make} onChange={handleMakeChange} />
        <br />
        <input type="text" value={car.model} onChange={handleModelChange} />
      </p>
    </div>
  );
}

export default MyComponent;
