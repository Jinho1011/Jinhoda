import React, { useContext, useEffect, useState } from 'react';
import { DefaultTheme, ThemeProvider } from 'styled-components';

import { darkTheme, lightTheme } from '@/assets/styles/theme';
import DarkThemeContext from '@/context/DarkTheme';

const StyledThemeProvider = ({ children }: { children: React.ReactNode }) => {
    const { isDarkMode } = useContext(DarkThemeContext);
    const [theme, setTheme] = useState<null | DefaultTheme>(null);

    useEffect(() => {
        setTheme(isDarkMode ? darkTheme : lightTheme);
    }, [isDarkMode]);

    if (!theme) {
        return <></>;
    }

    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default StyledThemeProvider;
