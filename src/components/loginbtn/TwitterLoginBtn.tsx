import youtubeAuthUrl from "../../helpers/authRequiredObjects";

export function TwitterLoginBtn() {
  return (
    <a
      className="login-link"
      href={youtubeAuthUrl}
      style={{
        color: "white",
        borderRadius: "8px",
        padding: "5px",
        background: "#1F6FD8",
        textDecoration: "none",
        cursor: "pointer",
      }}
    >
      Login with Twitter
    </a>
  );
}
