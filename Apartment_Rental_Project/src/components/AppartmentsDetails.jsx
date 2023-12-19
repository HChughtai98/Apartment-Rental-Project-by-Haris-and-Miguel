import { useParams } from "react-router-dom";
import AppartmentListData from "../dataset/AppartmentList.json";

function AppartmentsDetailsPage() {
  const { appartmentId } = useParams();
  const selectedAppartment = AppartmentListData.find(
    (appartment) => appartment.id == appartmentId
  );

  if (!selectedAppartment) {
    return <div>Appartment not found</div>;
  }

  return (
    <div className="appartment-details-container">
      <img src={selectedAppartment.picture_url.url}></img>
      <div className="detailsContainer">
        <div>
          <div className="nameInfo">
            <p>{selectedAppartment.name}</p>
          </div>
          <div className="locationInfo">
            <p>{selectedAppartment.country},</p>
            <p>{selectedAppartment.city}</p>{" "}
            <p className="responseTime">
              Response Time: {selectedAppartment.host_response_time}
            </p>
          </div>
        </div>
        <div className="outerRatingDiv">
          <div className="ratingDiv">
            <p>
              <strong>Score: </strong>
              {selectedAppartment.review_scores_rating}/100
            </p>
          </div>
          <div className="priceTag">
            <p>Price: {selectedAppartment.price}€</p>
          </div>
        </div>
      </div>
      <button type="button" onClick={() => window.history.back()}>
        Go Back
      </button>
    </div>
  );
}

export default AppartmentsDetailsPage;
