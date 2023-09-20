import { useEffect, useState } from "react";

export function setTheme() {
  if (typeof window !== "undefined") {
    if (!window.localStorage.getItem("theme")) {
      window.localStorage.setItem("theme", "dark");
    }
  }
}

function setViewportProperty(doc: any) {
  let customViewportCorrectionVariable = "vh";
  let prevClientHeight: string;
  let customVar = "--" + (customViewportCorrectionVariable || "vh");
  function handleResize() {
    var clientHeight = doc.clientHeight;
    if (clientHeight === prevClientHeight) return;
    requestAnimationFrame(function updateViewportHeight() {
      doc.style.setProperty(customVar, clientHeight * 0.01 + "px");
      prevClientHeight = clientHeight;
    });
  }
  handleResize();
  return handleResize;
}

export function setFixedHeight() {
  if (typeof window !== "undefined") {
    window.addEventListener(
      "resize",
      setViewportProperty(document.documentElement)
    );
  }
}
/** Get window size */
export function useWindowSize() {
  /** Window */
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });
  useEffect(() => {
    function handleResize() {
      // console.log('here', window.innerWidth, window.innerHeight);
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize);

      handleResize();

      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);
  return windowSize;
}

export class Theme {
  public static LIGHT = "light";
  public static DARK = "dark";
}

export const prefix = process.env.NEXT_PUBLIC_BASE_PATH || '';
export const isProd = process.env.NODE_ENV === "production";
