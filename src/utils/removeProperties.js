/**
 * Returns the given `obj` without the `property`.
 *
 * @param {Object} obj
 * @param {String} property
 *
 * @returns {Object}
 */
function removeProperty(obj, property) {
  const { [property]: unused, ...rest } = obj

  return rest
}


/**
 * Returns the given `obj` without the `properties`.
 * 
 * @param {Object} obj
 * @param {Array<String>} properties
 * @returns {Object}
 */
function removeProperties(obj, properties) {
  return properties.reduce((acc, property) => removeProperty(acc, property), obj)
}

export default removeProperties
