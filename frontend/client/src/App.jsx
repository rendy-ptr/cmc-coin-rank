import { useState, useEffect } from "react";
import axios from "axios";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Pagination from "./components/Pagination";
import Table from "./components/Table";

function App() {
  const [cryptoCurencies, setCryptoCurencies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(15);

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
  const currentItems = cryptoCurencies.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  }

  return (
    <>
      <Table dataCrypto={currentItems} currentPage={currentPage} itemsPerPage={itemsPerPage} />
      <Pagination itemsPerPage={itemsPerPage} totalItems={cryptoCurencies.length} paginate={paginate} />
    </>
  );
}

export default App;
