type Person = {
    id: string;
    name: string;
    active: boolean;
    advised: boolean;
    level: 'undergrad' | 'masters' | 'phd' | 'postdoc' | 'faculty' | 'director';
    dept: string;
    coadvisor: string | null;
    bio: string;
    url: string;
    dissertation?: string;
    startdate: number;
    enddate: number | null;
    achievements: string[];
};
export default Person;
