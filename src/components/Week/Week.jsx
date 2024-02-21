import { useEffect, useState } from 'react';

import ForecastRequest from 'services/api';


function Week() {
  const [creditsId, setCreditsId] = useState([]);
 

  useEffect(() => {
    ForecastRequest().then(setCreditsId);
  }, []);

  return (
    <>
      <h2>Week</h2>
      <ul>
        {creditsId.map(({ temp, datetime }) => (
          <li key={datetime}>
            <p>{temp}</p>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Week;
