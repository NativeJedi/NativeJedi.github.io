const state = {
  products: [{
    id: 'hat-1',
    mainImage: 'foto1.jpg',
    category: 'hat',
    collection: 'man',
    images: ['foto1.jpg', 'foto2.jpg', 'foto3.jpg'],
    description: {
      title: 'Lorem ipsum title',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam nisi molestiae sapiente accusantium ex placeat neque incidunt mollitia cumque ullam, earum, quod, sunt non nobis veritatis repudiandae quas distinctio! Porro.'
    },
    isSelected: false
  }, {
    id: 'sweetshot-1',
    mainImage: 'foto2.jpg',
    category: 'sweetshot',
    collection: 'man',
    images: ['foto1.jpg', 'foto2.jpg', 'foto3.jpg'],
    description: {
      title: 'Lorem ipsum title',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam nisi molestiae sapiente accusantium ex placeat neque incidunt mollitia cumque ullam, earum, quod, sunt non nobis veritatis repudiandae quas distinctio! Porro.'
    },
    isSelected: false
  }, {
    id: 'sweetshot-2',
    mainImage: 'foto2.jpg',
    category: 'sweetshot',
    collection: 'man',
    images: ['foto1.jpg', 'foto2.jpg', 'foto3.jpg'],
    description: {
      title: 'Lorem ipsum title',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam nisi molestiae sapiente accusantium ex placeat neque incidunt mollitia cumque ullam, earum, quod, sunt non nobis veritatis repudiandae quas distinctio! Porro.'
    },
    isSelected: false
  }, {
    id: 'pants-1',
    mainImage: 'foto3.jpg',
    category: 'pants',
    collection: 'woman',
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
    collection: 'woman',
    images: ['foto1.jpg', 'foto2.jpg', 'foto3.jpg'],
    description: {
      title: 'Lorem ipsum title',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam nisi molestiae sapiente accusantium ex placeat neque incidunt mollitia cumque ullam, earum, quod, sunt non nobis veritatis repudiandae quas distinctio! Porro.'
    },
    isSelected: false
  }, {
    id: 'sweetshot-3',
    mainImage: 'foto2.jpg',
    category: 'sweetshot',
    collection: 'woman',
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
    collection: 'kids',
    images: ['foto1.jpg', 'foto2.jpg', 'foto3.jpg'],
    description: {
      title: 'Lorem ipsum title',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam nisi molestiae sapiente accusantium ex placeat neque incidunt mollitia cumque ullam, earum, quod, sunt non nobis veritatis repudiandae quas distinctio! Porro.'
    },
    isSelected: false
  }, {
    id: 'hat-4',
    mainImage: 'foto1.jpg',
    category: 'hat',
    collection: 'kids',
    images: ['foto1.jpg', 'foto2.jpg', 'foto3.jpg'],
    description: {
      title: 'Lorem ipsum title',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam nisi molestiae sapiente accusantium ex placeat neque incidunt mollitia cumque ullam, earum, quod, sunt non nobis veritatis repudiandae quas distinctio! Porro.'
    },
    isSelected: false
  }, {
    id: 'sweetshot-4',
    mainImage: 'foto2.jpg',
    category: 'sweetshot',
    collection: 'kids',
    images: ['foto1.jpg', 'foto2.jpg', 'foto3.jpg'],
    description: {
      title: 'Lorem ipsum title',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam nisi molestiae sapiente accusantium ex placeat neque incidunt mollitia cumque ullam, earum, quod, sunt non nobis veritatis repudiandae quas distinctio! Porro.'
    },
    isSelected: false
  }]
}

const getters = {
  man: state => state.products.filter(product => product.collection === 'man'),
  woman: state => state.products.filter(product => product.collection === 'woman'),
  kids: state => state.products.filter(product => product.collection === 'kids')
}

export default {
  state,
  getters
}
