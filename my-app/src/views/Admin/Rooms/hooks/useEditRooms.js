import axios from "axios"
import { useContext } from "react"
import { AppContext } from "../../../../App"

const useEditRooms = () => {
    //! state
    const { setLoading } = useContext(AppContext)

    //! function
    const editRoom = async (props) => {
        const { body, onSuccess } = props
        setLoading(true)
        try {
            const response = await axios.put(`http://localhost:8080/admin/phong/sua/${body?.id}`, body);
            if (response.status === 200) {
                onSuccess()
                alert("Sửa thành công")
            }
        } catch (error) {
            alert("Sửa thất bại")

        }
        finally {
            setLoading(false)
        }
    }

    //! useEffect

    //! return
    return { editRoom }
}

export default useEditRooms