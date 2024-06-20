import { Quasar } from 'quasar'
import '@quasar/extras/material-icons/material-icons.css'
import 'quasar/src/css/index.sass'

export default {
  install: (app) => {
    app.use(Quasar, {
      plugins: {}, // import Quasar plugins and add here
    })
  }
}