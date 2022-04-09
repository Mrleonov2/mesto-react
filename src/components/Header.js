import logoHeader from '../images/logo.svg'
function Header(){
  return(<header className="header">
  <img
    className="header__logo"
    src={logoHeader}
    alt="Логотип Место"
  />
</header>)
}
export default Header;