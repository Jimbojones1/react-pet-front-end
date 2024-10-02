const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/pets`;

// Defining are HTTP requests
// ===========================

// Index request
// makes a http get request to /pets on express server
async function index(){
	try {
		const response = await fetch(BASE_URL)
		const data = await response.json()
		return data
	} catch(err){
		console.log(err)
	}
}


// CREATE REQUEST 
// makes an http POST Request to /pets on express server
async function create(formData){
	// formData will be passed in when we call the function 
	// it must be an object! even if your form is one input!
	try {
		const response = await fetch(BASE_URL, {
			method: "POST",
			// tell the server we are sending json
			headers: {
				'Content-Type': 'application/json'
			},
			// body of the request is the data we want to send to the server!
			body: JSON.stringify(formData) // packages up our formData into JSON
		})

		const data = await response.json()

		return data


	} catch(err){
		console.log(err)
	}
}


export { index, create }