/*eslint-disable*/
import util from 'util';

export default class Airport {
  constructor (name, code) {
    this._name = name;
    this._code = code;
  }

  [ util.inspect.custom ]() {
    return `Airport [${this._code}] ${this}`;
  }
  toString () {
    return `[Object ${this._code}]`;
  }
};
