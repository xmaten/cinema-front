export type TicketType = 'kid' | 'adult' | 'old'

export type SelectedTicket = {
  seat: string
  type: TicketType
}
