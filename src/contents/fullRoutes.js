import en from './en/routes'
import fr_ca from './fr_ca/routes'
import { defaultLanguage } from '../../settings/publish-values'

let defaultRoute = [
  {
    path: '/',
    redirect: to => {
      return '/' + defaultLanguage
    }
  }
]

let routes = defaultRoute.concat(en, fr_ca)

export default routes
