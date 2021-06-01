import React, { useEffect, useState } from "react";
import DataGrid from "./DataGrid";
import "./styles.css";

const parseCSV = (text) => {
  const result = {
    header: [],
    data: [],
  };

  const [header, ...content] = text.split("\n");

  result.header = header.split(",");

  const maxCols = result.header.length;

  content.forEach((item) => {
    result.data.push(item.split(",").slice(0, maxCols));
    console.log(result.data);
  });

  return result;
};

export default function App() {
  const [csv, setCsv] = useState(null);
  useEffect(() => {
    fetch("/teste1.csv")
      .then((r) => r.text())
      .then((text) => {
        setCsv(parseCSV(text));
      });
  }, []);

  return (
    <div className="App">
      <DataGrid csv={csv} />
    </div>
  );
}
