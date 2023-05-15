import React from "react";

export default function Table(props) {
  // use map function to list all the details from species
  if (props.catDetails.length > 0) {
    return (
      <table>
        <thead>
          <th>Name</th>
          <th>Age</th>
          <th>Color</th>
          <th>weight</th>
        </thead>
        <tbody>
          {props.catDetails.map((catDetail) => {
            return (
              //  Write your code below
              <tr>
                <td>{catDetail.name}</td>
                <td>{catDetail.age}</td>
                <td>{catDetail.color}</td>
                <td>{catDetail.weight}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  } else {
    return <></>;
  }
}
