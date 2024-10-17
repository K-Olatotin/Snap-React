import Image from '../../assets/png/image-hero-desktop.png'
import Logo from '../../assets/svg/client-audiophile.svg'
import Databiz from '../../assets/svg/client-databiz.svg'
import Maker from '../../assets/svg/client-maker.svg'
import Meet from '../../assets/svg/client-meet.svg'
import './Hero.css'
 
const Hero = () => {
    return (
      <>
        <div className="hero">
        <div className="remote">
            <h1>Make<br />remote work</h1>

            <p>Get your team in sync. no matter your location.
            Streamline processes. create team rituals. and watch productivity soar.
            </p>

            <button className="btn">Learn More</button>

            <div>
            <img src={Logo} alt=""  className="logo1"/>
            <img src={Databiz} alt=""  className="logo2"/>
            <img src={Maker} alt=""  className="logo3"/>
            <img src={Meet} alt=""  className="logo4"/>
        </div>
        </div>

        <div className="image">
            <img src={Image} alt="" />
        </div>
        </div>
      </>
  
  
    );
     
  }
  export default Hero;