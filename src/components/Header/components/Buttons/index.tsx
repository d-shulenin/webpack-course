import "./buttons.scss";
import Contact from "@/assets/icons/contact.svg";
import Cart from "@/assets/icons/cart.svg";
import Search from "@/assets/icons/search.svg";
import Login from "@/assets/icons/login.svg";
import Like from "@/assets/icons/like.svg";

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
