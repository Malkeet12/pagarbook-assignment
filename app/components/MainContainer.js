import React, { Component } from "react";
import { Container } from "flux/utils";
import TopStore from "../stores/MainStore";
import { Navi } from "./Navi";
import MainContent from "./ExpenseManager";

class MainContainer extends Component {
  static getStores() {
    return [TopStore];
  }

  static calculateState() {
    const data = TopStore.getState();
    return {
      received: data.received,
      paid: data.paid,
      data: data.data,
    };
  }

  render() {
    const { received, paid, data } = this.state;
    return (
      <>
        <Navi title="Top" />
        <MainContent received={received} paid={paid} data={data} />
      </>
    );
  }
}

export default Container.create(MainContainer);
