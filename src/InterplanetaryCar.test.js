//import {splitCommandParts} from "./InterplanetaryCar.js"

describe("Split de la cadena de comandos", () => {
  it("Debe retornar una lista las tres partes de los comandos de entrada", () => {
    expect(splitCommandParts("5,5/1,2N/IAIAIAIAA")).toEqual(87);
  });
});