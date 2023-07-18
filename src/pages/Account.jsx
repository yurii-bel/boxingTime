import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import AccountCard from "../components/AccountCard";

const Account = () => {
  const { user, isAuthenticated } = useAuth0();
  return isAuthenticated ? (
    <AccountCard picture={user.picture} name={user.name} email={user.email} />
  ) : (
    <>
      <p className="p-4 text-gray-700 w-full text-center">
        User is not authenticated. Please, sign in to see account details.
      </p>
    </>
  );
};

export default Account;
