var a=[1,2,3,4,5];
var b=[6,7,8,9,10];
var c=[11,12,13,14,15];
 var Two=new Array();
 var Three=new Array();
 var Five=new Array();
 
 for (var i=0;i<a.length;i++)
  {
    if (a[i]%2===0)  
     {
      Two.push(a[i]);
     }
     else
     if(a[i]%3===0)
     {
       Three.push(a[i]);
     }
     else
     if(a[i]%5===0)
     {
       Five.push(a[i]);
     }
    
  }
 for (var j=0;j<b.length;j++)
  {
    if (b[j]%2===0)  
     {
      Two.push(b[j]);
     }
     else
     if(b[j]%3===0)
     {
       Three.push(b[j]);
     }
    else
     if(b[j]%5===0)
     {
       Five.push(b[j]);
     }
  }
  for (var k=0;k<c.length;k++)
  {
    if (c[k]%2===0)  
     {
      Two.push(c[k]);
     }
     else
     if(c[k]%3===0)
     {
       Three.push(c[k]);
     }
    else
     if(c[k]%5===0)
     {
       Five.push(c[k]);
     }
  }       
     
   
 console.log(Two);
 console.log(Three);
 console.log(Five);