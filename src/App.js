import React from 'react';


class App extends React.Component {
  constructor() {
    super();
    this.state = { recentUsers: [], alltimeUsers: [] }
  }
  componentWillMount() {
    console.log('componentWillMount')
    fetch('https://fcctop100.herokuapp.com/api/fccusers/top/recent')
      .then(response => response.json())
      .then((results) => this.setState({ recentUsers: results }))

    fetch('https://fcctop100.herokuapp.com/api/fccusers/top/alltime')
      .then(response => response.json())
      .then((results) => this.setState({ alltimeUsers: results }))


  }

  render() {
    let recentUsers = this.state.recentUsers
    let alltimeUsers = this.state.alltimeUsers
    console.log('render', recentUsers, alltimeUsers)
    console.log("I am a \"double quote\" string inside \"double quotes\".");
    return (
      <div>
        <Header />
        <table>
          <caption>Leaderboard</caption>
          <thead>
            <tr>
              <th>#</th><th>Camper Name</th><th id="thRecent" ><span> Points in last 30 days</span></th><th id="thAlltime"><span> All time points</span></th>
            </tr>
          </thead>
          <tbody>
            {recentUsers.map((item, i) =>
              <tr className="row">
                <td className="pos">{i + 1}</td>
                <td className="user"><img className="img" src={item.img} width="30px" height="30px" /> <a href={"https://www.freecodecamp.com/" + item.username}>{item.username}</a> </td>
                <td className="recent">{item.recent}</td>
                <td className="alltime">{item.alltime}</td>
              </tr>
            )
            }
          </tbody>
        </table>
        <Footer />
      </div>
    )
  }
}

const Header = () => <header><a href="https://www.freecodecamp.com"><img src="https://www.freecodecamp.com/design-style-guide/img/freeCodeCamp.svg" alt="logo freeCodecamp"/></a></header>
const Footer = () => <footer>coded by <a href="http://codepen.io/artur_sep/full/LNRxVP/"> <strong>artur_sep</strong></a></footer>

export default App;
