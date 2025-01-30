import { Link } from "react-router";

const Header = function (props) {
  return (
    <div className="w-full h-[150px] heading flex-row flex items-center justify-between border-b-2 border-gray-200 m-2 p-5 rounded-4xl">
        <div className="h-[100px] w-auto ">
          <img
            className="w-full h-full object-cover"
            src="https://marketplace.canva.com/EAFpeiTrl4c/2/0/1600w/canva-abstract-chef-cooking-restaurant-free-logo-a1RYzvS1EFo.jpg"
            alt="page-logo"
            id="image-logo"
            
          ></img>
      </div>
      <div className="nav-bar flex-wrap mr-2">
          <ul className="flex flex-row gap-7">
            <li>
              <Link to={{ pathname: "/" }}> Home</Link>
            </li>
            <li>
              <Link to={{ pathname: "/AboutUs" }}>About Us</Link>
            </li>
            <li>
              <Link to={{ pathname: "/ContactUs" }}>Contact Us</Link>
            </li>
            <li>
              <Link>Cart</Link>
            </li>
          </ul>
      </div>
    </div>
  );
};

export default Header;
