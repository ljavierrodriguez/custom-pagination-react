import React, {Component} from 'react';
import Pagination from "./components/pagination";

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      contacts: [],
      pagination: {}
    }
  }

  componentDidMount() {
    this.getContact("http://localhost:8000/api/contacts");
  }

  getContact = (url) => {
    fetch(url)
        .then(resp => resp.json())
        .then(data => {
          console.log(data);
          this.setState({
            contacts: data.results,
            pagination: data.pagination
          })
        });
  }

  getPage = (e, url) => {
    e.preventDefault();
    this.getContact(url);
  }

  render(){
    return (
        <div className="container">
          <div className="row">
            <div className="col-md-12">
                <table className="table table-bordered">
                  <tr>
                    <td>Id</td>
                    <td>Name</td>
                    <td>Email</td>
                  </tr>
                  {
                    this.state.contacts.map(contact => {
                      return (
                          <tr>
                            <td>{contact.id}</td>
                            <td>{contact.name}</td>
                            <td>{contact.email}</td>
                          </tr>
                      )
                    })
                  }
                </table>
                <Pagination pagination={this.state.pagination} getPage={this.getPage}/>
            </div>
          </div>
        </div>
    )
  }
}

export default App;
