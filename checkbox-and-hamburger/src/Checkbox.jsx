import { useState } from "react";

export default function CheckBox() { 

    const [inputs, setInputs]= useState({})

    const handleChange= (e) =>{
        const target = e.target
        const value = target.type === 'checkbox'? target.checked : target.value;
        const name = target.name;
        setInputs(values=> ({...values, [name]: value}))
    }
   const handleSubmit= (e) => {
    let fillings = "";
    if (inputs.tomato) fillings= fillings += 'tomato';
    if (inputs.onion) {
        if(inputs.tomato) fillings += 'and'
        fillings= fillings + 'onion';
    }
    if (fillings == '') fillings = 'no fillings';
    alert(`${inputs.firstname} wants a burger with ${fillings}`)
    e.preventDefault()
   }

   return (
    <>
    <form onSubmit={handleSubmit}>
        <label >My name is:
            <input
            type="text"
            name="firstname"
            value={inputs.firstname}
            onChange={handleChange}
            />

        </label>
        <p>I want a burger with:</p>

        <label >Tomato:
            <input
            type="checkbox"
            name="tomato"
            checked={inputs.tomato}
             onChange={handleChange}
            />

        </label>

          <label >Onion:
            <input
            type="checkbox"
            name="onion"
            checked={inputs.onion}
             onChange={handleChange}
            />

        </label>
        <button type="submit">Submit</button>

    </form>
    
    </>
   )
}