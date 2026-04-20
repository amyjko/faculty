export type Source = {
    name: string;
    short: string;
};

export const Sources: Record<string, Source> = {
    aera: {
        name: 'American Education Research Association',
        short: 'AERA',
    },
    cacm: {
        name: 'Communications of the ACM (CACM)',
        short: 'CACM',
    },
    cse: {
        name: 'Computer Science Education',
        short: 'CSE',
    },
    icer: {
        name: 'ACM International Computing Education Research Conference (ICER)',
        short: 'ICER',
    },
    idc: {
        name: 'ACM Interaction Design for Children',
        short: 'IDC',
    },
    chi: {
        name: 'ACM SIGCHI Conference on Human Factors in Computing Systems (CHI)',
        short: 'CHI',
    },
    sigcse: {
        name: 'ACM Technical Symposium on Computer Science Education (SIGCSE), Research Track',
        short: 'SIGCSE',
    },
    sigcseexp: {
        name: 'ACM Technical Symposium on Computer Science Education (SIGCSE), Experience Report Track',
        short: 'SIGCSE',
    },
    iticse: {
        name: 'ACM Conference on Innovation and Technology in Computer Science Education',
        short: 'ITiCSE',
    },
    sigcsex: {
        name: 'ACM Technical Symposium on Computer Science Education (SIGCSE), Experience Report Track',
        short: 'SIGCSE',
    },
    respect: {
        name: 'IEEE Conference on Research in Equity and Sustained Participation in Engineering, Computing, and Technology (RESPECT)',
        short: 'RESPECT',
    },
    icse: {
        name: 'ACM/IEEE International Conference on Software Engineering (ICSE)',
        short: 'ICSE',
    },
    seip: {
        name: 'ACM/IEEE International Conference on Software Engineering (ICSE), Software Engineering in Practice',
        short: 'SEIP',
    },
    seet: {
        name: 'International Conference on Software Engineering (ICSE), Software Engineering Education and Training Track',
        short: 'SEET',
    },
    ese: {
        name: 'Empirical Software Engineering',
        short: 'ESE',
    },
    toce: {
        name: 'ACM Transactions on Computing Education',
        short: 'TOCE',
    },
    tochi: {
        name: 'ACM Transactions on Computer-Human Interaction',
        short: 'TOCHI',
    },
    uist: {
        name: 'ACM Symposium on User Interface Software and Technology (UIST)',
        short: 'UIST',
    },
    vlhcc: {
        name: 'IEEE Symposium on Visual Languages and Human-Centered Computing (VL/HCC)',
        short: 'VL/HCC',
    },
    tse: {
        name: 'IEEE Transactions on Software Engineering',
        short: 'TSE',
    },
    hcipacm: {
        name: 'Proceedings of the ACM on Human-Computer Interaction',
        short: 'PACMHCI',
    },
};
