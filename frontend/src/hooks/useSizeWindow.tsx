import { useEffect, useState } from "react";

export const useSizeWindow = () => {
  const [width, setWidth] = useState<number>(window.innerWidth);
  const [height, setHeight] = useState<number>(window.innerHeight);

  useEffect(() => {
    const resizeWidth = () => {
      setWidth(innerWidth);
    };

    const resizeHeight = () => {
      setHeight(window.innerHeight);
    };

    window.addEventListener("resize", resizeWidth);
    window.addEventListener("resize", resizeHeight);

    return () => {
      window.removeEventListener("resize", resizeWidth);
      window.removeEventListener("resize", resizeHeight);
    }
  }, [width, height])

  return {width, height};
}