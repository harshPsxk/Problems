module.exports =

  function fileAnalyser(input) {
    const numberLines = input.split('\n');
    const lineCount = numberLines.length;

    const trimmedInput = input.trim();
    const words = trimmedInput ? trimmedInput.split(/\s+/) : [];
    const wordCount = words.length;

    const nonWhitespaceCharacters = input.replace(/\s/g, '');
    const characterCount = nonWhitespaceCharacters.length;

    console.log("Input mila", input);

    console.log('--------->', lineCount)
    console.log('+++++++++>', wordCount)
    console.log('=========>', characterCount)
    return {
      lineCount,
      characterCount,
      wordCount
    }
  }