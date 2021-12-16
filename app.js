const getData = (resource) => {
    

    return new Promise((resolve, reject) => {

        const request = new XMLHttpRequest();
        
         request.addEventListener('readystatechange', () => {
        
            // console.log(request, request.readyState);
    
            
            if(request.readyState === 4 && request.status === 200) {
                const data = JSON.parse(request.responseText);
                // console.log(request, request.responseText);
    
                resolve(data);
            
            } else if (request.readyState === 4) {
            
                // console.log('Could not fetch data');
    
                reject('Failed to getting resource');
    
            }
        
         });
        
        request.open('GET', resource );
        request.send();

    });


};

getData('data/data.json')

    .then(data => {

    console.log('Promise resolved :', data);

    return getData('data/data2.json');

})
    .then((data) => { 

    console.log('Promise 2 resolved', data); 

    return getData('data/data3.json');

}).then((data) => {

    console.log('Promise 3 resolved', data);

})
    .catch((data) => {

    console.log('Promise rejected:', data);

});