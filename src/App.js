import Home from './components/home';
import './App.css';
import DataProvider from './context/DataProvider';
import Form from './components/notes/Form';

function App() {
  return (
     <DataProvider>
      <Form />
      <Home />
     </DataProvider>
      
  );
}

export default App;
