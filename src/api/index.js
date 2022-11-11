import axios from "axios";

const getPlacesData = async () => {
  const URL = process.env.REACT_APP_SUPABASE_URL;
  const config = {
    headers: {
      apikey: process.env.REACT_APP_SUPABASE_KEY,
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.REACT_APP_SUPABASE_KEY}`,
    },
  };
  try {
    const { data } = await axios.get(URL, config);
    return data;
  } catch (error) {
    console.log(error, error.message);
  }
};

export default getPlacesData;
