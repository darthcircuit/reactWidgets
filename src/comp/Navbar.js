import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar">

      <NavLink activeClassName="active-link" exact to="/">Home</NavLink>
      <NavLink activeClassName="active-link" exact to="/counter">Counter</NavLink>

      
      <NavLink activeClassName="active-link" to="/greeting">Greeting Toggler</NavLink>
      <NavLink activeClassName="active-link" to="/show-hide">Show/Hide</NavLink>
      <NavLink activeClassName="active-link" to="/fontsizerb">Font Sizer - Buttons</NavLink>
      <NavLink activeClassName="active-link" to="/fontsizers">Font Sizer - Slider</NavLink>
      <NavLink activeClassName="active-link" to="/align">Text Alignment</NavLink>
      <NavLink activeClassName="active-link" to="/clock">Lifecycle Clock</NavLink>
      <NavLink activeClassName="active-link" to="/color">Color Changer</NavLink>
      <NavLink activeClassName="active-link" exact to="/rgb">RGB Sliders</NavLink>
     

    </div>
  );
}
