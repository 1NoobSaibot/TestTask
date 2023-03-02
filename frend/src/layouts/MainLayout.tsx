import { Outlet } from "react-router";
import { Link } from "react-router-dom";

export default function MainLayout() {
	return <div>
		<Header/>
		<Outlet/>
		<Footer/>
	</div>
}


function Header() {
	return <div>
		Header
		<Link to="/sign-in">
			Sign In
		</Link>
		<Link to="/sign-up">
			Sign Up
		</Link>
	</div>
}


function Footer() {
	return <div>
		Footer
		
	</div>
}