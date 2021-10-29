import { useEffect, useState } from "react";
import IAuthState from "../../interfaces/authState.interface";
import * as queryString from "query-string";
import youtubeAuthUrl from "../../helpers/authRequiredObjects";
import Youtube from "../youtube/Youtube";
import { ParsedQuery } from "query-string";

//this comp handle authentication of all the apps like youtube, twitter etc.
export default function Auth({ app }: { app: "youtube" | "twitter" }) {
  const [youtubeAuthState, setYoutubeAuthState] = useState<IAuthState | null>(
    null
  );
  const [twitterAuthState, setTwitterAuthState] = useState(null);

  useEffect(() => {
    console.log("at useeffect auth.tsx");
    if (
      (app === "youtube" && !youtubeAuthState) ||
      (app === "twitter" && !twitterAuthState)
    ) {
      let params = queryString.parse(window.location.href, {
        parseNumbers: true,
      });
      console.log(params);
      const convertedParams = paramsConvert(params);

      if (params.access_token) {
        window.history.replaceState(
          {},
          "",
          process.env.REACT_APP_SELF_BASE_URL
        );

        //we are not handling the error which happens, when user do not allow to access data
        if (app === "youtube" && convertedParams) {
          setYoutubeAuthState({
            accessToken: convertedParams.access_token,
            expiresIn: convertedParams.expires_in,
            scope: convertedParams.scope,
            tokenType: convertedParams.token_type,
          });
        }
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [app]);

  function paramsConvert(param: ParsedQuery<string | number>) {
    if (
      typeof param.access_token !== "string" ||
      typeof param.expires_in !== "number" ||
      typeof param.scope !== "string" ||
      typeof param.token_type !== "string"
    ) {
      return null;
    } else
      return {
        access_token: param.access_token,
        expires_in: param.expires_in,
        scope: param.scope,
        token_type: param.token_type,
      };
  }

  function appOrAuth() {
    if (app === "youtube") {
      console.log("youtube returning");
      return youtubeAuthState ? (
        <Youtube authState={youtubeAuthState} />
      ) : (
        <a className="login-link" href={youtubeAuthUrl}>
          Login with Youtube
        </a>
      );
    } else if (app === "twitter") {
      return twitterAuthState ? (
        <div>twitter</div>
      ) : (
        <a className="login-link" href={youtubeAuthUrl}>
          Login with twitter
        </a>
      );
    } else return <div></div>;
  }

  return appOrAuth();
}
