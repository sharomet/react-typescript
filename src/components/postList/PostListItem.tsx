import React from 'react'
import { Link } from 'react-router-dom';
import { IPost } from './IPost'

const PostListItem: React.FC<IPost> = ({ id, title }) => (
	<li>
		<Link to={`/posts/${id}`}>
			{title}
		</Link>
	</li>
)

export default PostListItem;