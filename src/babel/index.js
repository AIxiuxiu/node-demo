export class Hello {
  constructor(name) {
    this.name = name.replceAll(' ', '');
  }

  say() {
    return `Hello ${this.name}`
  }
}
