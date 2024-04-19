import { Table } from 'antd'
import Column from 'antd/es/table/Column';
import React, { useEffect, useState } from 'react'
import historyBookDetail from '../../../shared/api/historyBookDetailApi';

const DetailHistory = ({ data }) => {
  // const [id, setId] = useState(null)
  const [getDetail, setDetail] = useState([])

  useEffect(() => {
    console.log(data.id)
    const getHistoryDetail = async () => {
      try {
        const results = await historyBookDetail.get(data.id);
        console.log(results.data)
        setDetail(results.data[0].loaiphongDat);

      } catch (error) {}
    };
    
    if(data.id){
      
      getHistoryDetail();
    }
  }, [data.id])

  return (
    <>
     <Table pagination={false} dataSource={getDetail} >
        <Column
          title="Loại phòng"
          key="name"
          render={(roomType) => {
            return <>{roomType.tenLoaiPhong}</>
          }}
        />
         <Column
          title="Số lượng"
          key="name"
          render={(roomType) => <>{roomType.soLuong}</>}
        />
     </Table>
    </>
  )
}

export default DetailHistory
