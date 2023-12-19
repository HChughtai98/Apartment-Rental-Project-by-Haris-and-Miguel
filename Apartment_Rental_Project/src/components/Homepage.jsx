import React from "react";
import "/src/styles/Homepage.css";
import { Link } from "react-router-dom";

const Homepage = ({ appartmentList }) => {
  console.log(appartmentList);
  return (
    <div>
      <div className="HomepageCtn">
        {appartmentList.map((currentAppartment) => {
          return (
            <Link
              key={currentAppartment.id}
              to={`/appartments/${currentAppartment.id}`}
            >
              <div key={currentAppartment.id} className="itemContainer">
                <img src={currentAppartment.picture_url.url}></img>
                <div className="detailsContainer">
                  <div>
                    <div className="nameInfo">
                      <p>{currentAppartment.name}</p>
                    </div>
                    <div className="locationInfo">
                      <p>{currentAppartment.country},</p>
                      <p>{currentAppartment.city}</p>{" "}
                      <p className="responseTime">
                        Response Time: {currentAppartment.host_response_time}
                      </p>
                    </div>
                  </div>
                  <div className="outerRatingDiv">
                    <div className="ratingDiv">
                      <p>
                        <strong>Score: </strong>
                        {currentAppartment.review_scores_rating}/100
                      </p>
                    </div>
                    <div className="priceTag">
                      <p>Price: {currentAppartment.price}€</p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Homepage;
