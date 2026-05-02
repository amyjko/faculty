import Travel from './Travel';
import type ProfileSpec from '../lib/models/ProfileSpec';
import Classes from './Classes';
import { Commitments } from './Commitments';
import { Degrees } from './Degrees';
import { Discoveries } from './Discoveries';
import { DoctoralCommittees } from './DoctoralCommittees';
import { EditingRoles } from './EditingRoles';
import { FundingList } from './Funding';
import { Impacts } from './Impact';
import { Jobs } from './Jobs';
import { Panels } from './Panels';
import { Patents } from './Patents';
import { People } from './People';
import { Posts } from './Posts';
import { Publications } from './Pubs';
import { Recognitions } from './Recognitions';
import { ReviewingRoles } from './ReviewingRoles';
import { ServiceRoles } from './ServiceRoles';
import { Sources } from './Sources';
import Talks from './Talks';
import { Years } from './Years';

export const Amy: ProfileSpec = {
    announcement:
        "I will likely recruit an iSchool or CSE Ph.D. student this Autumn 2026, focused on critical, liberatory CS and AI education. Have questions that aren't answered here? Write me.",
    sources: Sources,
    pubs: Publications,
    talks: Talks,
    people: People,
    discoveries: Discoveries,
    posts: Posts,
    impacts: Impacts,
    degrees: Degrees,
    patents: Patents,
    jobs: Jobs,
    recognitions: Recognitions,
    editing: EditingRoles,
    reviewing: ReviewingRoles,
    doctoralCommittees: DoctoralCommittees,
    service: ServiceRoles,
    funding: FundingList,
    travel: Travel,
    panels: Panels,
    classes: Classes,
    commitments: Commitments,
    years: Years,
};

export default Amy;
