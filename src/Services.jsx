import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Sdata from "./Sdata";
import Card from "./Card";

const Services = () => {
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Our Services</h1>
      </div>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-3">{
              Sdata.map((val, index) =>{
                return <Card
                key = {index} 
                  imgsrc = {val.imgsrc}
                  title = {val.title}
                />
              })
            }</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
