const data = require('./data.json')
const R = require('ramda')

const canLift = R.curry(
  (craneMaxWeight, containerWeight) => craneMaxWeight >= containerWeight
)

// Conditia 1 
// De incarcat 5 containere si daca macar unul e prea greu de anulat tot

const canLiftAllContainers = R.curry((crane, containers) => {
  const canCraneLift = canLift(crane.maxWeight)
  const areAllLifted = R.all(canCraneLift)(containers)

  return areAllLifted
})

const crane = data.cranes[0]
const containersToLoad = data.containers.slice(0, 5)

canLiftAllContainers(crane, containersToLoad) ? 
  console.log('All containers are lifted') :
  console.log('Some of the containers are too heavy')

// Conditia 2
// Se sare peste container daca este prea greu

const getNLiftableContainers = (crane, containers, howMany) => {
  const canCraneLift = canLift(crane.maxWeight)
  const filteredContainers = R.filter(canCraneLift, containers)
  return filteredContainers.slice(0, howMany)
}

const firstFiveLiftableContainers = getNLiftableContainers(crane, data.containers, 5)
console.log(firstFiveLiftableContainers)


