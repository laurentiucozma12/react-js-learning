// import Header from './Header.jsx'
// import Food from './Food.jsx'
// import Card from './Card.jsx'
// import Student from './Student.jsx'
// import Button from './Button.jsx'
// import Footer from './Footer.jsx'
// import UserGreeting from './UserGreeting.jsx'
// import List from './List.jsx'

// Ex 7
// import List2 from './List2.jsx'

// Ex 8
import { useState } from "react";
import TodoItem from "./components/TodoItem";
import { dummyData } from "./data/todos";
import AddTodoForm from "./components/AddTodoForm";

function App() {
  
  // Related to Example 7  
  // const fruits = [{id: 1, name: 'apple', calories: 95},
  //                 {id: 2, name: 'orange', calories: 45},
  //                 {id: 3, name: 'banana', calories: 105},
  //                 {id: 4, name: 'coconut', calories: 159}, 
  //                 {id: 5, name: 'pinapple', calories: 37}];

  // const vegetables = [{id: 6, name: 'potatoes', calories: 110},
  //                   {id: 7, name: 'celery', calories: 15},
  //                   {id: 8, name: 'carrots', calories: 25},
  //                   {id: 9, name: 'corn', calories:  63}, 
  //                   {id: 10, name: 'broccoli', calories: 50}];

  // Related to Example 8
  const [todos, setTodos] = useState(dummyData);
  function setTodoCompleted(id: number, completed: boolean) {
    setTodos((prevTodos) => 
      prevTodos.map((todo) => (todo.id === id ? {...todo, completed } : todo))
    );
  }

  return(
    <>
      {/* Example 1 */
      /* <Header/>
      <Food/>
      <Footer/> */}

      {/* Example 2 */
      /* <Card/>
      <Card/>
      <Card/>
      <Card/> */}

      {/* Example 3 */
      /* <Button/> */}

      {/* Example 4 */
      /* <Student name="Spongebob" age={30} isStudent={true}/>
      <Student name="Patrick" age={42} isStudent={false}/>
      <Student name="Squidward" age={50} isStudent={false}/>
      <Student name="Sandy" age={27} isStudent={true}/>
      <Student name="Lary"/> */}
      
      {/* Example 5 */
      /* <UserGreeting isLoggedIn={true} username="Epic Game News"/> */}

      {/* Example 6 */
      /* <List/> */}
      
      {/* Example 7 */
      /* {fruits.length > 0 && <List2 items={fruits} category="Fruits"/>}
      {vegetables.length > 0 && <List2 items={vegetables} category="Vegetables"/>} */}

      {/* Example 8 */}
      <main className="py-10 bg-gray-600 h-screen space-y-5">
        <h1 className="font-bold text-3xl text-center">Your Todos</h1>
        <div className="max-w-lg mx-auto bg-slate-100 rounded-md p-5 space-y-6">
          <AddTodoForm />
          <div className="space-y-2">
            {todos.map(todo => (
              <TodoItem
                key={todo.id}
                todo={todo}
                onCompletedChange={setTodoCompleted}
              />
            ))}
          </div>
        </div>
      </main>

    </>
  );
}

export default App
