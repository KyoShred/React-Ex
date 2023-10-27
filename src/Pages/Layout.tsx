import { Navbar } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import Ex1 from "./Ex1";
import Ex2 from "./Ex2";
import Ex3 from "./Ex3";
import Home from "./Home";

export default function Layout () {
    const location = useLocation();
    console.log(location);
    return (
        <header>
            <Navbar>
                <Navbar.Brand href="/">Home Page</Navbar.Brand>
                <Navbar.Collapse>
                    <Link to={"/ex1"}>Ex 1</Link>
                    <Link to={"/ex2"}>Ex 2</Link>
                    <Link to={"/ex3"}>Ex 3</Link>
                </Navbar.Collapse>
            </Navbar>
        </header>
    );

}
