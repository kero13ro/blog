import { useState, useEffect, useRef } from "react";
import { API_GET_DATA } from '../../global/constants'

import Edit from "./components/Edit";
import Item from "./components/Item";
import "./index.css";

async function fetchData(setData) {
  const res = await fetch(API_GET_DATA)
  const { data } = await res.json()
  setData(data)
}

async function fetchSetData(data) {
  await fetch(API_GET_DATA, {
    method: "PUT",
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify({ data })
  })
}

const Home = () => {
  const [listData, setData] = useState([]);
  const submittingStatus = useRef(false);

  useEffect(() => {
    if (!submittingStatus.current) {
      return
    }
    fetchSetData(listData)
      .then(_ => submittingStatus.current = false)
  }, [listData])

  useEffect(() => {
    fetchData(setData)
  }, [])

  return (
    <div className="app">
      <Edit add={setData} submittingStatus={submittingStatus} />

      <div className="list">
        {listData.map((item) => {
          const { note, id } = item;
          return (
            <Item
              key={id}
              id={id}
              note={note}
              deleteData={setData}
              submittingStatus={submittingStatus}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Home;
