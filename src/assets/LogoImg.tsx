import { SVGProps } from "react";

export function LogoImg(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={50}
      height={50}
      viewBox="0 0 48 48"
      xmlSpace="preserve"
      {...props}
    >
      <g
        xmlns="http://www.w3.org/2000/svg"
        data-name="Heart Rate"
        fill="#1E6091"
      >
        <path
          d="M6.052 26h9.271l3.748-9.372a1 1 0 0 1 1.89.097l3.197 11.188 2.913-7.285a1 1 0 0 1 1.877.056L30.721 26h11.227l.568-.547A11.845 11.845 0 0 0 34.263 5.09h-.02a11.613 11.613 0 0 0-9.162 4.439q-.564.714-1.081 1.488-.515-.771-1.081-1.488a11.613 11.613 0 0 0-9.161-4.439h-.02a11.845 11.845 0 0 0-8.254 20.363Z"
          data-original="#000000"
        />
        <path
          d="M30 28a.999.999 0 0 1-.948-.684l-1.137-3.41-2.986 7.466A1 1 0 0 1 24 32c-.017 0-.034 0-.05-.002a1 1 0 0 1-.912-.723l-3.196-11.188-2.913 7.285A1 1 0 0 1 16 28H8.127l15.179 14.63a1.001 1.001 0 0 0 1.388 0L39.873 28Z"
          data-original="#000000"
        />
      </g>
    </svg>
  );
}
