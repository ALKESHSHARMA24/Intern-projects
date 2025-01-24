const Header = function (props) {
    return (
      <div className="heading">
        <div className="logo-container">
          <div>
            <img
              src="https://marketplace.canva.com/EAFpeiTrl4c/2/0/1600w/canva-abstract-chef-cooking-restaurant-free-logo-a1RYzvS1EFo.jpg"
              alt="page-logo"
              id="image-logo"
            ></img>
          </div>
        </div>
        <div className="nav-bar">
          <div className="nav-bar-container">
            <ul className="list">
              <li>Home</li>
              <li>About Us</li>
              <li>Contact Us</li>
              <li>Cart</li>
            </ul>
          </div>
        </div>
      </div>
    );
  };

  export default Header;