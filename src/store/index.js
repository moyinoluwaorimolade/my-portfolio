import { createStore } from 'vuex'

export default createStore({
  state: {
    projects: [
      {
        name: 'RentItRight',
        type: 'Java Web Application',
        link: 'https://www.rentitright.biz',
        description: 'A rental property management website.',
        technologies: ['Jsp', 'JavaScript', 'Java', 'Bootstrap','Html','CSS']
      },
      
      {
        name: 'RentItRight',
        type: 'Web Application',
        link: 'https://bitbucket.org/moyinoluwaorimolade/workspace',
        description: 'A rental property management website.',
        technologies: ['Vue.js', 'JavaScript', 'Java', 'Bootstrap','Html','CSS'],
      },
      {
        name: 'RecruitMedical',
                type: 'Web Application',
        link: 'https://www.recruitmedicalexperts.com',
        description: 'A recruitment platform for medical professionals.',
        technologies: ['Jsp', 'JavaScript', 'Java', 'Bootstrap','Html','CSS']
      },
     
    ]
  },
  getters: {
    getProjects: state => state.projects
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
