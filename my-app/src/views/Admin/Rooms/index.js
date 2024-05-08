import { EditOutlined, RestOutlined } from "@ant-design/icons"
import { Button, Flex, Switch, Table, Tooltip } from "antd"
import { useContext, useState } from "react"
import { AppContext } from "../../../App"
import ModalCreate from "./components/modal/ModalCreate"
import ModalDelete from "./components/modal/ModalDelete"
import ModalEdit from "./components/modal/ModalEdit"
import useGetListRooms from "./hooks/useGetListRooms"

const Rooms = () => {
    //! state
    const { loading } = useContext(AppContext)
    const [openModalDelete, setOpenModalDelete] = useState(false)
    const [openModalCreate, setOpenModalCreate] = useState("")
    const [openModalEdit, setOpenModalEdit] = useState(false)
    const [itemTarget, setItemTarget] = useState()

    console.log("openModalEdit", openModalEdit);

    const { data: listRooms, refresh: refreshGetListRooms } = useGetListRooms()

    //! function 
    const columns = [
        {
            title: 'STT',
            render: (text, record, index) => <span>{index + 1}</span>
        },
        {
            title: 'Tên phòng',
            dataIndex: 'soPhong',
        },
        {
            title: 'Tầng',
            dataIndex: 'soTang',
        },
        {
            title: 'Loại phòng',
            render: (text, record) => <span>{record?.loaiPhongIdLoaiPhong?.tenLoaiPhong}</span>
        },
        {
            title: 'Trạng thái',
            render: (text, record) => <Switch checked={record.trangThai} onChange={(checked) => { }} />
        },
        {
            title: 'Thao tác',
            render: (text, record) => {
                return (
                    <Flex justify={"flex-start"}>
                        <Tooltip title={"Sửa"}>
                            <Button type="text" icon={<EditOutlined />}
                                onClick={() => {
                                    setOpenModalEdit(true)
                                }} />

                        </Tooltip>
                        <Tooltip title={"Xóa"}>

                            <Button type="text" icon={<RestOutlined />} onClick={() => {
                                setOpenModalDelete(true)
                                setItemTarget(record)
                            }} />

                        </Tooltip>
                    </Flex>
                )
            }
        }

    ]

    //! useEffect

    //! return 
    return (
        <div>
            <h3>Phòng</h3>
            <Button onClick={() => setOpenModalCreate("create")} >Thêm Phòng</Button>
            <Table dataSource={listRooms} loading={loading} columns={columns} />
            {openModalDelete && <ModalDelete openModalDelete={openModalDelete}
                onClose={() => setOpenModalDelete(false)}
                itemTarget={itemTarget}
                setItemTarget={setItemTarget}
                refreshGetListRooms={refreshGetListRooms} />}
            {openModalCreate && <ModalCreate
                onClose={() => setOpenModalCreate("")}
                openModalCreate={openModalCreate}
                refreshGetListRooms={refreshGetListRooms} />}
            {openModalEdit && <ModalEdit
                onClose={() => setOpenModalEdit(false)}
                openModalEdit={openModalEdit}
            />}

        </div>
    )
}

export default Rooms