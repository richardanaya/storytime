var state = {
  storytime: storytimeInitialState()
};

var store = Voir.createStore(state, [storytimeMutator]);
