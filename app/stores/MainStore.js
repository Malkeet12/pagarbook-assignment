import { ReduceStore } from "flux/utils";
import AppDispatcher from "../dispatcher/AppDispatcher";

import { ActionTypes } from "../constants/AppConstants";

class TopStore extends ReduceStore {
  getInitialState() {
    return {
      received: 0,
      paid: 0,
      data: [],
    };
  }

  reduce(state, action) {
    switch (action.type) {
      case ActionTypes.ADD_ENTRY: {
        let amount = parseInt(action.data.amount);
        let type = action.data.type;
        if (type == "paid") {
          state.paid += amount;
        } else {
          state.received += amount;
        }

        // newData = ["date":"1",users:[{ amount: amount, type: action.data.type }]];

        state.data.push({ amount: amount, type: type });
        return {
          received: state.received,
          paid: state.paid,
          data: state.data,
        };
      }
      case ActionTypes.TOP_TYPE_002:
        return state;
      default:
        return state;
    }
  }
}

export default new TopStore(AppDispatcher);
