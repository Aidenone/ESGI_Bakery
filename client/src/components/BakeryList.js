import React from 'react';
import BakeryItem from './BakeryItem.js';

const BakeryList = ({bakery:bakeries}) => bakeries.map(bakery => <BakeryItem bakery={bakery} />);

export default BakeryList;