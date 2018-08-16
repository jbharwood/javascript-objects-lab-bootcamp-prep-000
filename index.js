var recipes = { key: "object" }

function updateObjectWithKeyAndValue(object, key, value) {
  var obj = { [key]: value}
  return Object.assign({}, object, obj)
}
function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
}