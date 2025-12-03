import { reverse } from "../index.js";
describe("Prueba TextMaster", () => {
  it("Prueba de ejemplo", () => {
    expect(1 + 1).toBe(2);
  });

  it("Prueba de la función reverse", () => {
    expect(reverse("hola")).toBe("aloh");
  });
});