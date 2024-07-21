let url="https://codeforces.com/api/contest.list";
let response=fetch(url);
response.then((value)=>{
    return value.json();
}).then((data)=>{
    // console.log(contests);
    const contests=data.result;
    // console.log(contests);
    // console.log(contests[item]);
    let ihtml="";
    for(item in contests){
    ihtml+=`
            <div class="card" style="width:20rem;">
            
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQImrIhCuOYByE3yYIh-rv1l2BEI2CMK7APKg&s" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title"> ${contests[item].name} </h5>
                <p class="card-text">Phase: ${contests[item].phase}</p>

                <p class="card-text">Type: ${contests[item].type}</p>
                
              </div>
            </div>`;
    }
    cardContainer.innerHTML=ihtml;
})