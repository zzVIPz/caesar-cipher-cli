const caesarCipher = (chunk, action, shift) => {
  actionShift = action === 'encode' ? shift : 26 - shift;
  return chunk.replace(/[a-z]/gi, (char) => {
    const currentCharCode = char.charCodeAt();
    let formattedCode;
    if (currentCharCode >= 65 && currentCharCode <= 90) {
      formattedCode = ((currentCharCode - 65 + actionShift) % 26) + 65;
    } else if (currentCharCode >= 97 && currentCharCode <= 122) {
      formattedCode = ((currentCharCode - 97 + actionShift) % 26) + 97;
    }
    return String.fromCharCode(formattedCode);
  });
};
module.exports = caesarCipher;
