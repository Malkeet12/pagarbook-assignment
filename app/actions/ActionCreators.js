import AppDispatcher from "../dispatcher/AppDispatcher";
import { ActionTypes } from "../constants/AppConstants";

const getAddEntryAction = (type, amount) => ({
  type: ActionTypes.ADD_ENTRY,
  data: {
    amount: amount,
    type: type,
    data: [],
  },
});

export const AddEntryActionCreators = {
  actionAddEntry(data) {
    AppDispatcher.dispatch(getAddEntryAction(data["type"], data["amount"]));
  },
};
