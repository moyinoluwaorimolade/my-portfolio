import { createStore } from 'vuex'

export default createStore({
  state: {
    projects: [
      {
        name: 'RentItRight',
        type: 'Java Web Application',
        link: 'https://www.rentitright.biz',
        description: 'A rental property management website.',
        technologies: ['JSP', 'JavaScript', 'Java', 'Bootstrap','HTML','CSS']
      },
      
      {
        name: 'RentItRight',
        type: 'Modern Web Application',
        link: 'https://bitbucket.org/moyinoluwaorimolade/workspace',
        description: 'A rental property management website.',
        technologies: ['Vue.js', 'JavaScript', 'Java', 'Bootstrap','HTML','CSS'],
      },
      {
        name: 'RecruitMedical',
                type: 'Web Application',
        link: 'https://www.recruitmedicalexperts.com',
        description: 'A recruitment platform for medical professionals.',
        technologies: ['JSP', 'JavaScript', 'Java', 'Bootstrap','HTML','CSS']
      },
     
    ]
  },
  getters: {
    getProjects: state => state.projects
  },
  mutations: {
  },
  actions: {
    async sendMessage({commit},contactObj){
      console.log("contactObj: " + contactObj)
      try {
        const requestOptions = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(contactObj)
        };
        const response = await fetch("http://localhost:8081/Portfolio/webapi/message/contactUs", requestOptions);
        const statusCode = response.status
        console.log("statusCode", statusCode)
        return statusCode
      } catch (error) {
        return error
        
      }

    }
  },
  modules: {
  }
})
