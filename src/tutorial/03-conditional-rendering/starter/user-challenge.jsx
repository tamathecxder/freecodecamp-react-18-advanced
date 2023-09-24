import React, { useState } from "react";

function UserChallenge() {
  const [user, setUser] = useState(null);

  const login = () => {
    setUser({
      name: "Jane Doe",
      email: "jane@gmail.com",
      id: 21,
      created_at: Date.now(),
      updated_at: null,
    });
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <section>
      {user != null ? (
        <div>
          <h2>Hello, {user.name}</h2>
          <button type="button" onClick={logout}>
            Logout
          </button>
        </div>
      ) : (
        <div>
          <h2>Please, Login First</h2>
          <button type="button" onClick={login}>
            Login
          </button>
        </div>
      )}
    </section>
  );
}

export default UserChallenge;
