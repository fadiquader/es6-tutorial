(async function() {
  const getUser = (user) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if(!user) {
          reject('No User is Provided')
        }
        resolve(user);
      }, 10000)
    })
  }
  
  getUser('fadi')
  .then(user => {
    console.log('userrr: ', user)
  })
  .catch(err => {
    console.log(err)
  });

  getUser()
  .then(user => {
    console.log('userrr: ', user)
  })
  .catch(err => {
    console.log(err)
  });
  try {
    const user = await getUser('Quadre')
    console.log('Async/Await User: ', user)
    await getUser()
  } catch(err) {
    console.log('Async/Await Error: ', err)
  }
})();