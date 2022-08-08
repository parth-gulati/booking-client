import { useSelector } from "react-redux";

const NewHotel = () => {
  const state = useSelector((state) => ({ ...state }));

  return <div className="container-fluid h1 p-5 text-center">NewHotel Page</div>;
};

export default NewHotel;
