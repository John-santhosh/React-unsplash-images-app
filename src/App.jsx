import ThemeToggle from "./components/ThemeToggle";
import SearchForm from "./components/SearchForm";
import Gallery from "./components/Gallery";
const App = () => {
  return (
    <main>
      <div className="container">
        <ThemeToggle></ThemeToggle>
        <SearchForm></SearchForm>
        <Gallery></Gallery>
      </div>
    </main>
  );
};
export default App;
