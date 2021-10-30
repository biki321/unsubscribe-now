import youtubeAuthUrl from "../../helpers/authRequiredObjects";
import glogo from "../../icons/google.icon.png";

export function YtLoginBtn() {
  return (
    <a
      className="login-link"
      href={youtubeAuthUrl}
      style={{
        borderRadius: "2px",
        padding: "5px",
        textDecoration: "none",
        cursor: "pointer",
        background: "#fff",
        width: "250px",
        paddingLeft: "10px",
        paddingRight: "10px",
        display: "flex",
        alignContent: "center",
      }}
    >
      <div>
        <img
          className="glogo"
          src={glogo}
          alt=""
          style={{
            width: "20px",
            height: "20px",
          }}
        />
      </div>
      <div style={{ flex: 2, textAlign: "center" }}> Sign in with Google</div>
    </a>
  );
}
