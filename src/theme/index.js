import { createContext, useContext, useMemo, useState } from "react";
import { createTheme } from "@mui/material/styles";
import { useSelector } from "react-redux";



export const tokens = (mode) => ({
    ...(mode === "dark" ? {
        primary: {
            100: "#ced1d4",
            200: "#9da3a9",
            300: "#6c757f",
            400: "#3b4754",
            500: "#0a1929",
            600: "#081421",
            700: "#060f19",
            800: "#040a10",
            900: "#020508",
        },

        secondary: {
            100: "#ccd2d8",
            200: "#99a5b1",
            300: "#66788a",
            400: "#334b63",
            500: "#001e3c",
            600: "#001830",
            700: "#001224",
            800: "#000c18",
            900: "#00060c",
        },

        gray: {
            100: "#fafbfc",
            200: "#f5f7f9",
            300: "#f1f3f6",
            400: "#eceff3",
            500: "#e7ebf0",
            600: "#b9bcc0",
            700: "#8b8d90",
            800: "#5c5e60",
            900: "#2e2f30",
        },

        blueAccent: {
            100: "#d7f2fe",
            200: "#afe5fc",
            300: "#88d7fb",
            400: "#60caf9",
            500: "#38bdf8",
            600: "#2d97c6",
            700: "#227195",
            800: "#164c63",
            900: "#0b2632",
        },

        pinkAccent: {
            100: "#f2d0dc",
            200: "#e5a2b9",
            300: "#d97396",
            400: "#cc4573",
            500: "#bf1650",
            600: "#991240",
            700: "#730d30",
            800: "#4c0920",
            900: "#260410",
        },
        btn: {
            100: "#f2d0dc",
            200: "#e5a2b9",
            300: "#d97396",
            400: "#cc4573",
            500: "#bf1650",
            600: "#991240",
            700: "#730d30",
            800: "#4c0920",
            900: "#260410",
        },
        icon: {
            100: "#f2d0dc",
            200: "#e5a2b9",
            300: "#d97396",
            400: "#cc4573",
            500: "#bf1650",
            600: "#991240",
            700: "#730d30",
            800: "#4c0920",
            900: "#260410",
        },
        light: {
            100: "#fafbfc",
            200: "#f5f7f9",
            300: "#f1f3f6",
            400: "#eceff3",
            500: "#e7ebf0",
            600: "#b9bcc0",
            700: "#8b8d90",
            800: "#5c5e60",
            900: "#2e2f30",
        },
        dark: {
            100: "#cfd1d4",
            200: "#9fa2aa",
            300: "#6f747f",
            400: "#3f4555",
            500: "#0f172a",
            600: "#0c1222",
            700: "#090e19",
            800: "#060911",
            900: "#030508"
        },
    } : {
        primary: {
            100: "#fbfbfc",
            200: "#f7f8f9",
            300: "#f2f4f6",
            400: "#eef1f3",
            500: "#eaedf0",
            600: "#bbbec0",
            700: "#8c8e90",
            800: "#5e5f60",
            900: "#2f2f30",
        },

        secondary: {
            100: "#ffffff",
            200: "#ffffff",
            300: "#ffffff",
            400: "#ffffff",
            500: "#ffffff",
            600: "#cccccc",
            700: "#999999",
            800: "#666666",
            900: "#333333",
        },
        gray: {
            100: "#2e2f30",
            200: "#5c5e60",
            300: "#8b8d90",
            400: "#b9bcc0",
            500: "#e7ebf0",
            600: "#eceff3",
            700: "#f1f3f6",
            800: "#f5f7f9",
            900: "#fafbfc",
        },

        blueAccent: {
            100: "#d7f2fe",
            200: "#afe5fc",
            300: "#88d7fb",
            400: "#60caf9",
            500: "#38bdf8",
            600: "#2d97c6",
            700: "#227195",
            800: "#164c63",
            900: "#0b2632",
        },

        pinkAccent: {
            100: "#f2d0dc",
            200: "#e5a2b9",
            300: "#d97396",
            400: "#cc4573",
            500: "#bf1650",
            600: "#991240",
            700: "#730d30",
            800: "#4c0920",
            900: "#260410",
        },
        btn: {
            100: "#d4dfea",
            200: "#a8bed5",
            300: "#7d9ec1",
            400: "#517dac",
            500: "#265d97",
            600: "#1e4a79",
            700: "#17385b",
            800: "#0f253c",
            900: "#08131e",
        },
        icon: {
            100: "#d4dfea",
            200: "#a8bed5",
            300: "#7d9ec1",
            400: "#517dac",
            500: "#265d97",
            600: "#1e4a79",
            700: "#17385b",
            800: "#0f253c",
            900: "#08131e",
        },
        light: {
            100: "#fafbfc",
            200: "#f5f7f9",
            300: "#f1f3f6",
            400: "#eceff3",
            500: "#e7ebf0",
            600: "#b9bcc0",
            700: "#8b8d90",
            800: "#5c5e60",
            900: "#2e2f30",
        },
        dark: {
            100: "#cfd1d4",
            200: "#9fa2aa",
            300: "#6f747f",
            400: "#3f4555",
            500: "#0f172a",
            600: "#0c1222",
            700: "#090e19",
            800: "#060911",
            900: "#030508"
        },
    }),
});


// theme settings

export const themeSettings = (mode) => {
    const colors = tokens(mode);


    return {
        palette: {
            mode: mode,
            ...(mode === "dark" ? {
                // palette values for dark mode
                primary: {
                    main: colors.primary[500],
                },
                secondary: {
                    main: colors.secondary[500],
                },
                background: {
                    default: colors.primary[500],
                },
            } : {
                // palette values for light mode
                primary: {
                    main: colors.primary[100],
                },
                secondary: {
                    main: colors.secondary[500],
                },
                background: {
                    default: colors.primary[500],
                },
            }),
        },
    };
};