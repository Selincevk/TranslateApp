import React from "react";
import { useDispatch } from "react-redux";
import { translateText } from "../redux/actions";
const Button = () => {
  const dispatch = useDispatch();
  return (
    <button
      onClick={() => dispatch(translateText())}
      className="bg-blue-500 text-center px-5 py-3 rounded-md font-semibold hover:ring-2 hover:bg-blue-900 cursor-pointer transition mt-3 disabled:brightness-50"
    >
      Çevir
    </button>
  );
};

export default Button;
