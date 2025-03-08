import { LoginForm } from "../login-form";

const UserSignUp = () => {
  return (
    <div className="w-full relative h-screen py-3 px-3">
      <h1 className="text-3xl fixed font-semibold">ReviseIt</h1>
      <div className="w-full h-full flex justify-center items-center">
        <div className="w-fit">
          <LoginForm className="w-sm" />
        </div>
      </div>
    </div>
  );
};

export default UserSignUp;
