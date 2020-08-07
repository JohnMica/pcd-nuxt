export default {
  fetchLinks(state: { links: any }, all: { directoryIndex: any }) {
    state.links = all.directoryIndex
  },
  fetchProducts(
    state: { products: any[]; filteredProducts: any },
    data: { showMore: boolean }
  ) {
    data.showMore = false
    state.products.push(data)
    state.filteredProducts = state.products
  },
  getCategories(state: { products: any[]; categories: any[] }) {
    const categoriesSet: any[] = []
    state.products.filter((el: { category: any[] }) => {
      el.category.forEach((element: any) => {
        categoriesSet.push(element)
      })
    })
    state.categories = [...new Set(categoriesSet)]
  },
  getlicences(state: { products: any[]; licences: any[] }) {
    const categoriesSet: any[] = []
    state.products.filter((el: { licence: any[] }) => {
      el.licence.forEach((element: any) => {
        categoriesSet.push(element)
      })
    })

    state.licences = [...new Set(categoriesSet)]
  },
  getLanguage(state: { products: any[]; languages: any[] }) {
    const categoriesSet: any[] = []
    state.products.filter((el: { language: any[] }) => {
      el.language.forEach((element: any) => {
        categoriesSet.push(element)
      })
    })

    state.languages = [...new Set(categoriesSet)]
  },
  getSector(state: { products: any[]; publicSector: any[] }) {
    const categoriesSet: any[] = []
    state.products.filter((el: { sector: any[] }) => {
      el.sector.forEach((element: any) => {
        categoriesSet.push(element)
      })
    })

    state.publicSector = [...new Set(categoriesSet)]
  },
  getCountries(state: { products: any[]; countries: any[] }) {
    const categoriesSet: any[] = []
    state.products.filter((el: { originCountry: any }) => {
      categoriesSet.push(el.originCountry)
    })

    state.countries = [...new Set(categoriesSet)]
  },
  getDevelopers(state: { products: any[]; developers: any[] }) {
    const devSet: any[] = []
    state.products.filter((el: { developers: any[] }) => {
      el.developers.forEach((developer: { name: any }) => {
        devSet.push(developer.name)
      })
    })

    state.developers = [...new Set(devSet)]
  },
  getUsers(state: { products: any[]; users: any[] }) {
    const usersSet: any[] = []
    state.products.filter((el: { users: any[] }) => {
      el.users.forEach((user: { name: string | any[] }) => {
        if (user.name.length > 0) {
          usersSet.push(user.name)
        }
      })
    })

    state.users = [...new Set(usersSet)]
  },
  getMaintainers(state: { products: any[]; maintainers: any[] }) {
    const maintainerSet: any[] = []
    state.products.filter((el: { maintainers: any[] }) => {
      el.maintainers.forEach((maintainer: { name: string | any[] }) => {
        if (maintainer.name.length > 0) {
          maintainerSet.push(maintainer.name)
        }
      })
    })

    state.maintainers = [...new Set(maintainerSet)]
  },
  updateChecked(state: { checked: any }, payload: any) {
    state.checked = payload
  },
  productLoaded(state: { productLoaded: boolean }) {
    state.productLoaded = true
  },
  updateFilteredProducts(
    state: { filteredProducts: any; products: any[] },
    data: {
      name: string
      countries: string[]
      sectors: string[]
      categories: string[]
      licences: string[]
      users: any
      languages: string[]
      maintainers: any
    }
  ) {
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
    state.filteredProducts = state.products.filter(
      (product: {
        name: any
        originCountry: any
        language: string | any[]
        licence: string | any[]
        maintainers: any[]
        category: string | any[]
        users: any[]
        sector: string | any[]
      }) => {
        let match = true
        if (name.length && !~name.indexOf(product.name)) {
          match = false
        }
        if (countries.length && !~countries.indexOf(product.originCountry)) {
          match = false
        }
        if (languages.length) {
          match =
            match &&
            (!languages.length ||
              languages.some(
                (cat: any) =>
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
                (cat: any) =>
                  ~licences.indexOf(
                    product.licence[product.licence.indexOf(cat)]
                  )
              ))
        }
        if (maintainers.length) {
          match =
            match &&
            (!maintainers.length ||
              maintainers.some((maint: any) => {
                if (
                  product.maintainers.some(
                    (el: { name: any }) => el.name === maint
                  )
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
                (cat: any) =>
                  ~categories.indexOf(
                    product.category[product.category.indexOf(cat)]
                  )
              ))
        }
        if (users.length) {
          match =
            match &&
            (!users.length ||
              users.some((user: any) => {
                if (product.users.some((el: { name: any }) => el.name === user))
                  return true
                else return false
              }))
        }
        if (sectors.length) {
          match =
            match &&
            (!sectors.length ||
              sectors.some(
                (cat: any) =>
                  ~sectors.indexOf(product.sector[product.sector.indexOf(cat)])
              ))
        }
        return match
      }
    )
  },
  resetProducts(state: { filteredProducts: any; products: any }) {
    state.filteredProducts = state.products
  },
  showHideMore(
    state: { filteredProducts: any[] },
    data: { name: any; value: any }
  ) {
    state.filteredProducts.forEach((el: { name: any; showMore: any }) => {
      if (el.name === data.name) {
        el.showMore = data.value
      }
    })
  },
}
