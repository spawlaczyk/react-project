const strContains = (stringA, stringB) => {
  if(stringA.toLowerCase().includes(stringB.toLowerCase())){
    return true;
  } else {
    return false;
  }
}

export default strContains;