function List() {
  const fruits = [
    { id: 1, name: "apple", calories: 95 },
    { id: 2, name: "orange", calories: 45 },
    { id: 3, name: "banana", calories: 105 },
    { id: 4, name: "coconut", calories: 159 },
    { id: 5, name: "pinapple", calories: 37 },
  ];

  ////// 1 Sorting
  // fruits.sort((a, b) => a.name.localeCompare(b.name)); // ALPHABETICAL ORDER
  // fruits.sort((a, b) => b.name.localeCompare(a.name)); // REVERSE ORDER
  // fruits.sort((a, b) => a.calories - b.calories); // ALPHABETICAL ORDER
  // fruits.sort((a, b) => b.calories - a.calories); // REVERSE ORDER

  //// We have to convert our array of strings elements
  //// in an array of list <li> elements
  // const listItems = fruits.map(fruit =>   <li key={fruit.id}>
  //                                         {fruit.name}: &nbsp;
  //                                         <b>{fruit.calories}</b>
  //                                         </li>);

  ////// 2 Filtering
  //// 2.1 Low Cal Fruits
  // const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);

  // const listItems = lowCalFruits.map(lowCalFruit => <li key={lowCalFruit.id}>
  //                                             {lowCalFruit.name}: &nbsp;
  //                                             <b>{lowCalFruit.calories}</b>
  //                                             </li>);

  //// 2.2 High Cal Fruits
  // const highCalFruits = fruits.filter(fruit => fruit.calories >= 100);

  // const listItems = highCalFruits.map(highCalFruit => <li key={highCalFruit.id}>
  //                                             {highCalFruit.name}: &nbsp;
  //                                             <b>{highCalFruit.calories}</b>
  //                                             </li>);

  //// 2.3 Display original fruits
  const listItems = fruits.map((fruit) => (
    <li key={fruit.id}>
      {fruit.name}: &nbsp;
      <b>{fruit.calories}</b>
    </li>
  ));

  return <ol>{listItems}</ol>;
}
export default List;
