import { useState } from "react";
import { Users } from "./users";
import "./app.css";
import Table from "./Table";

function App() {
   const [query, setQuery] = useState("");
   const keys = ["name", "company_name", "email",];
   const search = (data) => {
     return data.filter((item) =>
       keys.some((key) => item[key].toLowerCase().includes(query))
     );
   };
 return (
   <div className="app">
       <input
         className="search"
         placeholder="Search..."
         onChange={(e) => setQuery(e.target.value.toLowerCase())}
       />
     {<Table data={search(Users)} />}
   </div>
 );
 }

export default App;
