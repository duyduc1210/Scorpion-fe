import { useEffect, useState } from "react";
import "./RoomsStyle.css";
import { Modal, Divider, Col, Row, Flex, Button, Input, Table } from "antd";
import axios from "axios";


const RoomDiagram = () => {
    //===================================initial variable===================================
    const [isModalUpdateInfoGuest, setModalUpdateInfoGuest] = useState(false);
    const closeModalUpdateInfoGuest = () => {
        setModalUpdateInfoGuest(false);
    }
    const [modalDetail, setModalDetail] = useState(false);
    const closeModal = () => {
        setModalDetail(false);
    }

    // Room data states
    const [emptyRooms, setEmptyRooms] = useState([]);
    const [usedRooms, setUsedRooms] = useState([]);
    const [dataRoom, setDataRoom] = useState();
    const [service, setService] = useState([]);
    // API endpoints
    const apiEmptyRoom = 'http://localhost:8080/admin/phong/phong-trong';
    const apiUsedRoom = 'http://localhost:8080/admin/phong/phong-dang-o';
    const apiService = 'http://localhost:8080/admin/loai-dich-vu/hien-thi';

    useEffect(() => {
        // Fetch empty rooms
        const fetchEmptyRooms = async () => {
            try {
                const response = await axios.get(apiEmptyRoom);
                // const decodedData1 = response.data.map((item) => ({
                //     id: decodeURIComponent(item.id),
                //     tenLoaiDichVu: decodeURIComponent(item.tenLoaiDichVu),
                // }));
                setEmptyRooms(response.data);
            } catch (error) {
                console.error('Error fetching empty rooms:', error);
            }
        };

        // Fetch used rooms
        const fetchUsedRooms = async () => {
            try {
                const response = await axios.get(apiUsedRoom);
                // const decodedData2 = response.data.map((item) => ({
                //     id: decodeURIComponent(item.id),
                //     tenLoaiDichVu: decodeURIComponent(item.tenLoaiDichVu),
                // }));
                setUsedRooms(response.data);
            } catch (error) {
                console.error('Error fetching used rooms:', error);
            }
        };

        // Call functions to fetch data
        fetchEmptyRooms();
        fetchUsedRooms();
    }, []);


    //Handle click Plus
    const getService = async () => {
        console.log("getService called");
        try {
            const response = await axios.get(apiService);
            const decodedDataService = response.data.map((item) => ({
                id: decodeURIComponent(item.id),
                tenLoaiDichVu: decodeURIComponent(item.tenLoaiDichVu),
            }));
            setService(decodedDataService);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    // Handle click on room
    const handleRoomClick = (room) => {
        // Logic for handling room click
        setDataRoom(room)
    };

    //===================================render page===================================
    return (
        <div className="layout-room-diagram">
            {/* statistic temp*/}
            <Row className="short-static-rooms">
                <Col className="medium-text-room-diagram" style={{ color: 'green' }}>Phòng Trống()</Col>
                <Col className="medium-text-room-diagram" style={{ color: 'red' }}>Có Khách()</Col>
            </Row>

            {/* filter */}

            {/*  searching room */}

            {/* display status of rooms */}
            <div className="room-status-room-diagram">
                <div>
                    <div className="medium-text-room-diagram">Phòng Trống()</div>
                </div>

                <div className="room-empty flex-row-room-diagram">
                    {emptyRooms.map((room, index) => (
                        <div key={index} className="rooms" onClick={handleRoomClick}>
                            <div className="info">
                                <div style={{ fontWeight: 'bold', marginBottom: '5px' }}>VIP</div>
                                <div style={{ marginBottom: '5px' }}>{room.tenPhong}</div>
                                <div>{room.idPhong}</div>
                            </div>
                            <div className="status">Phòng trống</div>
                        </div>
                    ))}
                </div>

                <div>
                    <div className="medium-text-room-diagram">Có Khách()</div>
                </div>
                <div className="room-using flex-row-room-diagram">
                    {usedRooms.map((room, index) => (
                        <div key={index} className="rooms" onClick={() => handleRoomClick(room)}>
                            <div className="info">
                                <div style={{ fontWeight: 'bold', marginBottom: '5px' }}>VIP</div>
                                <div style={{ marginBottom: '5px' }}>{room.tenPhong}</div>
                                <div>{room.idPhong}</div>
                            </div>
                            <div className="status">{room.thoiGianVao} - {room.thoiGianRa}</div>
                        </div>
                    ))}
                </div>
            </div>


            {/* modal-detail */}
            {
                dataRoom && (
                    <Modal
                        title="Chi tiết"
                        centered
                        visible={modalDetail}
                        onOk={() => setDataRoom(null)}
                        open={dataRoom}
                        onCancel={() => setDataRoom(null)}
                        destroyOnClose
                        width={10000}
                        height="auto"
                    >
                        <div className="navbar-detail">
                            <div className="medium-text-room-diagram" >Phòng</div>
                            <div className="medium-text-room-diagram" >Thanh Toán</div>
                        </div>
                        <Row justify="space-evenly" className="content">
                            <Col span={8} style={{ borderRight: '5px solid #ccc', padding: '1rem 1rem' }} className="info-detail">
                                <Flex className="info-room" vertical>
                                    <div>
                                        <Row justify="space-between">
                                            <Col className="larger-text-room-diagram">{dataRoom.tenPhong} - Loại Phòng</Col>
                                            <Col><button className="button">Trả Phòng</button></Col>
                                        </Row>
                                    </div>
                                    <div>
                                        <Row justify="space-evenly">
                                            <Col className="larger-text-room-diagram">{dataRoom.thoiGianVao}</Col>
                                            <Col className="larger-text-room-diagram"> - </Col>
                                            <Col className="larger-text-room-diagram">{dataRoom.thoiGianRa}</Col>
                                        </Row>
                                    </div>
                                    <div className="larger-text-room-diagram">Giá trong tuần Tổng: 900000 VND</div>
                                    <div>
                                        <Row justify="space-between">
                                            <Col className="larger-text-room-diagram" >2 người lớn , 1 trẻ em </Col>
                                            <Col ><Button type="primary" shape="circle" >+</Button></Col>
                                        </Row>
                                        <Row justify="space-evenly">
                                            <Col className="larger-text-room-diagram">Khách</Col>
                                            <Col className="larger-text-room-diagram">Action</Col>
                                        </Row>
                                        <Row justify="space-evenly" className="font-table">
                                            <Col>JAVa</Col>
                                            <Col ><button className="button" onClick={() => setModalUpdateInfoGuest(true)}>Sửa</button></Col>
                                        </Row>
                                    </div>
                                </Flex>
                            </Col>
                            <Col span={8} style={{ borderRight: '5px solid #ccc' }} className="take-note">
                                <div>
                                    <Row><Button type="primary" shape="circle" onClick={async () => { await getService(); }}>+</Button></Row>
                                    <Row>{service.map((service, index) => ( 
                                        <div style={{ fontWeight: 'bold', marginBottom: '5px' }}>{service.tenLoaiDichVu}</div>
                                    ))}</Row>
                                </div>
                            </Col>
                            <Col span={8} style={{}} className="total"></Col>
                        </Row>
                    </Modal>
                )
            }
            {/* Modal update info Guest */}
            <Modal
                title=""
                centered
                visible={isModalUpdateInfoGuest}
                onOk={closeModalUpdateInfoGuest}
                okText="Thêm/Sửa"
                onCancel={closeModalUpdateInfoGuest}
                width={1000}
                height="auto"
            >
                <Flex className="modal-update-info-guest" vertical>
                    <Row className="larger-text-room-diagram" justify='center'>Thông tin khách ở</Row>
                    <div><Input placeholder="Họ và Tên" /></div>
                    <div><Input placeholder="CCCD" /></div>
                    <div><Input placeholder="Tên giấy tờ" /></div>
                    <div><Input placeholder="Quốc Tịch" /></div>
                </Flex>
            </Modal>

        </div>
    );
};

export default RoomDiagram;
