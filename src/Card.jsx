import { NavLink } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import img1 from "./img/img(12).jpg";

const Card = (props) => {
  return (
    <>
      <div className="col-md-4 col-10 mx-auto">
        <div className="card">
          <img src={props.imgsrc} className="card-img-top" alt="..." />
          <div className="card-body">
            <h4 className="card-title text-weight-bold text-danger">{props.title}</h4>
            <p className="card-text ">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <NavLink to="#" className="btn btn-success">
              Order Now
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
