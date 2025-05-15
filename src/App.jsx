import Container from "./components/Container";
import DarkModeBtn from "./components/Header/DarkModeBtn";
import MainBody from "./pages/Body/MainBody";

const App = () => {
  return (
    <>
      <Container>
        <MainBody />
        <DarkModeBtn />
      </Container>
    </>
  );
};

export default App;
