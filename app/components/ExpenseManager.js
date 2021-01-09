import React from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import { TopActionCreators } from "../actions/ActionCreators";
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

  handleClick = () => {
    this.setState({ isOpen: true });
  };
  onSubmit = (e) => {
    e.stopPropagation();
    let { type, amount } = this.state;
    TopActionCreators.actionCreator001({ type: type, amount: amount });
    this.closeModal();
  };
  closeModal = (data) => {
    this.setState({ isOpen: false });
  };
  handleChange = (e) => {
    this.setState({ type: e.target.value });
  };
  handleInputChange = (e) => {
    this.setState({ amount: e.target.value });
  };
  render() {
    let { received, paid, data } = this.props;
    let { type, amount } = this.state;
    const listItems = data.map((d) => <li key={d}>{d}</li>);
    return (
      <div>
        <Modal
          isOpen={this.state.isOpen}
          // onAfterOpen={afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          {/* <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2> */}

          <FormControl>
            <FormLabel component="legend">Type</FormLabel>
            <RadioGroup
              aria-label="type"
              name="type1"
              value={type}
              onChange={this.handleChange}
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
              onChange={this.handleInputChange}
            />
            <FormHelperText id="my-helper-text">{amount}</FormHelperText>
          </FormControl>
          <FormControl>
            <Button variant="contained" onClick={this.closeModal}>
              Close
            </Button>
            <Button variant="contained" color="primary" onClick={this.onSubmit}>
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
                style={{ backgroundColor: "black", color: "white" }}
                size="large"
                onClick={this.handleClick}
              >
                Add Entry
              </Button>
            </div>
            <div
              style={{
                display: "flex",
              }}
            >
              <div
                style={{
                  marginRight: "50px",
                }}
              >
                total received {received}
              </div>
              <div>
                total paid {paid > 0 ? "-" : ""}
                {paid}
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            margin: "100px",
          }}
        >
          {listItems}
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
