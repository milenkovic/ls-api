import { transformResponse, transformOpeningHours } from '../src/services/PlaceService';
import {place} from './mocks';

describe('Place Service', () => {
    it('transformResponse: should extract correct address', () => {
        const transformedPlace = transformResponse(place);
        expect(transformedPlace.address).toBe('Some street 1');
    });

    it('transformResponse: should extract correct address', () => {
        const transformedPlace = transformResponse(place);
        expect(transformedPlace.name).toBe('Restaurant 1');
    });

    it('transformResponse: should extract correct oppening hours', () => {
        const transformedPlace = transformResponse(place);
        const expectedHours = [{'start':'monday','hours':'11:30 - 14:00,18:30 - 22:00','end':'friday'},{'start':'saturday','hours':[]},{'start':'sunday','hours':[]}];
        expect(JSON.stringify(transformedPlace.openingHours)).toBe(JSON.stringify(expectedHours));
    });

    it('transformOpeningHours: should not contain wednesday', () => {
        const transformedOpeningHours = transformOpeningHours(place.opening_hours);
        expect(JSON.stringify(transformedOpeningHours)).not.toMatch('wednesday');
    });
});