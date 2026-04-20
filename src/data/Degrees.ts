export type Degree = {
    institution: string;
    degree: string;
    start: number;
    end: number;
    thesis: string;
    committee: string;
};

export const Degrees: Degree[] = [
    {
        institution: 'Carnegie Mellon University',
        degree: 'Doctorate in Human-Computer Interaction',
        start: 2002,
        end: 2008,
        thesis: 'Thesis: Asking and Answering Questions about the Causes of Software Behaviors',
        committee:
            'Brad Myers (CMU, Chair), Bonnie John (CMU), Jonathan Aldrich (CMU), Gail Murphy (UBC)',
    },
    {
        institution: 'Oregon State University',
        degree: 'Honors Bachelor of Science in Computer Science and Psychology',
        start: 1998,
        end: 2002,
        thesis: 'Thesis: Individual Differences in Programming, Testing, and Debugging in a Statistical End-User Programming Environment',
        committee:
            'Margaret Burnett (Computer Science) and Bob Uttl (Psychology)',
    },
];
