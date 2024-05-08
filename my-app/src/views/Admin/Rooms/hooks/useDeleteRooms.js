import axios from "axios"
import { useContext } from "react"
import { AppContext } from "../../../../App"

const useDeleteRooms = () => {
    //! state
    const { setLoading } = useContext(AppContext)


    //! function
    const deleteRoom = async (props) => {
        const { id, onSuccess } = props
        setLoading(true)
        try {
            const response = await axios.delete(`http://localhost:8080/admin/phong/xoa/${id}`);
            if (response.status === 200) {
                onSuccess()
                alert("Xóa thành công")
            }
        } catch (error) {
            alert("Xóa thất bại")

        }
        finally {
            setLoading(false)
        }
    }

    //! useEffect

    //! return
    return { deleteRoom }
}

export default useDeleteRooms