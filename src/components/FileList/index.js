import React, { useEffect } from "react";

import { Container, FileInfo, Preview } from "./style";

export default function FileList({ file, handleDeleteUpload }) {
  return (
    <Container>
      <li>
        <FileInfo>
          <div>
            <strong>{file.name}</strong>
            <span>
              <button onClick={() => handleDeleteUpload()}>Excluir</button>
            </span>
          </div>
        </FileInfo>
      </li>
    </Container>
  );
}
