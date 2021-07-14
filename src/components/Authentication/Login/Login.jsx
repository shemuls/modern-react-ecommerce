import React from "react";

export const Login = () => {
  return (
    <form action="">
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
      <div className="form-group">
        <input type="submit" value="Login" className="btn btn-warning btn-lg" />
      </div>
    </form>
  );
};
