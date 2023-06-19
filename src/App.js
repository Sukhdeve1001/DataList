import {React} from 'react';
import DataList from './DataList';
import FilterOptions from './FilterOptions';

function App() {
  return (
    <div>
      <h1>Data Listing and Filtering App</h1>
      <FilterOptions />
      <DataList />
    </div>
  );
}

export default App;
