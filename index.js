var recipes = { key: "object" }

function updateObjectWithKeyAndValue(object, key, value) {
  var obj = { [key]: value}
  return Object.assign({}, object, obj)
}
function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}
function deleteFromObjectByKey(object, key) {
  var obj = { [key]: 'fuck'}
  var object2 = Object.assign({}, object, obj)
  delete object2[key]
  return object2
}