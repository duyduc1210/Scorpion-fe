import { Button, Modal } from "antd"
import SelectComponent from "../../../../../components/Selectcomponent/SelectComponent"


const ModalEdit = (props) => {
    //! state
    const { openModalEdit, onClose } = props



   

    //! function
  



    const toolBar = () => (

        <>
            <Button>Lưu</Button>
            <Button onClick={onClose}>Hủy</Button>
        </>
    )

    //! useEffect

    //! return 
    return (
        <Modal open={openModalEdit} onCancel={onClose} title={"Sửa Phòng"} footer={toolBar()}>
            <div>
                <p>Tên phòng</p>
                <input type="text"  />
            </div>
            <div style={{ display: "flex", justifyContent: "space-around" }}>
                <div>
                    <p>Tầng</p>
                    <input type="text"  />
                </div>
                <SelectComponent  />
            </div>
        </Modal>
    )
}

export default ModalEdit