import React, { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import { Link } from "react-router-dom";
import Data from "./Data";
import './Pets.css'
function Pets() {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;
  const handlePageClick = (data) => {
    console.log(data.selected);
  }
  useEffect(() => {
    const getPets = async () => {
      setLoading(true);
      const response = Data;
      if (componentMounted) {
        setData(response);
        setFilter(Data);
        setLoading(false);
        console.log(filter);
      }

      return () => {
        componentMounted = false;
      };
    };
    getPets();
  }, []);
  const Loading = () => {
    return (
      <>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
      </>
    );
  };

const filterPet = (cat) => {
  const updatedList = data.filter((x)=>x.category === cat);
  setFilter(updatedList);
}



  const ShowPets = () => {
    return (
      <>
        <div className="buttons d-flex justify-content-center mb-5 pb-5">
          <button className="btn btn-outline-dark me-2" onClick={() => setFilter(data)}>ALL</button>
          <button className="btn btn-outline-dark me-2" onClick={() => filterPet("Cat")}>Cat</button>
          <button className="btn btn-outline-dark me-2" onClick={() => filterPet("Dog")}>Dog</button>
          <button className="btn btn-outline-dark me-2" onClick={() => filterPet("electronics")}>Electronics</button>
          <button className="btn btn-outline-dark me-2" onClick={() => filterPet("jewelery")}>
          Jewelery
          </button>
        </div>

        {filter.map((pet) => {
          return (

            <>
              <div className="d-flex justify-content-center col-md-4 mb-5">
                <div className="pets-cont">
                  <div className="pets-img">
                    <img src={pet.image} alt="" />
                  </div>
                  <div className="pets-detail">
                    <div className="pets-name">
                      <h4 className="mt-2">{pet.name}</h4>
                    </div>
                    <div className="pets-breed">
                      <p>Breed: {pet.breed}</p>
                    </div>
                    <div className="pets-gender">
                      <p>Gender: {pet.gender}</p>
                    </div>
                    <div className="pets-loc">
                      <p>Location: {pet.location}</p>
                    </div>
                    <div className="pets-link">
                      <Link to = {`/pets/${pet.id}`} className="pets-link-btn">
                      Adopt Now
                    </Link>
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </>
    );
  };
  return (
    <>
      <div className="container-fluid py-5 my-5" style={{backgroundColor: "rgb(234, 232, 232)"}}>
        <div className="row">
          <div className="col-12">
            <h1 className="display-6 fw-bolder text-center">
              Latest Pets
            </h1>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center">
          {loading ? <Loading /> : <ShowPets />}

        </div>

      </div>
    </>
  );
}

export default Pets;
