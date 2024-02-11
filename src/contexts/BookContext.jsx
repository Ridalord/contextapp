import { createContext, useState } from "react";
import PropTypes from "prop-types"


export const BookContext = createContext()

const BookContextProvider = (props) => {
  const[books]=useState([
    { title: 'name of the wind', id: 1 },
    { title: 'the way of kings', id: 2 },
    { title: 'the final empire', id: 3 },
    { title: 'the hero of ages', id: 4 },
  ])
  return ( 
    <BookContext.Provider value={{ books }} >
      {props.children}
    </BookContext.Provider >
   );
}

BookContextProvider.propTypes = {
  children: PropTypes.node.isRequired
}
 
export default BookContextProvider;