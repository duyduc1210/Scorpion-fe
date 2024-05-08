import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { AppContext } from "../../../../App"

const useGetListRooms = () => {
    //! state
    const { setLoading } = useContext(AppContext)

    const [data, setData] = useState([])

    //! function
    const getListRooms = async () => {
        setLoading(true)
        try {
            const response = await axios.get('http://localhost:8080/admin/phong/hien-thi');
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
        getListRooms()
    }

    //! useEffect
    useEffect(() => {
        getListRooms()
    }, [])

    //! return
    return { data, refresh }
}

export default useGetListRooms