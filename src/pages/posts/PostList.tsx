import React from 'react';
import PostListItem from '../../components/postList/PostListItem';
import { IPost } from '../../components/postList/IPost';
import '../../components/postList/postList.scss';

const BASE_PATH = 'https://jsonplaceholder.typicode.com/posts';

type PostState = {
	post: IPost[]
}

class PostList extends React.Component<{}, PostState> {

	state = {
		post: []
	}

	componentDidMount(): void {
		fetch(`${BASE_PATH}`)
			.then(res => res.json())
			.then(post => this.setState({ post }))
			.catch(error => error)
	}

	render() {
		const { post } = this.state;
		return (
			<div className="container">
				<div className="card">
					<div className="card__title">Post List</div>
					<div className="card__body">
						<ul className="post-list">
							{post.map(({ userId, id, title, body }: IPost) => (
								<PostListItem
									key={id}
									userId={userId}
									id={id}
									title={title}
									body={body}
								/>
							))}
						</ul>
					</div>
				</div>
			</div>
		)
	}
}

export default PostList;
