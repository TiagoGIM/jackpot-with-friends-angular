export interface Ticket {
    numbers :number[]
    id:string,
    status : string,
    length: number,
}

export interface BetResponse {
    numbers :number[]
    id:string,
    status : string,
    length: number,
    ticketId: string;
}

export interface mostPicked {
    year: number;
    numbers: number[];
  }