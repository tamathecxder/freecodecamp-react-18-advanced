import { useEffect, useState } from "react";
import "../../../assets/css/multiple_returns.css";

const url = "https://api.github.com/users/QuincyLarson";

const MultipleReturnsFetchData = () => {
  const [user, setUser] = useState(null);

  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const getUser = async () => {     
    try {
      const response = await fetch(url);

      if (!response.ok) {
        setIsError(true);
        return;
      }
      
      const data = await response.json();

      setUser(data);

      console.log(data);
    } catch (error) {
      setIsError(error);
      console.log(error);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    getUser();
  }, []);

  if (isLoading) {
    return <div className="loader"></div>
  }
  
  if (isError) {
    return <h2>There Was An Error...</h2>
  }

  const { avatar_url, name, company, bio } = user;
  
  return (
    <div className="mtfd-wrapper">
      <h1>Fetch Data</h1>

      <img src={avatar_url} alt={name} />
      <h2>{name}</h2>
      <h3>Works At {company}</h3>
      <p>
        {bio}
      </p>
    </div>
  );
};
export default MultipleReturnsFetchData;
