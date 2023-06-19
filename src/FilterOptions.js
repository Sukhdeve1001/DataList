import { React } from "react";

function FilterOptions() {
  return (

    <div>
      <h3>Filter Options</h3>
      {
       <select>
       <option value="category">By Category</option>
       <option value="date">By Date</option>
       <option value="status">By Status</option>
     </select>
     
      }
    </div>

  );
}

export default FilterOptions;
