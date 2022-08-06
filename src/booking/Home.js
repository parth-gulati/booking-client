import { useSelector } from "react-redux";

const Home = () => {
  const state = useSelector((state) => ({ ...state }));

  return <div className="container-fluid h1 p-5 text-center">Home Page</div>;
};

export default Home;
