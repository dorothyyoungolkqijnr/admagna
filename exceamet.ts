class ExampleClass {
  // The 'exp' property is protected, meaning it is accessible within this class and its subclasses.
  protected exp: number;

  constructor(expValue: number) {
    this.exp = expValue;
  }

  // Method to set the value of 'exp'. It ensures that 'exp' is never negative.
  setExp(value: number): void {
    if (value < 0) {
      console.warn('exp should not be negative. Value not set.');
    } else {
      this.exp = value;
    }
  }

  // Method to get the current value of 'exp'.
  getExp(): number {
    return this.exp;
  }

  // Additional methods or properties can be added here.
}
