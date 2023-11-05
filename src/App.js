import './App.css';
import Header from './Components/Header';
import Information from './Components/Information';
import MedicalHistory from './Components/MedicalHistory';
import Stats from './Components/Stats';
import { motion } from 'framer-motion';

function App() {
  return (
    <div className='relative overflow-hidden'>
      <a className='flex p-5 items-center'>
        <img src={require("./Components/Assets/back.png")} className='px-2'></img>
        <h1 className='text-header font-bold text-xl'>View patient</h1>
      </a>
      <hr className='text-gray'></hr>
      <motion.div initial={{x: "100%"}} animate={{x:0}}>
      <Header/>
      </motion.div>
      <hr className='text-gray'></hr>
      <motion.div initial={{x: "-100%"}} animate={{x:0}} >
          <Stats></Stats>
      </motion.div>
      <motion.div initial={{x: "100%"}} animate={{x:0}} >
          <Information/>
      </motion.div>
      <hr className='text-gray'></hr>
      <motion.div initial={{x: "-100%"}} animate={{x:0}} >
          <MedicalHistory/>
      </motion.div>
      <hr className='text-gray'></hr>
    </div>
  );
}

export default App;
