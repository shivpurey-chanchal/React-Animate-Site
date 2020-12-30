import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import React, { useState } from "react";

const Contact = () => {
  const [data, setData] = useState({
    name: "",
    phone: "",
    email: "",
    msg: "",
  });
  const InputEvents = (event) => {
    const { name, value } = event.target;
    setData((prevalue) => {
      return {
        ...prevalue,
        [name]: value,
      };
    });
  };
  const formSubmit = (e) => {
    e.preventDefault();
    alert(
      `your entered ${data.name} name ${data.phone} your number ${data.email} and msg is ${data.msg}`
    );
  };
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Contact Us</h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formSubmit}>
              <div class="mb-3">
                <label for="name" class="form-label">
                  Name
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="name"
                  name="name"
                  value={data.name}
                  onChange={InputEvents}
                  placeholder="enter your name"
                />
              </div>
              <div class="mb-3">
                <label for="phone" class="form-label">
                  Contact Number
                </label>
                <input
                  type="number"
                  class="form-control"
                  id="phone"
                  name="phone"
                  value={data.phone}
                  onChange={InputEvents}
                  placeholder="enter your contact number"
                />
              </div>
              <div class="mb-3">
                <label for="email" class="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  name="email"
                  value={data.email}
                  onChange={InputEvents}
                  placeholder="name@example.com"
                />
              </div>
              <div class="mb-3">
                <label for="textarea1" class="form-label">
                  Message
                </label>
                <textarea
                  class="form-control"
                  id="textarea1"
                  rows="3"
                  name="msg"
                  value={data.msg}
                  onChange={InputEvents}
                  placeholder="Enter your message"
                ></textarea>
              </div>
              <div class="col-12">
                <button type="submit" class="btn btn-outline-success mb-3">
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default Contact;
