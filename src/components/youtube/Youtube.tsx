import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import getAxiosIns from "../../axiosIns";
import IAuthState from "../../interfaces/authState.interface";
import IYTChannel from "../../interfaces/ytchannel.interface";
import Spinner from "../spinner/spinner";
import YTChannelComp from "../yTChannelComp/YTChannelComp";

interface IProps {
  authState: IAuthState;
}

function Youtube(props: IProps) {
  const [channels, setChannels] = useState<IYTChannel[]>([]);
  //error have not been shown properly yet
  const [error, setError] = useState<string | null>(null);
  // when clicked unsubscribed this state hold the subsId to show loading
  const [unSubsChLoadingId, setUnSubsChLoadingId] = useState<string | null>(
    null
  );
  const axiosInstance = useMemo(
    () => getAxiosIns(props.authState.accessToken),
    [props.authState.accessToken]
  );
  const nextPageToken = useRef<string | null>("");
  const [loading, setLoading] = useState(true);

  const fetchChannels = useCallback(async () => {
    try {
      const { data } = await axiosInstance(
        //maxResults = 0 to 50
        `/subscriptions?part=snippet&mine=true&maxResults=20&order=unread&pageToken=${nextPageToken.current}`
      );
      console.log(data);
      nextPageToken.current = data.nextPageToken;
      setChannelsData(data.items);
    } catch (error) {
      setError("could not fetch");
    }
  }, [axiosInstance]);

  useEffect(() => {
    console.log("useeffect at youtube.tsx");
    fetchChannels();
    setLoading(false);
  }, [fetchChannels]);

  const setChannelsData = (items: any[]) => {
    setChannels((prevState) => [
      ...prevState,
      ...items.map((item: any) => ({
        subscriptionId: item.id,
        channelId: item.snippet.resourceId.channelId,
        channelTitle: item.snippet.title,
        description: item.snippet.description,
        thumbnail: item.snippet.thumbnails.default.url,
      })),
    ]);
  };

  const removeChannel = (subscriptionId: string) => {
    setChannels((prevState) =>
      prevState.filter((channel) => channel.subscriptionId !== subscriptionId)
    );
  };

  const onUnsubscribe = async (subscriptionId: string) => {
    try {
      setUnSubsChLoadingId(subscriptionId);
      await axiosInstance.delete(`/subscriptions?id=${subscriptionId}`);
      removeChannel(subscriptionId);
      setUnSubsChLoadingId(null);
    } catch (error) {
      setError("could not unsubscribe");
    }
  };

  const handleScroll = (e: React.UIEvent<HTMLDivElement, UIEvent>) => {
    if (
      e.currentTarget.scrollHeight - Math.round(e.currentTarget.scrollTop) ===
      e.currentTarget.clientHeight
    ) {
      if (loading || nextPageToken.current === null) return;
      setLoading(true);
      fetchChannels();
      setLoading(false);
    }
  };

  return (
    <div
      onScroll={(e) => handleScroll(e)}
      style={{
        height: "90vh",
        overflow: "auto",
      }}
    >
      <>
        {channels.map((channel) => (
          <YTChannelComp
            key={channel.channelId}
            subscriptionId={channel.subscriptionId}
            channelId={channel.channelId}
            channelTitle={channel.channelTitle}
            description={channel.description}
            thumbnail={channel.thumbnail}
            onUnsubscribe={onUnsubscribe}
            unSubsLoading={
              unSubsChLoadingId
                ? unSubsChLoadingId === channel.subscriptionId
                : false
            }
          />
        ))}
        {loading && <Spinner width="15px" />}
      </>
    </div>
  );
}

export default Youtube;
