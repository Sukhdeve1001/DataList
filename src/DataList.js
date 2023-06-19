import {React} from 'react';
import { generateFakeData } from './fakeData';

function DataList() {
  const data = generateFakeData();

  return (
    <div>
      <h2>Data List</h2>
      <ul>
        {data.map(item => (
          <li key={item.id}>
            <span>{item.name}</span>
            <span>{item.category}</span>
            <span>{item.date.toString()}</span>
            <span>{item.status}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DataList;
