export default {
  allProducts: (state: { products: any }) => state.products,
  categories: (state: { categories: any }) => state.categories,
  licences: (state: { licences: any }) => state.licences,
  users: (state: { users: any }) => state.users,
  sectors: (state: { publicSector: any }) => state.publicSector,
  countries: (state: { countries: any }) => state.countries,
  languages: (state: { languages: any }) => state.languages,
  maintainers: (state: { maintainers: any }) => state.maintainers,
  filteredProducts: (state: { filteredProducts: any }) =>
    state.filteredProducts,
}
