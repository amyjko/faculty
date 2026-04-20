export type Patent = {
    title: string;
    year: string;
    number: string;
    inventors: string;
};

export const Patents: Patent[] = [
    {
        title: 'Context- and Activity-Aware Content Selection',
        year: '2017',
        number: 'U.S. Patent No. 9,727,561',
        inventors: 'Amy J. Ko and Victor Medina',
    },
    {
        title: 'Systems and Methods for Selection-Based Contextual Help Retrieval',
        year: '2012',
        number: 'U.S. Patent No. 9,811,583',
        inventors: 'Parmit K. Chilana, Amy J. Ko, and Wobbrock, J.O.',
    },
    {
        title: 'A Debugging Interface',
        year: '2010',
        number: 'U.S. Patent No. 7,735,066',
        inventors: 'Amy J. Ko and Brad A. Myers',
    },
];
