import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import CustomNavbar from './components/CustomNavbar';
import Home from './components/Home';
import TableBooking from './components/TableBooking';
import BookingList from './components/BookingList';

function App() {
  return (
    <>
      <header>
        <CustomNavbar />
      </header>

      <main>
        <BookingList />
        <TableBooking />
        <Home />
      </main>
    </>
  );
}

export default App;
