import React from 'react';
import { Link } from 'dva/router';


export default function() {
  return (
    <div style={{ margin: 35 }}>
      <ul>
        <li>
          <Link to="/day_1">【Day 1】 2020.11.30</Link>
        </li>
      </ul>
    </div>
  );
}
