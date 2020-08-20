import types from "../actions/saga/types";

const applySetNotifyAboutAddTodo = (state, action) => {
  const { name, id } = action.payload;
  return { ...state, [id]: 'Todo Created: ' + name  };
}

const applyRemoveNotification = (state, action) => {
  const {
    [action.payload.id]: notificationToRemove,
    ...restNotifications
	} = state;
  return restNotifications;
}

const notificationReducer = (state = {}, action) => {
  switch (action.type) {
		case types.ADD_TODO:
			return applySetNotifyAboutAddTodo(state, action);
		case types.HIDE_NOTIFICATION:
			return applyRemoveNotification(state, action);	
		default:
			return state;
	}
};

export default notificationReducer;
