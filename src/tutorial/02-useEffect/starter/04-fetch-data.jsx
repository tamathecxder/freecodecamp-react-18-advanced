import { useState, useEffect } from "react";

const url = "https://api.github.com/users";

const FetchData = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await fetch(url);
        const users = await response.json();
  
        setUsers(users);
      } catch (err) {
        console.log(err);
      }
    };

    getUsers();
  }, []);

  return (
    <div className="gh-container">
      <div>
        <h2>Fetch Data Example</h2>
        <h3>Github Users</h3>
      </div>

      {users.map((user) => {
        return (
          <div className="gh-card" key={user.id}>
            <div className="gh-card-body">
              <div className="gh-image-wrapper">
                <img src={user.avatar_url} alt={"Profile pic of " + user.login} />
              </div>
              <div className="gh-description">
                <h4>{user.login}</h4>
                <a href={user.html_url} target="_blank" rel="noreferrer">
                  Profile
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default FetchData;
