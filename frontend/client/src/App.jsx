import { useState, useEffect } from "react";
import axios from "axios";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import "./App.css";
import Pagination from "./components/Pagination";
import Table from "./components/Table";
import DetailTable from "./components/DetailTable";
import Navbar from "./components/Navbar";

function App() {
  const [cryptoCurencies, setCryptoCurencies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = "http://localhost:5000/api/cryptocurrency";
        console.log("fetching data from:", url);
        const response = await axios.get(url);
        setCryptoCurencies(response.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  // console.log("index of last item", indexOfLastItem);
  // console.log("index of first item", indexOfFirstItem);
  const currentItems = cryptoCurencies.slice(indexOfFirstItem, indexOfLastItem);
  // console.log("current items",currentItems);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <Navbar />
      {/*  */}
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Table
                  dataCryptoPerPage={currentItems}
                  currentPage={currentPage}
                  itemsPerPage={itemsPerPage}
                />
                <Pagination
                  itemsPerPage={itemsPerPage}
                  totalItems={cryptoCurencies.length}
                  paginate={paginate}
                />
              </>
            }
          />
          <Route
            path="/detail/:cryptoSlug"
            element={<DetailTable dataCrypto={cryptoCurencies} />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
