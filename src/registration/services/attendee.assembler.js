import {Attendee} from "../model/attendee.entity.js";

export class AttendeeAssembler {

    static toEntitiesFromResponse(response) {
        if (!response) {
            console.error("No response")
        }
        reaturn response.map(resource => this.toEntityFromResource(resource))
    }

    static toEntityFromResource(resource) {
        return new Attendee({...resource});
    }
}