import { FormEvent } from "react";

export default function SignUp() {
	return <form onSubmit={signUp}>
		<input type="email" placeholder="Email" name="email"/>
		<input type="password" placeholder="Password" name="password"/>
		<input type="password" placeholder="Confirm Password" name="confirm"/>
		<input type="text" placeholder="First Name" name="firstname"/>
		<input type="text" placeholder="Last Name" name="lastname"/>
		<input type="submit" title="Sign Up" value="Sign Up"/>
	</form>
}


function signUp(e: FormEvent) {
	e.preventDefault()
	alert("Not implemented")
}