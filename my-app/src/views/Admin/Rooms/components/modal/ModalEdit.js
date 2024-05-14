import { Button, Modal } from "antd"
import SelectComponent from "../../../../../components/Selectcomponent/SelectComponent"
import { useEffect, useState } from "react"
import useEditRooms from "../../hooks/useEditRooms"
import useDetailRooms from "../../hooks/useDetailRooms"

const ModalEdit = (props) => {
    //! state
    const { openModalEdit, onClose, itemTarget, setItemTarget, refreshGetListRooms } = props

    const [dataUpdate, setDataUpdate] = useState()

    const { data: dataDetail } = useDetailRooms({ id: itemTarget?.id })
    const { editRoom } = useEditRooms()

    //! function
    const onSuccess = () => {
        refreshGetListRooms()
        onClose()
        setItemTarget(null)
    }

    const handleEdit = () => {
        editRoom({body: dataUpdate, onSuccess})
    }

    const toolBar = () => (

        <>
            <Button  >Lưu</Button>
            <Button onClick={onClose}>Hủy</Button>
        </>
    )

    //! useEffect
    useEffect(() => {
        if (dataDetail) {
            const obj = {
                id: dataDetail?.id,
                soPhong: dataDetail?.soPhong,
                soTang: dataDetail?.soTang,
                loaiPhongIdLoaiPhong: {
                    id: dataDetail?.loaiPhongIdLoaiPhong?.id
                },
                trangThai: dataDetail?.trangThai
            }
            setDataUpdate(obj)
        }

    }, [dataDetail])


    //! return 
    return (
        <Modal open={openModalEdit} onCancel={onClose} title={"Sửa Phòng"} footer={toolBar()}>
            <div>
                <p>Tên phòng</p>
                <input type="text" value={dataUpdate?.soPhong} onChange={(e) => setDataUpdate({ ...dataUpdate, soPhong: e.target.value })} />
            </div>
            <div style={{ display: "flex", justifyContent: "space-around" }}>
                <div>
                    <p>Tầng</p>
                    <input type="text" value={dataUpdate?.soTang} onChange={(e) => setDataUpdate({ ...dataUpdate, soTang: e.target.value })} />
                </div>
                <SelectComponent value={dataUpdate?.loaiPhongIdLoaiPhong?.id} onChangeData={(e) => setDataUpdate({ ...dataUpdate, loaiPhongIdLoaiPhong: { id: e } })} />
            </div>
        </Modal>
    )
}

export default ModalEdit