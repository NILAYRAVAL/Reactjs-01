// import './App.css';

// export function App() {
//   return (
//     <>
// <h4> Hello good morning</h4>

//     </>
//   );
// }

// export  App;

                                   // default cheked all 

// export default function MyForm() {
//   return (
//     <>
//       <label>
//         Text input: <input name="myInput" defaultValue="Some initial value" />
//       </label>
//       <hr />
//       <label>
//         Checkbox: <input type="checkbox" name="myCheckbox" defaultChecked={true} />
//       </label>
//       <hr />
//       <p>
//         Radio buttons:
//         <label>
//           <input type="radio" name="myRadio" value="option1" />
//           Option 1
//         </label>
//         <label>
//           <input
//             type="radio"
//             name="myRadio"
//             value="option2"
//             defaultChecked={true} 
//           />
//           Option 2
//         </label>
//         <label>
//           <input type="radio" name="myRadio" value="option3" />
//           Option 3
//         </label>
//       </p>
//     </>
//   );
// }


                              //   get form data from user to console.log

// export default function MyForm() {
//   function handleSubmit(e) {
//     // Prevent the browser from reloading the page
//     e.preventDefault();

//     // Read the form data
//     const form = e.target;
//     const formData = new FormData(form);

//     // You can pass formData as a fetch body directly:
//     fetch('/some-api', { method: form.method, body: formData });

//     // Or you can work with it as a plain object:
//     const formJson = Object.fromEntries(formData.entries());
//     console.log(formJson);
//   }

//   return (
//     <form method="post" onSubmit={handleSubmit}>
//       <label>
//         Text input: <input name="myInput" defaultValue="Some initial value" />
//       </label>
//       <hr />
//       <label>
//         Checkbox: <input type="checkbox" name="myCheckbox" defaultChecked={true} />
//       </label>
//       <hr />
//       <p>
//         Radio buttons:
//         <label><input type="radio" name="myRadio" value="option1" /> Option 1</label>
//         <label><input type="radio" name="myRadio" value="option2" defaultChecked={true} /> Option 2</label>
//         <label><input type="radio" name="myRadio" value="option3" /> Option 3</label>
//       </p>
//       <hr />
//       <button type="reset">Reset form</button>
//       <button type="submit">Submit form</button>
//     </form>
//   );
// }









// import { useState } from 'react';

// export default function Form() {
//   const [firstName, setFirstName] = useState('');
//   const [age, setAge] = useState('20');
//   const ageAsNumber = Number(age);
//   return (
//     <>
//       <label>
//         First name:
//         <input
//           value={firstName}
//           onChange={e => setFirstName(e.target.value)}
//         />
//       </label>
//           <br/> <br/>
//       <label>
//         Age:
//         <input
//           value={age}
//           onChange={e => setAge(e.target.value)}
//           type="number"
//         /> <br/> <br/>
//         <button onClick={() => setAge(ageAsNumber + 10)}>
//           Add 10 years
//         </button>
//       </label>
//           <br/>
       
//       {firstName !== '' &&
//         <p>Your name is {firstName}.</p>
//       }
//       {ageAsNumber > 0 &&
//         <p>Your age is {ageAsNumber}.</p>
//       }

// {/* <input value= {age} />      If you render an input with value but no onChange, you will see an error in the console:        */}
// {/* <input defaultValue= {age} />    use defaultValue. Otherwise, set either onChange or readOnly.      */}
//     </>
//   );
// }





export default function App() {
  return (
    <>
      <progress value={0} /> <br/> <br/>
      <progress value={0.9} /> <br/> <br/>
      <progress value={0.75} /> <br/> <br/>
      <progress value={75} max={100} /> <br/> <br/>
      <progress value={1} /> <br/> <br/>
      <progress value={null} />
    </>
  );
}



// export default function FruitPicker() {
//   return (
//     <label>
//       Pick a fruit:
//       <select name="selectedFruit" defaultValue="orange">
//         <option value="apple">Apple</option>
//         <option value="banana">Banana</option>
//         <option value="orange">Orange</option>
//       </select>
//     </label>
//   );
// }


               //  handle the multiple values with scroll 


// export default function FruitPicker() {
//   return (
//     <label>
//       Pick some fruits:
//       <br/>
//       <select
//         name="selectedFruit"
//         defaultValue={['orange', 'banana']}
//         multiple={true}
//       >
//         <option value="apple">Apple</option>
//         <option value="banana">Banana</option>
//         <option value="orange">Orange</option>
//         <option value="orange">Orange</option>
//         <option value="orange">Orange</option>
//         <option value="orange">Orange</option>
//       </select>
//     </label>
//   );
// }





export default function EditPost() {
  function handleSubmit(e) {
    // Prevent the browser from reloading the page
    e.preventDefault();
    // Read the form data
    const form = e.target;
    const formData = new FormData(form);
    // You can pass formData as a fetch body directly:
    fetch('/some-api', { method: form.method, body: formData });
    // You can generate a URL out of it, as the browser does by default:
    console.log(new URLSearchParams(formData).toString());
    // You can work with it as a plain object.
    const formJson = Object.fromEntries(formData.entries());
    console.log(formJson); // (!) This doesn't include multiple select values
    // Or you can get an array of name-value pairs.
    console.log([...formData.entries()]);
  }

  return (
    <form method="post" onSubmit={handleSubmit}>
      <label>
        Pick your favorite fruit: <br/>
        <select name="selectedFruit" defaultValue="orange">
          <option value="apple">Apple</option>
          <option value="banana">Banana</option>
          <option value="orange">Orange</option>
        </select>
      </label> <br/>
      <label>
        Pick all your favorite vegetables:
        <br/>
             <select
          name="selectedVegetables"
          multiple={true}
          defaultValue={['corn', 'tomato']}
        >
          <option value="cucumber">Cucumber</option>
          <option value="corn">Corn</option>
          <option value="tomato">Tomato</option>
        </select>
      </label>
      <hr />
      <button type="reset">Reset</button>
      <button type="submit">Submit</button>
    </form>
  );
}
