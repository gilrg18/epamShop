import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


toast.configure();
class Toasts {
    error = (message) => {
        toast.error(message, {
            position: toast.POSITION.BOTTOM_RIGHT,
            autoClose: 3000
        })
    }

    sucess = (message) => {
        toast.success(message, {
            position: toast.POSITION.BOTTOM_RIGHT,
            autoClose: 3000
        })

    }
}

export default new Toasts();