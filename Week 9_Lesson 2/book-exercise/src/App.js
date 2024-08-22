import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomNavbar from './components/CustomNavbar';
import CustomFooter from './components/CustomFooter';
import AllTheBooks from './components/AllTheBooks';
import SingleBook from './components/SingleBook';
import horror from './data/horror.json';
import BookList from './components/BookList';
import CustomSearch from './components/CustomSearch'; 


function App() {
  return (
    <>
      <header>
        <CustomNavbar />
      </header>

      <main className="py-3 mt-5">
        <CustomSearch />
        <AllTheBooks />
        <SingleBook book={horror[0]} />
        <BookList list={horror} />
      </main>

      <footer className='mt-5'>
        <CustomFooter />
      </footer>
    </>
  );
}

export default App;
