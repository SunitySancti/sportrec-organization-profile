// Sizes:
export const lengthUnit = 20;

export const centerize = `
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`

// Colors:
export const grayscale_00 = '#FFFFFF';
export const grayscale_10 = '#F8F8F9';
export const grayscale_20 = '#EEF0F7';
export const grayscale_30 = '#CCCFDA';
export const grayscale_40 = '#9395B8';
export const grayscale_50 = '#7B7EA5';
export const grayscale_60 = '#353754';
export const grayscale_70 = '#06082C';
export const grayscale_80 = '#03051C';

export const green_1 = '#31C16B';

// Shadows:
export const scrollOverlay = `0 6px 6px 0 rgba(135, 128, 128, 0.09), 0 11px 11px 0 rgba(0,0,0,.04)`;

//fonts

export const Inter_SB_12pt = `600 12px/18px 'Inter', sans-serif`;
export const Inter_SB_14pt = `548 14px/20px 'Inter', sans-serif`;
export const Inter_SB_20pt = `600 20px/26px 'Inter', sans-serif`;
export const Inter_SB_30pt = `600 30px/32px 'Inter', sans-serif`;

export const typo12 = (color = 'unset') => `
    font: 600 12px/18px 'Inter', sans-serif;
    letter-spacing: -0.1px;
    color: ${color};
    text-align: left;
`
export const typo14 = (color = 'unset') => `
    font: 548 14px/20px 'Inter', sans-serif;
    letter-spacing: -0.005em;
    color: ${color};
`
export const typo16 = (color = 'unset') => `
    font: 548 16px/22px 'Inter', sans-serif;
    letter-spacing: -0.005em;
    color: ${color};
`
export const typo30 = `
    font: 600 30px/32px 'Inter', sans-serif;
    letter-spacing: -0.01em;
    color: ${ grayscale_70 };
`
