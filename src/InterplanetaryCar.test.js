import {toInt,stringCalculator as addNumbers,getDelimiter,getDelimitersList} from "./InterplanetaryCar.js"

describe("Ingresar una cadena con un unico numero retornar el mismo numero (como int)", () => {
  it("Debe retornar el numero convertido de cadena a int", () => {
    expect(addNumbers("87")).toEqual(87);
  });
});