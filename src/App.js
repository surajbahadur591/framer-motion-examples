import "./App.css";
import Card from "./components/Card";
import Header from "./components/Header";
import { motion } from "framer-motion";
import Modal from "./components/Modal";
function App() {
  return (
    <>
      <motion.div animate={{ }} className="">
        <Header></Header>
        <Modal></Modal>
        {/* <Card></Card> */}
      </motion.div>
    </>
  );
}

export default App;
