import React from "react";
import { Table } from 'react-bootstrap';
import Card from '../../components/Cards/Card/Card';
import ItemsCarousel from 'react-items-carousel';
import { useState } from "react";
const Cards = ({ indicatorDetail }) => {

  let indicatorcount = 0;
  if (indicatorDetail) {
    indicatorDetail.map(indi => {
      indicatorcount++;
    });
  }
  let card1;
  card1 = Math.floor(indicatorcount / 2);

  const [activeItemIndex, setActiveItemIndex] = useState(0);

  let colorvar1 = true;
  if (indicatorDetail) {
    var element1 = [];
    for (var i = 0; i < indicatorcount; i++) {
      if (colorvar1 === true) {
        element1.push(<div className="left-card"> <Card
          title={indicatorDetail[i].indicator.indicator_name}
          value={indicatorDetail[i].data_value}
          value_type={indicatorDetail[i].unit.unit_name}
          deff='underweight'
          source={indicatorDetail[i].timeperiod.timeperiod}
          style="pink-card"

        /></div>
        );
        colorvar1 = false;
      }
      else {
        element1.push(<div className="left-card"> <Card
          title={indicatorDetail[i].indicator.indicator_name}
          value={indicatorDetail[i].data_value}
          value_type={indicatorDetail[i].unit.unit_name}
          deff='underweight'
          source={indicatorDetail[i].timeperiod.timeperiod}
          style="green-card"
        /></div>
        );
        colorvar1 = true;
      }

    }
  }
  return (
    <React.Fragment>
      {element1}
    </React.Fragment>
  )
}
export default Cards;