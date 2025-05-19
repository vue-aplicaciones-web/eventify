export class Event {
    constructor({
                    id = '',
                    name = '',
                    description = '',
                    scheduleAt = new Date()
                } = {})
    {
        this.id = id
        this.name = name
        this.description = description
        this.scheduleAt = scheduleAt instanceof Date ? scheduleAt : new Date(scheduleAt)
    }
}