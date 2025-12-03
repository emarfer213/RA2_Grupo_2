import { reverse, transform } from "../index.js";
describe("Prueba TextMaster", () => {
  it("Prueba de ejemplo", () => {
    expect(1 + 1).toBe(2);
  });

  it("Prueba de la función reverse", () => {
    expect(reverse("hola")).toBe("aloh");
  });

  it("Prueba de la función transform", () => {
    expect(transform("hola", "upper")).toBe("HOLA");
    expect(transform("HOLA", "lower")).toBe("hola");
    expect(transform("Esto es un texto de ejemplo", "asd")).toBe("Error: Invalid 'action' parameter");
  });
});