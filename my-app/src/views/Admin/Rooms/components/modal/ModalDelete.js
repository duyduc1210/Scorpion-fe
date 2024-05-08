import { Button, Modal } from "antd"
import useDeleteRooms from "../../hooks/useDeleteRooms"

const ModalDelete = (props) => {
    //! state
    const { openModalDelete, onClose, itemTarget, setItemTarget, refreshGetListRooms } = props
    const { deleteRoom } = useDeleteRooms()
    //! function
    const onSuccess = () => {
        refreshGetListRooms()
        onClose()
        setItemTarget(null)
    }

    const handleDelete = () => {
        deleteRoom({ id: itemTarget?.id, onSuccess })
    }

    const toolBar = () => (
        <>
            <Button onClick={handleDelete}>Xác nhận</Button>
            <Button onClick={onClose}>Hủy</Button>
        </>
    )

    //! useEffect

    //! return 
    return (
        <Modal open={openModalDelete} onCancel={onClose} title={false} footer={toolBar()}>
            <div>Thông báo</div>
            Bạn có chắc chắn muốn xóa phòng {itemTarget?.soPhong}
        </Modal>
    )
}

export default ModalDelete