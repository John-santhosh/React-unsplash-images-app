import { FaMoon, FaSun } from "react-icons/fa";
import { useGlobalContext } from "../context";
const ThemeToggle = () => {
  const { isDarkTheme, toggleDarkTheme } = useGlobalContext();
  return (
    <div className="toggle-container">
      <button className="togglebtn " onClick={toggleDarkTheme}>
        {isDarkTheme ? (
          <FaSun></FaSun>
        ) : (
          <FaMoon style={{ color: "#333" }}></FaMoon>
        )}
      </button>
    </div>
  );
};

export default ThemeToggle;
