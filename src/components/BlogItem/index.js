import {Link} from 'react-router-dom'
import './index.css'

const BlogItem = props => {
  const {blogsData} = props
  const {id, imageUrl, avatarUrl, topic, title, author} = blogsData

  return (
    <Link to={`/blogs/${id}`}>
      <li className="listItemContainer">
        <div className="imgUrlContainer">
          <img src={imageUrl} className="imgUrl" alt="imageUrl" />
        </div>
        <div className="imgDetailsContainer">
          <p className="listPara">{topic}</p>
          <h1 className="listHead">{title}</h1>
          <div className="avtarContainer">
            <img src={avatarUrl} className="avatarUrl" alt="avatarUrl" />
            <p className="listPara">{author}</p>
          </div>
        </div>
      </li>
    </Link>
  )
}
export default BlogItem
