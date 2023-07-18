import React from "react";

const AccountCard = ({ picture, name, email }) => {
  return (
    <div className="flex items-center mt-12 w-full justify-center">
      <div className="max-w-xs bg-white shadow-xl rounded-lg py-3">
        <div className="photo-wrapper p-2">
          <img
            className="w-32 h-32 rounded-full mx-auto"
            src={picture}
            alt={name}
          />
        </div>
        <div className="p-2">
          <h3 className="text-center text-xl text-gray-900 font-medium leading-8">
            {name}
          </h3>
          <div className="text-center text-gray-400 text-xs font-semibold">
            <p>BoxingTime user</p>
          </div>
          <table className="text-xs my-3">
            <tbody>
              <tr>
                <td className="px-2 py-2 text-gray-500 font-semibold">Email</td>
                <td className="px-2 py-2">{email}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AccountCard;
