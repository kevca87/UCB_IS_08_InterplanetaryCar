import {splitCommandParts,validateGridShape} from "./InterplanetaryCar.js"

describe("Split de la cadena de comandos", () => {
  it("TEST1: Debe retornar una lista las tres partes de los comandos de entrada", () => {
    expect(splitCommandParts("5,5/1,2N/IAIAIAIAA")).toEqual(["5,5","1,2N","IAIAIAIAA"]);
  });
  it("TEST2: Debe retornar una lista las tres partes de los comandos de entrada", () => {
    expect(splitCommandParts("5,5/1,2N/IAIAA")).toEqual(["5,5","1,2N","IAIAA"]);
  });
  it("TEST3: Listar las tres partes de los comandos, considerando alguno faltante", () => {
    expect(splitCommandParts("5,5//IAIAIAIAA")).toEqual(["5,5","","IAIAIAIAA"]);
  });
});

describe("Comando con partes faltantes (Falta '/') 5,5/1,2NIAIA ", () => {
  it("TEST1: Retornar una lista con tres cadenas vacias", () => {
    expect(splitCommandParts("5,5/1,2NIAIAIAIAA")).toEqual(["","",""]);
  });
});

describe("Validar la entrada del tamaño de la grilla", () => {
  it("TEST1: Retornar la forma (dimensiones) de la grilla", () => {
    expect(validateGridShape("5,5")).toEqual("5,5");
  });
  it("TEST2: Retornar dimensiones de la grilla por defecto", () => {
    expect(validateGridShape("")).toEqual("5,5");
  });
  it("TEST3: Retornar dimensiones de la grilla por defecto", () => {
    expect(validateGridShape("escribe-n,escribe-m")).toEqual("5,5");
  });
  it("TEST4: Retornar una dimensiones de la grilla por defecto", () => {
    expect(validateGridShape("6,escribe-m")).toEqual("6,5");
  });
  it("TEST5: Retornar una dimensiones de la grilla por defecto", () => {
    expect(validateGridShape(",7")).toEqual("5,7");
  });
  it("TEST6: Retornar dimensiones de la grilla por defecto", () => {
    expect(validateGridShape("anything")).toEqual("5,5");
  });
});