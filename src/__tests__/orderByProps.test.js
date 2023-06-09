import orderByProps from '../orderByProps';

test.each([
  [['name', 'level'], [
    { key: 'name', value: 'мечник' },
    { key: 'level', value: 2 },
    { key: 'attack', value: 80 },
    { key: 'defence', value: 40 },
    { key: 'health', value: 10 },
  ],
  ],
  [null, [
    { key: 'attack', value: 80 },
    { key: 'defence', value: 40 },
    { key: 'health', value: 10 },
    { key: 'level', value: 2 },
    { key: 'name', value: 'мечник' },
  ],
  ],
  [['defence', 'name', 'health', 'level', 'attack'], [
    { key: 'defence', value: 40 },
    { key: 'name', value: 'мечник' },
    { key: 'health', value: 10 },
    { key: 'level', value: 2 },
    { key: 'attack', value: 80 },
  ]],
])('testing with arr = %s', (arr, expected) => {
  const obj = {
    name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
  };
  const result = orderByProps(obj, arr);
  expect(result).toEqual(expected);
});

// test('testing', () => {
//   const obj = {
//     name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
//   };
//   const result = orderByProps(obj, ['name', 'level']);
//   expect(result).toEqual([
//     { key: 'name', value: 'мечник' },
//     { key: 'level', value: 2 },
//     { key: 'attack', value: 80 },
//     { key: 'defence', value: 40 },
//     { key: 'health', value: 10 },
//   ]);
// });
