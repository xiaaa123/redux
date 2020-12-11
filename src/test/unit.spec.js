import reducers from '../reducers';

test('reducers', () => {
  let state;
  state = reducers({products:[],shoppingCart:{cart:[{product:'bread',quantity:2,cost:90},{product:'milk',quantity:1,cost:20},{product:'coffee',quantity:1,cost:250},{product:'Flour',quantity:10,cost:110},{product:'juice',quantity:1,cost:250}]}}, {type:'DELETE_FROM_CART',payload:{product:'coffee'}});
  expect(state).toEqual({products:[],shoppingCart:{cart:[{product:'bread',quantity:2,cost:90},{product:'milk',quantity:1,cost:20},{product:'Flour',quantity:10,cost:110},{product:'juice',quantity:1,cost:250}]}});
});
