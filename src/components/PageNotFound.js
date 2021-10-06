import { Link } from "react-router-dom";
import { ReactComponent as WashHand } from "../assets/WashHand.svg";

const PageNotFound = () => {
  return (
    <div className="page-not-found">
      <h2>OPSSSS!! Wash your hand and...</h2>
      <WashHand />
      <Link to="/">
        <h3>Back to Home</h3>
      </Link>
    </div>
  );
};

export default PageNotFound;
