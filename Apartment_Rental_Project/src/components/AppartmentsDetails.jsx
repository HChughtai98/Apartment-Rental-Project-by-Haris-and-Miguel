import { useParams } from "react-router-dom";
import AppartmentListData from "../dataset/AppartmentList.json";
import { Link } from "react-router-dom";
import { useState } from "react";
import "/src/styles/AppartmentsDetails.css";


function AppartmentsDetailsPage({appartmentList, handleDelete, handleUpdateAppartment}) {
  const { appartmentId } = useParams();
  const selectedAppartment = appartmentList.find(
    (appartment) => appartment.id == appartmentId
  );
const [isUpdating, setIsUpdating] = useState(false);

  if (!selectedAppartment) {
    return <div>Appartment not found</div>;
  }
  const [newName, setNewName] = useState(selectedAppartment.name);
  const [newDescription, setNewDescription] = useState(selectedAppartment.description);
  const [newScore, setNewScore] = useState(selectedAppartment.review_scores_rating);
  const [newPrice, setNewPrice] = useState(selectedAppartment.price);

  function handleSubmit (event){
    event.preventDefault()
    const updatedAppartment = {...selectedAppartment, name: newName, description: newDescription, review_scores_rating: newScore, price: newPrice }
    handleUpdateAppartment(updatedAppartment)
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
      <div>
        <Link to='/'>
          <button type="button">Go Back</button>
        </Link>        

        <button type="button" onClick={() => {
          handleDelete(selectedAppartment.id)
        }}>Delete</button>

        <button type="button" onClick={() => {
          setIsUpdating (!isUpdating)
        }}>Update</button>
        {
          isUpdating && <form onSubmit={handleSubmit}>
            <label>Name:<input type="text" value={newName}onChange={(event) => setNewName(event.target.value)}/></label>
            <label>Description:<input type="text" value={newDescription}onChange={(event) => setNewDescription(event.target.value)}/></label>
            <label>Score:<input type="number" value={newScore}onChange={(event) => setNewScore(event.target.value)}/></label>
            <label>Price:<input type="number" value={newPrice}onChange={(event) => setNewPrice(event.target.value)}/></label>
            <button type="submit">Save</button>
          </form>
        }
      </div>      
    </div>
  );
}

export default AppartmentsDetailsPage;
