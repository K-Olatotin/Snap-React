import Logo from '../../assets/svg/logo.svg'
import './Header.css'
const Header = () => {
    return (
      <>
        <div className='header-container'>
            <div className="header-left">
              
                    <img src={Logo} alt=""  className="logo"/>

                    <select><option>Features</option></select>
                    <select><option>Company</option></select>

                    <a href="">Careers</a>
                    <a href="">About</a>
            
            </div>

            <div className="header-right">
                    <button className="login">Login</button>
                    <button className="register">Register</button>
            </div>
        </div>
      </>
  
    );
     
  }
  export default Header;