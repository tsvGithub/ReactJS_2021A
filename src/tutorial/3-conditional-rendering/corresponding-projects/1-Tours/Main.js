import React, { useState, useEffect } from "react";
import Tours from "./Tours";
import Loading from "./Loading";

import "./styles.css";

const url = "https://course-api.com/react-tours-project";
function Main() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  useEffect(() => {
    fetchTours();
  }, []);

  const fetchTours = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setLoading(false);
      setTours(tours);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };
  //when loading:
  if (loading) {
    return (
      <main>
        {/* <h1>Loading...</h1> */}
        <Loading />
      </main>
    );
  }
  //if no tours:
  if (tours.length === 0) {
    return (
      <main>
        <div className="title">
          <h2>no tours left</h2>
          <button className="btn" onClick={() => fetchTours()}>
            refresh
          </button>
        </div>
      </main>
    );
  }
  //if OK
  return (
    <main>
      {/* <h1>Tours</h1> */}
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  );
}

export default Main;
