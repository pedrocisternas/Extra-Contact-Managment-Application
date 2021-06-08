import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { GlobalState } from "../store/appContext";
import PropTypes from "prop-types";

export const AddContact = props => {
	const { store, actions } = useContext(GlobalState);
	const [contact, setContact] = useState({ name: null, email: null, address: null, phone: null });
	const handleInput = e => {
		console.log(e.target.name);
		setContact({ ...contact, [e.target.name]: e.target.value });
	};
	const handleSave = () => {
		actions.postFetch(contact);
		props.history.push("/");
	};

	return (
		<div className="container">
			<div>
				<h1 className="text-center mt-5">Add a new contact</h1>
				<form>
					<div className="form-group">
						<label>Full Name</label>
						<input
							onChange={handleInput}
							type="text"
							className="form-control"
							placeholder="Full Name"
							name="name"
						/>
					</div>
					<div className="form-group">
						<label>Email</label>
						<input
							onChange={handleInput}
							type="email"
							className="form-control"
							placeholder="Enter email"
							name="email"
						/>
					</div>
					<div className="form-group">
						<label>Phone</label>
						<input
							onChange={handleInput}
							type="phone"
							className="form-control"
							placeholder="Enter phone"
							name="phone"
						/>
					</div>
					<div className="form-group">
						<label>Address</label>
						<input
							onChange={handleInput}
							type="text"
							className="form-control"
							placeholder="Enter address"
							name="address"
						/>
					</div>
					<Link className="mt-3 w-100 text-center" to="/">
						<button onClick={() => handleSave()} type="button" className="btn btn-primary form-control">
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

AddContact.propTypes = {
	history: PropTypes.object
};
