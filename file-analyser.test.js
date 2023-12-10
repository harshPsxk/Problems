const fileAnalyser = require('./file-analyser');

test('returns character count 0, word count 0, line count 1 when given an empty string', () => {
  const result = fileAnalyser('');
  expect(result).toEqual({
    lineCount: 1,
    wordCount: 0,
    characterCount: 0
  });
});

test('returns character count 6, word count 2, line count 3 when given BIG BOB', () => {
  const result = fileAnalyser(`
  BIG  BOB
  `);
  expect(result).toEqual({
    lineCount: 3,
    wordCount: 2,
    characterCount: 6
  });
});
