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
  return Object.assign({}, object, [key])
}