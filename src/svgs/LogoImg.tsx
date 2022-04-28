import { CSSProperties, SVGProps } from "react";
import { useLocation } from "react-router-dom";

export function LogoImg(props: SVGProps<SVGSVGElement>) {
  const location = useLocation().pathname.slice(0, 8);

  function changeLighterColor(): CSSProperties {
    let fill: string;

    if (location === "/recipes") {
      fill = "#E07A5F";
    } else {
      fill = "#3880b6";
    }

    return {
      stroke: "none",
      strokeWidth: 1,
      strokeDasharray: "none",
      strokeLinecap: "butt",
      strokeDashoffset: 0,
      strokeLinejoin: "miter",
      strokeMiterlimit: 4,
      fillRule: "nonzero",
      opacity: 1,
      fill,
    };
  }

  function changeDarkerColor(): CSSProperties {
    let fill: string;

    if (location === "/recipes") {
      fill = "#C14725";
    } else {
      fill = "#1e6091";
    }

    return {
      stroke: "none",
      strokeWidth: 1,
      strokeDasharray: "none",
      strokeLinecap: "butt",
      strokeDashoffset: 0,
      strokeLinejoin: "miter",
      strokeMiterlimit: 4,
      fillRule: "nonzero",
      opacity: 1,
      fill,
    };
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="2em"
      height="2em"
      viewBox="0 0 1000 1000"
      xmlSpace="preserve"
      {...props}
    >
      <rect width="100%" height="100%" fill="rgba(255,255,255,0)" />
      <g>
        <path
          style={changeLighterColor()}
          transform="matrix(-1.9257 0 0 1.9257 992.714 25.194)"
          d="M486.729 256.88c-.1.1.324 0-1.27 0-16.802 0-28.416 15.581-22.56 30.1-2.82 2.972 9.349-9.192-196.45 195.53a14.993 14.993 0 0 1-21.16 0C39.553 277.84 51.688 289.982 48.84 286.98c6.088-15.095-6.639-30.907-23.81-30.069-.01-.011-.01-.021-.02-.03C7.979 230.27-.57 201.4.03 171.77 2.355 55.475 144.268-30.274 255.87 67.34c111.539-97.56 253.514-11.926 255.84 104.43.6 29.63-7.95 58.5-24.981 85.11z"
        />
        <path
          style={changeDarkerColor()}
          transform="matrix(-1.9257 0 0 1.9257 992.709 25.194)"
          d="M486.729 256.88c-.1.1.324 0-1.27 0-16.802 0-28.416 15.581-22.56 30.1-2.82 2.972 9.349-9.192-196.45 195.53a14.964 14.964 0 0 1-10.58 4.37V67.34c69.474-60.766 156.156-53.005 211.37 2.19 49.097 49.097 60.413 123.407 19.49 187.35z"
        />
        <path
          style={{
            stroke: "none",
            strokeWidth: 1,
            strokeDasharray: "none",
            strokeLinecap: "butt",
            strokeDashoffset: 0,
            strokeLinejoin: "miter",
            strokeMiterlimit: 4,
            fill: "#f9fced",
            fillRule: "nonzero",
            opacity: 1,
          }}
          transform="matrix(-1.9257 0 0 1.9257 992.713 25.197)"
          d="M486.729 256.88c-6.63 10.37-14.55 20.4-23.73 30H351.87c-5.52 0-10.59-3.03-13.21-7.89l-41.93-77.88-59.3 125.19c-5.021 10.599-19.863 11.635-26.21 1.63l-42.97-67.52-11.52 19.189a14.985 14.985 0 0 1-12.86 7.28H48.74c-9.18-9.6-17.1-19.63-23.73-30h110.37l19.63-32.72c5.676-9.482 19.479-9.821 25.51-.33l41.42 65.08 60.37-127.45c5.285-11.113 20.936-11.491 26.77-.69l51.75 96.11h125.899z"
        />
        <path
          style={{
            stroke: "none",
            strokeWidth: 1,
            strokeDasharray: "none",
            strokeLinecap: "butt",
            strokeDashoffset: 0,
            strokeLinejoin: "miter",
            strokeMiterlimit: 4,
            fill: "#ebefd9",
            fillRule: "nonzero",
            opacity: 1,
          }}
          transform="matrix(-1.9257 0 0 1.9257 992.709 25.197)"
          d="M309.08 160.77c-5.823-10.779-21.476-10.442-26.77.69l-26.44 55.818v70.093l40.86-86.261 41.93 77.88a15.008 15.008 0 0 0 13.21 7.89H463c9.18-9.6 17.1-19.63 23.73-30h-125.9z"
        />
      </g>
    </svg>
  );
}
