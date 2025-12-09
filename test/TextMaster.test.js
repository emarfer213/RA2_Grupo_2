import { analyze, reverse } from "../index.js";
describe("Prueba TextMaster", () => {
  it("Prueba de ejemplo", () => {
    expect(1 + 1).toBe(2);
  });

  it("Prueba de la función reverse", () => {
    expect(reverse("hola")).toBe("aloh");
  });

    it("Prueba de la función analyze", () => {
    expect(analyze("hola que tal")).toEqual({"length":12,"word_count":3,"has_numbers":false});
  });
});