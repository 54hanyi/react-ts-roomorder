/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "576px", // 對應Bootstrap的small
        md: "768px", // 對應Bootstrap的medium
        lg: "992px", // 對應Bootstrap的large
        xl: "1200px", // 對應Bootstrap的extra-large
        xxl: "1400px",
      },
      fontFamily: {
        noto: ["Noto Serif TC", "serif"],
      },
      colors: {
        primary: {
          120: "#7B6651",
          100: "#BF9D7D",
          80: "#D0B79F",
          60: "#E1D1C2",
          40: "#F1EAE4",
          10: "#F7F2EE",
          tint: "#FAF7F5",
        },
        success: {
          120: "#299F65",
          100: "#52DD7E",
          20: "#BCFBBD",
          10: "#E8FEE7",
        },
        info: {
          120: "#1D66AC",
          100: "#3BADEF",
          20: "#B1EFFD",
          10: "#E6FBFE",
        },
        alert: {
          120: "#C22538",
          100: "#DA3E51",
          20: "#F5CCD1",
          10: "#FDECEF",
        },
        neutral: {
          120: "#140F0A",
          100: "#000000",
          80: "#4B4B4B",
          60: "#909090",
          40: "#ECECEC",
          10: "#F9F9F9",
          0: "#FFFFFF",
        },
      },
      fontSize: {
        display: ["100px", { lineHeight: "1.2", fontWeight: "700" }], // Display Heading
        h1: ["48px", { lineHeight: "1.2", fontWeight: "700" }], // H1 Heading
        h2: ["40px", { lineHeight: "1.2", fontWeight: "700" }], // H2 Heading
        h3: ["32px", { lineHeight: "1.2", fontWeight: "700" }], // H3 Heading
        h4: ["28px", { lineHeight: "1.2", fontWeight: "700" }], // H4 Heading
        h5: ["24px", { lineHeight: "1.2", fontWeight: "700" }], // H5 Heading
        h6: ["20px", { lineHeight: "1.2", fontWeight: "700" }], // H6 Heading
        title: ["16px", { lineHeight: "1.2", fontWeight: "700" }], // Title
        subtitle: ["14px", { lineHeight: "1.2", fontWeight: "700" }], // Subtitle
        body: ["16px", { lineHeight: "1.5", fontWeight: "200" }], // Body text
        body2: ["14px", { lineHeight: "1.5", fontWeight: "400" }], // Smaller body text
        tiny: ["12px", { lineHeight: "1.5", fontWeight: "400" }], // Tiny text
      },
      letterSpacing: {
        heading: "5%", // 標題字母間距
        normal: "2%", // 正文字母間距
      },
      lineHeight: {
        heading: "120%", // 標題行高
        normal: "150%", // 正文行高
      },
      height: {
        13: "3.25rem",
        18: "4.5rem",
        96: "6rem",
        264: "16.5rem",
        500: "31.25rem",
        576: "36rem",
        880: "55rem",
        1056: "66rem",
        2400: "150rem",
      },
      width: {
        432: "27rem",
        480: "30rem",
        752: "47rem",
        800: "50rem",
        1024: "63rem",
      },
      gap: {
        50: "12.5rem",
      },
      borderRadius: {
        80: "5rem",
      },
    },
  },
  plugins: [],
};
