import data from "../data";

const createSession = async (requestToken) => {
  let body = null;
  try {
    const response = await fetch(
      `${data.imdbHostUrl}3/authentication/session/new?api_key=${data.apiKey}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ request_token: requestToken }),
      }
    );
    body = await response?.json();
    return body.session_id;
  } catch (err) {
    console.log(err);
  }

  return body;
};

export default createSession;
