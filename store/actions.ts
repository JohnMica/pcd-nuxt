/* eslint-disable no-console */
import $axios from 'axios'
const Ajv = require('ajv')
const schemaType = {
  definitions: {},
  $schema: 'http://json-schema.org/draft-07/schema#',
  $id: 'http://example.com/root.json',
  type: 'object',
  title: 'The Root Schema',
  required: [
    'name',
    'entry_type',
    'description',
    'official_url',
    'repository',
    'logo_url',
    'language',
    'originCountry',
    'sector',
    'category',
    'licence',
    'developers',
    'maintainers',
    'users',
  ],
  properties: {
    name: {
      $id: '#/properties/name',
      type: 'string',
      title: 'The Name Schema',
      default: '',
      pattern: '^(.*)$',
    },
    entry_type: {
      $id: '#/properties/entry_type',
      type: 'string',
      title: 'The Entry_type Schema',
      default: '',
      pattern: '^(.*)$',
    },
    description: {
      $id: '#/properties/description',
      type: 'string',
      title: 'The Description Schema',
      default: '',
      pattern: '^(.*)$',
    },
    official_url: {
      $id: '#/properties/official_url',
      type: 'string',
      title: 'The Official_url Schema',
      default: '',
      pattern: '^(.*)$',
    },
    repository: {
      $id: '#/properties/repository',
      type: 'string',
      title: 'The Repository Schema',
      default: '',
      pattern: '^(.*)$',
    },
    logo_url: {
      $id: '#/properties/logo_url',
      type: 'string',
      title: 'The Logo_url Schema',
      default: '',
      pattern: '^(.*)$',
    },
    language: {
      $id: '#/properties/language',
      type: 'array',
      title: 'The Language Schema',
      items: {
        $id: '#/properties/language/items',
        type: 'string',
        title: 'The Items Schema',
        default: '',
        pattern: '^(.*)$',
      },
    },
    originCountry: {
      $id: '#/properties/originCountry',
      type: 'string',
      title: 'The originCountry Schema',
      default: '',
      pattern: '^(.*)$',
    },
    sector: {
      $id: '#/properties/sector',
      type: 'array',
      title: 'The Sector Schema',
      items: {
        $id: '#/properties/sector/items',
        type: 'string',
        title: 'The Items Schema',
        default: '',
        pattern: '^(.*)$',
      },
    },
    category: {
      $id: '#/properties/category',
      type: 'array',
      title: 'The Category Schema',
      items: {
        $id: '#/properties/category/items',
        type: 'string',
        title: 'The Items Schema',
        default: '',
        pattern: '^(.*)$',
      },
    },
    licence: {
      $id: '#/properties/licence',
      type: 'array',
      title: 'The Licence Schema',
      items: {
        $id: '#/properties/licence/items',
        type: 'string',
        title: 'The Items Schema',
        default: '',
        pattern: '^(.*)$',
      },
    },
    developers: {
      $id: '#/properties/developers',
      type: 'array',
      title: 'The Developers Schema',
      items: {
        $id: '#/properties/developers/items',
        type: 'object',
        title: 'The Items Schema',
        required: [
          'name',
          'developer_logo_url',
          'developer_url',
          'developer_category',
        ],
        properties: {
          name: {
            $id: '#/properties/developers/items/properties/name',
            type: 'string',
            title: 'The name Schema',
            default: '',
            pattern: '^(.*)$',
          },
          developer_logo_url: {
            $id: '#/properties/developers/items/properties/developer_logo_url',
            type: 'string',
            title: 'The Developer_logo_url Schema',
            default: '',
            pattern: '^(.*)$',
          },
          developer_url: {
            $id: '#/properties/developers/items/properties/developer_url',
            type: 'string',
            title: 'The Developer_url Schema',
            default: '',
            pattern: '^(.*)$',
          },
          developer_category: {
            $id: '#/properties/developers/items/properties/developer_category',
            type: 'string',
            title: 'The Developer_category Schema',
            default: '',
            pattern: '^(.*)$',
          },
        },
      },
    },
    maintainers: {
      $id: '#/properties/maintainers',
      type: 'array',
      title: 'The Maintainers Schema',
      items: {
        $id: '#/properties/maintainers/items',
        type: 'object',
        title: 'The Items Schema',
        required: [
          'name',
          'maintainer_url',
          'maintainer_logo_url',
          'maintainer_repository',
        ],
        properties: {
          name: {
            $id: '#/properties/maintainers/items/properties/name',
            type: 'string',
            title: 'The name Schema',
            default: '',
            pattern: '^(.*)$',
          },
          maintainer_url: {
            $id: '#/properties/maintainers/items/properties/maintainer_url',
            type: 'string',
            title: 'The Maintainer_url Schema',
            default: '',
            pattern: '^(.*)$',
          },
          maintainer_logo_url: {
            $id:
              '#/properties/maintainers/items/properties/maintainer_logo_url',
            type: 'string',
            title: 'The Maintainer_logo_url Schema',
            default: '',
            pattern: '^(.*)$',
          },
          maintainer_repository: {
            $id:
              '#/properties/maintainers/items/properties/maintainer_repository',
            type: 'string',
            title: 'The Maintainer_repository Schema',
            default: '',
            pattern: '^(.*)$',
          },
        },
      },
    },
    users: {
      $id: '#/properties/users',
      type: 'array',
      title: 'The Users Schema',
      items: {
        $id: '#/properties/users/items',
        type: 'object',
        title: 'The Items Schema',
        required: [
          'name',
          'user_location',
          'user_logo_url',
          'user_url',
          'user_geolocation',
        ],
        properties: {
          name: {
            $id: '#/properties/users/items/properties/name',
            type: 'string',
            title: 'The name Schema',
            default: '',
            pattern: '^(.*)$',
          },
          user_location: {
            $id: '#/properties/users/items/properties/user_location',
            type: 'string',
            title: 'The User_location Schema',
            default: '',
            pattern: '^(.*)$',
          },
          user_logo_url: {
            $id: '#/properties/users/items/properties/user_logo_url',
            type: 'string',
            title: 'The User_logo_url Schema',
            default: '',
            pattern: '^(.*)$',
          },
          user_url: {
            $id: '#/properties/users/items/properties/user_url',
            type: 'string',
            title: 'The User_url Schema',
            default: '',
            pattern: '^(.*)$',
          },
          user_geolocation: {
            $id: '#/properties/users/items/properties/user_geolocation',
            type: 'object',
            title: 'The User_geolocation Schema',
            required: ['lat', 'long'],
            properties: {
              lat: {
                $id:
                  '#/properties/users/items/properties/user_geolocation/properties/lat',
                type: 'number',
                title: 'The Lat Schema',
                default: 0.0,
              },
              long: {
                $id:
                  '#/properties/users/items/properties/user_geolocation/properties/long',
                type: 'number',
                title: 'The Long Schema',
                default: 0.0,
              },
            },
          },
        },
      },
    },
  },
}

export default {
  fetchLinks(context: any) {
    $axios
      .get(
        'https://raw.githubusercontent.com/OpenUK/publiccode.directory/master/database/database.index.json'
      )
      .then((data) => {
        context.commit('fetchLinks', data.data)
      })
      .then(() => {
        context.state.links.forEach((item: any) => {
          $axios
            .get(item)
            .then((data: any) => {
              const avj = new Ajv()
              const valid = avj
                .addSchema(schemaType, 'projSchema')
                .validate('projSchema', data.data)
              if (valid as boolean) {
                context.commit('fetchProducts', data.data)
                context.commit('getCategories')
                context.commit('getCountries')
                context.commit('getDevelopers')
                context.commit('getlicences')
                context.commit('getMaintainers')
                context.commit('getUsers')
                context.commit('getSector')
                context.commit('getLanguage')
              }
            })
            .catch((error: any) => console.log(error))
        })
      })
      .catch((error: any) => {
        console.log(error)
      })
  },
}
