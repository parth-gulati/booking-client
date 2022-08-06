const LoginForm = ({
  handleSubmit,
  email,
  password,
  setEmail,
  setPassword,
}) => {
  return (
    <form className="mt-3" onSubmit={handleSubmit}>
      <div className="form-group mb-3">
        <label>Email</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </div>
      <div className="form-group mb-3">
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
      </div>
      <button disabled={!email || !password} className="btn btn-primary mt-3">
        Submit{" "}
      </button>
    </form>
  );
};

export default LoginForm;
