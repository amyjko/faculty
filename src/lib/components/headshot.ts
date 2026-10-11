import localAsset from './localAsset';

/** The sizes of my headshot, so browsers can pick the smallest that looks sharp. */
export const headshotSrcset = [
    ['images/headshots/ajko-320.jpg', '320w'],
    ['images/headshots/ajko.jpg', '640w'],
    ['images/headshots/ajko-960.jpg', '960w'],
]
    .map(([path, width]) => `${localAsset(path)} ${width}`)
    .join(', ');
