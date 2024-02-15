import { DefaultTheme } from 'styled-components';

export const colors = {
    //GrayScale
    white: '#FFFFFF',
    white_10: '#F4F4F4',
    white_20: '#C6C6C6',
    white_30: '#AEAEB2',
    white_40: '#8E8E93',
    white_50: '#636366',
    white_60: '#48484A',
    white_70: '#363639',
    white_80: '#2C2C2E',
    white_90: '#1C1C1E',
    black: '#000000',

    //Primary
    //Blue Light
    blue_light_10: '#EEE7FD',
    blue_light_20: '#D2C3F9',
    blue_light_30: '#B29BF7',
    blue_light_40: '#9170F7',
    blue_light_50: '#744DF5',

    //Red Light
    red_light_30: '#DA1E28',
    red_light_40: '#BA1B23',
    red_light_50: '#750E13',

    //Green Light
    green_light_30: '#34C759',
    green_light_40: '#22A343',
};

export type ColorsTypes = typeof colors;

interface FontStyle {
    fontSize: string;
    fontWeight: string;
    lineHeight: string;
}

export const fontStyles: Record<string, FontStyle> = {
    h1: {
        fontSize: '2.4rem',
        fontWeight: 'bold',
        lineHeight: '31px',
    },

    h2: {
        fontSize: '2.4rem',
        fontWeight: 'normal',
        lineHeight: '31px',
    },

    h3: {
        fontSize: '1.8rem',
        fontWeight: 'bold',
        lineHeight: '24px',
    },

    h4: {
        fontSize: '1.8rem',
        fontWeight: 'semi-bold',
        lineHeight: '24px',
    },
    h5: {
        fontSize: '1.6rem',
        fontWeight: 'semi-bold',
        lineHeight: '21px',
    },
    h6: {
        fontSize: '1.4rem',
        fontWeight: 'semi-bold',
        lineHeight: '20px',
    },
    body: {
        fontSize: '1.6rem',
        fontWeight: 'normal',
        lineHeight: '21px',
    },
    caption1: {
        fontSize: '1.4rem',
        fontWeight: 'normal',
        lineHeight: '22px',
    },
    caption2: {
        fontSize: '1.3rem',
        fontWeight: 'normal',
        lineHeight: '20px',
    },
};

export type FontStylesTypes = typeof fontStyles;

export const theme: DefaultTheme = {
    colors,
    fontStyles,
};
