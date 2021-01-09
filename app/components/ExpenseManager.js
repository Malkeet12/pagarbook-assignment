import React from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import { AddEntryActionCreators } from "../actions/ActionCreators";
import ReactDOM from "react-dom";
import Modal from "react-modal";
import {
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@material-ui/core";
// import "./TopContent.scss";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

class ExpenseManager extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      type: "received",
      amount: 0,
    };
  }

  addEntry = () => {
    this.setState({ isOpen: true });
  };
  onSubmit = (e) => {
    e.stopPropagation();
    let { type, amount } = this.state;
    AddEntryActionCreators.actionAddEntry({ type: type, amount: amount });
    this.resetData();
    this.closeModal();
  };
  resetData = () => {
    this.setState({ amount: 0, type: "received" });
  };
  closeModal = () => {
    this.setState({ isOpen: false });
  };
  handleChange = (e, key) => {
    this.setState({ [key]: e.target.value });
  };
  render() {
    let { received, paid, data } = this.props;
    let { type, amount } = this.state;
    const listItems = data.map((d) => (
      <li key={d}>
        {d.type == "paid" ? "(-)" : ""} Rs.{d.amount}
      </li>
    ));

    return (
      <div>
        <Modal
          isOpen={this.state.isOpen}
          // onAfterOpen={afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <FormControl>
            <FormLabel component="legend">Type</FormLabel>
            <RadioGroup
              aria-label="type"
              name="type1"
              value={type}
              onChange={(e) => this.handleChange(e, "type")}
            >
              <FormControlLabel
                value="received"
                control={<Radio />}
                label="received"
              />
              <FormControlLabel value="paid" control={<Radio />} label="paid" />
            </RadioGroup>
          </FormControl>
          <FormControl>
            <InputLabel htmlFor="my-input">Amount</InputLabel>
            <Input
              id="my-input"
              aria-describedby="my-helper-text"
              onChange={(e) => this.handleChange(e, "amount")}
            />
            <FormHelperText id="my-helper-text">{amount}</FormHelperText>
          </FormControl>
          <FormControl>
            <Button variant="contained" onClick={this.closeModal}>
              Close
            </Button>
            <Button
              style={{
                marginTop: "20px",
              }}
              variant="contained"
              color="primary"
              onClick={this.onSubmit}
            >
              Add
            </Button>
          </FormControl>
        </Modal>
        <div
          style={{
            height: "20vh",
            backgroundSize: "cover",
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: 32,
          }}
        >
          <div
            style={{ display: "flex", width: "100%", flexDirection: "column" }}
          >
            <div
              style={{
                display: "flex",
                width: "100%",
                justifyContent: "space-between",
              }}
            >
              <div style={{ display: "flex", flexDirection: "column" }}>
                <heading>Expense manager</heading>
                <span>Welcome! manage your transactions</span>
              </div>
              <Button
                variant="contained"
                style={{
                  backgroundColor: "black",
                  color: "white",
                  marginTop: "20px",
                }}
                size="large"
                onClick={this.addEntry}
              >
                Add Entry
              </Button>
            </div>
            <div
              style={{
                display: "flex",
                marginTop: "30px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginRight: "50px",
                }}
              >
                <span style={{ color: "green", fontSize: "30px" }}>
                  Rs. {received}
                </span>
                <span>Total Received </span>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginRight: "50px",
                }}
              >
                <span style={{ color: "red", fontSize: "30px" }}>
                  {paid > 0 ? "(-)" : ""} Rs.
                  {paid}
                </span>
                <span>Total Paid </span>
              </div>
              <div></div>
            </div>
          </div>
        </div>
        <div
          style={{
            margin: "100px",
          }}
        >
          {data.length > 0 ? listItems : <div>List Empty State</div>}
        </div>
      </div>
    );
  }
}

ExpenseManager.propTypes = {
  received: PropTypes.string.isRequired,
  paid: PropTypes.string.isRequired,
  data: PropTypes.string.isRequired,
};

export default ExpenseManager;
