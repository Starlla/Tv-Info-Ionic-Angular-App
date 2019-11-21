export interface Tv {
    id: number;
    url: string;
    name: string;
    type: string;
    language: string;
    genres: string[];
    status: string;
    runtime?: number;
    premiered: string;
    officialSite?: string;
    schedule: Schedule;
    rating: Rating;
    weight: number;
    network?: Network;
    webChannel?: WebChannel;
    externals: Externals;
    image: Image;
    summary: string;
    updated: number;
    _links: Links;
}

interface Links {
    self: Self;
    previousepisode: Self;
    nextepisode?: Self;
}

interface Self {
    href: string;
}

interface Image {
    medium: string;
    original: string;
}

interface Externals {
    tvrage: number;
    thetvdb?: number;
    imdb?: string;
}

interface WebChannel {
    id: number;
    name: string;
    country?: Country;
}

interface Network {
    id: number;
    name: string;
    country: Country;
}

interface Country {
    name: string;
    code: string;
    timezone: string;
}

interface Rating {
    average?: number;
}

interface Schedule {
    time: string;
    days: string[];
}

export interface Cast {
    person: Person;
    character: Character;
    self: boolean;
    voice: boolean;
}

interface Character {
    id: number;
    url: string;
    name: string;
    image?: Image;
    _links: Links;
}

interface Person {
    id: number;
    url: string;
    name: string;
    country: Country;
    birthday?: string;
    deathday?: any;
    gender: string;
    image: Image;
    _links: Links;
}

interface Links {
    self: Self;
}

interface Self {
    href: string;
}

interface Image {
    medium: string;
    original: string;
}

interface Country {
    name: string;
    code: string;
    timezone: string;
}

export interface TVSearch {
    score: number;
    show: Tv;
}
