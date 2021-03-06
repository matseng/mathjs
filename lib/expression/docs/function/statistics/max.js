module.exports = {
  'name': 'max',
  'category': 'Statistics',
  'syntax': [
    'max(a, b, c, ...)',
    'max(A)',
    'max(A, dim)'
  ],
  'description': 'Compute the maximum value of a list of values.',
  'examples': [
    'max(2, 3, 4, 1)',
    'max([2, 3, 4, 1])',
    'max([2, 5; 4, 3], 0)',
    'max([2, 5; 4, 3], 1)',
    'max(2.7, 7.1, -4.5, 2.0, 4.1)',
    'min(2.7, 7.1, -4.5, 2.0, 4.1)'
  ],
  'seealso': [
    //'sum',
    //'prod',
    //'avg',
    //'var',
    //'std',
    'mean',
    //'median',
    'min'
  ]
};
