import {MyAddPipe} from './my-add.pipe';
import {MyMultPipe} from './my-mult.pipe';
import {NumCheckPipe} from './num-check.pipe';


describe('Pipe: MyAddPipe', () => 
{
  it('should return addition of the inputs', () => 
  {
    let addPipe = new MyAddPipe();
    expect(addPipe.transform(10,10)).toBe(20);
  });

});

describe('Pipe: MyMultPipe', () => 
{
  it('should return multiplication of the inputs', () => 
  {
    let multPipe = new MyMultPipe();
    expect(multPipe.transform(10,10)).toBe(100);
  });

});


describe('Pipe: NumCheckPipe', () => 
{
  it('check number is even ,prime or perfect ', () => 
  {
    let numCheck = new NumCheckPipe();
    expect(numCheck.transform(10,'even')).toEqual('It is Even Number');
    expect(numCheck.transform(2,'prime')).toEqual('It is Prime Number');
    expect(numCheck.transform(6,'perfect')).toEqual('It is Perfect Number');

    
  });

});

