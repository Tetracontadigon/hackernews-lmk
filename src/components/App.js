import React, { Component } from 'react'
import Header from './Header'
import { Switch, Route, Redirect } from 'react-router-dom'
import LinkList from './LinkList'
import CreateLink from './CreateLink'
import Login from './Login'
import Search from './Search'
import Hi from './Hi'
import FilteredList from './Filtered'
import UserList from './UserList'
import VideoList from './VideoList'
import CreateVideo from './CreateVideo'

class App extends Component {
  render() {
    return (
      <div className='center w85'>
        <Header />
        <div className='ph3 pv1 background-gray'>
          <Switch>
            <Route exact path='/' render={() => <Redirect to='/new/1' />} />
            <Route exact path='/create' component={CreateLink} />
            <Route exact path='/createVid' component={CreateVideo} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/search' component={Search} />
            <Route exact path='/top' component={LinkList} />
            <Route exact path='/new/:page' component={LinkList} />
            <Route exact path='/Hi' component={Hi} />
            <Route exact path='/Filtered' component={FilteredList} />
            <Route exact path='/users' component={UserList} />
            <Route exact path='/videos' component={VideoList} />
            {/* <Route exact path='/users' component={UserList} /> */}
          </Switch>
        </div>
      </div>
    )
  }  
  
}

export default App