import BtnOpenModal from 'components/Button/BtnOpenModal/BtnOpenModal';
import PageTitle from 'components/PageTitle/PageTitle';
import SearchTrip from 'components/SearchYourTrip/SearchTrip';


const App = () => {
  return (
    <>
      <PageTitle text="Weather Forecast" />
      <SearchTrip />
       <BtnOpenModal/>
     
    </>
  );
};

export default App;
