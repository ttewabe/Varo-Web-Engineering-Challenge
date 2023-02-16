import data from "../data";

const createRequestToken = async () => {
  let body = null;
  try {
    const response = await fetch(
      `${data.imdbHostUrl}3/authentication/token/new?api_key=${data.apiKey}`
    );
    body = await response?.json();

    return body.request_token;
  } catch (err) {
    console.log(err);
  }

  return body;
};

export default createRequestToken;
