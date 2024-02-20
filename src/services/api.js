import axios from 'axios';

const KEY = 'W5QCCFFKYWB6UP577Z7FXLG3F';
axios.defaults.baseURL = 'https://weather.visualcrossing.com';

const ForecastRequest = async () => {
  const response = await axios.get(
    `VisualCrossingWebServices/rest/services/timeline/Kyiv?unitGroup=metric&key=${KEY}`
  );
  return response.data.days;
};
export default ForecastRequest;

// https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/[location]/[date1]/[date2]?key=YOUR_API_KEY
