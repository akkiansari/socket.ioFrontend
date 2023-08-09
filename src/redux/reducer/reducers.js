const initialState = {
    Bedroom: {
      light1: false,
      light2: false,
    },
    Kitchen: {
      light1: false,
      light2: false,
    },
  };
  
  const lightsReducer = (state = initialState, action) => {
    if (action.type === 'TOGGLE_LIGHT') {
      const { location, lightId } = action.payload;
      return {
        ...state,
        [location]: {
          ...state[location],
          [lightId]: !state[location][lightId],
        },
      };
    }
    return state;
  };
  
  export default lightsReducer;
  