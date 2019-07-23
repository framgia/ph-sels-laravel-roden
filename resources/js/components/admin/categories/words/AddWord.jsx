import React, { Component, Fragment } from "react";
import { connect } from 'react-redux';
import _ from "lodash";
import {
  Form,
  Input,
  Icon,
  Col,
  Row,
  Divider,
  Radio,
  Button,
  Modal
} from "antd";
import "./addWord.css";

import { addWords } from '../../actions/word.js';

const { confirm } = Modal;

class AddWord extends Component {
  constructor(props) {
    super(props);

    this.state = {
      numberOfRows: 1,
      modalVisible: false,
      form: {
        title: "",
        description: ""
      },
      categoryId: null,
      itemIdx: null,
      itemform: {
        word: "",
        choices: ["", "", "", ""],
        answer: ""
      },
      items: []
    };

    this.parseWords = this.parseWords.bind(this);
  }

  componentDidMount() {
    this.props.onRef(this);
  }
  componentWillUnmount() {
    this.props.onRef(undefined);
  }

  setModalVisible(modalVisible , id) {
    this.setState({
      categoryId : id,
      modalVisible: modalVisible
    });
  }

  confirmClose() {
    var self = this;
    confirm({
      title: "Do you want to clode the modal?",
      content: "Unsaved data will be remove",
      onOk() {
        self.clearForm();
        self.setState({
          items: [],
          modalVisible: false
        });
      },
      onCancel() {}
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    var withOutAnswer = this.state.items.filter(function(item) {
      return item.answer == "";
    });

    if(!withOutAnswer.length && this.state.items.length)

    this.props
      .addWords(this.state.items , this.state.categoryId)
      .then(response => {
        
      })
      .catch(err => {
        this.setState({ errMsg: err });
      });
  }

  changeAnswer(idx, value) {
    var items = [...this.state.items];
    items[idx].answer = value;

    this.setState({ items: items });
  }

  handleWordForm() {
    var items = [...this.state.items];
    var item = { ...this.state.itemform };
    var choices = [];

    item.choices.map((value, key) => {
      choices.push(value);
    });

    var newChoices = choices.filter(function(choice) {
      return choice !== "";
    });

    if (newChoices.length != 4) {
      return;
    }

    var dummyVar = {
      word: item.word,
      choices: choices,
      answer: ""
    };

    if (this.state.itemIdx) {
      this.updateWord(dummyVar);
    } else {
      this.addWord(dummyVar);
    }
  }

  findDuplicates(choices) {
    var object = {};
    var result = [];

    choices.forEach(function(item) {
      if (!object[item]) object[item] = 0;
      object[item] += 1;
    });

    for (var prop in object) {
      if (object[prop] >= 2) {
        result.push(prop);
      }
    }
  }

  updateWord(dummyVar) {
    var items = [...this.state.items];

    items[this.state.itemIdx] = dummyVar;

    this.updatItemState(items)
  }

  addWord(dummyVar) {
    var items = [...this.state.items];
    items.push(dummyVar);

    this.updatItemState(items)

  }

  updatItemState(items){
    
    this.setState({ items: items });
    this.clearForm();
  }

  clearForm() {
    var item = {
      word: "",
      choices: ["", "", "", ""],
      answer: ""
    };
    this.setState({ itemform: item  , itemIdx: null});
  }

  choiceHandler(e, idx) {
    var itemform = this.state.itemform;

    itemform.choices[idx] = e.target.value;

    this.setState({ itemform });
  }

  wordHandler(e) {
    var itemform = { ...this.state.itemform };
    itemform.word = e.target.value;

    this.setState({ itemform });
  }

  removeItem(idx) {
    var items = [...this.state.items];
    items.splice(idx, 1);

    this.setState({ items });
  }

  editItem(item, idx) {
    var items = [...this.state.items];
    var itemform = { ...this.state.itemform };

    this.setState({ itemIdx: idx });

    var choices = [];

    item.choices.map((value, key) => {
      choices.push(value);
    });

    var dummyVar = {
      word: item.word,
      choices: choices,
      answer: ""
    };

    items.splice(idx, 1);
    this.setState({ itemform: dummyVar , items: items });
  }

  parseWords() {
    return this.state.items.map((item, key) => (
      <tr key={key}>
        <td>{item.word}</td>
        <td>
          <Radio.Group
            defaultValue={item.answer}
            onChange={e => {
              this.changeAnswer(key, e.target.value);
            }}
          >
            {item.choices.map((choice, key) => (
              <Radio.Button value={choice} key={key}>
                {choice}
              </Radio.Button>
            ))}
          </Radio.Group>
        </td>
        <td>
          <a
            onClick={() => {
              this.editItem(item, key);
            }}
          >
            Edit
          </a>
          <Divider type="vertical" />
          <a
            onClick={e => {
              this.removeItem(key);
            }}
          >
            Delete
          </a>
        </td>
      </tr>
    ));
  }

  parseInput() {
    if (this.state.items.length < 10) {
      return (
        <tr>
          <td>
            <div className="ui mini icon input">
              <input
                type="text"
                placeholder="word"
                value={this.state.itemform.word}
                onChange={e => this.wordHandler(e)}
              />
            </div>
          </td>
          <td>
            <div className="ui mini icon input">
              <input
                type="text"
                value={this.state.itemform.choices[0]}
                onChange={e => {
                  this.choiceHandler(e, 0);
                }}
                placeholder="choice"
                style={{ width: "80px", marginRight: "3px" }}
              />
            </div>
            <div className="ui mini icon input">
              <input
                type="text"
                value={this.state.itemform.choices[1]}
                onChange={e => {
                  this.choiceHandler(e, 1);
                }}
                placeholder="choice"
                style={{ width: "80px", marginRight: "3px" }}
              />
            </div>
            <div className="ui mini icon input">
              <input
                type="text"
                value={this.state.itemform.choices[2]}
                onChange={e => {
                  this.choiceHandler(e, 2);
                }}
                placeholder="choice"
                style={{ width: "80px", marginRight: "3px" }}
              />
            </div>
            <div className="ui mini icon input">
              <input
                type="text"
                value={this.state.itemform.choices[3]}
                onChange={e => {
                  this.choiceHandler(e, 3);
                }}
                placeholder="choice"
                style={{ width: "80px", marginRight: "3px" }}
              />
            </div>
          </td>
          <td>
            <button
              className="small ui button green"
              onClick={() => {
                this.handleWordForm();
              }}
            >
              {this.state.itemIdx != null ? "Update" : "Add"}
              {this.state.itemIdx != null ? "" : <i className="plus icon" />}
            </button>
          </td>
        </tr>
      );
    }
  }

  render() {
    return (
      <Fragment>
        <Modal
          title="Add New Word"
          width={700}
          visible={this.state.modalVisible}
          onCancel={() => this.confirmClose()}
        >
          <form
            className="ui form"
            onSubmit={e => {
              e.preventDefault();
            }}
          >
            <table className="ui compact celled definition table">
              <thead>
                <tr>
                  <th>Word</th>
                  <th>Choices</th>
                  <th />
                </tr>
              </thead>
              <tbody>
                {this.parseWords()}
                {this.parseInput()}
              </tbody>
            </table>
            <button
              className="ui button"
              type="submit"
              onClick={e => {
                this.handleSubmit(e);
              }}
            >
              Submit
            </button>
          </form>
        </Modal>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return { msg : ''}
}

export default connect(mapStateToProps ,{addWords})(AddWord);