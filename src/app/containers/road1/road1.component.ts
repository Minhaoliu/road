import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-road1',
  templateUrl: './road1.component.html',
  styleUrls: ['./road1.component.less']
})
export class Road1Component implements OnInit {

  constructor() { }

  tabs = [
    {
    title: '组织渠化'
    },
    {
    title: '相位方案'
    },
    {
    title: '流量'
    },
    {
    title: '排队长度'
    },
    {
    title: '通行能力'
    }
];

  dataSet = [
    {
      key         : '1',
      time        : '2019-0701 08:20',
      direction1   : '1200',
      direction2   : '1200',
      direction3   : '1200',
      direction4   : '1200',
      direction5   : '1200',
      direction6   : '1200',
      direction7   : '1200',
      direction8   : '1200',
      direction9   : '1200',
      direction10  : '1200',
      direction11  : '1200',
      direction12  : '1200',
    },
    {
      key         : '2',
      time        : '2019-0701 08:20',
      direction1   : '1200',
      direction2   : '1200',
      direction3   : '1200',
      direction4   : '1200',
      direction5   : '1200',
      direction6   : '1200',
      direction7   : '1200',
      direction8   : '1200',
      direction9   : '1200',
      direction10  : '1200',
      direction11  : '1200',
      direction12  : '1200',
    },
    {
      key         : '3',
      time        : '2019-0701 08:20',
      direction1   : '1200',
      direction2   : '1200',
      direction3   : '1200',
      direction4   : '1200',
      direction5   : '1200',
      direction6   : '1200',
      direction7   : '1200',
      direction8   : '1200',
      direction9   : '1200',
      direction10  : '1200',
      direction11  : '1200',
      direction12  : '1200',
    },
  ];

  ngOnInit() {
  }

}
