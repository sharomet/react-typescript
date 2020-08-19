import React from 'react'
import { RouteComponentProps } from 'react-router';
import { IPost } from '../../components/postList/IPost'
import './post.scss';

type RouteParams = {
	id: string,
}

type PostState = {
	post: IPost,
}

class PostItem extends React.Component<RouteComponentProps<RouteParams>, PostState> {
	state = {
		post: {
			title: '',
			body: '',
		},
	}

	componentDidMount() {
		const id = this.props.match.params.id || '';
		fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
			.then(res => res.json())
			.then(post => { this.setState({ post }) })
	}

	render() {
		const { post } = this.state;
		const { title, body } = post;
		return (
			<section>
				<div className="container">
					<article className="post">
						<h1 className="post__title">{title}</h1>
						<p className="post__body">{body}</p>
					</article>
				</div>
			</section>
		)
	}
}

export default PostItem;