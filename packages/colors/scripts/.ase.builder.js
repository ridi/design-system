const ase = require('ase-utils');
const flatMap = require('lodash/flatMap');

module.exports = function aseEncode(data) {
  const aseData = flatMap(data, array => array.map(item => ({
    name: `${item.name} (${item.color.toHex()}, ${item.color.toHwb()})`,
    model: 'RGB',
    color: [item.color.red, item.color.green, item.color.blue],
    type: 'global',
  })));

  return ase.encode({
    version: '1.0',
    groups: [],
    colors: aseData,
  });
};
