import AppDispatcher from "../dispatcher/AppDispatcher";
import { ActionTypes } from "../constants/AppConstants";

const getTopAction001 = (type, amount) => ({
  type: ActionTypes.ADD_ENTRY,
  data: {
    amount: amount,
    type: type,
    data: [],
  },
});

export const TopActionCreators = {
  actionCreator001(data) {
    AppDispatcher.dispatch(getTopAction001(data["type"], data["amount"]));
  },
};
