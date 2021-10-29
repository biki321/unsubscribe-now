import youtubeAuthUrl from "../../helpers/authRequiredObjects";

export function YtLoginBtn() {
  return (
    <a
      className="login-link"
      href={youtubeAuthUrl}
      style={{
        color: "white",
        borderRadius: "8px",
        padding: "5px",
        background: "#FF0000",
        textDecoration: "none",
        cursor: "pointer",
      }}
    >
      Login with Youtube
    </a>
  );
}
