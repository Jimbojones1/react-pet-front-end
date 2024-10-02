// src/App.jsx
import { useState, useEffect } from "react";

import * as petService from "./services/petService";
// petService.index()
// petService.create()

import PetList from "./components/PetList";
import PetDetail from "./components/PetDetail";
import PetForm from './components/PetForm'



const App = () => {
  const [pets, setPets] = useState([]);
  const [selectedPet, setSelectedPet] = useState(null);
  const [showForm, setShowForm] = useState(false)


  useEffect(() => {
    async function getPets() {
      try {
        const pets = await petService.index();

        console.log(pets, " <- pets from express server");
        setPets(pets); // pets is an array objects
        // always log the object before updating state!
      } catch (err) {
        console.log(err);
      }
    }

    getPets();
  }, []); // empty array says run this code when the page loads!


  // When do we want to call this function?
  // When the user does what?
  async function handleAddPet(dataFromTheForm){ // <--- this we want to be the contents of the form

    try {
      const newPet = await petService.create(dataFromTheForm)
      console.log(newPet, " <-- response from the server")
      /// THE ONLY WAY TO SEE THE NEW PET CREATED IS TO UPDATE STATE!
      setPets([...pets, newPet])
    } catch(err){
      console.log(err, ' <- err in handleAddPet')
    }
  }

  return (
    <>
      <button onClick={() => setShowForm(!showForm) }>{showForm ? 'close' : 'Create Pet'}</button>
      
      {showForm ?  <PetForm handleAddPet={handleAddPet} /> : '' }
     
      <PetList petList={pets} setSelectedPet={setSelectedPet} />
      <PetDetail selectedPet={selectedPet} setSelectedPet={setSelectedPet} />
    </>
  );
};

export default App;
