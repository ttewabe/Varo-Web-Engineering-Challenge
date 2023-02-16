import data from "../data";

const generateImageUrl = (fileSize, filePath) => {
  return `${data.imageBaseUrl}/${fileSize}/${filePath}`;
};

export default generateImageUrl;
