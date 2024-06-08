import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

function Register() {
  let { register, handleSubmit } = useForm();
  let navigate = useNavigate();

  //form submission
  function handleFormSubmit(userObj) {
    //programatically navigate to registred-users and send usersList data too
     navigate("/registered-users", { state: userObj });
  }

  return (
    <div>
      <h1 className="text-center text-info display-3">Register</h1>

      <form
        className="w-50 mx-auto mt-5"
        onSubmit={handleSubmit(handleFormSubmit)}
      >
        {/* username */}
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            type="text"
            {...register("username")}
            id="username"
            className="form-control"
          />
        </div>
        {/* password */}
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            {...register("password")}
            id="password"
            className="form-control"
          />
        </div>
        {/* email */}
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            {...register("email")}
            id="email"
            className="form-control"
          />
        </div>
        {/* submit button */}
        <button type="submit" className="btn btn-success">
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;
