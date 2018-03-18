import Vue from 'vue';
import App from './App';
import router from './router';
import axios from 'axios';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-default/index.css';    // 默认主题
// import '../static/css/theme-green/index.css';       // 浅绿色主题
import "babel-polyfill";
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import VueApollo from 'vue-apollo';
const httpLink = new HttpLink({
    // You should use an absolute URL here
    uri: 'http://localhost:4000/graphql',
})

// Create the apollo client
const apolloClient = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
    connectToDevTools: true,
})
const apolloProvider = new VueApollo({
    defaultClient: apolloClient,
})

// Install the vue plugin
Vue.use(VueApollo)
Vue.use(ElementUI);
Vue.prototype.$ajax = axios;
new Vue({
    router,
    apolloProvider,
    render: h => h(App)
}).$mount('#app');
