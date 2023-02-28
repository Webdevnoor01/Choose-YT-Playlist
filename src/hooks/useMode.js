// From React
import { useMemo } from "react";

// From Redux
import { useSelector } from "react-redux";

// From MUI
import { createTheme } from "@mui/material/styles";

// From Our App
import { themeSettings } from "../theme";

export const useMode = () => {
    const { value: mode } = useSelector((state) => state.mode)

    const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
    return {
        theme,
        mode,
    };
};