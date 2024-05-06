import IPData, { LookupResponse } from "ipdata";

//Interfaces
import { IUserGeoData } from "../interfaces/IAPI";

//API Key
const API_KEY = "e76d8bec83fd4bdb55f292a1e44f3555da65d20530bc73c679941046";

const getUserGeoData = async (): Promise<IUserGeoData> => {
  const ipdata = new IPData(API_KEY);

  const response: LookupResponse = await ipdata.lookup();
  const city: string | undefined = response.city;
  const country: string = response.country_name;

  const userGeoData: IUserGeoData = {
    country,
    city,
  };

  return userGeoData;
};

export default getUserGeoData;
