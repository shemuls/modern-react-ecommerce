import React from "react";

export const Register = () => {
  return (
    <form action="">
      <div className="form-group">
        <input
          type="text"
          className="form-control form-control-lg my-2"
          placeholder="Your Name"
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          className="form-control form-control-lg"
          placeholder="Your Email Address"
        />
      </div>
      <div className="form-group my-2">
        <input
          type="password"
          className="form-control form-control-lg"
          placeholder="Your Password"
        />
      </div>
      <div className="form-group my-2">
        <input
          type="submit"
          value="Register"
          className="btn btn-warning btn-lg"
        />
      </div>
    </form>
  );
};
