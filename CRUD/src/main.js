function createCollection() {
  const items = []
  let nextId = 1

  return {
    getitems() {
      return items
    },
    create(item) {
      let newObj = { ...item}
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
    findWhere(query) {
      if (Object.keys(query) < 1) {
        return items
      }
      const pair = Object.entries(query)[0]
      return items.filter(item => item[pair[0]] === pair[1])
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
