import "./App.css";
import Navbar from "./Components/Navbar";
import Section from "./Components/Section";
import Search from "./Components/Search";
import SideBar from "./Components/SideBar";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const [search,setSearch] = useState('');

  console.log(state);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) =>
        res.json().then((data) => {
          console.log(data);
          const sales = [];
          const tech = [];
          const marketing = [];

          for (let i = 0; i < 9; i++) {
            const newItem = {
              id: data[i].id,
              description: data[i].description,
              price: data[i].price,
              title: data[i].title,
              checked: false,
            };
            sales.push(newItem);
          }

          for (let i = 9; i < 15; i++) {
            const newItem = {
              id: data[i].id,
              description: data[i].description,
              price: data[i].price,
              title: data[i].title,
              checked: false,
            };
            tech.push(newItem);
          }

          for (let i = 15; i < 20; i++) {
            const newItem = {
              id: data[i].id,
              description: data[i].description,
              price: data[i].price,
              title: data[i].title,
              checked: false,
            };
            marketing.push(newItem);
          }

          dispatch({ type: "SALES", payload: { sales } });
          dispatch({ type: "TECH", payload: { tech } });
          dispatch({ type: "MARKETING", payload: { marketing } });
        })
      )
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App">
      <SideBar />
      <div className="Right">
        <section>
          <Navbar />
        </section>
        <section className="Main">
          <Search search={search} setSearch={setSearch} />
          <Section heading={"Sales"} data={state.sales} search={search}/>
          <Section heading={"Tech Team"} data={state.tech} search={search}/>
          <Section heading={"Marketing"} data={state.marketing} search={search}/>
        </section>
      </div>
    </div>
  );
}

export default App;
