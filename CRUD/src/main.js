function createCollection() {
  var items = []
  let nextId = 1
  return {
    getitems: function() {
      return items
    },
    create: function (item) {
      letz newObj = { ...item
      }
      newObj.id = nextId
      nextId++
      items.push(newObj)
      return newObj
    },
    findById: function (ident) {
      for (let i = 0; i < items.length; i++) {
        if (items[i].id = ident) {
          return items[i]
        }
      }
      return null
    },
    updateById: function (ident, updates) {
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
    findWhere: function (query) {
      if (Object.keys(query).length < 1) {
        return items
      }
      const pair = Object.entries(query)[0]
      return items.filter(item => item[])
    },
    deleteById: function (ident) {
      for (let i = 0; i < items.length; i++) {
        if (items[i].id === ident) {
          let spliced = items.splice(i, 1)
          return spliced[0]
        } else {
          return null
        }
      }
    }
  }
}

const users = createCollection()
users.create({
  name: 'Tim',
  favoriteColor: 'chartreuse',
  isActive: true
})
