class Money {
  protected amount: number;

  public equals(money: Money): boolean {
    return this.amount === money.amount;
  }
}

class Dollar extends Money {
  constructor(amount: number) {
    super();
    this.amount = amount;
  }

  public times(multiplier: number): Dollar {
    return new Dollar(this.amount * multiplier);
  }
}

class Franc extends Money {
  constructor(amount: number) {
    super();
    this.amount = amount;
  }

  public times(multiplier: number): Franc {
    return new Franc(this.amount * multiplier);
  }
}

describe("MoneyTest", () => {
  describe("times dollar", () => {
    it("5 * 2 = 10", () => {
      const five = new Dollar(5);
      expect(five.times(2)).toEqual(new Dollar(10));
      expect(five.times(3)).toEqual(new Dollar(15));
    });
  });

  describe("equals", () => {
    it("$5 = $5", () => {
      expect(new Dollar(5).equals(new Dollar(5))).toBeTruthy();
      expect(new Dollar(5).equals(new Dollar(6))).toBeFalsy();
      expect(new Franc(5).equals(new Franc(5))).toBeTruthy();
      expect(new Franc(5).equals(new Franc(6))).toBeFalsy();
    });
  });

  describe("times franc", () => {
    it("5 * 2 = 10", () => {
      const five = new Franc(5);
      expect(five.times(2)).toEqual(new Franc(10));
      expect(five.times(3)).toEqual(new Franc(15));
    });
  });
});
