import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Form from "./Container/Form/Form";
import Logged from "./Logged/Logged";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/logged" element={<Logged />} />
      </Routes>
    </Router>
  );
}

export default App;

//pallete https://coolors.co/palette/5603ad-8367c7-b3e9c7-c2f8cb-f0fff1
//login teamplate https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F007%2F656%2F151%2Foriginal%2Flogin-form-page-template-on-gradient-background-vector.jpg&f=1&nofb=1&ipt=29e0be0c7fdc35efd8359eed64e1b526f6c64eef7509001da96c052a44b010b2&ipo=images
