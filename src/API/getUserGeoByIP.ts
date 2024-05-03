import IPData, { LookupResponse } from "ipdata";

const API_KEY = "e76d8bec83fd4bdb55f292a1e44f3555da65d20530bc73c679941046";

const ipdata = new IPData(API_KEY);

const getUserGeoData = async () => {
  const response: LookupResponse = await ipdata.lookup();
  const city: string | undefined = response.city;

  console.log(response);
  console.log(city);
};

export default getUserGeoData;
