export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  get code() {
    return this._code;
  }

  set code(_) {
    this._code = _;
  }

  get name() {
    return this._name;
  }

  set name(_) {
    this._name = _;
  }

  displayFullCurrency() {
    return `${this.name} (${this._code})`;
  }
}
