import PageTitle from 'components/PageTitle/PageTitle';
import SearchTrip from 'components/SearchYourTrip/SearchTrip';
import Test from 'utils/test';

const App = () => {
  return (
    <>
      <PageTitle text="Weather Forecast" />
      <SearchTrip />
      <Test/>
    </>
  );
};

export default App;
