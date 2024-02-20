import PageTitle from 'components/PageTitle/PageTitle';
import SearchTrip from 'components/SearchYourTrip/SearchTrip';
// import ForecastRequest from 'services/api';

const App = () => {
  return (
    <>
      <PageTitle text="Weather Forecast" />
      <SearchTrip />
      {/* <ForecastRequest /> */}
    </>
  );
};

export default App;
