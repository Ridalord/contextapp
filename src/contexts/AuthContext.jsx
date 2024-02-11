import { createContext, useState } from 'react';
import PropTypes from "prop-types";


export const AuthContext = createContext();

// class AuthContextProvider extends Component {
//   static propTypes = {
//     children: PropTypes.node.isRequired,
//   };
//   state = { isAuthenticated: false }
//   toggleAuth = () => {
//     this.setState({isAuthenticated: !this.state.isAuthenticated})
//   }
//   render() { 
//     return (
//       <AuthContext.Provider value={{ ...this.state, toggleAuth: this.toggleAuth }}>
//         {this.props.children }
//       </AuthContext.Provider>
//     );
//   }
// }


const AuthContextProvider = ({children}) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const toggleAuth = () => {
    setIsAuthenticated(prev => !prev)
  }
  return ( 
    <AuthContext.Provider value={{ isAuthenticated, toggleAuth }}>
      {children}
    </AuthContext.Provider>
   );
}

AuthContextProvider.propTypes = {
  children: PropTypes.node.isRequired
}
 
export default AuthContextProvider;
