import React from "react";

const ComponentTable = (props) => {
  const { datanya } = props;

  return (
    <div className="container ">
      <div className="row">
        <div className="col-md-4 text-center mx-auto">
          <table className="w-100">
            <thead>
              <tr>
                <th>Nama Obat</th>
                <th>Desc</th>
              </tr>
            </thead>
            <tbody>
              {datanya.map((item) => (
                <tr key={item.farmalkes_id}>
                  <td>{item.farmalkes_desc}</td>
                  <td>{item.farmalkes_id}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ComponentTable;
