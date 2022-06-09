import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import BlogItem from '../BlogItem'

import './index.css'

class BlogItemDetails extends Component {
  state = {blogsItemDetails: {}, isLoading: true}

  componentDidMount() {
    this.getBlogItemDetails()
  }

  getBlogItemDetails = async () => {
    const {match} = this.props
    // console.log(match)
    const {params} = match
    const {id} = params
    console.log(id)
    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const data = await response.json()
    console.log(data)
    const updatedData = {
      id: data.id,
      author: data.author,
      avatarUrl: data.avatar_url,
      imageUrl: data.image_url,
      title: data.title,
      topic: data.topic,
      content: data.content,
    }
    console.log(updatedData)
    this.setState({blogsItemDetails: updatedData, isLoading: false})
  }

  render() {
    const {blogsItemDetails, isLoading} = this.state
    const {
      author,
      avatarUrl,
      imageUrl,
      title,

      content,
    } = blogsItemDetails
    return (
      <div>
        {isLoading ? (
          <div testid="loader">
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        ) : (
          <div className="BlogItemDetailsContainer">
            <h1 className="head">{title}</h1>
            <div className="avatar-author">
              <img src={avatarUrl} alt="avatar Url" className="avatarUlr" />
              <p className="author">{author}</p>
            </div>
            <div className="image">
              <img src={imageUrl} alt={title} className="imgUrl" />
            </div>
            <p className="para">{content}</p>
          </div>
        )}
      </div>
    )
  }
}
export default BlogItemDetails
