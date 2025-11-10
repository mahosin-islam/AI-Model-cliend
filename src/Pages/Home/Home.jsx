import React, { useEffect, useState } from "react";
import ModelCard from "../../Componets/ModelCard";

const Home = () => {
  const [model, setModel] = useState([]);
  console.log(model);
  useEffect(() => {
    fetch("http://localhost:4000/Lates-model")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setModel(data);
      });
  }, []);

  return (
    <div className="">
      <h2 className="py-2 text-2xl text-center">Al Model</h2>
      <div className="grid md:grid-cols-3 gap-3 sm:grid-cols-2">
        {
            model.map(card=><ModelCard key={card._id} card={card}></ModelCard>)
        }
      </div>
    </div>
  );
};

export default Home;
