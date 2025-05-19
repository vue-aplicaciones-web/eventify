import {Attendee} from "../model/attendee.entity.js";

export class AttendeeAssembler {
    static toEntitiesFromResponse(response) {
        if (!response) {
            console.error("No response")
        }
        return response.map(resource => this.toEntityFromResource(resource))
    }

    static toEntityFromResource(resource) {
        return new Attendee({...resource});
    }
}