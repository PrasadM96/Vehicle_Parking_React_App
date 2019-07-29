import React from "react";
import { Link } from "react-router-dom";
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";

// import { makeStyles } from "@material-ui/core/styles";
// import AppBar from "@material-ui/core/AppBar";
// import Toolbar from "@material-ui/core/Toolbar";
// import Typography from "@material-ui/core/Typography";
// import Button from "@material-ui/core/Button";
// import IconButton from "@material-ui/core/IconButton";
// import MenuIcon from "@material-ui/icons/Menu";
// import classes from "./NavbarStyle";

// class Navbar extends Component {
//   state = {
//     login: 0
//   };

//   componentDidMount() {}

//   // handleLogin = () => {
//   //   if (this.state.login === 1)
//   //     return (
//   //       <div>
//   //         <Button color="inherit">Okay</Button>
//   //       </div>
//   //     );
//   //   return <Button color="inherit"> Login</Button>;
//   // };

//   render() {
//     // if (this.classes == null) {
//     //   return null;
//     // }
//     return (
//       <div className="app-navbar">
//         <nav className="navbar navbar-expand-lg navbar-light bg-light">
//           <a className="navbar-brand" href="#">
//             Navbar
//           </a>
//           <button
//             className="navbar-toggler"
//             type="button"
//             data-toggle="collapse"
//             data-target="#navbarNavDropdown"
//             aria-controls="navbarNavDropdown"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span className="navbar-toggler-icon" />
//           </button>
//           <div className="collapse navbar-collapse" id="navbarNavDropdown">
//             <ul className="navbar-nav">
//               <li className="nav-item active">
//                 <a className="nav-link" href="#">
//                   Home <span className="sr-only">(current)</span>
//                 </a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link" href="#">
//                   Features
//                 </a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link" href="#">
//                   Pricing
//                 </a>
//               </li>
//               <li className="nav-item dropdown">
//                 <a
//                   className="nav-link dropdown-toggle"
//                   href="#"
//                   id="navbarDropdownMenuLink"
//                   role="button"
//                   data-toggle="dropdown"
//                   aria-haspopup="true"
//                   aria-expanded="false"
//                 >
//                   Dropdown link
//                 </a>
//                 <div
//                   className="dropdown-menu"
//                   aria-labelledby="navbarDropdownMenuLink"
//                 >
//                   <a className="dropdown-item" href="#">
//                     Action
//                   </a>
//                   <a className="dropdown-item" href="#">
//                     Another action
//                   </a>
//                   <a className="dropdown-item" href="#">
//                     Something else here
//                   </a>
//                 </div>
//               </li>
//             </ul>
//           </div>
//         </nav>
//       </div>
//     );
//   }
// }

// export default Navbar;

const Navbar = () => {
  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <Link to="/" className="brand-log">
          Vehicle Parking
        </Link>
        <SignedInLinks />
        <SignedOutLinks />
      </div>
    </nav>
  );
};

export default Navbar;
