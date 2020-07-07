export type Mode = 'dev' | 'prod';

export interface ServerResponse<T> {
  data: T;
}

export interface RodonavesGetCityByZipCodeResponse {
  CityId: number;
  CityDescription: string;
  UnitFederation: {
    Description: string;
  };
  Street: string;
  District: string;
  ZipCode: number;
  Number: number;
  Supplement: string;
  /** ? */
  SitLoc: number;
  /** If sector is attended */
  SectorAttended: boolean;
  /** If city is attended */
  CityAttended: boolean;
  /** Message to location not attended */
  NotAttendedMessage: string;
}

export interface RodonavesSimulateQuoteResponse {
  Value: number;
  DeliveryTime: number;
  ProtocolNumber: number;
  CustomerEmail: string;
  Cubed: boolean;
  Message: string;
  ExpirationDay: string;
}

export interface RodonavesPack {
  /** Weight (kg) */
  weight: number;
  /** Length (cm) */
  length: number;
  /** Height (cm) */
  height: number;
  /** Width (cm) */
  width: number;
}
