import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Divider , Pagination } from 'antd';

import AddModal from './AddModal.jsx';
import AddWord from './words/AddWord.jsx';
import { getCategories , removeCategory } from '../actions';

class Index extends Component {

  constructor(props){
    super(props)

    this.state ={
      laoder :true,
      page : 1
    }
  }

  componentDidMount(){
    this.getData(1); 
  }

  handleclickModal(modalVisible ,action , category) {
    this.category.setModalVisible(modalVisible ,action, category);
  }

  handleAddWord(modalVisible , id){
    this.word.setModalVisible(modalVisible , id)
  }

  onShowSizeChange(page) {
    this.setState({page : page});
    this.getData(page);
  }

  getData(page){
    this.props.getCategories(page).then(response=>{
      }).catch(err => {
          this.setState({ loader : false})
      })
  }

  removeCategory(id , idx){
    this.props.removeCategory(id , idx).then(response=>{

      }).catch(err => {
        
      })
  }

  parseCategories(){
    var self = this
    if(!$.isEmptyObject(this.props.categories)){
      return (
        <Fragment>
         {this.props.categories.data.map(function(category , key) {
            return (
              <tr key={category.id}>
                <td className="collapsing">
                  <div className="ui fitted slider checkbox">
                    <input type="radio" /> <label />
                  </div>
                </td>
                <td>{category.title}</td>
                <td>{category.description}</td>
                <td>
                  <a onClick={() => self.handleAddWord(true , category.id)}>
                    Add Word
                  </a>
                  <Divider type="vertical"/>
                  <a onClick={() => self.handleclickModal(true , 'update' , category)}>
                    Edit
                  </a>
                  <Divider type="vertical"/>
                  <a onClick={() => self.removeCategory(category.id , key)}>
                    Delete
                  </a>
                </td>
              </tr>
            )
          })}
        </Fragment>
      )
    }
  }

  render() {
    return (
      <Fragment>
        <AddModal onRef={ref => (this.category = ref)} />
        <AddWord  onRef={ref => (this.word = ref)}/>
        <div className="ui segment">
          <div className="uiinverted dimmer">
            <div 
              className="ui indeterminate text loader"
              className={
                this.state.loader ? 'active' : ''
              }>Preparing Files</div>
          </div>
          <table className="ui compact celled definition table segment">
            <thead>
              <tr>
                <th />
                <th>Title</th>
                <th>Description</th>
                <th width="184px">Action</th>
              </tr>
            </thead>
            <tbody>
                {this.parseCategories()}
              </tbody>
            <tfoot className="full-width">
              <tr>
                <th />
                <th colSpan="4">
                  <div 
                    className="ui right floated small primary labeled icon button"
                    onClick={() => this.handleclickModal(true , 'add')}>
                    <i className="clipboard list icon" /> Add Category
                  </div>
                   <Pagination
                    defaultCurrent={this.state.page}
                    onChange={this.onShowSizeChange.bind(this)}
                    pageSize = {10}
                    total={this.props.categories ? this.props.categories.total : 0}
                  />
                </th>
              </tr>
            </tfoot>
          </table>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return { categories : state.categories}
}

export default connect(mapStateToProps , { getCategories , removeCategory })(Index);
