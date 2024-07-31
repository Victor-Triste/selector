export const CountryService = {
    getCountries() {
        return Promise.resolve([
            { name: 'Australia', code: 'AU' },
            { name: 'Brazil', code: 'BR' },
            { name: 'Canada', code: 'CA' },
            { name: 'Germany', code: 'DE' },
            { name: 'Spain', code: 'ES' },
            { name: 'USA', code: 'US' }
        ]);
    }
};
