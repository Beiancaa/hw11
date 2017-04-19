a=[1,2,3,4,5]
b=[6,7,8,9,10]
c=[11,12,13,14,15]
Two = Array.new
Three = Array.new
Five = Array.new
 
 for i in 1..5 do
  
    if a[i] % 2 == 0  
     
      Two.push(a[i])
    
     elsif a[i] % 3 == 0 
     
       Three.push(a[i])
     
     elsif a[i] % 5 == 0 
     
       Five.push(a[i])
    end
  end
 for j in 1..5 do
  
    if b[j] % 2 == 0  
     
      Two.push;
     
     elsif b[j] % 3 == 0 
     
       Three.push(b[j])
     
     elsif b[j] % 5 == 0 
     
       Five.push(b[j])
    end
  end
  for k in 1..5 do
  
    if c[k] % 2 == 0  
     
      Two.push(c[k])
     
     elsif c[k] % 3 == 0 
     
       Three.push(c[k])
     
     elsif c[k] % 5 == 0 
     
       Five.push(c[k])
    end
  end       
     
   
 puts (Two)
 puts (Three)
 puts (Five)