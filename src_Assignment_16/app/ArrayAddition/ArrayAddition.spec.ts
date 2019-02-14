
import {ArrAdd} from './ArrayAddition';

describe('ArrAdd',()=>
{
    it('It returns addition of all members in array',()=>
    {
        expect(ArrAdd([10,20,30])).toBe(60);
    })
})