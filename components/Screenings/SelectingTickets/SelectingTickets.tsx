import { Dispatch, SetStateAction } from 'react'
import {
  Select,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react'

import { NextStepButton } from '../NextStepButton/NextStepButton'
import { SelectedTicket, TicketType } from '../../../types/SelectedTicket'
import { TICKET_TYPES } from '../../../const/TICKET_TYPES'

type Props = {
  nextStep: () => void
  selectedTickets: SelectedTicket[]
  onChangeTicketType: (ticketType: TicketType, ticket: SelectedTicket) => void
}

export const SelectingTickets = ({
  nextStep,
  selectedTickets,
  onChangeTicketType,
}: Props) => {
  return (
    <>
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Seat</Th>
              <Th>Ticket type</Th>
            </Tr>
          </Thead>
          <Tbody>
            {selectedTickets.map((ticket) => (
              <Tr key={ticket.seat}>
                <Td>{ticket.seat}</Td>
                <Td>
                  <Select
                    placeholder="Select ticket type"
                    value={ticket.type}
                    onChange={(e) =>
                      onChangeTicketType(e.target.value as TicketType, ticket)
                    }
                  >
                    {TICKET_TYPES.map((type) => (
                      <option key={type.value} value={type.value}>
                        {type.label}
                      </option>
                    ))}
                  </Select>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>

      <NextStepButton onClick={nextStep} content="Go to payment" />
    </>
  )
}
