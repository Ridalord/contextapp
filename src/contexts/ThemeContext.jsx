import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const ThemeContext = createContext();

// class ThemeContextProvider extends Component {
//   static propTypes = {
//     children: PropTypes.node.isRequired,
//   };

//   state = {
//     isLightTheme: true,
//     light: { syntax: '#555', ui: '#ddd', bg: '#eee' },
//     dark: { syntax: '#ddd', ui: '#333', bg: '#555' }
//   };
//   toggleTheme = () => {
//     this.setState({isLightTheme: !this.state.isLightTheme})
//   }
//   render() {
//     return (
//       <ThemeContext.Provider value={{ ...this.state, toggleTheme: this.toggleTheme }}>
//         {this.props.children}
//       </ThemeContext.Provider>
//     );
//   }
// }

const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState({
    isLightTheme: true,
    light: { syntax: '#555', ui: '#ddd', bg: '#eee' },
    dark: { syntax: '#ddd', ui: '#333', bg: '#555' }
  })
  const toggleTheme = () => {
    setTheme({...theme, isLightTheme: !theme.isLightTheme})
  }
  return ( 
    <ThemeContext.Provider value={{ ...theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
   );
}
 
ThemeContextProvider.propTypes = {
  children: PropTypes.node.isRequired
}

export default ThemeContextProvider;
