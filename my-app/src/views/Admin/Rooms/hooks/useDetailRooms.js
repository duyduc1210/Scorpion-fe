import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { AppContext } from "../../../../App"

const useDetailRooms = (props) => {
    //! state
    const { id } = props

    const { setLoading } = useContext(AppContext)
    const [data, setData] = useState({})
    //! function

    const getDetailRoom = async () => {
        setLoading(true)
        try {
            const response = await axios.get(`http://localhost:8080/admin/phong/detail/${id}`);
            if (response.status === 200) {
                setData(response.data)
            }
        } catch (error) {
            // show error
        }
        finally {
            setLoading(false)
        }
    }
    const refresh = () => {
        getDetailRoom()
    }

    //! useEffect
    useEffect(() => {
        getDetailRoom()
    }, [])

    //! return
    return { data, refresh }
}
export default useDetailRooms