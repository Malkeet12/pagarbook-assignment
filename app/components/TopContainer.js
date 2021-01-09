import React, { Component } from "react";
import { Container } from "flux/utils";
import TopStore from "../stores/TopStore";
import { Navi } from "./Navi";
import TopContent from "./TopContent";

class TopContainer extends Component {
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
        <TopContent received={received} paid={paid} data={data} />
      </>
    );
  }
}

export default Container.create(TopContainer);
