import renderTable from "../app";
import dataJson from "../data.json";

test("table", () => {
  expect(renderTable(dataJson)).toBe(undefined);
});
