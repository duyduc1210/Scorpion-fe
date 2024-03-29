//hieu vua thay doi cho nay
import { useState } from "react";
import "./RoomsStyle.css";
import { Modal } from "antd";

const RoomDiagram = () => {
    //===================================initial variable===================================
    const [isModal1Open, setIsModal1Open] = useState(false);
    const [isModal2Open, setIsModal2Open] = useState(false);
    const [isModal3Open, setIsModal3Open] = useState(false);
    // Add more state variables for additional Modals if needed

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
                setIsModal1Open(true);
                break;
            case 2:
                setIsModal2Open(true);
                break;
            case 3:
                setIsModal3Open(true);
                break;
            // Add cases for additional Modals if needed
            default:
                break;
        }
    };

    const closeModal = () => {
        setIsModal1Open(false);
        setIsModal2Open(false);
        setIsModal3Open(false);
        // Close other Modals if needed
    };
    //---------------------------------------------------------------------------------

    //===================================render page===================================
    return (
        <div className="layout">
            {/* statistic temp*/}
            <div className="short-static-rooms">
                <h6 >Phòng Trống(10)</h6>
                <h6>Có Khách(10)</h6>
            </div>

            {/* filter */}

            {/*  searching room */}

            {/* display status of rooms */}
            <div className="room-status">
                <div>
                    <h6>Phòng Trống(10)</h6>
                </div>
                <div className="room-empty flex-row">
                    <div className="rooms" onClick={handleRoomClick}>
                        <div className="info">
                            <div>VIP</div>
                            <div>301</div>
                        </div>
                        <div className="status">Phòng trống</div>
                    </div>
                    <div className="rooms" onClick={handleRoomClick}>
                        <div className="info">
                            <div>VIP</div>
                            <div>301</div>
                        </div>
                        <div className="status">Phòng trống</div>
                    </div>
                    <div className="rooms" onClick={handleRoomClick}>
                        <div className="info">
                            <div>VIP</div>
                            <div>301</div>
                        </div>
                        <div className="status">Phòng trống</div>
                    </div>
                    <div className="rooms" onClick={handleRoomClick}>
                        <div className="info">
                            <div>VIP</div>
                            <div>301</div>
                        </div>
                        <div className="status">Phòng trống</div>
                    </div>
                    <div className="rooms" onClick={handleRoomClick}>
                        <div className="info">
                            <div>VIP</div>
                            <div>301</div>
                        </div>
                        <div className="status">Phòng trống</div>
                    </div>
                    <div className="rooms" onClick={handleRoomClick}>
                        <div className="info">
                            <div>VIP</div>
                            <div>301</div>
                        </div>
                        <div className="status">Phòng trống</div>
                    </div>
                    <div className="rooms" onClick={handleRoomClick}>
                        <div className="info">
                            <div>VIP</div>
                            <div>301</div>
                        </div>
                        <div className="status">Phòng trống</div>
                    </div>
                    <div className="rooms" onClick={handleRoomClick}>
                        <div className="info">
                            <div>VIP</div>
                            <div>301</div>
                        </div>
                        <div className="status">Phòng trống</div>
                    </div>
                    <div className="rooms" onClick={handleRoomClick}>
                        <div className="info">
                            <div>VIP</div>
                            <div>301</div>
                        </div>
                        <div className="status">Phòng trống</div>
                    </div>
                </div>
                <div>
                    <h6>Có Khách(10)</h6>
                </div>
                <div className="room-using flex-row">
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
            {/* Check if pop-up should be shown */}
            {showPopUp && (
                <div
                    className="small-pop-up"
                    style={{ top: `${popUpPosition.y}px`, left: `${popUpPosition.x}px` }}
                >
                    <div onClick={() => handleSmallPopUpClick(1)}><h6>chi tiết</h6></div>
                    <div onClick={() => handleSmallPopUpClick(2)}><h6>trả phòng</h6></div>
                    <div onClick={() => handleSmallPopUpClick(3)}><h6>chuyển phòng</h6></div>
                    <div onClick={() => handleSmallPopUpClick(4)}><h6>Thêm dịch vụ</h6></div>
                    {/* Add more divs for additional Modals if needed */}
                </div>
            )}

            {/* Modals */}
            <Modal
                title="Modal 1"
                centered
                visible={isModal1Open}
                onOk={() => setIsModal1Open(false)}
                onCancel={closeModal}
                width={1000}
            >
                <p>Modal 1 content...</p>
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
        </div>
    );
};

export default RoomDiagram;
