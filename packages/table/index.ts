import { App } from 'vue'
import table from './src/index.vue'
 
export default {
    install(app:App){
        app.component('se-table',table)
    }
}