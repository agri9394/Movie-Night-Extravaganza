export function updateScreenName(screenName) {
  return (dispatch) => {
      dispatch(returnPayload('SCREEN_NAME',screenName))
  };
}

function returnPayload(type,items) {
  return {
      type: type,
      items
  };
}

