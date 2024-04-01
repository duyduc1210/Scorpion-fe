
const UuDaiDetail = (props) => {

  const {data} = props;

  const formatNumber = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }

console.log(data)
  return (
    <>
        <p >{ formatNumber(data.param.price)}</p>
        <p>{data.param.status}</p>
        <p>{data.param.number_stay}</p>
        <p>{data.param.detail}</p>


    </>
  );
};

export default UuDaiDetail;
