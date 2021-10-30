import youtubeAuthUrl from "../../helpers/authRequiredObjects";
import tlogo from "../../icons/twitter.icon.png";

export function TwitterLoginBtn() {
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
          src={tlogo}
          alt=""
          style={{
            width: "20px",
            height: "20px",
          }}
        />
      </div>
      <div style={{ flex: 2, textAlign: "center" }}> Sign in with Twitter</div>
    </a>
  );
}
