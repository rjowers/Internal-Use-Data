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



  `  <ul>
  <li><img src="${data.results[count].picture.large}"/></li>
  <li class="names">${data.results[count].name.first} ${data.results[count].name.last}</li>
  <li class="emails">${data.results[count].email}</li>
  <li class="streets">${data.results[count].location.street}</li>
  <li class="cities">${data.results[count].location.city} ${data.results[count].location.state} ${data.results[count].location.postcode}</li>
  <li class="phonenumbers">${data.results[count].phone}</li>
  </ul> `

)
}
};
