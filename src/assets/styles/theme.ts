import { DefaultTheme } from 'styled-components';

const color = {
    light: {
        background: '#ffffff',
        blockquote: '#f3f4f5',
        foreground: '#37363b',
        primary: '#3182f6',
        text: '#4e5968',
        subText: '#8b95a1',
        heading: '#191f28',
        subHeading: '#333d4b'
    },
    dark: {
        background: '#18171C',
        blockquote: '#24282c',
        foreground: '#fefefe',
        primary: '#3182f6',
        text: '#fafafa',
        subText: '#e1e1e1',
        heading: '#ffffff',
        subHeading: '#f7f7f7'
    }
};

const device = {
    mobile: `screen and (max-width: 700px)`
};

const lightTheme: DefaultTheme = {
    color: color.light,
    device
};

const darkTheme: DefaultTheme = {
    color: color.dark,
    device
};

export type ColorType = typeof color.light;
export type DeviceType = typeof device;

export { lightTheme, darkTheme };
