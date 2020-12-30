import { NavLink } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";

const Common = (props) => {
  return (
    <>
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex align-items-center flex-column">
                  <h1>
                    {props.name}
                    <strong className="brand-name"> Be with Us ! </strong>
                  </h1>
                  <h2 className="my-3"></h2>
                  <div className="mt-3">
                    <NavLink to={props.visit} className="btn-get">
                      {props.btnname}
                    </NavLink>
                  </div>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 header-img">
                  <img to="/" src={props.imgsrc} className="img-fluid animated" alt="img"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Common;
