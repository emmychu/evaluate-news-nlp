import { handleSubmit } from './js/formHandler'
import { postData } from './js/postData'
import { uiUpdate} from './js/updateUI'
import { validURL } from './js/validateURL'

import './styles/resets.scss'
import './styles/base.scss'
import './styles/footer.scss'
import './styles/form.scss'
import './styles/header.scss'

alert("Please submit either a url or text in their respective box, thanks!")

export {
    handleSubmit,
    postData,
    uiUpdate,
    validURL
}

