import { asset } from '$app/paths';
import type { AssetPath } from '$app/types';

/** Resolves a path to a file in static/, such as one from the data, which may start with a slash. */
export default function localAsset(path: string) {
    return asset(path.replace(/^\//, '') as AssetPath);
}
