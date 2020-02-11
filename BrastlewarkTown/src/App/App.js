import React, { useState, useEffect } from 'react';
import './App.scss';
import axios from 'axios';
import Swal from 'sweetalert2';
import Loader from './../components/Commons/Loader';
import SearchFilter from './../components/SearchFilter';
import PopulationList from './../components/PopulationList';

function App() {
  const [data, setData] = useState([])
  const [dataFilter, setDataFilter] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const url = `https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json`

  useEffect(() => {
    getDataElements()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const getDataElements = async () => {
    setIsLoading(true)
    try {
      const response = await axios.get(url)
      if (response.status === 200) {
        let data = response.data.Brastlewark
        setData(data)
        setDataFilter(data)
      } else {
        Swal.fire({
          type: 'error',
          title: 'Oops...',
          text: 'Something went wrong!'
        })
      }
    } catch (e) {
      Swal.fire({
        type: 'error',
        title: 'Oops...',
        text: e.message
      })
    }
    setIsLoading(false)
  }

  return (
    <div className="App">
      <div className='header'>
        <h1 className="title">Brastlewark Town</h1>
      </div>
      <SearchFilter data={data} callBack={(newData) => {
        setDataFilter(newData)
      }} />
      <hr />
      <Loader isLoading={isLoading}>
        {(data.length === 0 && !isLoading) || (dataFilter.length === 0) ? "No results found" : <PopulationList data={dataFilter} />}
      </Loader>
    </div>
  );
}

export default App;
