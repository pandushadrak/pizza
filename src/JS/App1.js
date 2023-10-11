import { useState, useEffect } from "react";

function App1() {
  const [isOnline, setIsOnline] = useState(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const randomStatus = Math.random() < 0.5;
      setIsOnline(randomStatus);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  if (isOnline === null) {
    return "Loading.....";
  }

  return isOnline ? "Online" : "Offline";
}

export default App1;
