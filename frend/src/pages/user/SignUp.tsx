import { FormEvent } from "react";

export default function SignUp() {
	return <form onSubmit={submit}>
		<input type="email" placeholder="Email" name="email"/>
		<input type="password" placeholder="Password" name="password"/>
		<input type="password" placeholder="Confirm Password" name="confirm"/>
		<input type="submit" title="Sign Up" value="Sign Up"/>
	</form>
}


function submit(e: FormEvent) {
	e.preventDefault()
	alert("Not implemented")
}