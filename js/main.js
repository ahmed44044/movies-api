var myHttp =new XMLHttpRequest();
var trendindMovies = [];
myHttp.open('GET','https://api.themoviedb.org/3/trending/all/week?api_key=eba8b9a7199efdcb0ca1f96879b83c44');
myHttp.send();
myHttp.addEventListener('readystatechange', function(){

    if(myHttp.readyState == 4 && myHttp.status ==200) {
        trendindMovies = JSON.parse(myHttp.response).results;
        // function  searchAllMovies(searchTerm){
        //     let searchResult = [];
        // let allMovies = trendindMovies.filter(function(trendindMovies){ return trendindMovies.original_title == searchTerm } );
        // searchResult.push(...allMovies);
        // console.log(searchResult);
        // //  displayItems(searchResult);
        // }
        
        console.log(trendindMovies);
        displayItems(trendindMovies);
    }
});
// function searchProducts(searchTerm){
//     var searchResult =[];
//     for(var i =0 ; i <trendindMovies.length ;i++)
//     {
//         if(trendindMovies[i].original_title.toLowerCase().includes(searchTerm.toLowerCase()) ==true) 
//         {
            
//         searchResult.push(trendindMovies[i]);
//         // searchResult[i].name = productsContainer[i].name.replace(searchTerm)
            
//             console.log(searchResult);
//         }
//     }
    
//     // displayItems(searchResult);
// }

function displayItems(list) {
    var cartona =``;
    for(var i=0; i<list.length;i++) {
        
        cartona+= `
        <div class="col-md-4 p-3">
            <div class="post ">
                <img src="https://image.tmdb.org/t/p/w500${list[i].poster_path}" class=" w-100" alt="">
                <div class="layer text-center">
                    <h3>${list[i].original_title}</h3>
                    <p>${list[i].overview}</p>
                    <p>${list[i].vote_average}</p>
                    <p>${list[i].release_date}</p>
                    
            </div>
                </div>

            </div>
        `
    }
    document.getElementById('rowData').innerHTML= cartona;
}


// function searchAllMovies(searchTerm)
// {

// var searchResult = [];
// for (let i = 0; i <trendindMovies.length; i++) {
//     if(trendindMovies.original_title.includes(searchTerm) == true)
//     {
//         searchResult.push(trendindMovies[i])
//         console.log(trendindMovies[i]);
//     }
//     console.log(searchResult);
// }
//     displayItems(searchResult);
// }
// searchAllMovies();

// function displayItems(list) {
//     var cartona =``;
//     for(var i=0; i<trendindMovies.length;i++) {
        
//         cartona+= `
//         <div class="col-md-4 p-3">
//             <div class="post ">
//                 <img src="https://image.tmdb.org/t/p/w500${list[i].poster_path}" class=" w-100" alt="">
//                 <div class="layer text-center">
//                     <h3>${list[i].original_title}</h3>
//                     <p>${list[i].overview}</p>
//                     <p>${list[i].vote_average}</p>
//                     <p>${list[i].release_date}</p>
                    
//             </div>
//                 </div>

//             </div>
//         `
//     }
//     document.getElementById('rowData').innerHTML= cartona;
// }












//  Now playing
$('.item1').click(function(){
var myHttp =new XMLHttpRequest();
var trendindMovies = [];
myHttp.open('GET','https://api.themoviedb.org/3/trending/Now playing/day?api_key=eba8b9a7199efdcb0ca1f96879b83c44');
myHttp.send();
myHttp.addEventListener('readystatechange', function(){

    if(myHttp.readyState == 4 && myHttp.status ==200) {
        trendindMovies = JSON.parse(myHttp.response).results;
        console.log(trendindMovies);
        displayItems();
    }
});

function displayItems() {
    var cartona =``;
    for(var i=0; i<trendindMovies.length;i++) {
        
        cartona+= `
        <div class="col-md-4 p-3">
            <div class="post ">
                <img src="https://image.tmdb.org/t/p/w500${trendindMovies[i].poster_path}" class=" w-100" alt="">
                <div class="layer text-center">
                    <h3>${trendindMovies[i].original_title}</h3>
                    <p>${trendindMovies[i].overview}</p>
                    <p>${trendindMovies[i].vote_average}</p>
                    <p>${trendindMovies[i].release_date}</p>
                    
            </div>
                </div>

            </div>
        `
    }
    document.getElementById('rowData').innerHTML= cartona;
}

})

// ##popular

