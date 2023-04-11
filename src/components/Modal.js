import React from "react";
const Modal = () => {
  return (
    <>
      <div className="overlay">
        <div className="overlay-inner">
          <button className="close">
            <i class="fas fa-times"></i>
          </button>
          <div className="inner-box">
            <img src="../image/bg2.jpg" alt="" />
            <div className="info">
              <h1>
                ReactJS by Example-Building Modern Web application with React
              </h1>
              <h3>Ashutosh Ojha</h3>
              <br />
              <h4>
                Pact Publishing Ltd<span>10-04-2023</span>
              </h4>
              <br />
              <a href="#">
                <button>More</button>
              </a>
            </div>
          </div>
          <h4 className="description">
            Knowledge for free... Get that job, you aspire for! want to switch
            and provides plenty of tips and tricks for using ReactJs.
          </h4>
        </div>
      </div>
    </>
  );
};
export default Modal;
