import React from 'react';

const DisplaySum=(props)=>{
  const compute_total=()=>{
    var sum=0;
    for(var i=0;i<props.data.array.length;i++){
      sum+=(props.data.array[i].price*props.data.nbofitems[props.data.array[i].id]);
    }
    return sum;

  }
  return (
    <div className="sum">
      <h3 className="sum_desc">The total sum of all your items is: {compute_total()}$ </h3>
      <h4 className="press">Press the below button to pay!</h4>
      <button className="btn_sum"type="submit">Pay here</button>
    </div>

  )


}
export default DisplaySum;
