import styled, { css } from "styled-components";

const dragActive = css`
  border-color: #006400;
`;
const dragReject = css`
  border-color: #ff0000;
`;

export const DropContainer = styled.div.attrs({
  className: "dropzone",
})`
  border: 2px dashed #ddd;
  border-radius: 4px;
  cursor: pointer;
  transition: pointer;
  ${(props) => props.isDragActive && dragActive}
  ${(props) => props.isDragReject && dragReject}
`;

const messageColors = {
  default: "#999",
  error: "#ff0000",
  success: "#006400",
};

export const UploadMessage = styled.p`
  display: flex;
  color: ${(props) => messageColors[props.type || "default"]};
  justify-content: center;
  align-self: center;
  padding: 15px 0;
`;
