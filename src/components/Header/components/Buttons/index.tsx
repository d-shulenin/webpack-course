import "./buttons.scss";
import Cart from "@/assets/icons/cart.svg";
import Contact from "@/assets/icons/contact.svg";
import Like from "@/assets/icons/like.svg";
import Login from "@/assets/icons/login.svg";
import Search from "@/assets/icons/search.svg";

const Buttons = () => {
  return (
    <ul className="buttons">
      <li className="buttons__button">
        <button>
          <Contact />
        </button>
      </li>
      <li className="buttons__button">
        <button>
          <Cart />
        </button>
      </li>
      <li className="buttons__button">
        <button>
          <Search />
        </button>
      </li>
      <li className="buttons__button">
        <button>
          <Login />
        </button>
      </li>
      <li className="buttons__button">
        <button>
          <Like />
        </button>
      </li>
    </ul>
  );
};

export default Buttons;
