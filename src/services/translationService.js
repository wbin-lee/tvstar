import t1 from "../data/t1.json";
import t2 from "../data/t2.json";
import t3 from "../data/t3.json";
import t4 from "../data/t4.json";
import t5 from "../data/t5.json";
import t6 from "../data/t6.json";
import t7 from "../data/t7.json";
import t8 from "../data/t8.json";
import t9 from "../data/t9.json";
import t10 from "../data/t10.json";
import t11 from "../data/t11.json";
import t12 from "../data/t12.json";
import t13 from "../data/t13.json";

const translatedData = {
  ...t1,
  ...t2,
  ...t3,
  ...t4,
  ...t5,
  ...t6,
  ...t7,
  ...t8,
  ...t9,
  ...t10,
  ...t11,
  ...t12,
  ...t13,
};

export function getSeriesData(seriesId) {
  return translatedData[seriesId] || null;
}

export function getLocalizedText(textObj, lang) {
  if (!textObj) return "";
  if (typeof textObj === "string") return textObj;
  return textObj[lang] || textObj.en || "";
}

export default translatedData;
