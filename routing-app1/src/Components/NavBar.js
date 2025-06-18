import {Link} from "react-router-dom"
export function NavBar() {

    return(
           <div>
            <p><Link to={'/'}>Home</Link></p>
            <p><Link to={'/about'}>About</Link></p>
            <p><Link to={'/contact'}>Contact</Link></p>
           </div>
    )
}