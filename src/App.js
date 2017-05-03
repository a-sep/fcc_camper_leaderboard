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
    return (
      <div>
        <Header>Leaderboard</Header>
        <table>
          <tr>
            <th>#</th><th>Camper Name</th><th>Points in last 30 days</th><th>All time points</th>
          </tr>
          {recentUsers.map((item, i) =>
            <tr className="">
              <td className="">{i + 1}</td>
              <td className=""><img className="" src={item.img} width="25px" height="25px" />{item.username}</td>
              <td className="">{item.recent}</td>
              <td className="">{item.alltime}</td>
            </tr>

          )
          }
        </table>
        <Footer />
      </div>
    )
  }
}

const Header = (props) => <h2>{props.children}</h2>
const Footer = () => <div className="footerDiv">coded by <a href="http://codepen.io/artur_sep/full/LNRxVP/"> <strong>artur_sep</strong></a></div>

export default App;
