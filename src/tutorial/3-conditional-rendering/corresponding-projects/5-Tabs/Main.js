import React, { useState, useEffect } from "react";
//react icons
import { FaAngleDoubleRight } from "react-icons/fa";
import "./styles.css";
//data:
const url = "https://course-api.com/react-tabs-project";

function Main() {
  //1
  const [loading, setLoading] = useState(true);
  //list of jobs
  const [jobs, setJobs] = useState([]);
  //5
  const [value, setValue] = useState(0);
  //---------------------
  //2
  const fetchJobs = async () => {
    const response = await fetch(url);
    const newJobs = await response.json();
    setJobs(newJobs);
    setLoading(false);
  };
  //-------------------------
  //3
  useEffect(() => {
    fetchJobs();
  }, []);
  //------------------
  //4
  if (loading) {
    return (
      <section className="section loading">
        <h1>Loading...</h1>
      </section>
    );
  }
  //----------------------
  //6 !destructuring must be after loading!!!
  //jobs already updated + value===0 (from state) =>
  //jobs[0]===first job
  const { company, dates, duties, title } = jobs[value];
  //7
  return (
    <section className="section">
      <div className="title">
        <h2>exprierence</h2>
        <div className="underline"></div>
      </div>
      <div className="jobs-center">
        {/*7b btn-container */}
        <div className="btn-container">
          {/*iterate over all jobs and display specific 
            btn for each job */}
          {jobs.map((item, index) => {
            //index is index of placement in jobs array
            //[0,1,2]
            return (
              <button
                key={item.id}
                //when click => grab the index of a particular job
                //and change 'value' state & data will change
                //=>jobs[value] for 'job info'
                onClick={() => setValue(index)}
                //********specific css********* */
                //if index of button is equal to the "value" in jobs array
                //===if particular button is clicked =>
                //add active css class to btn or do nothing
                className={`job-btn ${index === value && "active-btn"}`}
              >
                {item.company}
              </button>
            );
          })}
        </div>
        {/*7a job info*/}
        <article className="job-info">
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className="job-date">{dates}</p>
          {duties.map((duty, index) => {
            return (
              <div key={index} className="job-desc">
                <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
                <p>{duty}</p>
              </div>
            );
          })}
        </article>
      </div>
      <button className="btn">more info</button>
    </section>
  );
}

export default Main;
