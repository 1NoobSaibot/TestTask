import { Outlet } from "react-router";

export default function MainLayout() {
	return <div>
		<Header/>
		<Outlet/>
		<Footer/>
	</div>
}


function Header() {
	return <div>Header</div>
}


function Footer() {
	return <div>Footer</div>
}