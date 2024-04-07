import headerstyles from "../styles/header.module.css"
import carting from "../images/Cart.png"
const Header = () => {
    return(
        <div className={headerstyles.headerContainer}>
            <div className={headerstyles.logo}>FreshKart</div>
            <div className={headerstyles.nav}>
            <div className={headerstyles.navItem}>Fruits</div>
            <div className={headerstyles.navItem}>Vegtebales</div>
            </div>
            <div className={headerstyles.cart}>
                <img src={carting} alt=""/>
                <span>Cart</span>
            </div>
            <div className={headerstyles.login}>Login</div>
            
        </div>
        

    )
}
export default Header;