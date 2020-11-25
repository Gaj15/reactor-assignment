
export const getAvailability = (availabilities, product) => {
    const manufacturerAvailability = availabilities.find(availability => 
        availability.manufacturer === product.manufacturer);

    if (!manufacturerAvailability) {
        return null;
    }
    const availability = manufacturerAvailability.availabilities.find(a => a.id.toLowerCase() === product.id.toLowerCase());

    const regex = />(.*)<\//
    const matches = availability.DATAPAYLOAD.match(regex);

    if (matches.length >= 1) {
        return matches[1];
    };

    return null;
};

