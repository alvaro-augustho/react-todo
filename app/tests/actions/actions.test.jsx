var expect = require('expect');
var actions = require('actions');

describe('Actions', () => {
   it('should generate searchText action', () => {
        var action = {
            type: 'SET_SEARCH_TEXT',
            searchText: 'some search text'
        };
        var res = actions.setSearchText(action.searchText);
       
        expect(res).toEqual(action);
   });
    it('should generate add todo action', () => {
        var action = {
            type: 'ADD_TODO',
            text: 'thing to do'
        };
        var res = actions.addTodo(action.text);
        
        expect(res).toEqual(action);
    });
    it('should generate toggle show completed', () => {
        var action = {
            type: 'TOGGLE_SHOW_COMPLETED',
        };
        var res = actions.toggleShowCompleted();
        
        expect(res).toEqual(action);
    });
});