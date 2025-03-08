import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="w-full py-24 flex gap-y-4 flex-col items-center">
      <h1 className="text-8xl w-[60%] text-center font-semibold">
        Manage your handwritten notes
      </h1>
      <p className="text-3xl w-[60%] text-center font-semibold">
        Categorize. Summarize. your notes with AI.
      </p>
      <Link
        to="/auth/signup"
        className="cursor-pointer bg-black text-sm text-white rounded-md px-4 py-1.5"
      >
        Try now
      </Link>
    </div>
  );
};

export default Hero;
