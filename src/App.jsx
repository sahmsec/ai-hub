import { Suspense, useState } from "react"
import NavBar from "./components/NavBar";
import Banner from "./components/Banner";
import Models from "./components/Models";
import Cart from "./Cart";
import Footer from "./components/Footer";

const getModels = async () => {
  const res = await fetch('/models.json');
  return res.json();
}

const modelPromise = getModels();

function App() {

  const [activeTab, setActiveTab] = useState('model');
  const [carts, setCarts] = useState([]);
  // console.log("Active tab ", activeTab);
  console.log(carts);



  return (
    <>
      <NavBar />
      <Banner />

      {

        <div className="tabs tabs-box justify-center bg-transparent">
          <input type="radio" name="my_tabs_1" className="tab rounded-full w-40" aria-label="Models" defaultChecked onClick={() => setActiveTab("model")} />
          <input type="radio" name="my_tabs_1" className="tab rounded-full w-40" aria-label={`Cart(${carts.length})`} onClick={() => setActiveTab("cart")} />
        </div >

      }

      {activeTab === 'model' && <Models modelPromise={modelPromise} carts={carts} setCarts={setCarts} />}
      {activeTab === 'cart' && <Cart modelPromise={modelPromise} carts={carts} setCarts={setCarts}/>}



      <Footer />
    </>
  )
}

export default App
