import { RxHamburgerMenu } from "react-icons/rx";

export default function Navbar() {
  return (
    <nav className="container m-auto py-4 px-4 flex justify-between items-center">
      <h2 id="logo" className="text-xl text-primary font-semibold">
        LOGO
      </h2>
      <div id="for-mobile" className="lg:hidden">
        <div id="burger">
          <RxHamburgerMenu size={24} />
        </div>
      </div>
      <div
        id="for-desktops"
        className="hidden lg:flex items-center justify-center"
      >
        <ul className="flex gap-5">
          <li>
            <a href="/" className="text-gray-700 hover:text-primary">
              Home
            </a>
          </li>
          <li>
            <a href="/" className="text-gray-700 hover:text-primary">
              Services
            </a>
          </li>
 
          <li>
            <a href="/" className="text-gray-700 hover:text-primary">
              About Us
            </a>
          </li>
          <li>
            <a href="/" className="text-gray-700 hover:text-primary">
              Contact Us
            </a>
          </li>
          <li>
            <a href="/" className="text-gray-700 hover:text-primary">
            FAQ
            </a>
          </li>
        </ul>
      </div>
      <button className="hidden lg:flex bg-primary text-white py-[6px] px-4 rounded-sm">
        Get an appointment
      </button>
    </nav>
  );
}
