export class Attendee {
    constructor({
        id = '',
        firstName = '',
        lastName = '',
        eventId = '',
        ticketIdentifier = '',
        checkedInAt = new Date()
    } = {})
    {
        this.id = id
        this.firstName = firstName
        this.lastName = lastName
        this.firstName = firstName
        this.eventId = eventId
        this.ticketIdentifier = ticketIdentifier
        this.checkedInAt = checkedInAt
    }
}