import { Button, Modal } from "antd"
import SelectComponent from "../../../../../components/Selectcomponent/SelectComponent"
import { useState } from "react"
import useCreateRooms from "../../hooks/useCreateRooms"

const ModalCreate = (props) => {
    //! state
    const { openModalCreate, onClose, refreshGetListRooms } = props

    const [dataCreate, setDataCreate] = useState({
        tenPhong: '',
        tang: '',
        loaiPhongIdLoaiPhong: '',
    })

    const { createRoom } = useCreateRooms()

    //! function
    const onSuccess = () => {
        refreshGetListRooms()
        onClose()
    }

    const handleCreate = () => {
        const body = {
            id: null,
            loaiPhongIdLoaiPhong: { id: dataCreate.loaiPhongIdLoaiPhong },
            soPhong: dataCreate.tenPhong,
            soTang: dataCreate.tang,
            trangThai: true
        }
        createRoom({ body, onSuccess })
    }
    console.log("dataCreate", dataCreate);

    const toolBar = () => (
        <>
            <Button onClick={() => handleCreate()} >Lưu</Button>
            <Button onClick={onClose}>Hủy</Button>
        </>
    )

    //! useEffect

    //! return 
    return (
        <Modal open={!!openModalCreate} onCancel={onClose} title={"Them moi"} footer={toolBar()}>
            <div>
                <p>Tên phòng</p>
                <input type="text" onChange={(event) => setDataCreate({ ...dataCreate, tenPhong: event.target.value })} />
            </div>
            <div style={{ display: "flex", justifyContent: "space-around" }}>
                <div>
                    <p>Tầng</p>
                    <input type="text" onChange={(event) => setDataCreate({ ...dataCreate, tang: event.target.value })} />
                </div>
                <SelectComponent onChangeData={(choose) => setDataCreate({ ...dataCreate, loaiPhongIdLoaiPhong: choose })} />
            </div>
        </Modal>
    )
}

export default ModalCreate