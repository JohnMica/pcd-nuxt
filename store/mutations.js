export default {
  fetchLinks(state, all) {
    state.links = all.directory_index
  },
  fetchProducts(state, data) {
    data.showMore = false
    state.products.push(data)
    state.filteredProducts = state.products
  },
  getCategories(state) {
    const categoriesSet = []
    state.products.filter((el) => {
      el.category.forEach((element) => {
        categoriesSet.push(element)
      })
    })
    state.categories = [...new Set(categoriesSet)]
  },
  getlicences(state) {
    const categoriesSet = []
    state.products.filter((el) => {
      el.licence.forEach((element) => {
        categoriesSet.push(element)
      })
    })

    state.licences = [...new Set(categoriesSet)]
  },
  getLanguage(state) {
    const categoriesSet = []
    state.products.filter((el) => {
      el.language.forEach((element) => {
        categoriesSet.push(element)
      })
    })

    state.languages = [...new Set(categoriesSet)]
  },
  getSector(state) {
    const categoriesSet = []
    state.products.filter((el) => {
      el.sector.forEach((element) => {
        categoriesSet.push(element)
      })
    })

    state.sector = [...new Set(categoriesSet)]
  },
  getCountries(state) {
    const categoriesSet = []
    state.products.filter((el) => {
      categoriesSet.push(el.origin_country)
    })

    state.countries = [...new Set(categoriesSet.flat())]
  },
  getDevelopers(state) {
    const devSet = []
    state.products.filter((el) => {
      el.developers.forEach((developer) => {
        devSet.push(developer.developer_name)
      })
    })

    state.developers = [...new Set(devSet)]
  },
  getUsers(state) {
    const usersSet = []
    state.products.filter((el) => {
      el.users.forEach((user) => {
        if (user.user_name.length > 0) {
          usersSet.push(user.user_name)
        }
      })
    })

    state.users = [...new Set(usersSet)]
  },
  getMaintainers(state) {
    const maintainerSet = []
    state.products.filter((el) => {
      el.maintainers.forEach((maintainer) => {
        if (maintainer.maintainer_name.length > 0) {
          maintainerSet.push(maintainer.maintainer_name)
        }
      })
    })

    state.maintainers = [...new Set(maintainerSet)]
  },
  updateChecked(state, payload) {
    state.checked = payload
  },
  productLoaded(state) {
    state.productLoaded = true
  },
  updateFilteredProducts(state, data) {
    const {
      name,
      countries,
      sectors,
      categories,
      licences,
      users,
      languages,
      maintainers,
    } = data
    state.filteredProducts = state.products.filter((product) => {
      let match = true
      if (name.length && !~name.indexOf(product.name)) {
        match = false
      }
      if (countries.length && !~countries.indexOf(product.origin_country)) {
        match = false
      }
      if (languages.length) {
        match =
          match &&
          (!languages.length ||
            languages.some(
              (cat) =>
                ~languages.indexOf(
                  product.language[product.language.indexOf(cat)]
                )
            ))
      }
      if (licences.length) {
        match =
          match &&
          (!licences.length ||
            licences.some(
              (cat) =>
                ~licences.indexOf(product.licence[product.licence.indexOf(cat)])
            ))
      }
      if (maintainers.length) {
        match =
          match &&
          (!maintainers.length ||
            maintainers.some((maint) => {
              if (
                product.maintainers.some((el) => el.maintainer_name === maint)
              )
                return true
              else return false
            }))
      }
      if (categories.length) {
        match =
          match &&
          (!categories.length ||
            categories.some(
              (cat) =>
                ~categories.indexOf(
                  product.category[product.category.indexOf(cat)]
                )
            ))
      }
      if (users.length) {
        match =
          match &&
          (!users.length ||
            users.some((user) => {
              if (product.users.some((el) => el.user_name === user)) return true
              else return false
            }))
      }
      if (sectors.length) {
        match =
          match &&
          (!sectors.length ||
            sectors.some(
              (cat) =>
                ~sectors.indexOf(product.sector[product.sector.indexOf(cat)])
            ))
      }
      return match
    })
  },
  resetProducts(state) {
    state.filteredProducts = state.products
  },
  showHideMore(state, data) {
    state.filteredProducts.forEach((el) => {
      if (el.name === data.name) {
        el.showMore = data.value
      }
    })
  },
}
