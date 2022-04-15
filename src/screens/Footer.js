import logo from "../logo/foodlogo.png";
function Footer() {
  return (
    <section className="footer">
      <div className="address">
        <img className="logo" src={logo} />
      </div>
      <div className="copyright">
        <p>© 2022 GroupWork - All Rights Reserved.</p>
      </div>
    </section>
  );
}

export default Footer;
