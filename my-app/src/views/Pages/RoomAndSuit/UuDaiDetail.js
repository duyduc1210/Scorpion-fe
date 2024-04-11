
const UuDaiDetail = (props) => {

  const {data} = props;



console.log(data)
  return (
    <>
        <p>{data.param.welcome}</p>
        <p>{data.param.number_stay}</p>
        <p>{data.param.content1}</p>
        <p>{data.param.content2}</p>
        <p>{data.param.content3}</p>
        <p>{data.param.content4}</p>
        <p>{data.param.wifi}</p>
        <p>{data.param.price}</p>
        <p>{data.param.detail}</p>
        <p>{data.param.content5}</p>
        


    </>
  );
};

export default UuDaiDetail;
