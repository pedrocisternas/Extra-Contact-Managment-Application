import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { GlobalState } from "../store/appContext";

export const EditContact = props => {
	const { store, actions } = useContext(GlobalState);
	let contact = store.contacts.find(con => con.id == props.match.params.id);
	const [editedContact, setEditedContact] = useState({
		full_name: contact.full_name,
		address: contact.address,
		phone: contact.phone,
		email: contact.email,
		id: contact.id
	});
	const handleInput = e => {
		setEditedContact({ ...editedContact, [e.target.name]: e.target.value });
	};
	return (
		<div className="container">
			<div>
				<h1 className="text-center mt-5">Edit contact {contact.id}</h1>
				<form>
					<div className="form-group">
						<label>Full Name</label>
						<input
							onChange={handleInput}
							name="full_name"
							type="text"
							className="form-control"
							placeholder="Full Name"
							value={editedContact.full_name}
						/>
					</div>
					<div className="form-group">
						<label>Email</label>
						<input
							onChange={handleInput}
							name="email"
							type="email"
							className="form-control"
							placeholder="Enter email"
							value={editedContact.email}
						/>
					</div>
					<div className="form-group">
						<label>Phone</label>
						<input
							onChange={handleInput}
							name="phone"
							type="phone"
							className="form-control"
							placeholder="Enter phone"
							value={editedContact.phone}
						/>
					</div>
					<div className="form-group">
						<label>Address</label>
						<input
							onChange={handleInput}
							name="address"
							type="text"
							className="form-control"
							placeholder="Enter address"
							value={editedContact.address}
						/>
					</div>
					<Link className="mt-3 w-100 text-center" to="/">
						<button
							onClick={() => actions.editFetch(editedContact)}
							type="button"
							className="btn btn-primary form-control">
							save
						</button>
					</Link>
					<Link className="mt-3 w-100 text-center" to="/">
						or get back to contacts
					</Link>
				</form>
			</div>
		</div>
	);
};

EditContact.propTypes = {
	match: PropTypes.object
};