$('.item2').click(function(){
    var myHttp =new XMLHttpRequest();
var trendindMovies = [];
myHttp.open('GET','https://api.themoviedb.org/3/movie/popular?api_key=eba8b9a7199efdcb0ca1f96879b83c44&language=en-US&page=1');
myHttp.send();
myHttp.addEventListener('readystatechange', function(){

    if(myHttp.readyState == 4 && myHttp.status ==200) {
        trendindMovies = JSON.parse(myHttp.response).results;
        console.log(trendindMovies);
        displayItems();
    }
});

function displayItems() {
    var cartona =``;
    for(var i=0; i<trendindMovies.length;i++) {
        
        cartona+= `
        <div class="col-md-4 p-3">
            <div class="post ">
                <img src="https://image.tmdb.org/t/p/w500${trendindMovies[i].poster_path}" class=" w-100" alt="">
                <div class="layer text-center">
                    <h3>${trendindMovies[i].original_title}</h3>
                    <p>${trendindMovies[i].overview}</p>
                    <p>${trendindMovies[i].vote_average}</p>
                    <p>${trendindMovies[i].release_date}</p>
                    
            </div>
                </div>

            </div>
        `
    }
    document.getElementById('rowData').innerHTML= cartona;
}


})


// ##top-rated
$('.item3').click(function(){

    var myHttp =new XMLHttpRequest();
var trendindMovies = [];
myHttp.open('GET','https://api.themoviedb.org/3/movie/top_rated?api_key=eba8b9a7199efdcb0ca1f96879b83c44&language=en-US&page=1');
myHttp.send();
myHttp.addEventListener('readystatechange', function(){

    if(myHttp.readyState == 4 && myHttp.status ==200) {
        trendindMovies = JSON.parse(myHttp.response).results;
        console.log(trendindMovies);
        displayItems();
    }
});

function displayItems() {
    var cartona =``;
    for(var i=0; i<trendindMovies.length;i++) {
        
        cartona+= `
        <div class="col-md-4 p-3">
            <div class="post ">
                <img src="https://image.tmdb.org/t/p/w500${trendindMovies[i].poster_path}" class=" w-100" alt="">
                <div class="layer text-center">
                    <h3>${trendindMovies[i].original_title}</h3>
                    <p>${trendindMovies[i].overview}</p>
                    <p>${trendindMovies[i].vote_average}</p>
                    <p>${trendindMovies[i].release_date}</p>
                    
            </div>
                </div>

            </div>
        `
    }
    document.getElementById('rowData').innerHTML= cartona;
}

})

$('.item4').click(function(){

    var myHttp =new XMLHttpRequest();
var trendindMovies = [];
myHttp.open('GET','https://api.themoviedb.org/3/trending/movie/day?api_key=eba8b9a7199efdcb0ca1f96879b83c44');
myHttp.send();
myHttp.addEventListener('readystatechange', function(){

    if(myHttp.readyState == 4 && myHttp.status ==200) {
        trendindMovies = JSON.parse(myHttp.response).results;
        console.log(trendindMovies);
        displayItems();
    }
});

function displayItems() {
    var cartona =``;
    for(var i=0; i<trendindMovies.length;i++) {
        
        cartona+= `
        <div class="col-md-4 p-3">
            <div class="post ">
                <img src="https://image.tmdb.org/t/p/w500${trendindMovies[i].poster_path}" class=" w-100" alt="">
                <div class="layer text-center">
                    <h3>${trendindMovies[i].original_title}</h3>
                    <p>${trendindMovies[i].overview}</p>
                    <p>${trendindMovies[i].vote_average}</p>
                    <p>${trendindMovies[i].release_date}</p>
                    
            </div>
                </div>

            </div>
        `
    }
    document.getElementById('rowData').innerHTML= cartona;
}

})





// ##upcoming
$('.item5').click(function(){
    var myHttp =new XMLHttpRequest();
var trendindMovies = [];
myHttp.open('GET','https://api.themoviedb.org/3/movie/upcoming?api_key=eba8b9a7199efdcb0ca1f96879b83c44&language=en-US&page=1');
myHttp.send();
myHttp.addEventListener('readystatechange', function(){

    if(myHttp.readyState == 4 && myHttp.status ==200) {
        trendindMovies = JSON.parse(myHttp.response).results;
        let momo =trendindMovies.filter(trendindMovies=>trendindMovies='D');
        console.log(momo);
        console.log(trendindMovies);
        displayItems();
    }
});

function displayItems() {
    var cartona =``;
    for(var i=0; i<trendindMovies.length;i++) {
        
        cartona+= `
        <div class="col-md-4 p-3">
            <div class="post ">
                <img src="https://image.tmdb.org/t/p/w500${trendindMovies[i].poster_path}" class=" w-100" alt="">
                <div class="layer text-center">
                    <h3>${trendindMovies[i].original_title}</h3>
                    <p>${trendindMovies[i].overview}</p>
                    <p>${trendindMovies[i].vote_average}</p>
                    <p>${trendindMovies[i].release_date}</p>
                    
            </div>
                </div>

            </div>
        `
    }
    document.getElementById('rowData').innerHTML= cartona;
}

})

