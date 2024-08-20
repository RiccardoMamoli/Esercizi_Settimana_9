import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomNavbar from './components/CustomNavbar';
import CustomFooter from './components/CustomFooter';
import AllTheBooks from './components/AllTheBooks';



function App() {
  return (
    <>
      <header>
        <CustomNavbar />
      </header>

      <main className="py-3">
        <AllTheBooks />
      </main>

      <footer> 
        <CustomFooter />
      </footer>
    </>
  );
}

export default App;
