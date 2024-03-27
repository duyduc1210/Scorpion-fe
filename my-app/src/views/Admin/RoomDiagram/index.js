//hieu vua thay doi cho nay
import { useState } from "react";
import "./RoomsStyle.css";
import { Modal } from 'antd';
const Rooms = () => {
    //initial variable
    const [isModalOpen, setIsModalOpen] = useState(false);
    //function handle modal
    const handleRoomClick = () => {
        setIsModalOpen(true);
    }
    const closeModal = () => {
        setIsModalOpen(false);
    }
    //=================================================================================

    //===================================render page===================================
    return (
        <div className="layout">
            {/* statistic temp*/}
            <div className="short-static-rooms">
                <h6>Phòng Trống(10)</h6>
                <h6>Có Khách(10)</h6>
                <h6>Phòng đã quá thời gian ở(10)</h6>
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
                <div>
                    <h6>Phòng đã quá thời gian ở(10)</h6>
                </div>
                <div className="room-overtime flex-row">
                    <div className="rooms" onClick={handleRoomClick}>
                        <div className="info">
                            <div>VIP</div>
                            <div>306</div>
                        </div>
                        <div className="status">22/3 9:00-25/3 9:00</div>
                    </div>
                    <div className="rooms" onClick={handleRoomClick}>
                        <div className="info">
                            <div>VIP</div>
                            <div>306</div>
                        </div>
                        <div className="status">22/3 9:00-25/3 9:00</div>
                    </div>
                </div>
            </div>
            {/* Modal */}
            <Modal
                title="Modal 1000px width"
                centered
                open={isModalOpen}
                onOk={() => setIsModalOpen(false)}
                onCancel={() => setIsModalOpen(false)}
                width={1000}
            >
                <p>some contents...</p>
                <p>some contents...</p>
                <p>some contents...</p>
            </Modal>

        </div>
    );
};

export default Rooms;

