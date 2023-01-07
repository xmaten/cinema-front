export enum TicketType {
  NOT_SET,
  ADULT,
  KID,
  OLD,
}

export type SelectedTicket = {
  seat: string
  type: TicketType
}
