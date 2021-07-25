import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: "#297CA0",
                secondary: "#46185F",
                accent: "#E9EA77"
            }
        }
    }
});
