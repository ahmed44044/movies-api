
var allData,allMovies,isSearchTrue=!0;
$(".strip-search").click(function(){isSearchTrue?($(".search").addClass("open-menu").removeClass("close-search"),
$(".fa-search").toggleClass("fa-times"),
$(".search-input").animate({top:"49%"},1500,function(){$(".search-input").animate({top:"50%"},250)}),
isSearchTrue=!isSearchTrue):($(".search").addClass("close-search").removeClass("open-menu"),
$(".fa-search").toggleClass("fa-times"),
$(".search-input").animate({top:"300%"}),
isSearchTrue=!isSearchTrue)});
var row=document.getElementById("rowData"),
categorylinks=document.getElementsByClassName("nav-category"),



























// result=document.getElementById("res"),allMoviesByWord=document.getElementById("allMovies"),
// searchURL="https://api.themoviedb.org/3/search/movie?query=mad&api_key=eba8b9a7199efdcb0ca1f96879b83c44&language=en-US&include_adult=false",
// trendingURL="https://api.themoviedb.org/3/trending/all/day?api_key=eba8b9a7199efdcb0ca1f96879b83c44",
// latestURL="https://api.themoviedb.org/3/movie/latest?api_key=eba8b9a7199efdcb0ca1f96879b83c44",
// popularURL="https://api.themoviedb.org/3/movie/popular?api_key=eba8b9a7199efdcb0ca1f96879b83c44",
// topratedURL="https://api.themoviedb.org/3/movie/top_rated?api_key=eba8b9a7199efdcb0ca1f96879b83c44",
// upcomingURL="https://api.themoviedb.org/3/movie/upcoming?api_key=eba8b9a7199efdcb0ca1f96879b83c44",
// NowURL="https://api.themoviedb.org/3/movie/now_playing?api_key=eba8b9a7199efdcb0ca1f96879b83c44",
// URL="https://api.themoviedb.org/3/movie/now_playing?api_key=eba8b9a7199efdcb0ca1f96879b83c44",
// category="",
// search_bar=document.getElementById("word");getMovies();
// for(var i=0;i<categorylinks.length;i++)categorylinks[i].addEventListener("click",function(e)
// {
//     "Now playing"==(category=e.target.innerHTML)&&(URL=NowURL,getMovies()),
//     "Popular"==category?(URL=popularURL,getMovies()):"Top Rated"==category?(URL=topratedURL,getMovies()):"Latest"==category?(URL=latestURL,getMovies()):"Trending"==category?(URL=trendingURL,getMovies()):"Upcoming"==category&&(URL=upcomingURL,getMovies())});
//     function getMovies(){var e=new XMLHttpRequest;
//         e.open("get",URL),
//         e.send(),
//         e.onreadystatechange=function(){4==e.readyState&&200==e.status?(allMovies=(allMovies=JSON.parse(e.response)).results,

//             displayMovies()):console.log("error")}}function getMoviesByWord(e){var a=new XMLHttpRequest,
//                 t="https://api.themoviedb.org/3/search/movie?query="+e+"&api_key=eba8b9a7199efdcb0ca1f96879b83c44&language=en-US&include_adult=false";
//                 a.open("get",t),
//                 a.send(),
//                 a.onreadystatechange=function(){4==a.readyState&&200==a.status?(allMovies=(allMovies=JSON.parse(a.response)).results,displayMovies()):console.log("error")}}allMoviesByWord.onkeyup=function(){getMoviesByWord(allMoviesByWord.value)};var imgPath="https://image.tmdb.org/t/p/w500";function displayMovies(){for(var e="",a=0;a<allMovies.length;a++)e+='<div class="col-md-6 col-lg-4 my-3 myM  shadow">\n <div class="movie shadow rounded position-relative">\n  <div class="post">\n  <img src='+imgPath+allMovies[a].poster_path+' class="img-fluid rounded"/>\n  <div class="layer d-flex align-items-center ">\n  <div class="info p-0">\n \n  <h2>'+allMovies[a].original_title+"</h2>\n  <p>"+allMovies[a].overview+"</p>\n  <p >rate: "+allMovies[a].vote_average+"</p>\n  <p>"+allMovies[a].release_date+"</p>\n  \n  </div>\n  </div>\n  </div>\n  </div>\n     </div>";row.innerHTML=e}search_bar.onkeyup=function(){var e=search_bar.value,a="";if(""==e)return result.innerHTML=" ",!1;for(var t=0;t<allMovies.length;t++)1==allMovies[t].original_title.includes(e)&&(a+='</h3><div class="col-md-4 my-3 shadow">\n <div class="movie shadow rounded position-relative">\n  <div class="post">\n  <img src='+imgPath+allMovies[t].poster_path+' class="img-fluid rounded"/>\n  <div class="layer d-flex align-items-center ">\n  <div class="info p-5">\n \n  <h2>'+allMovies[t].original_title+"</h2>\n  <p>"+allMovies[t].overview+"</p>\n  <p >rate: "+allMovies[t].vote_average+"</p>\n  <p>"+allMovies[t].release_date+"</p>\n  \n  </div>\n  </div>\n  </div>\n </div>\n </div>",result.innerHTML=a)};