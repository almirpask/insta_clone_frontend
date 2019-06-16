import React from 'react'
import api from '../../services/api'
import './New.css'

export default  class New extends React.Component {
  state = {
    image: null,
    author: '',
    place: '',
    description: '',
    hashtags: ''
  }

  handleSumit = async e => {
    e.preventDefault()

    const data = new FormData();

    data.append('image', this.state.image)
    data.append('author', this.state.author)
    data.append('place', this.state.place)
    data.append('description', this.state.description)
    data.append('hashtags', this.state.hashtags)

    await api.post('posts', data)

    this.props.history.push('/')
  }

  handleChange = e => {
    this.setState({[e.target.name]: e.target.value})
  }

  handleImageChange = e => {
    this.setState({ image: e.target.files[0] })
  }

  render() {
    return (
      <form id="new-post" onSubmit={this.handleSumit}>
        <input type="file" onChange={this.handleImageChange}/>
        <input type="text" name="author" placeholder="Post author" onChange={this.handleChange} value={this.state.author}/>
        <input type="text" name="place" placeholder="Post place" onChange={this.handleChange} value={this.state.place}/>
        <input type="text" name="description" placeholder="Post description" onChange={this.handleChange} value={this.state.description}/>
        <input type="text" name="hashtags" placeholder="Post hastags" onChange={this.handleChange} value={this.state.hashtags}/>

        <button type="submit">Enviar</button>
      </form>
    )
  }
}
