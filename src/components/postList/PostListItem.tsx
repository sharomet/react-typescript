import React from 'react'
import { PostType } from './PostType'

const PostListItem:React.FC<PostType> = ({ userId, id, title }) => (
	<li>
		<a href="/#">
			{ title }
		</a>
	</li>
)

export default PostListItem