import AppDispatcher from "../dispatcher/AppDispatcher";
import { ActionTypes } from "../constants/AppConstants";

const getTopAction001 = (type, amount) => ({
  type: ActionTypes.ADD_ENTRY,
  data: {
    received: amount,
    amount: amount,
    type: type,
    paid: amount,
    data: [],
  },
});

const getTopAction002 = () => ({
  type: ActionTypes.TOP_TYPE_002,
  data: "RESULT OF YOUT ACTION",
});

export const TopActionCreators = {
  actionCreator001(data) {
    AppDispatcher.dispatch(getTopAction001(data["type"], data["amount"]));
  },
  actionCreator002() {
    AppDispatcher.dispatch(getTopAction002());
  },
};
