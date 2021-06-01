import React from "react";
import Dropzone from "react-dropzone";

import { DropContainer, UploadMessage } from "./styles";

export default function DropZone({ handleUpload, index }) {
  const changeMessage = (isDragActive, isDragReject) => {
    if (!isDragActive) {
      return (
        <UploadMessage>Arraste sua imagem aqui ou clique aqui</UploadMessage>
      );
    }

    if (isDragReject) {
      return (
        <UploadMessage type="error">Arquivo não pode ser aceito</UploadMessage>
      );
    }

    return <UploadMessage type="success">Solte a imagem aqui</UploadMessage>;
  };

  return (
    <Dropzone
      accept=".csv  "
      onDrop={(acceptedFiles) => handleUpload(acceptedFiles, index)}
      multiple={false}
    >
      {({ getRootProps, getInputProps, isDragActive, isDragReject }) => (
        <DropContainer
          {...getRootProps()}
          isDragActive={isDragActive}
          isDragReject={isDragReject}
        >
          <input {...getInputProps()} />
          {changeMessage(isDragActive, isDragReject)}
        </DropContainer>
      )}
    </Dropzone>
  );
}
