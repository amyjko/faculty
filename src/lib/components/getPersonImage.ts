import localAsset from './localAsset';

export default function getPersonImage(id: string) {
    return localAsset(`images/headshots/${id}.jpg`);
}
