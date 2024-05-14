
const UuDaiDetail = (props) => {

  const {data} = props;



console.log(data)
  return (
    <>   <h4>{data.param.title2}</h4>
        <p>{data.param.welcome}</p>
  
        
        <p>{data.param.number_stay}</p>
        <br/>
        <h4>{data.param.title3}</h4>
        <p>{data.param.content1}</p>
        <p>{data.param.content2}</p>
        <p>{data.param.content3}</p>

    
        


    </>
  );
};

export default UuDaiDetail;
