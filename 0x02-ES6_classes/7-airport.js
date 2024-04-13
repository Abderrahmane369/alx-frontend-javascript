/*eslint-disable*/
import util from 'util';

export default class Airport {
  constructor (name, code) {
    this._name = name;
    this._code = code;
  }

  [ util.inspect.custom ]() {
    const {_name, _code} = this;
    return `Airport [${this._code}] ${JSON.stringify({_name, _code})}`;
  }
  toString () {
    return `[object ${this._code}]`;
  }
};
