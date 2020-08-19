import React from 'react';
import { PostType } from './components/postList/PostType'
import PostListItem from './components/postList/PostListItem'
import './components/postList/postList.scss'

const BASE_PATH = 'https://jsonplaceholder.typicode.com/posts';

type PostState = {
  result: Array<PostType>
}

class App extends React.Component<{}, PostState> {

  state = {
    result: []
  }

  /*static getDerivedStateFromProps(props: PostProps, state: PostState): PostState | null {
    return true ?
  }*/

  componentDidMount(): void {
    fetch(`${BASE_PATH}`)
      .then(res => res.json())
      .then(result => this.setPosts(result))
      .catch(error => error)
  }

  /*shouldComponentUpdate(nextProps: PostProps, nextState: PostState): boolian {
    return true;
  }*/

  setPosts(result: Array<PostType>): void {
    this.setState({ result })
  }

  render() {
    const { result } = this.state;
    return (
      <div className="wrapper">
        <div className="container">
          <div className="card">
            <div className="card__title">
              Post List
            </div>
            <div className="card__body">
              <ul className="post-list">
                {result.map(({ userId, id, title, body }) => (
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
      </div>
    )
  }
}

export default App;
