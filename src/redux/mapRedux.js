/* action name creator */
const reducerName = 'map';
const createActionName = name => `app/${reducerName}/${name}`;

/* SELECTORS */

export const getMarkers = ({ map }) => map.markers;

/* ACTIONS */

export const ADD_MARKER = createActionName('ADD_MARKER');
export const EDIT_MARKER = createActionName('EDIT_MARKER');
export const REMOVE_MARKER = createActionName('REMOVE_MARKER');

/* ACTION CREATORS */

export const addMarker = payload => ({ payload, type: ADD_MARKER });
export const editMarker = payload => ({ payload, type: EDIT_MARKER });
export const removeMarker = payload => ({ payload, type: REMOVE_MARKER });

/* INITIAL STATE */

const initialState = {
  markers: []
};

/* REDUCER */

export default function reducer(statePart = initialState, action = {}) {
  switch (action.type) {
    case ADD_MARKER: {
      return {
        ...statePart,
        markers: [...statePart.markers, action.payload]
      };
    }
    case REMOVE_MARKER: {
      const updateMarkers = statePart.markers.filter(
        el => el.id !== action.payload
      );
      return {
        ...statePart,
        markers: updateMarkers
      };
    }
    case EDIT_MARKER: {
      const item = statePart.markers.findIndex(x => x.id === action.payload.id);
      return {
        ...statePart,
        markers: [
          ...statePart.markers.slice(0, item),
          {
            ...statePart.markers[item],
            longitude: action.payload.longitude,
            latitude: action.payload.latitude
          },
          ...statePart.markers.slice(item + 1)
        ]
      };
    }
    default:
      return statePart;
  }
}
