interface RootObject {
    '@context': Context;
    '@graph': Graph[];
  }

interface Graph {
    '@id': string;
    '@type'?: string;
    id: string;
    title: string;
    description: string;
    free: number;
    price: string;
    dtstart: string;
    dtend: string;
    time: string;
    'excluded-days': string;
    uid: string;
    link: string;
    'event-location': string;
    references: References;
    relation?: References;
    address?: Address;
    location?: Location;
    organization?: Organization;
    recurrence?: Recurrence;
    audience?: string;
  }

interface Recurrence {
    days: string;
    frequency: string;
    interval: number;
  }

interface Organization {
    'organization-name': string;
    accesibility: string;
  }

interface Location {
    latitude: number;
    longitude: number;
  }

interface Address {
    district: References;
    area: Area;
  }

interface Area {
    '@id': string;
    locality: string;
    'postal-code': string;
    'street-address': string;
  }

interface References {
    '@id': string;
  }

interface Context {
    c: string;
    dcterms: string;
    geo: string;
    loc: string;
    org: string;
    vcard: string;
    schema: string;
    title: string;
    id: string;
    relation: string;
    references: string;
    address: string;
    area: string;
    district: string;
    locality: string;
    'postal-code': string;
    'street-address': string;
    location: string;
    latitude: string;
    longitude: string;
    organization: string;
    'organization-desc': string;
    accesibility: string;
    services: string;
    schedule: string;
    'organization-name': string;
    description: string;
    link: string;
    uid: string;
    dtstart: string;
    dtend: string;
    time: string;
    'excluded-days': string;
    'event-location': string;
    free: string;
    price: string;
    recurrence: string;
    days: string;
    frequency: string;
    interval: string;
    audience: string;
  }
