import React from "react";

export const Register = ({
  register,
  handleSubmit,
  registerFormHanlder,
  errors,
}) => {
  return (
    <form onSubmit={handleSubmit(registerFormHanlder)}>
      <div className="form-group">
        <input
          {...register("name")}
          type="text"
          className="form-control form-control-lg my-2"
          placeholder="Your Name"
        />
      </div>
      <div className="form-group">
        <input
          {...register("email", { required: true })}
          type="text"
          className="form-control form-control-lg"
          placeholder="Your Email Address"
        />
        {errors.email && (
          <span className="text-danger">
            Email field is required {errors.email.message}
          </span>
        )}
      </div>
      <div className="form-group my-2">
        <input
          {...register("password", { required: true, minLength: 6 })}
          type="password"
          className="form-control form-control-lg"
          placeholder="Your Password"
        />
        {errors?.password?.type === "minLength" && (
          <span className="text-danger">Password must be 6 character</span>
        )}
        {errors?.password?.type === "required" && (
          <span className="text-danger">Password field is required</span>
        )}
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
