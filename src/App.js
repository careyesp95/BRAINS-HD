import { ChakraProvider } from "@chakra-ui/react";
import { AlertProvider } from "./context/alertContext.js";
import Home from './pages/Home.js';
import About from './components/About/About.js';
import Contact from './components/Contact/Contact.js';
import Footer from './components/Footer/Footer.js';
import Mercado from './components/Mercado/Mercado.js';
import CasosClient from './components/CasosClient/CasosClient.js';


function App() {
  return ( 
      <ChakraProvider>
        <AlertProvider>
          <main>
            <Home/>
            <About />
            <CasosClient />
            <Mercado />
            <Contact />
            <Footer />
          </main>
        </AlertProvider>
    </ChakraProvider>
  ); 
} 
 
export default App;