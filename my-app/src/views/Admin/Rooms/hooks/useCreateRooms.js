import axios from "axios"
import { useContext } from "react"
import { AppContext } from "../../../../App"

const useCreateRooms = () => {
    //! state
    const { setLoading } = useContext(AppContext)


    //! function
    const createRoom = async (props) => {
        const { body, onSuccess } = props
        setLoading(true)
        try {
            const response = await axios.post(`http://localhost:8080/admin/phong/add`, body);
            if (response.status === 200) {
                onSuccess()
                alert("Them moi thành công")
            }
        } catch (error) {
            alert("Them moi thất bại")

        }
        finally {
            setLoading(false)
        }
    }

    //! useEffect

    //! return
    return { createRoom }
}

export default useCreateRooms