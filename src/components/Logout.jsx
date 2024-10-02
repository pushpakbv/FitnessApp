import React from "react";
import { useDispatch } from "react-redux";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import { clearUser } from "../features/auth/authSlice";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      dispatch(clearUser());
      navigate("/login"); // Redirect to login after logout
    } catch (error) {
      console.error("Error signing out: ", error);
    }
  };

  return (
    <button onClick={handleLogout} className="bg-red-500 text-white p-2 rounded-md hover:bg-red-700 justify">
      Logout
    </button>
  );
};

export default Logout;
