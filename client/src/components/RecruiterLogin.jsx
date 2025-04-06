import { useState } from "react";
import { assets } from "../assets/assets";

const RecruiterLogin = () => {
  const [state, setState] = useState("Login");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const [image, setImage] = useState(false);
  const [isTextDataSubmited, setIsTextDataSubmited] = useState(false);

  return (
    <div>
      <form action="">
        <h1 className="text-center text-2xl text-neutral-700 font-medium">
          Recruiter {state}
        </h1>
        <p className="text-sm">Welcome back! Please sign in to continue </p>
        <>
          <div className="border px-4 py-2 flex items-center gap-2 rounded-full mt-5">
            <img src={assets.person_icon} alt="" />
            <input
              className="outline-none text-sm"
              onChange={(e) => setName(e.target.value)}
              value={name}
              type="text"
              placeholder="Company Name"
              required
            />
          </div>
        </>
      </form>
    </div>
  );
};

export default RecruiterLogin;
