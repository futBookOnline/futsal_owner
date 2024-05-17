import React from "react";

const PasswordError = () => {
  return (
    <div className="text-orange-800">
      <p className="font-bold">Password must include at least:</p>
      <ul className="pl-8 list-disc font-semibold">
        <li>8 characters</li>
        <li>one special character</li>
        <li>one uppercase and one lowercase</li>
        <li>one number</li>
      </ul>
    </div>
  );
};

export default PasswordError;
