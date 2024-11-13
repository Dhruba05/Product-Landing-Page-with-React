import logo from '../assets/images/nike.png'
export default function NavBar() {
    return (
        <div>
            <nav>
                <div className="logo">
                    <img src={logo} alt="brandLogo" />
                </div>
                <ul>
                    <li href="#">Menu</li>
                    <li href="#">Location</li>
                    <li href="#">About</li>
                    <li href="#">Contact</li>
                </ul>
                <button>Login</button>
            </nav>
        </div>
    )
}
