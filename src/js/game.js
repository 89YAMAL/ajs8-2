export default class ErrorRepository {
  constructor() {
    this.map = new Map();
  }

  add(number, text) {
    this.map.set(number, text);
  }

  translate(code) {
    if (this.map.has(code)) {
      return this.map.get(code);
    } return 'Unknown error';
  }
}
