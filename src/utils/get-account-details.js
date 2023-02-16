import data from "../data";
const getAccountDetails = async (sessionId) => {
  let body = null;
  try {
    const response = await fetch(
      `${data.imdbHostUrl}3/account?api_key=${data.apiKey}&session_id=${sessionId}`
    );
    body = await response?.json();
  } catch (err) {
    console.log(err);
  }

  return body;
};

export default getAccountDetails;
