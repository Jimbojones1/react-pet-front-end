export default function PetList(props) {
  // turning our array of objects
  // into an array of li jsx elements!
  const petJsx = props.petList.map((pet) => {
    return (
      <a key={pet._id} onClick={() => props.setSelectedPet(pet)}>
        <li>{pet.name}</li>
      </a>
    );
  });

  return (
    <>
      <h1>Pet List</h1>
      {!props.petList.length ? <h2>No Pets Yet</h2> : <ul>{petJsx}</ul>}
    </>
  );
}
