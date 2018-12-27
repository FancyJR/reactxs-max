import Mock from 'mockjs';

Mock.mock('/loginOut', 
  {
    status:0,    
    data: [{
      'first': 3,
      'second': 2,
      'third': 1,
    }]
  }
);
