import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],

  plugins: [],
  darkMode: "class", // or 'media' or 'class'

  theme: {
    screens: {
      xs: { max: "768px" }, // Mobile
      sm: { min: "769px", max: "1279px" }, //1024
      md: { min: "1280px", max: "1599px" }, //1366
      lg: { min: "1600px", max: "1919px" }, //1600
      xl: { min: "1920px" }, //1920
      mobile: { max: "768px" },
      tablet: { min: "769px", max: "1023px" },
      laptop: { min: "1024px", max: "1279px" },
      desktop: { min: "1280px", max: "1365px" },
      "desktop-lg": { min: "1366px", max: "1599px" },
      "desktop-xl": { min: "1600px", max: "1919px" },
      "desktop-2xl": { min: "1920px" },
    },
    boxShadow: {
      "four-item-card": "0px 0px 5px rgba(0, 0, 0, 0.2)",
      "product-card": "0px 0px 4px rgba(0, 0, 0, 0.15)",
      0: "0 0 #0000",
      tabs: "0px 8.33512px 8.33512px rgba(0, 0, 0, 0.08)",
      checkbox: "inset 0px 6px 8px 3px rgba(0, 0, 0, 0.1)",
      profile: "0 3px 15px rgb(0 0 0/15%)",
    },
    extend: {
      fontFamily: {
        montserrat: ["Montserrat-Regular"],
        montserratLight: ["Montserrat-Light"],
        montserratBold: ["Montserrat-Bold"],
        montserratMedium: ["Montserrat-Medium"],
        montserratRegular: ["Montserrat-Regular"],
        montserratSemiBold: ["Montserrat-SemiBold"],
        montserratThin: ["Montserrat-Thin"],
        interLight: ["Inter-Light"],
        interBold: ["Inter-Bold"],
        interMedium: ["Inter-Medium"],
        interRegular: ["Inter-Regular"],
        interSemiBold: ["Inter-SemiBold"],
        interThin: ["Inter-Thin"],
        robotoRegular: ["Roboto-Regular"],
        robotoMedium: ["Roboto-Medium"],
        robotoBold: ["Roboto-Bold"],
        openSansBold: ["OpenSans-Bold"],
        openSansRegular: ["OpenSans-Regular"],
        openSansSemiBold: ["OpenSans-SemiBold"],
        openSansMedium: ["OpenSans-Medium"],
        openSansLight: ["OpenSans-Light"],
      },
      colors: {
        snapmint_gray: {
          DEFAULT: "#014751",
        },
        primaryBlue: "#0347F7",
        gray: "#7F7F7F",
        placeholder_gray: "#CCCCCC",
        modal_black: "#292D39",

        white: "#FFFFFF",
        sonicSilver: "#757575",
        cyanBlue: "#3d494b",
        gray63: "#A1A1A1",
        aliceBlue: "#effbff",
        lightGrey: "#EBEBEB",
        mediumGrey: "#ACACAC",
        normalGrey: "#888888",
        alBlue: "#f7fdff",
        headerBlue: "#014751",

        twilightBlue: "#edfbff",
        lightBlue: "#70C0CC",
        green: "#AFE137",
        lightCyan: "#E6FAFF",
        "black-100": "#191919",
        black: "#000000",
        cBlue: "#0d6b78",
        backgrondGray: "#DFE1ED",
        gradientTop: "#ECECEC10",
        gradientMid: "#ECECEC22",
        gradientBottom: "#DFE1ED",
        backgroundBlur: "rgb(0, 0, 0, 0.6)",
        lightYellow: "#AFE137",
        inputActiveColor: "#70C1CC",
        inputErrorColor: "#B75E5E",
        checkboxActiveColor: "#70C1CC",
        darkGrayishCyan: "#657173",
        headerBgColor: "#F2FBFD",
        dGray: "#F2F2F2",
        primaryText: "#515D5F",
        lBlue: "#fcfeff",
        pelorous: "#0e4b5a",
        paleBlue: "#f0f8fa",
        flashGreen: "#afe137",
        steelBlue: "#70c1cc",
        pBlue: "#eafbff",
        darkSlate: "#90A3A7",
        darkGray: "#58595b",
        powderBlueDark: "#B3DFE5",
        brightGray: "#58595B",
        limGrayB: "#515d5f",
        bluishGray: "#90A3A7",
        deepBlue: "#024853",
        dodgerBlue: "#2782c6",
        powderBlue: "#b6e0e6",
        bGray: "#535d5f",
        lightGreen: "#2DBECD",
        lightGray: "#90A4A7",
        darkCyan: "#3D494B",
        borderGray: "#DEDEDE",
        primaryGreen: "#368995",
        skyBlue: "#B3DFE5",
        lGreen: "#008000",
        greenDark: "#00BC62",
        borderLightGray: "#828282",
      },
      height: {
        72: "72rem" /*1142PX xl*/,
        60: "60rem" /*954PX lg*/,
        58: "58rem" /*954PX lg*/,
        56: "56rem" /*954PX lg*/,
        54: "54rem" /*848PX md*/,
        52: "52rem" /*954PX lg*/,
        50: "50rem" /*954PX lg*/,
        46: "46rem" /*848PX md*/,
        10: "10rem" /*168PX sm*/,
      },
      spacing: {
        28: "28rem" /*232PX sm*/,
      },
      lineHeight: {
        895: "0.895rem",
      },
      fontSize: {
        xxxs: ["8.41px", { lineHeight: "10.25px" }],
        xxs: ["9.4px", { lineHeight: "11.45px" }],
        xs: ["10.72px", { lineHeight: "13.07px" }],
        tiny: ["11.2px", { lineHeight: "13.65px" }],
        sm: ["11.98px", { lineHeight: "14.63px" }],
        base: ["13.33px", { lineHeight: "16.24px" }],
        lg: ["14.87px", { lineHeight: "17.07px" }],
        xl: ["15.16px", { lineHeight: "18.48px" }],
        "2xl": ["16px", { lineHeight: "19.5px" }],
        "3xl": ["17.24px", { lineHeight: "21.33px" }],
        "4xl": ["18.95px", { lineHeight: "23.1px" }],
        "5xl": ["19.18px", { lineHeight: "23.37px" }],
        "6xl": ["20px", { lineHeight: "24.38px" }],
        "7xl": ["21.59px", { lineHeight: "23.62px" }],
        "8xl": ["22.99px", { lineHeight: "28.02px" }],
        "9xl": ["25px", { lineHeight: "30.48px" }],
        "10xl": ["40px", { lineHeight: "45.48px" }],
      },
      boxShadow: {
        "1xl": "0px 0px 2.80201px rgba(0, 0, 0, 0.15)",
        "2xl": "0px 0px 21.9915px rgba(0, 0, 0, 0.12)",
      },
    },
  },
  variants: {
    extend: {},
  },
  important: true,
};
export default config;
