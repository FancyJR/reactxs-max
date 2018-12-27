import Mock from 'mockjs';

Mock.mock('/newLogin', 
  {
    status:0,    
    data: [{
      'first': 1,
      'second': 2,
      'third': 3,
    }]
  }
);