$("a[href^='#']").click(function(){//هنا هيجبلي اي لينك هيبدا ب # عشان لو حاطط مثلا لينك جوجل
    let currentHref = $(this).attr('href');
    let currentOffset = $(currentHref).offset().top;
    $('body,html').animate({scrollTop:currentOffset},1500)



})




$('.nav-open').click(function(){
    $('.nav-side').animate({  width: '300px'},500);
    $('.nav').animate({"margin-left":"300px"},500);
    $(".item1").animate({paddingLeft:"45px",paddingTop:"25px"},700),
    $(".item2").animate({paddingLeft:"45px",paddingTop:"25px"},900),
    $(".item3").animate({paddingLeft:"45px",paddingTop:"25px"},1000),
    $(".item4").animate({paddingLeft:"45px",paddingTop:"25px"},1200),
    $(".item5").animate({paddingLeft:"45px",paddingTop:"25px"},1300),
    $(".item6").animate({paddingLeft:"45px",paddingTop:"25px"},1400),
    $('.nav-open').css('display','none');
    $('.nav-close').css('display','block');

})
$('.nav-close').click(function(){
    $('.nav-side').animate({  width: '0px'},2000);
    $('.nav').animate({"margin-left":"0px"},2000)
    $(".item1").animate({paddingLeft:"0px",paddingTop:"0px"},700),
    $(".item2").animate({paddingLeft:"0px",paddingTop:"0px"},900),
    $(".item3").animate({paddingLeft:"0px",paddingTop:"0px"},1000),
    $(".item4").animate({paddingLeft:"0px",paddingTop:"0px"},1200),
    $(".item5").animate({paddingLeft:"0px",paddingTop:"0px"},1300),
    $(".item6").animate({paddingLeft:"0px",paddingTop:"0px"},1400),
    $('.nav-close').css('display','none');
    $('.nav-open').css('display','block');

}) 

new WOW().init();


function validateInputName(){
    var regex =/^[a-zA-Z0-9]+$/;
    if(regex.test(Name.value) == true)
    {
        Name.classList.replace('is-invalid','is-valid');
        return true;
    }
    else
    {
        Name.classList.add('is-invalid');
        return false;
    }
}

function validateInputEmail(){
    var regex =/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    if(regex.test(Email.value) == true)
    {
        Email.classList.replace('is-invalid','is-valid');
        return true;
    }
    else
    {
        Email.classList.add('is-invalid');
        return false;
    }
}
function validateInputPhone(){
    var regex =/^01[0125][0-9]{8}$/;
    if(regex.test(Phone.value) == true)
    {
        Phone.classList.replace('is-invalid','is-valid');
        return true;
    }
    else
    {
        Phone .classList.add('is-invalid');
        return false;
    }
}
function validateInputAge(){
    var regex =/^[1-9][0-9]?$|^100$/;
    if(regex.test(Age.value) == true)
    {
        Age.classList.replace('is-invalid','is-valid');
        return true;
    }
    else
    {
        Age.classList.add('is-invalid');
        return false;
    }
}
function validateInputPass(){
    var regex =/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if(regex.test(Pass.value) == true)
    {
        Pass.classList.replace('is-invalid','is-valid');
        return true;
    }
    else
    {
        Pass.classList.add('is-invalid');
        return false;
    }
}
function validateInputRePass(){
    var regex =/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if(regex.test(RePass.value) == true && Pass.value === RePass.value )
    {
        
        RePass.classList.replace('is-invalid','is-valid');
        return true;
    }
    else
    {
        RePass.classList.add('is-invalid');
        return false;
    }
}




// var myHttp =new XMLHttpRequest();
// var searchAllMovies = [];
// myHttp.open('GET','https://api.themoviedb.org/3/search/keyword?api_key=eba8b9a7199efdcb0ca1f96879b83c44&page=1');
// myHttp.send();
// myHttp.addEventListener('readystatechange', function(){

//     if(myHttp.readyState == 4 && myHttp.status ==200) {
//         trendindMovies = JSON.parse(myHttp.response).results;
//         console.log(trendindMovies);
        
//     }
// });

// function displayItems() {
//     var cartona =``;
//     for(var i=0; i<trendindMovies.length;i++) {


        
//         cartona+= `
//         <div class="col-md-4 p-3">
//             <div class="post ">
//                 <img src="https://image.tmdb.org/t/p/w500${trendindMovies[i].poster_path}" class=" w-100" alt="">
//                 <div class="layer text-center">
//                     <h3>${trendindMovies[i].original_title}</h3>
//                     <p>${trendindMovies[i].overview}</p>
//                     <p>${trendindMovies[i].vote_average}</p>
//                     <p>${trendindMovies[i].release_date}</p>
                    
//             </div>
//                 </div>

//             </div>
//         `
//     }
//     document.getElementById('rowData').innerHTML= cartona;
// }






















































                