const state = {
  products: [{
    id: 'hat-1',
    mainImage: 'foto1.jpg',
    category: 'hat',
    images: ['foto1.jpg', 'foto2.jpg', 'foto3.jpg'],
    description: {
      title: 'Lorem ipsum title',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam nisi molestiae sapiente accusantium ex placeat neque incidunt mollitia cumque ullam, earum, quod, sunt non nobis veritatis repudiandae quas distinctio! Porro.'
    },
    isSelected: false
  }, {
    id: 'hat-2',
    mainImage: 'foto1.jpg',
    category: 'hat',
    images: ['foto1.jpg', 'foto2.jpg', 'foto3.jpg'],
    description: {
      title: 'Lorem ipsum title',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam nisi molestiae sapiente accusantium ex placeat neque incidunt mollitia cumque ullam, earum, quod, sunt non nobis veritatis repudiandae quas distinctio! Porro.'
    },
    isSelected: false
  }, {
    id: 'hat-3',
    mainImage: 'foto1.jpg',
    category: 'hat',
    images: ['foto1.jpg', 'foto2.jpg', 'foto3.jpg'],
    description: {
      title: 'Lorem ipsum title',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam nisi molestiae sapiente accusantium ex placeat neque incidunt mollitia cumque ullam, earum, quod, sunt non nobis veritatis repudiandae quas distinctio! Porro.'
    },
    isSelected: false
  }, {
    id: 'sweetshot-1',
    category: 'sweetshot',
    mainImage: 'foto2.jpg',
    images: ['foto1.jpg', 'foto2.jpg', 'foto3.jpg'],
    description: {
      title: 'Lorem ipsum title',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam nisi molestiae sapiente accusantium ex placeat neque incidunt mollitia cumque ullam, earum, quod, sunt non nobis veritatis repudiandae quas distinctio! Porro.'
    },
    isSelected: false
  }, {
    id: 'sweetshot-2',
    category: 'sweetshot',
    mainImage: 'foto2.jpg',
    images: ['foto1.jpg', 'foto2.jpg', 'foto3.jpg'],
    description: {
      title: 'Lorem ipsum title',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam nisi molestiae sapiente accusantium ex placeat neque incidunt mollitia cumque ullam, earum, quod, sunt non nobis veritatis repudiandae quas distinctio! Porro.'
    },
    isSelected: false
  }, {
    id: 'sweetshot-3',
    category: 'sweetshot',
    mainImage: 'foto2.jpg',
    images: ['foto1.jpg', 'foto2.jpg', 'foto3.jpg'],
    description: {
      title: 'Lorem ipsum title',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam nisi molestiae sapiente accusantium ex placeat neque incidunt mollitia cumque ullam, earum, quod, sunt non nobis veritatis repudiandae quas distinctio! Porro.'
    },
    isSelected: false
  }, {
    id: 'pants-1',
    category: 'pants',
    mainImage: 'foto3.jpg',
    images: ['foto1.jpg', 'foto2.jpg', 'foto3.jpg'],
    description: {
      title: 'Lorem ipsum title',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam nisi molestiae sapiente accusantium ex placeat neque incidunt mollitia cumque ullam, earum, quod, sunt non nobis veritatis repudiandae quas distinctio! Porro.'
    },
    isSelected: false
  }, {
    id: 'pants-2',
    category: 'pants',
    mainImage: 'foto3.jpg',
    images: ['foto1.jpg', 'foto2.jpg', 'foto3.jpg'],
    description: {
      title: 'Lorem ipsum title',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam nisi molestiae sapiente accusantium ex placeat neque incidunt mollitia cumque ullam, earum, quod, sunt non nobis veritatis repudiandae quas distinctio! Porro.'
    },
    isSelected: false
  }, {
    id: 'pants-3',
    category: 'pants',
    mainImage: 'foto3.jpg',
    images: ['foto1.jpg', 'foto2.jpg', 'foto3.jpg'],
    description: {
      title: 'Lorem ipsum title',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam nisi molestiae sapiente accusantium ex placeat neque incidunt mollitia cumque ullam, earum, quod, sunt non nobis veritatis repudiandae quas distinctio! Porro.'
    },
    isSelected: false
  }]
}

const getters = {
  products: state => {
    return state.products
  },
  hats: (state, getters) => getters.products.filter(product => product.category === 'hat'),
  sweetshots: (state, getters) => getters.products.filter(product => product.category === 'sweetshot'),
  pants: (state, getters) => getters.products.filter(product => product.category === 'pants'),
  selectedProducts: state => state.products.filter(product => product.isSelected)
}

const mutations = {
  SELECT_PRODUCT (state, id) {
    let product = state.products.find(product => product.id === id)
    product.isSelected = !product.isSelected
  },
  SET_PRODUCTS (state, products) {
    state.products = products
  }
}
const actions = {
  selectProduct: ({ commit }, id) => {
    commit('SELECT_PRODUCT', id)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
