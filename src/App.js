import logo from "./logo.svg";
import "./App.css";
import "./styles.css";
import Navbar from "./Navbar";
import Header from "./Header";
import Footer from "./Footer";
import Section from "./Section";
import "./Products.json";
import SimpleModalExample from "./SimpleModalExample";
import { useState } from "react";
import CartItem from "./CartItem";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems((prevCartItems) => [...prevCartItems, item]);
  };
  
  const removeFromCart = (itemId) => {
    setCartItems((prevCartItems) => prevCartItems.filter((item) => item.id !== itemId));
  };
  

  const prodList = [
    {
      name: "Refined Fresh Keyboard",
      price: "234.00",
      image: "https://loremflickr.com/640/480/fashion",
      description:
        "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart",
      id: "1",
    },
    {
      name: "Fantastic Wooden Hat",
      price: "800.00",
      image: "https://loremflickr.com/640/480/fashion",
      description:
        "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
      id: "2",
    },
    {
      name: "Handcrafted Steel Sausages",
      price: "243.00",
      image: "https://loremflickr.com/640/480/fashion",
      description:
        "The Football Is Good For Training And Recreational Purposes",
      id: "3",
    },
  ];
  return (
    <div>
      <Navbar cartItems={cartItems} removeFromCart={removeFromCart} ></Navbar>
      <Header></Header>
      <div>
        <section className="py-5">
          <div className="container px-4 px-lg-5 mt-5">
            <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
              {/* <Section details = {prodList[0]}></Section>
                <Section details = {prodList[1]}></Section>
                <Section details = {prodList[2]}></Section> */}
                {prodList.map((prod, index) => (
  <Section key={index} details={prod} addToCart={addToCart} cartItems={cartItems} removeFromCart={removeFromCart} />
))}

               
            </div>
          </div>
        </section>
      </div>

      <Footer></Footer>
      {/* <CartItem cartItems={cartItems} /> */}
    </div>
  );
}

export default App;
