function createCollection() {
<<<<<<< HEAD
  var items = []
=======
  const items = []
>>>>>>> 940a6025c01b72914a2b513a5b54482c07ad9e33
  let nextId = 1
  return {
    getitems() {
      return items
    },
<<<<<<< HEAD
    create: function (item) {
      letz newObj = { ...item
      }
=======
    create(item) {
      let newObj = { ...item}
>>>>>>> 940a6025c01b72914a2b513a5b54482c07ad9e33
      newObj.id = nextId
      nextId++
      items.push(newObj)
      return newObj
    },
    findById(ident) {
      for (let i = 0; i < items.length; i++) {
        if (items[i].id = ident) {
          return items[i]
        }
      }
      return null
    },
    updateById(ident, updates) {
      for (let i = 0; i < items.length; i++) {
        if (items[i].id = ident) {
          items[i] = { ...items[i],
            ...updates
          }
          return items[i]
        }
      }
      return null
    },
<<<<<<< HEAD
    findWhere: function (query) {
      if (Object.keys(query).length < 1) {
        return items
      }
      const pair = Object.entries(query)[0]
      return items.filter(item => item[])
=======
    findWhere(query) {
      if (Object.keys(query) < 1) {
        return items
      }
      const pair = Object.entries(query)[0]
      return items.filter(item => item[pair[0]] === pair[1])
>>>>>>> 940a6025c01b72914a2b513a5b54482c07ad9e33
    },
    deleteById(id) {
      for (let i = 0; i < items.length; i++) {
        if (items[i].id === id) {
          const spliced = items[i]
          items.splice(i, 1)
          return spliced
        }
      }
      return null
    }
  }
}

const users = createCollection()
users.create({
  name: 'Tim',
  favoriteColor: 'chartreuse',
  isActive: true
})
