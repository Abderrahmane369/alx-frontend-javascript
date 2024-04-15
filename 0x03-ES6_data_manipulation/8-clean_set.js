/*eslint-disable*/
export default function cleanSet(set, startString) {
    if (typeof startString !== 'string' || startString === '' || typeof set !== 'set') {
      return '';
    }
  
    const result = [...set]
      .filter(item => item.startsWith(startString))
      .map(item => item.slice(startString.length))
      .join('-');
  
    return result;
  }