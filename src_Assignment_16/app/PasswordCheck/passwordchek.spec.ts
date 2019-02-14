import { PassCheck } from './passewordcheck';


describe('PassCheck', ()=>{

     it('password should contain minimum 2 capital, 3 small, 2 digits and 1 special symbol', ()=>
     {
    expect(PassCheck('DARshan@_1008')).toBe(true);
    });
});
