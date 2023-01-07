import { TicketType } from '../types/SelectedTicket'

export const TICKET_TYPES: Array<{ value: TicketType; label: string }> = [
  {
    value: TicketType.ADULT,
    label: 'Adult',
  },
  {
    value: TicketType.KID,
    label: 'Kid',
  },
  {
    value: TicketType.OLD,
    label: 'Old',
  },
]
