import { Range } from "../model/range";

const getRanges = async (): Promise<Range[]> => {
  try {
    const resp = await fetch("http://localhost:3000/ranges");
    const data: Range[] = await resp.json();
    return data;
  } catch (err) {
    console.log(err);
    return [];
  }
};

export { getRanges };
