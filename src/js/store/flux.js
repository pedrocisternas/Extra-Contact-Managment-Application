const getState = ({ getStore, setStore }) => {
	return {
		store: {
			//Your data structures, A.K.A Entities
		},
		actions: {
			//(Arrow) Functions that update the Store
			// Remember to use the scope: scope.state.store & scope.setState()
			getFetch: () => {
				fetch("https://assets.breatheco.de/apis/fake/contact/agenda/PedroCisternas")
					.then(response => {
						if (!response.ok) {
							throw Error(response.statusText);
						}
						return response.json();
					})
					.then(data => console.log(data))
					.catch(error => console.log("There was the following error: \n", error));
			},
			postFetch: contact => {
				fetch("https://assets.breatheco.de/apis/fake/contact/", {
					method: "POST",
					body: JSON.stringify({
						full_name: contact.name,
						email: contact.email,
						agenda_slug: "PedroCisternas",
						address: contact.address,
						phone: contact.phone
					}),
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(response => {
						if (!response.ok) {
							throw Error(response.statusText);
						}
						return response.json();
					})
					.then(data => console.log(data))
					.catch(error => console.log("There was the following error: \n", error));
			}
		}
	};
};

export default getState;
