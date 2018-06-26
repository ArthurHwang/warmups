function createCollection() {

  const items = []
  let nextId = 1

  return {
    getitems: function() {
      return items
    },
    create: function (item) {
      let newObj = { ...item
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
      // if (query = {}) {
      //   return items
      // }


      // for (let i = 0; i < items.length; i++) {
      //   let queryParam = Object.values(query)
      //   let itemParam = Object.values(items[i])
      //   console.log("queryParam: " + queryParam)
      //   console.log("itemParam: " + itemParam)
      //   if (queryParam === itemParam) {
      //     returned.push(itemParam)
      //   } else {
      //     return []
      //   }
      // }

      if (query = {}) {
        return items
      }
      // return []
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
