import { createContext } from 'react';
// import "./theme.css";

const value = {
  theme: 'night'
};

const ThemeContext = createContext(value);

export default ThemeContext