import React from 'react';

const Header = () => <header><a href="https://www.freecodecamp.com"><img src="https://www.freecodecamp.com/design-style-guide/img/freeCodeCamp.svg" alt="logo freeCodecamp" /></a></header>
const Footer = () => <footer>coded by <a href="http://codepen.io/artur_sep/full/LNRxVP/"> <strong>artur_sep</strong></a></footer>

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      recentUsers: [],
      alltimeUsers: [],
      temp: []
    }
  }

  componentWillMount() {
    fetch('https://fcctop100.herokuapp.com/api/fccusers/top/recent')
      .then(response => response.json())
      .then((results) => this.setState({ recentUsers: results, temp: results }))

    fetch('https://fcctop100.herokuapp.com/api/fccusers/top/alltime')
      .then(response => response.json())
      .then((results) => this.setState({ alltimeUsers: results }))
  }

  showRecentUser() {
    this.setState({
      temp: this.state.recentUsers
    })
    document.getElementById('thRecent').style.color = 'green'
    document.getElementById('thAlltime').style.color = 'black'
  }

  showAlltimeUser() {
    this.setState({
      temp: this.state.alltimeUsers
    })
    document.getElementById('thRecent').style.color = 'black'
    document.getElementById('thAlltime').style.color = 'green'

  }

  render() {
    let tbodyObj = this.state.temp.map((item, i) =>
      <tr className="row" key={item.username}>
        <td className="pos">{i + 1}</td>
        <td className="user"><img className="img" src={item.img} width="30px" height="30px" alt="" /> <a href={"https://www.freecodecamp.com/" + item.username} target="_blank">{item.username} </a> </td>
        <td className="recent">{item.recent}</td>
        <td className="alltime">{item.alltime}</td>
      </tr>
    )
    
    return (
      <div>
        <Header />
        <table>
          <caption>Leaderboard</caption>
          <thead>
            <tr>
              <th>#</th><th>Camper Name</th>
              <th id="thRecent"><span onClick={this.showRecentUser.bind(this)}>Points in last 30 days</span></th>
              <th id="thAlltime"><span onClick={this.showAlltimeUser.bind(this)}>All time points</span></th>
            </tr>
          </thead>
          <tbody>
            {tbodyObj}
          </tbody>
        </table>
        <Footer />
      </div>
    )
  }
}

export default App;
