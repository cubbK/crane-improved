const data = require('./data.json')
const R = require('ramda')

const canLift = R.curry(
  (craneMaxWeight, containerWeight) => craneMaxWeight >= containerWeight
)

/**
 * Returns true if can load all containers with the provided crane 
 * 
 * @param {object} crane 
 * @param {number[]} containers
 * @returns {boolean} 
 */
function canLoadAllContainers (crane, containers) {
  const canCraneLift = canLift(crane.maxWeight)

  return R.all(canCraneLift)(containers)
}

const crane = data.cranes[0]
const containersToLoad = data.containers.splice(0, 5)

const can = canLoadAllContainers(crane, containersToLoad)


// Conditia 1 
// De incarcat 5 containere si daca macar unul e prea greu de anulat tot



console.log(can)