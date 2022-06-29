import { Space } from "../model/Model";

export class DataService {
    public async getSpaces(): Promise<Space[]> {
        const result: Space[] = [];
        result.push({
            location: 'Paris',
            name: 'Paris Location',
            spaceID: '123'
        })
        result.push({
            location: 'London',
            name: 'London Location',
            spaceID: '124'
        })
        result.push({
            location: 'Prague',
            name: 'Prague Location',
            spaceID: '125'
        })

        return result;
    }

    public async reserveSpace(spaceID: string): Promise<string | undefined> {
        if (spaceID === '123') {
            return '5555';
        }
        else {
            return undefined;
        }
    }
}