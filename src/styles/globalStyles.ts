import { globalCss } from "../stitches.config";

export const globalStyles = globalCss({
  html: {
    "@max1080px": {
      fontSize: "93.75%",
    },

    "@max720px": {
      fontSize: "87.5%%",
    },
  },

  body: {
    width: "100vw",
    height: "100vh",
    background: `$ivory url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1000' height='450' preserveAspectRatio='none' viewBox='0 0 1000 450'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1034%26quot%3b)' fill='none'%3e%3cpath d='M462.592%2c217.534C503.863%2c218.91%2c550.945%2c222.102%2c574.361%2c188.089C600.009%2c150.834%2c592.966%2c100.511%2c569.969%2c61.564C547.376%2c23.301%2c507.023%2c-1.772%2c462.592%2c-1.202C419.083%2c-0.643%2c380.748%2c26.075%2c359.886%2c64.261C339.876%2c100.888%2c339.792%2c146.371%2c363.026%2c181.043C384.115%2c212.515%2c424.728%2c216.272%2c462.592%2c217.534' fill='rgba(111%2c 195%2c 171%2c 0.19)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M318.766%2c304.99C348.178%2c306.13%2c378.44%2c294.205%2c392.575%2c268.387C406.284%2c243.347%2c396.941%2c213.596%2c382.178%2c189.163C368.029%2c165.747%2c346.089%2c147.627%2c318.766%2c146.23C288.875%2c144.702%2c257.507%2c155.851%2c243.034%2c182.049C228.912%2c207.613%2c238.93%2c238.158%2c254.247%2c263.024C268.669%2c286.436%2c291.289%2c303.925%2c318.766%2c304.99' fill='rgba(111%2c 195%2c 171%2c 0.19)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M205.47%2c448.92C244.775%2c450.022%2c282.673%2c433.249%2c304.24%2c400.372C328.156%2c363.913%2c338.662%2c316.796%2c316.942%2c278.988C295.159%2c241.07%2c249.196%2c228.985%2c205.47%2c228.439C160.531%2c227.878%2c110.36%2c236.565%2c89.074%2c276.146C68.443%2c314.508%2c91.511%2c358.966%2c115.848%2c395.091C136.717%2c426.068%2c168.134%2c447.873%2c205.47%2c448.92' fill='rgba(111%2c 195%2c 171%2c 0.19)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M1056.708%2c654.649C1102.089%2c654.628%2c1132.665%2c613.081%2c1154.066%2c573.063C1173.968%2c535.849%2c1182.098%2c493.095%2c1163.318%2c455.302C1142.301%2c413.009%2c1103.906%2c378.79%2c1056.708%2c377.144C1006.964%2c375.41%2c958.565%2c402.826%2c936.395%2c447.39C916.056%2c488.273%2c936.269%2c533.662%2c959.194%2c573.153C981.988%2c612.42%2c1011.305%2c654.67%2c1056.708%2c654.649' fill='rgba(111%2c 195%2c 171%2c 0.19)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M1045.813%2c334.183C1080.303%2c335.276%2c1115.321%2c322.365%2c1133.071%2c292.773C1151.274%2c262.426%2c1148.399%2c224.019%2c1130.039%2c193.766C1112.358%2c164.632%2c1079.892%2c148.896%2c1045.813%2c148.993C1011.914%2c149.089%2c979.072%2c164.72%2c962.412%2c194.243C946.007%2c223.314%2c950.548%2c258.855%2c967.637%2c287.529C984.288%2c315.468%2c1013.304%2c333.153%2c1045.813%2c334.183' fill='rgba(111%2c 195%2c 171%2c 0.19)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M590.932%2c244.084C623.214%2c245.386%2c656.664%2c230.82%2c670.871%2c201.803C683.963%2c175.063%2c667.34%2c145.879%2c651.292%2c120.801C636.917%2c98.339%2c617.593%2c77.491%2c590.932%2c76.889C563.385%2c76.267%2c539.561%2c94.175%2c525.655%2c117.963C511.604%2c141.998%2c508.636%2c171.05%2c521.433%2c195.775C535.333%2c222.63%2c560.718%2c242.865%2c590.932%2c244.084' fill='rgba(111%2c 195%2c 171%2c 0.19)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M613.143%2c538.628C653.117%2c536.242%2c676.428%2c496.827%2c693.713%2c460.705C708.215%2c430.4%2c710.248%2c396.832%2c695.422%2c366.684C678.409%2c332.091%2c651.573%2c299.918%2c613.143%2c296.875C569.887%2c293.45%2c526.141%2c313.854%2c504.711%2c351.584C483.501%2c388.926%2c492.457%2c434.278%2c513.995%2c471.431C535.456%2c508.451%2c570.428%2c541.177%2c613.143%2c538.628' fill='rgba(111%2c 195%2c 171%2c 0.19)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M401.736%2c172.282C437.856%2c171.931%2c467.826%2c145.715%2c483.909%2c113.371C498.324%2c84.381%2c492.508%2c50.901%2c475.913%2c23.102C459.794%2c-3.899%2c433.18%2c-23.886%2c401.736%2c-24.279C369.647%2c-24.68%2c340.994%2c-6.187%2c324.278%2c21.208C306.768%2c49.903%2c301.412%2c85.082%2c316.749%2c114.995C333.455%2c147.579%2c365.121%2c172.638%2c401.736%2c172.282' fill='rgba(111%2c 195%2c 171%2c 0.19)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M109.237%2c291.794C140.455%2c292.006%2c169.888%2c276.972%2c186.151%2c250.323C203.126%2c222.507%2c207.305%2c186.908%2c190.155%2c159.199C173.714%2c132.636%2c140.412%2c124.04%2c109.237%2c126.057C81.654%2c127.841%2c59.012%2c145.012%2c44.624%2c168.613C29.494%2c193.432%2c20.61%2c223.549%2c34.112%2c249.29C48.436%2c276.598%2c78.401%2c291.584%2c109.237%2c291.794' fill='rgba(111%2c 195%2c 171%2c 0.19)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M825.007%2c478.723C843.51%2c477.901%2c861.492%2c469.878%2c870.367%2c453.622C878.926%2c437.944%2c874.646%2c419.398%2c865.897%2c403.826C856.924%2c387.856%2c843.325%2c372.9%2c825.007%2c372.889C806.675%2c372.878%2c793.715%2c388.21%2c784.034%2c403.777C773.561%2c420.618%2c762.574%2c440.586%2c772.087%2c457.987C781.828%2c475.804%2c804.721%2c479.624%2c825.007%2c478.723' fill='rgba(111%2c 195%2c 171%2c 0.19)' class='triangle-float3'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1034'%3e%3crect width='1000' height='450' fill='white'%3e%3c/rect%3e%3c/mask%3e%3cstyle%3e %40keyframes float1 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(-10px%2c 0)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float1 %7b animation: float1 5s infinite%3b %7d %40keyframes float2 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(-5px%2c -5px)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float2 %7b animation: float2 4s infinite%3b %7d %40keyframes float3 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(0%2c -10px)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float3 %7b animation: float3 6s infinite%3b %7d %3c/style%3e%3c/defs%3e%3c/svg%3e") no-repeat fixed top`,
    backgroundSize: "cover",
    overflowY: "auto",
  },

  "*": {
    padding: 0,
    margin: 0,
    boxSizing: "border-box",
    fontFamily: "'Inter', sans-serif",
  },

  "#root": {
    width: "100%",
    height: "100%",
    flexUtil: {
      fFlow: "row no-wrap",
      fAlignItems: "",
      fJustifyContent: "",
    },
  },

  button: {
    border: 0,
    cursor: "pointer",
  },

  a: {
    color: "inherit",
    textDecoration: "none",
  },

  ".modal-overlay": {
    position: "fixed",
    inset: 0,
    backgroundColor: "$blackb3",
    overflowY: "auto",
  },

  ".modal-content": {
    position: "absolute",
    inset: "50% 50%",
    transform: "translate(-50%, -50%)",
    width: "90vw",
    height: "fit-content",
    maxWidth: "max-content",
    background: `$greenSheen url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2343b5ad' fill-opacity='0.49'%3E%3Cpath d='M50 50c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10zM10 10c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10S0 25.523 0 20s4.477-10 10-10zm10 8c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm40 40c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E") repeat fixed top`,
    color: "$lapisLazulli",
    overflowY: "auto",
    WebkitOverflowScrolling: "touch",
    borderRadius: "20px",
    border: "4px solid",
    outline: "none",
    padding: "20px",

    flexUtil: {
      fFlow: "column",
      fAlignItems: "center",
      fJustifyContent: "space-between",
    },
    gap: "20px",

    "@min1440px": {
      gap: "1vw",
      borderRadius: "1vw",
    },

    "@max768px": {
      gap: "10px",
    },
  },
});
