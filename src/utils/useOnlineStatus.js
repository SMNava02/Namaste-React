import { useState, useEffect } from "react";

const useOnlineStatus = () => {
  const [onlineStatus, setOnlineStatus] = useState(true);
  console.log("useOnlineStatus hook fn");

  useEffect(() => {
    console.log("Use effect: online status");
    window.addEventListener(
      "offline",
      () => {
        console.log("Use effect: Offline event callback");
        setOnlineStatus(false);
      },
      { once: true }
    );

    window.addEventListener(
      "online",
      () => {
        console.log("Use effect: Offline event callback");
        setOnlineStatus(true);
      },
      { once: true }
    );
  }, []);

  return onlineStatus;
};

export default useOnlineStatus;
