import React, { use, useEffect, useState } from "react";
import {} from "react-router";
import ModelCard from "../../Componets/ModelCard";
import { AuthContex } from "../../Contexts/AuthContex";
import { FadeLoader } from "react-spinners";

const AllModel = () => {
  const [model, setModel] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = use(AuthContex);
  useEffect(() => {
    fetch("https://server-side-xi.vercel.app//model")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setModel(data);
        setLoading(false);
      });
  }, [user]);

  // Search Model section
  const handelSearch = (e) => {
    e.preventDefault();
    const search = e.target.search.value.trim();
    if (!search) {
      fetch("https://server-side-xi.vercel.app//model")
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setModel(data);
          setLoading(false);
        })
        .catch((err) => console.log(err));
      return;
    }

    fetch(`https://server-side-xi.vercel.app/search?search=${search}`)
      .then((res) => res.json())
      .then((data) => {
        console.log("serch sucees", data);
        setModel(data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  };

  // filter

  const [framework, setFramework] = useState("");

  useEffect(() => {
    fetch(`https://server-side-xi.vercel.app/frameworkd?framework=${framework}`)
      .then((res) => res.json())
      .then((data) => {
        console.log("Filter success", data);
        setModel(data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, [framework]); 
  if (loading) {
    return (
      <div className="flex justify-center mt-50">
        <FadeLoader color="#1fc96f" className="text-center" />
      </div>
    );
  }

  return (
    <div className="">
      <h2 className="text-2xl font-semibold text-center text-[#9f62f2]">
        All AI-Model
      </h2>

      <div className="flex  flex-col  gap-5 sm:flex-row md:justify-between  my-5 px-4">
        <div className=""></div>
        <div>
          <form onSubmit={handelSearch}>
            <div className="join  ">
              <div className="rounded-2xl">
                <label className="input validator join-item ">
                  <input
                    type="text"
                    name="search"
                    placeholder="Search AI model"
                  />
                </label>
              </div>
              <button className="btn btn-neutral bg-pink-600 join-item">
                Join
              </button>
            </div>
          </form>
        </div>
        <div>
          <span className="">
            <label className="form-control">
              <select
                value={framework}
                onChange={(e) => setFramework(e.target.value)}
                className="select w-60 select-bordered"
              >
                <option value="All">All</option>
                <option value="TensorFlow">TensorFlow</option>
                <option value="PyTorch">PyTorch</option>
              </select>
            </label>
          </span>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-3 sm:grid-cols-2">
        {model.map((card) => (
          <ModelCard key={card._id} card={card}></ModelCard>
        ))}
      </div>
    </div>
  );
};

export default AllModel;
