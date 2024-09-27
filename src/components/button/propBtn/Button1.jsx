import { Link } from "react-router-dom";
let Button1 = (props) => {
  return (
    <>
      <Link to="/api">
        <button className="px-6 py-3.5 font-poppins text-lg leading-tight text-white bg-amber-500 rounded-full">
          {props.title ? props.title : "default"}
        </button>
      </Link>
    </>
  );
};

export default Button1;
