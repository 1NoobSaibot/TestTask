import { FormEvent } from "react";

export default function SignIn() {
	return <form onSubmit={signIn}>
		<input type="email" placeholder="Email" name="email"/>
		<input type="password" placeholder="Password" name="password"/>
		<input type="submit" title="Sign In" value="Sign In"/>
	</form>
}


function signIn(e: FormEvent) {
	e.preventDefault()
	alert("Not implemented")
}