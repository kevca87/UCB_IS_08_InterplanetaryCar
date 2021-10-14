import {splitCommandParts} from "./InterplanetaryCar.js"

describe("Split de la cadena de comandos", () => {
  it("TEST1: Debe retornar una lista las tres partes de los comandos de entrada", () => {
    expect(splitCommandParts("5,5/1,2N/IAIAIAIAA")).toEqual(["5,5","1,2N","IAIAIAIAA"]);
  });
  it("TEST2: Debe retornar una lista las tres partes de los comandos de entrada", () => {
    expect(splitCommandParts("5,5/1,2N/IAIAA")).toEqual(["5,5","1,2N","IAIAA"]);
  });
});