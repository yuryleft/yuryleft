console.log('для вызова функции ввести swap(a,k)')
var a =[1,2,3,4,5];
var k = 3;
function swap(a,k)
{    
        for(i=0;i<k;i++) 
        a.unshift(a.pop());
        return a;

}
