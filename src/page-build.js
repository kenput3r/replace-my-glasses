"use strict"

function PageBuild({ props }) {
  return (
    <>
      <p>{data.helloMessage}</p>
    </>
  )
}

const domContainer = document.querySelector("#BuildForm");
const data = domContainer.dataset;
ReactDOM.render(<PageBuild data={data} />, domContainer);