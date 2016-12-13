import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import ImageList from './components/image_list.js'

class App extends Component {
  componentWillMount() {
    // great place to load our data
    axios.get('https://api.imgur.com/3/gallery/hot/viral/0')
    .then( (response) => console.log(response))
  }
  render() {
    return (
      <div>
        <ImageList />
      </div>
    )
  }
}

Meteor.startup(() => {
  ReactDOM.render(<App />, document.getElementById('container'))
})
