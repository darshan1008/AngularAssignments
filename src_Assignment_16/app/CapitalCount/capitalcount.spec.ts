import { CapsCount } from "./CapitalCount";

describe('CapitalCount', ()=>{

     it('should return count of capital laters', ()=>
     {
    expect(CapsCount('DarShaN')).toBe(3);
    });
});
