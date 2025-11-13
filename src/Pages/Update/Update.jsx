import React, { use } from "react";
import { AuthContex } from "../../Contexts/AuthContex";
import { useLoaderData, useNavigate } from "react-router";
import { toast } from "react-toastify";

const Update = () => {
  const { user } = use(AuthContex);
  const data = useLoaderData();
    const navigate =useNavigate()
  const { _id } = data;
  const handelAddModel = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const framework = e.target.framework.value;
    const useCase = e.target.UseCase.value;
    const dataset = e.target.Dataset.value;
    const image = e.target.photo.value;
    const description = e.target.description.value;
    const purchased = 0;
    const createdBy = user.email;
  

    const newData = {
      name,
      framework,
      useCase,
      dataset,
      createdBy,
      image,
      purchased,
      description,
     createdAt: new Date()
    };

    Object.keys(newData).forEach((key) => {
      if (newData[key] === "" || newData[key] === null) {
        delete newData[key];
      }
    });

    fetch(`https://server-side-xi.vercel.app/model/${_id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("add success PATH", data);
        toast('successfully you could edit model')
        navigate('/')
      })
      .catch((err) => {
        console.log(err)
        toast('you path is wrong')
      });
  };

  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-3xl font-bold">Updat Model</h1>
          </div>
          <div className="card bg-base-100 w-full  shrink-0 shadow-2xl">
            <div className="card-body">
              <form onSubmit={handelAddModel}>
                <fieldset className="fieldset">
                  <div className="flex gap-2">
                    <span>
                      <label className="label">Name</label>

                      <input
                        type="text"
                        defaultValue={data.name}
                        name="name"
                        className="input"
                        placeholder="name"
                      />
                    </span>
                    <span>
                      <label className="label">Framework</label>
                      <input
                        type="text"
                        name="framework"
                        defaultValue={data.framework}
                        className="input"
                        placeholder="framework"
                      />
                    </span>
                  </div>

                  <div className="flex gap-2">
                    <span>
                      <label className="label">UseCase</label>
                      <input
                        type="text"
                        name="UseCase"
                        defaultValue={data.useCase}
                        className="input"
                        placeholder="Use Case"
                      />
                    </span>
                    <span>
                      <label className="label">Dataset</label>
                      <input
                        type="text"
                        name="Dataset"
                       defaultValue={data.dataset}
                        className="input w-full"
                        placeholder="dataset"
                      />
                    </span>
                  </div>

                  <div>
                    <label className="label">photoURL</label>
                    <input
                      type="text"
                      name="photo"
                      defaultValue={data.image}
                      className="input w-full"
                      placeholder="https://img.icons8.com/?size=96&id"
                    />
                  </div>

                  <div className="flex flex-col">
                    <label className="label">discription</label>
                    <textarea
                      name="description"
                      defaultValue={data.description}
                      rows="2"
                      className="textarea w-full"
                      placeholder="Write your description (max 20 words)"
                    ></textarea>
                  </div>

                  <button className="bg-gradient-to-r from-[#632ee3]  to-[#9f62f2] px-4 p-2 font-semibold rounded-[4px] text-white">
                    Add Model
                  </button>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Update;
