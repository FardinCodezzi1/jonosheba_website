import Header from "./layout/header/header";
import Footer from "./layout/footer/footer";
import Jonosheba from "./jonoshebaHome/jonosheba";
import DownloadSection from "./components/jonoshebaHome/downloadSection";

function App() {
  return (
    <>
      <Header />
      <Jonosheba />
      <DownloadSection />
      <Footer />
    </>
  );
}

export default App;
