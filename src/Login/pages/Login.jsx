import { useState, useEffect } from "react";
import SplashScreen from "../components/SplashScreen/SplashScrenn";
import LoginWrapper from "../components/LoginWrapper/LoginWrapper";

function Login() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="wrapper">
      {isVisible ? <SplashScreen /> : <LoginWrapper />}
    </div>
  );
}

export default Login;
