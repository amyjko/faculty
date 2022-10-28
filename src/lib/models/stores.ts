import { readable } from "svelte/store";
import Profile from "./Profile";

import Amy from "../../profiles/Amy";

export const profile = readable<Profile>(new Profile(Amy));