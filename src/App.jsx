import { useState } from "react";
import "./App.css";

function App() {
  const [userInput, setUserInput] = useState("");
  // onchange event ==> userInput
  const [arr, setArr] = useState([]);
  // all the userInputs
  const [isChecked, setIsChecked] = useState([]);
  // 1. isChecked = []
  // 2. ["a"]
  // 3. ["a", "b", "c"]
  // 4. ["a", "c"]

  function handleCheckboxchange(event) {
    // todoListValue = b
    // value = c
    const todoListValue = event.target.value;
    // todoListValue = "first"
    console.log(`todoListValue:`, todoListValue);
    console.log(`isChecked Value before updating:`, isChecked);

    if (isChecked.includes(todoListValue)) {
      const newArray = isChecked.filter((value, i) => {
        console.log(
          `Iteration ${i}: value: ${value}, todoListValue: ${todoListValue}`
        );
        return value !== todoListValue;
      });
      setIsChecked(newArray);
      console.log(`isChecked Array getting updated in  if block`, newArray);
    } else {
      console.log(`isChecked Array getting updated in else block`, [
        ...isChecked,
        todoListValue,
      ]);
      setIsChecked([...isChecked, todoListValue]);
    }
    // const newArray =
    // setIsChecked([newArray]);
  }

  return (
    <div className="card">
      <h3>Todo List</h3>
      <input
        type="text"
        onChange={(e) => {
          console.log(e.target.value);
          setUserInput(e.target.value);
          //initial: userInput = ""
          //1. userInput = "first"
          //2. userInput = "second"
          //3. userInput = "third"
        }}
      />
      <button
        onClick={() => {
          setArr([...arr, userInput]);
          // 0. arr = []
          // 1. arr = ["first"]
          // 2. arr = ["first", "second"]
          // 3. arr = ["first", "second", "third" ]
          // ...arr ==> bringing all the previous values
        }}
      >
        Add Item
      </button>
      <ul className="listItems">
        {/* 
        
          0. arr = [] 
          1. arr = ["first"]
          2. arr = ["first", "second"]
          3. arr = ["first", "second", "third", "fourth" ]
          4. arr = ["first", "second", "fourth" ] ==> returned by filter method
        */}

        {/* {["friend1", "friend2", "friend3", "friend4"]
          .filter((e) => e.birthdayDate === "today")
          .map((item) => {
            return <div>{item}</div>;
          })} */}

        {arr.map((item, i) => {
          return (
            <li key={i}>
              <div>
                <input
                  id={item}
                  name="todo-list"
                  className="customCheckbox"
                  type="checkbox"
                  value={item}
                  onChange={(e) => {
                    handleCheckboxchange(e);
                  }}
                />
                <label className="Todolable" htmlFor={item}>
                  {isChecked.includes(item) ? <del>{item}</del> : item}
                </label>
              </div>
              <button
                onClick={() => {
                  setArr(arr.filter((e) => e !== item)); //item ="third"

                  // 1. e = "first" item="third"  e !== item ==> "first" !== "third" (true)
                  // 2. e = "second" item="third"  e !== item ==> "second" !== "third" (true)
                  // 3. e = "third" item="third"  e !== item ==> "third" !== "third" (false)
                  // 4. e = "fourth" item="third"  e !== item ==> "fourth" !== "third" (true)
                }}
              >
                delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
export default App;
