import Header from "./components/Header";
import Home from "./components/Home";
import MyLearning from "./components/MyLearning";
import Work from "./components/Work";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App snap-y snap-mandatory ">
      <Header />
      <Home />
      <Work id="work" />
      <MyLearning />
      <Contact />
    </div>
  );
}

export default App;
