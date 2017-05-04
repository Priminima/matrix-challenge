export const aspects = [
  {
    id: 'year',
    title: 'Release Year',
    type: 'text'
  },
  {
    id: 'price',
    title: 'Price',
    type: 'number',
    unit: 'USD',
    weight: 5,
    best: 'min'
  },
  {
    id: 'screen',
    title: 'Screen Size',
    type: 'number',
    unit: '"',
    weight: 2,
    best: 'max'
  },
  {
    id: 'weight',
    title: 'Weight',
    type: 'number',
    unit: 'kg',
    weight: 2,
    best: 'min'
  },
  {
    id: 'ram',
    title: 'RAM',
    type: 'number',
    unit: 'gb',
    weight: 8,
    best: 'max'
  },
  {
    id: 'disk',
    title: 'Storage',
    type: 'number',
    unit: 'gb',
    weight: 6,
    best: 'max'
  },
  {
    id: 'battery',
    title: 'Battery life',
    type: 'number',
    unit: 'h',
    weight: 5,
    best: 'max'
  },
  {
    id: 'perf',
    title: 'Performance',
    type: 'score',
    weight: 7,
    best: 'max'
  },
  {
    id: 'ports',
    title: 'Connectivity',
    type: 'score',
    weight: 8,
    best: 'max'
  },
  {
    id: 'software',
    title: 'Software',
    type: 'score',
    weight: 8,
    best: 'max'
  }
];

export const alternatives = [
  {
    id: 1,
    title: 'MacBook 12"',
    values: {
      year: 2016,
      price: 1599,
      screen: 12,
      weight: 0.92,
      perf: 5,
      ram: 8,
      disk: 512,
      battery: 11,
      ports: 2,
      software: 9
    }
  },
  {
    id: 2,
    title: 'MacBook Pro 13"',
    values: {
      year: 2016,
      price: 2299,
      screen: 13,
      weight: 1.37,
      perf: 9,
      ram: 16,
      disk: 512,
      battery: 10,
      ports: 6,
      software: 9
    }
  },
  {
    id: 3,
    title: 'Surface Laptop',
    values: {
      year: 2017,
      price: 2199,
      screen: 13,
      weight: 1.25,
      perf: 8,
      ram: 16,
      disk: 512,
      battery: 14.5,
      ports: 7,
      software: 7
    }
  }
];
