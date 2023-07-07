type DateIsoYFirst = '19' | '20';
type DateIsoDigit = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9';
type DateIsoMM = '01' | '02' | '03' | '04' | '05' | '06' | '07' | '08' | '09' | '10' | '11' | '12';
type DateIsoDD = '01' | '02' | '03' | '04' | '05' | '06' | '07' | '08' | '09' | '10' | '11' | '12' | '13' | '14' | '15' | '16' | '17' | '18' | '19' | '20' | '21' | '22' | '23' | '24' | '25' | '26' | '27' | '28' | '29' | '30' | '31';

export type DateIso8601 = `${DateIsoYFirst}${DateIsoDigit}${DateIsoDigit}-${DateIsoMM}-${DateIsoDD}`;

type JsonResumeBasics = {
    name?: string;
    label?: string;
    image?: string;
    email?: string;
    phone?: string;
    url?: string;
    summary?: string;
    titles?: Array<string>;
    location?: {
        address?: string;
        postalCode?: string;
        city?: string;
        countryCode?: string;
        country?: string;
        timeZone?: string;
        timeZoneGMT?: string;
        region?: string;
        [k: string]: unknown;
    },
    profiles?: Array<JsonResumeNetworkProfile>
}

type JsonResumeNetworkProfile = {
    network?: string;
    username?: string;
    url?: string;
    icon?: string;
    [k: string]: unknown;
}

type JsonResumeWork = {
    startDate?: DateIso8601;
    endDate?: DateIso8601;
    name?: string;
    location?: string;
    description?: string;
    position?: string;
    url?: string;
    summary?: string;
    highlights?: Array<string>;
    [k: string]: unknown;
}

type JsonResumeVolunteer = {
    startDate?: DateIso8601;
    endDate?: DateIso8601;
    organization?: string;
    position?: string;
    url?: string;
    summary?: string;
    highlights?: string[];
    [k: string]: unknown;
}

type JsonResumeEducation = {
    startDate?: DateIso8601;
    endDate?: DateIso8601;
    institution?: string;
    url?: string;
    area?: string;
    studyType?: string;
    score?: string;
    courses?: string[];
    [k: string]: unknown;
}

type JsonResumeAward = {
    date?: DateIso8601;
    title?: string;
    awarder?: string;
    summary?: string;
    [k: string]: unknown;
}

type JsonResumeCertificate = {
    date?: DateIso8601;
    name?: string;
    url?: string;
    issuer?: string;
    [k: string]: unknown;
}

type JsonResumePublication = {
    releaseDate?: DateIso8601;
    name?: string;
    publisher?: string;
    url?: string;
    summary?: string;
    [k: string]: unknown;
}

type JsonResumeLanguageFluency = 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2'

type JsonResumeLanguage = {
    language?: string;
    fluency?: string | JsonResumeLanguageFluency;
    [k: string]: unknown;
}

type JsonResumeLevel = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

type JsonResumeSkill = {
    name?: string;
    level?: JsonResumeLevel;
    keywords?: Array<string>;
    [k: string]: unknown;
}

type JsonResumeReference = {
    name?: string;
    reference?: string;
    [k: string]: unknown;
}

type JsonResumeProject = {
    startDate?: DateIso8601;
    endDate?: DateIso8601;
    name?: string;
    description?: string;
    highlights?: string[];
    keywords?: string[];
    url?: string;
    roles?: string[];
    entity?: string;
    type?: string;
    [k: string]: unknown;
}

type JsonResumeInterest = {
    name?: string;
    keywords?: string[];
    [k: string]: unknown;
}

type JsonResumeMeta = {
    canonical?: string;
    version?: string;
    lastModified?: DateIso8601;
    [k: string]: unknown;
}

export type JsonResumeSchema = {
    basics?: JsonResumeBasics;

    work?: Array<JsonResumeWork>;

    projects?: Array<JsonResumeProject>;

    skills?: Array<JsonResumeSkill>;

    volunteer?: Array<JsonResumeVolunteer>;

    education?: Array<JsonResumeEducation>;

    awards?: Array<JsonResumeAward>;

    certificates?: Array<JsonResumeCertificate>;

    publications?: Array<JsonResumePublication>;

    languages?: Array<JsonResumeLanguage>;

    interests?: Array<JsonResumeInterest>;

    references?: Array<JsonResumeReference>;

    meta?: JsonResumeMeta;
};
