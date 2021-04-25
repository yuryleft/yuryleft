var a="aababba";
var b="abbaabcd";
console.log("для вызова функции - commonsubstring(a,b)")
function commonsubstring(a,b) 
{
    var longeststring = "";
    for (var i = 0; i < a.length; i++) 
    {
      for (var l = 0; l < b.length; l++)
        {
         if (a[i] === b[l]) 
           {
                var str = a[i];
                var k = 1;
                
                while ((i+k < a.length) && (l+k < b.length) && (a[i+k] === b[l+k])) 
                { 
                    str += a[i+k];
                    k++;
                }
                if (str.length > longeststring.length)  longeststring = str 
            }
        }
    }
    return longeststring;
}
