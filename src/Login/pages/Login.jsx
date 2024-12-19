import { useState, useEffect } from "react";
import SplashScreen from "../components/SplashScreen/SplashScrenn";
import LoginWrapper from "../components/LoginWrapper/LoginWrapper";
import { useAppStore } from "../../core/store";

function Login() {
  const hasVisited = useAppStore((state) => state.hasVisited);
  const setVisited = useAppStore((state) => state.setVisited);
  const [isVisible, setIsVisible] = useState(!hasVisited);

  useEffect(() => {
    if (!hasVisited) {
      const timer = setTimeout(() => {
        setIsVisible(false);
        setVisited();
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [hasVisited, setVisited]);

  return (
    <div className="wrapper">
      {isVisible ? <SplashScreen /> : <LoginWrapper />}
    </div>
  );
}

export default Login;
