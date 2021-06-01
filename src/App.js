import DropZone from "components/Dropzone";
import FileList from "components/FileList";
import React, { useEffect, useState } from "react";
// import DataGrid from "./DataGrid";
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
    console.log(item.split(","));
    let coluna = item.split(",");
    // result.data.push(item.split(",").slice(0, maxCols));
    result.data.push({
      codigo: coluna[0],
      name: coluna[1],
      quantidade: Number(coluna[2]),
      unidade: coluna[3],
      receita: Number(coluna[4]),
      custo: Number(coluna[5]),
    });
    console.log(result.data);
  });

  return result;
};

export default function App() {
  const [dropzoneIsAvailable, setDropzoneIsAvailable] = useState(false);
  const [csv, setCsv] = useState(null);
  const [file, setFile] = useState({});

  const handleUpload = async (file) => {
    console.log(file);
    setFile(file[0]);
  };

  const handleDeleteUpload = () => {
    setFile({});
  };

  const submitCSV = (file) => {
    file.text().then((text) => {
      setCsv(parseCSV(text));
    });
  };

  return (
    <div className="App">
      <button className="botao" onClick={() => setDropzoneIsAvailable(true)}>
        Upload CSV
      </button>
      {dropzoneIsAvailable ? (
        <>
          {" "}
          <DropZone handleUpload={handleUpload} />{" "}
        </>
      ) : null}
      {file?.name && (
        <>
          <FileList file={file} handleDeleteUpload={handleDeleteUpload} />
          <button onClick={() => submitCSV(file)}>Enviar</button>
        </>
      )}
    </div>
  );
}
//setCsv(parseCSV(file));
