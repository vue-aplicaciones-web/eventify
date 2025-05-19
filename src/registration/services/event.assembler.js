import {Event} from "../model/event.entity.js";

export class EventAssembler {
    static toEntitiesFromResponse(response) {
        if (!response) {
            console.error("No response")
        }
        return response.map(resource => this.toEntityFromResource(resource))
    }

    static toEntityFromResource(resource) {
        return new Event({...resource});
    }
}