import { useEffect, useState } from 'react';

import ForecastRequest from 'services/api';
import css from './SearchTrip.module.css';

const SearchTrip = () => {
  const [creditsId, setCreditsId] = useState([]);
  console.log(creditsId);

  useEffect(() => {
    ForecastRequest().then(setCreditsId);
  }, []);

  return (
    <>
      <form>
        <input
          className={css.search}
          type="search"
          id="search"
          name="search"
          placeholder="Search your trip"
        />
      </form>
      {creditsId.map(({ temp, datetime }) => (
        <ul key={datetime}>
          <li>{temp}</li>
        </ul>
      ))}
    </>
  );
};

export default SearchTrip;
