const youtubeAuthReq = {
  clientId: process.env.REACT_APP_CLIENT_ID,
  redirectUri: `${process.env.REACT_APP_REDIRECT_URL}/youtube`,
  scope: "https://www.googleapis.com/auth/youtube",
};

const youtubeAuthUrl = `https://accounts.google.com/o/oauth2/auth?client_id=${youtubeAuthReq.clientId}&redirect_uri=${youtubeAuthReq.redirectUri}&response_type=token&scope=${youtubeAuthReq.scope}&state=state_parameter_passthrough_value&include_granted_scopes=true`;
export default youtubeAuthUrl;
