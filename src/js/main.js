import $ from 'jquery';


$.ajax({
  url: 'https://randomuser.me/api/?results=12',
  dataType: 'json',
  success: getStuff
  });




function getStuff(data){
  console.log(data);
  for (var count = 0; count < data.results.length; count++){
  $(".container").append(
    `
  <div class="stuff">
   <ul>
  <div><li class="images"><img src="${data.results[count].picture.large}"/></li></div>
  <div><li class="names"><span>${data.results[count].name.first} ${data.results[count].name.last}</span></li></div>
  <div><li class="emails">${data.results[count].email}</li></div>
  <div><li class="streets">${data.results[count].location.street}</li></div>
  <div><li class="cities">${data.results[count].location.city} ${data.results[count].location.state} ${data.results[count].location.postcode}</li></div>
  <div><li class="phonenumbers">${data.results[count].phone}</li></div>
  </ul>
  </div>
  `
)
}
};
