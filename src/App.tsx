import React from 'react';
import Header from './components/header/Header'

//import { RouteComponentProps } from 'react-router'

/*type RouteParams = {
  id: string
}
*/
//RouteComponentProps<RouteParams>
//const id = this.props.match.param.id || '';

const App: React.FC = ({ children }) => (
  <div className="wrapper">
    <Header/>
    {children}
  </div>
)

export default App;
