import Mock from "mockjs";
import houses from "./data/houses.json";
import hotHouses from "./data/hotHouses.json";

Mock.mock("/mock/houses", {
  code: 200,
  data: houses,
});
Mock.mock("/mock/hotHouses", {
  code: 200,
  data: hotHouses,
});
