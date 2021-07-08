function a(x, y) {
  var firstArray = x[0];
  var secondArray = x[1];
  var array1Length = firstArray.length;
  var array2Length = secondArray.length;
  var result = [];
  if (firstArray.length != secondArray.length) {
    throw new Error('Please match the array length');
  }
  for (var i = 0; i < array1Length; i++) {
    result.push(y(firstArray[i], secondArray[i]));
  }
  return result;
}

function b(x, y) {
  var result = x[0];
  var arrayLength = x.length;
  if (arrayLength < 1) {
    throw new Error('Please input non empty array');
  }
  for (var i = 1; i < arrayLength; i++) {
    result = y(result, x[i]);
  }
  return result;
}

exports.a = a;
exports.b = b;
