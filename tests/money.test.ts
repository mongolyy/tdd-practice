class Dollar {
  public amount: number;

  constructor(amount: number) {
    this.amount = amount;
  }

  public times(multiplier: number): Dollar {
    return new Dollar(this.amount * multiplier);
  }

  public equals(object: any): boolean {
    return this.amount === object.amount;
  }
}

describe("MoneyTest", () => {
  describe("times", () => {
    it("5 * 2 = 10", () => {
      const five = new Dollar(5);

      let product = five.times(2);
      expect(product.amount).toEqual(10);

      product = five.times(3);
      expect(product.amount).toEqual(15);
    });
  });

  describe("equals", () => {
    it("$5 = $5", () => {
      expect(new Dollar(5).equals(new Dollar(5))).toBeTruthy();
    });

    it("$5 != $6", () => {
      expect(new Dollar(5).equals(new Dollar(6))).toBeFalsy();
    });
  });
});
