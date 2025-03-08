import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className=" py-3 px-3 w-full grid md:grid-cols-3 items-center">
      <div className="">
        <h1 className="text-3xl font-semibold">ReviseIt</h1>
      </div>
      <div className="">
        <ul className="flex font-medium justify-center items-center gap-x-20">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="text-end">
        <Link
          to="/auth/signup"
          className="cursor-pointer bg-black text-sm text-white rounded-md px-4 py-1.5"
        >
          SignUp
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
