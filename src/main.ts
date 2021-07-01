import Vue from 'vue';
import ApolloClient from 'apollo-boost';
import VueApollo from 'vue-apollo';
import App from './App.vue';
import router from './router';
import store from './store';
import config from './config';

Vue.config.productionTip = false;

const authToken = config.token;
const { domain } = config;

const apolloClient = new ApolloClient({
  uri: `${config.default_api_domain}/graphql`,
  headers: {
    Authorization: `Bearer ${authToken}`,
    'hypi-domain': `${domain}`,
  },
});

Vue.use(VueApollo);

const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
});

new Vue({
  router,
  store,
  render: (h) => h(App),
  apolloProvider,
}).$mount('#app');
