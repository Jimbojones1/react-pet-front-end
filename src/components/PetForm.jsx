import { useState } from "react";

export default function PetForm(props) {
  const [formData, setFormData] = useState({
    name: "",
    breed: "",
    age: "",
  });

  function handleChange(e) {

	setFormData({
		...formData,
		[e.target.name]: e.target.value
	})

  }

  function handleSubmit(e){
	e.preventDefault(); // stop the browser from making a request

	props.handleAddPet(formData); // formData is referencing the state
	// which is the contents of the form
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name"> Name </label>
      <input
        id="name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <label htmlFor="age"> Age </label>
      <input id="age" name="age" value={formData.age} onChange={handleChange} />
      <label htmlFor="breed"> Breed </label>
      <input
        id="breed"
        name="breed"
        value={formData.breed}
        onChange={handleChange}
      />
      <button type="submit">Add New Pet</button>
    </form>
  );
}
