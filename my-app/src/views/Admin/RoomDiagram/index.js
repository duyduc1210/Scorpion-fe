//hieu vua thay doi cho nay
import { useEffect, useState } from "react";
import "./RoomsStyle.css";
import { Modal, Divider, Col, Row, Flex, Button, Input } from "antd";


const RoomDiagram = () => {
    //===================================initial variable===================================
    const [isModalDetail, setModalDetail] = useState(false);
    const [isModal2Open, setIsModal2Open] = useState(false);
    const [isModal3Open, setIsModal3Open] = useState(false);
    const [isModalUpdateInfoGuest, setModalUpdateInfoGuest] = useState(false);

    const [showPopUp, setShowPopUp] = useState(false);
    const [popUpPosition, setPopUpPosition] = useState({ x: 0, y: 0 });

    const handleRoomClick = (event) => {
        const mouseX = event.clientX;
        const mouseY = event.clientY;
        setPopUpPosition({ x: mouseX + 10, y: mouseY + 10 });
        setShowPopUp(true);
    };

    const handleSmallPopUpClick = (modalNumber) => {
        setShowPopUp(false);
        switch (modalNumber) {
            case 1:
                setModalDetail(true);
                break;
            case 2:
                setIsModal2Open(true);
                break;
            case 3:
                setIsModal3Open(true);
                break;
            case 4:
                setIsModal3Open(true);
                break;
            default:
                break;
        }
    };

    const closeModal = () => {
        setModalDetail(false);
        setIsModal2Open(false);
        setIsModal3Open(false);       
    };

    const closeModalUpdateInfoGuest = () =>{
        setModalUpdateInfoGuest(false);
    }
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (event.target.closest(".small-pop-up") === null) {
                setShowPopUp(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);
    //---------------------------------------------------------------------------------

    //===================================render page===================================
    return (
        <div className="layout-room-diagram">
            {/* statistic temp*/}
            <Row className="short-static-rooms">
                <Col  className="medium-text-room-diagram" >Phòng Trống(10)</Col>
                <Col  className="medium-text-room-diagram" >Có Khách(10)</Col>
            </Row>

            {/* filter */}

            {/*  searching room */}

            {/* display status of rooms */}
            <div className="room-status-room-diagram">
                <div>
                    <div className="medium-text-room-diagram">Phòng Trống(10)</div>
                </div>
                <div className="room-empty flex-row-room-diagram">
                    <div className="rooms" onClick={handleRoomClick}>
                        <div className="info">
                            <div>VIP</div>
                            <div>301</div>
                        </div>
                        <div className="status">Phòng trống</div>
                    </div>

                </div>
                <div>
                    <div className="medium-text-room-diagram">Có Khách(10)</div>
                </div>
                <div className="room-using flex-row-room-diagram">
                    <div className="rooms" onClick={handleRoomClick}>
                        <div className="info">
                            <div>VIP</div>
                            <div>305</div>
                        </div>
                        <div className="status">22/3 9:00-25/3 9:00 </div>
                    </div>
                    <div className="rooms" onClick={handleRoomClick}>
                        <div className="info">
                            <div>VIP</div>
                            <div>305</div>
                        </div>
                        <div className="status">22/3 9:00-25/3 9:00 </div>
                    </div>
                </div>
            </div>
            {/* Modal */}
            {/* modal small pop up */}
            {showPopUp && (
                <div
                    className="small-pop-up"
                    style={{ top: `${popUpPosition.y}px`, left: `${popUpPosition.x}px` }}
                >
                    <div onClick={() => handleSmallPopUpClick(1)}><div>chi tiết</div></div>
                    <div onClick={() => handleSmallPopUpClick(2)}><div>trả phòng</div></div>
                    <div onClick={() => handleSmallPopUpClick(3)}><div>chuyển phòng</div></div>
                    <div onClick={() => handleSmallPopUpClick(4)}><div>Thêm dịch vụ</div></div>
                </div>
            )}
            {/* Modals */}
            {/* modal-detail */}
            <Modal
                title="Chi tiết"
                centered
                visible={isModalDetail}
                onOk={() => setModalDetail(false)}
                onCancel={closeModal}
                width="auto"
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
                                    <Col className="larger-text-room-diagram">Phòng - Loại Phòng</Col>
                                    <Col><button className="button">Trả Phòng</button></Col>
                                </Row>
                            </div>
                            <div>
                                <Row justify="space-evenly">
                                    <Col className="larger-text-room-diagram">Thời gian check in</Col>
                                    <Col className="larger-text-room-diagram"> - </Col>
                                    <Col className="larger-text-room-diagram">Thời gian check out</Col>
                                </Row>
                            </div>
                            <div className="larger-text-room-diagram">Giá trong tuần Tổng: 900000 VND</div>
                            <div>
                                <Row justify="space-between">
                                    <Col className="larger-text-room-diagram" >2 người lớn , 1 trẻ em </Col>
                                    <Col ><Button type="primary" shape="circle">+</Button></Col>
                                </Row>
                                <Row justify="space-evenly">
                                    <Col className="larger-text-room-diagram">Khách</Col>
                                    <Col className="larger-text-room-diagram">Action</Col>
                                </Row>
                                <Row justify="space-evenly" className="font-table">
                                    <Col>JAVa</Col>
                                    <Col ><button className="button" onClick={() => setModalUpdateInfoGuest(true)}>Sửa</button></Col>
                                </Row>
                                <Row justify="space-evenly" className="font-table">
                                    <Col>JAVa</Col>
                                    <Col ><button onClick={() => setModalUpdateInfoGuest(true)}>Sửa</button></Col>

                                </Row>
                                <Row justify="space-evenly" className="font-table">
                                    <Col>JAVa</Col>
                                    <Col ><button onClick={() => setModalUpdateInfoGuest(true)}>Sửa</button></Col>
                                </Row>
                            </div>
                        </Flex>
                    </Col>
                    <Col span={8} style={{ borderRight: '5px solid #ccc' }} className="take-note">
                        <Row justify="space-evenly">
                            <Col className="larger-text-room-diagram">Dịch Vụ</Col>
                            <Col className="larger-text-room-diagram">Tổng Số (0)</Col>
                            <Col><Button type="primary" shape="circle">+</Button></Col>
                        </Row>
                    </Col>
                    <Col span={8} style={{}} className="total">heheheidkkasfkaheheheidkkasfkaheheheidkkasfkaheheheidkka
                        sfkaheheheidkkasfkaheheheidkkasfkaheheheidkkasfkaheheheidkkasfkaheheheidkkasfkaheheheidkkasfkahehehe
                        idkkasfkaheheheidkkasfkaheheheidkkasfkaj</Col>
                </Row>
            </Modal>

            <Modal
                title="Modal 2"
                centered
                visible={isModal2Open}
                onOk={() => setIsModal2Open(false)}
                onCancel={closeModal}
                width={1000}
            >
                <p>Modal 2 content...</p>
            </Modal>

            <Modal
                title="Modal 3"
                centered
                visible={isModal3Open}
                onOk={() => setIsModal3Open(false)}
                onCancel={closeModal}
                width={1000}
            >
                <p>Modal 3 content...</p>
            </Modal>
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