const initialState = {
    contents: []
};

const availabilityReducer = (state = initialState, action) => {

    switch (action.type) {
        case "AVAILABILITIES_LOADED":
            let contents = state.contents;

            for (const availability of action.data.availabilities) {
                const { manufacturer, availabilities } = availability;

                const itemIndex = contents.findIndex(a => a.manufacturer === manufacturer);

                const newItem = { manufacturer, availabilities };

                if (itemIndex !== -1) {
                    contents = contents.map((item, index) => {
                        if (index === itemIndex) {
                            return newItem;
                        }
                        return item
                    });
                } else {
                   contents =  [...contents, newItem ];
                }
            }

            return { ...state, contents };
        default:
            return state;
    }
};

export const availabilitiesLoaded = (availabilities) => {
    return {
        type: 'AVAILABILITIES_LOADED',
        data: {
            availabilities: availabilities
        }
    };
}

export default availabilityReducer;