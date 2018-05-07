function theBeatlesPlay(musicians, instruments) {
  var output = [];
  
  for (let i = 0; i < musicians.length; i++) {
    var phrase = `${musicians[i]} plays ${instruments[i]}`;
    output.push(phrase);
  }
  return output;
}