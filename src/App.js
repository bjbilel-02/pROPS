import "./App.css";
import Profil from "./comopent/profile/Profil";
import image from "./comopent/profile/pic.jpg";

function App() {
  return (
    <div className="App">
      <Profil
        fullName="Bjeoui MED Bilel"
        bio="Hi im Bilel 27 years old and im a Fullstack Js Developper"
        profession="Web Developper"
      >
        {image}
      </Profil>
    </div>
  );
}

export default App;