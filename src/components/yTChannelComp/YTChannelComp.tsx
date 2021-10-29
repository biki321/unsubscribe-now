import IYTChannel from "../../interfaces/ytchannel.interface";
import Spinner from "../spinner/spinner";
import "./yTChannelComp.css";

interface IProps extends IYTChannel {
  onUnsubscribe: (subscriptionId: string) => Promise<void>;
  unSubsLoading: boolean;
}

export default function YTChannelComp(props: IProps) {
  return (
    <div className="yTChComp-div">
      <img src={props.thumbnail} alt="" />
      <p className="yTCh-title">{props.channelTitle}</p>
      <div
        className="yT-unsubscribe-btn"
        onClick={() => props.onUnsubscribe(props.subscriptionId)}
      >
        {props.unSubsLoading ? (
          <div className="spinner-div">
            <Spinner width="15px" borderWidth="2px" />
          </div>
        ) : (
          "Unsubscribe"
        )}
      </div>
    </div>
  );
}
