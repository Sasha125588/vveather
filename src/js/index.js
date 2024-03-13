import { getData } from "./api.js";
import { createHeader } from "./appHeader.js";
import { createContent } from "./appContent.js";

const app = async () => {
  const data = await getData(
    JSON.parse(localStorage.getItem("city")) || "Kyiv"
  );
  const header = createHeader(data.name);
  const content = createContent(data);
  document.body.append(header, content);
};
app();
