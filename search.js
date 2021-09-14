function searchFn() {
  let x = document.getElementById("searchtext").value;

  console.log(x.toUpperCase());

  let url = "https://datahub.io/core/country-list/r/0.html"


  const address = fetch("https://api.thecatapi.com/v1/breeds")
    .then((response) => response.json())
    .then((user) => {
      return user;
    });

  const printAddress = async () => {
    const a = await address;
    console.log(a);
    function ii() {


      var value = Object.entries(a).find(([key, value])=>{
        if(value.name.toUpperCase() == x.toUpperCase()){
          return [key,value];
        }
      })

      if(value!=null){
        console.log("YES found");
            document.getElementById("pp").innerHTML = "Yes " + x.toUpperCase() + " exists  ";
      }else{
        console.log("not found");
        document.getElementById("pp").innerHTML = "No " + x.toUpperCase() + " doesn't exists  ";
      }

      // Object.entries(a).forEach(([key, value]) => {
      //   console.log(key, value.name.toUpperCase());
      //   // document.getElementById("pp").innerHTML = value.name    

      //   if (value.name.toUpperCase() == x.toUpperCase()) {
      //     console.log("It exiss");
      //     document.getElementById("pp").innerHTML = "Yes " + value.name + " exists  ";
         
      //     return 0;
        
      //   }else{
      //     console.log("?????????????")
      //     document.getElementById("pp").innerHTML = "No " + x + " doesn't exists  ";
      //   }
      




      // })
    }; console.log(ii(), "..........");
  };

  printAddress();


}



// function SecondsearchFn() {
//   let x = document.getElementById("searchtext").value;

//   console.log(x.toUpperCase());

//   let url = "https://datahub.io/core/country-list/r/0.html"


//   const address = fetch("https://api.thecatapi.com/v1/breeds")
//     .then((response) => response.json())
//     .then((user) => {
//       return user;
//     });

//   const printAddress = async () => {
//     const a = await address;
//     console.log(a);
//     function ii() {
//       Object.entries(a).forEach(([key, value]) => {
//         console.log(key, value.name.toUpperCase());
//         // document.getElementById("pp").innerHTML = value.name    

//         if(value.name.toUpperCase() !== x.toUpperCase()) {
//           console.log("It exiss");
//         }
//         else{
//           document.getElementById("ppp").innerHTML = "Noooo " + x + " not exists  ";
//           return x;
//         }




//       })
//     }; console.log(ii(), "..........");
//   };

//   printAddress();


// }

// fetch(url).then((response) => {
//     return response.json()
//   }).then((data) => {
//     console.log(data)
//   }).catch((error)=>{
//     console.log(error)
//   }
//   )

  // fetch("https://restcountries.eu/rest/v2/all") //1
  // .then((response) => response.json()) //2
  // .then((user) => {
  //   console.log(user  ); //3
  // });
//     function isCherries(fruit) {
//       if(fruit.name == x){
//         console.log(fruit.name)
//         document.getElementById("pp").innerHTML = "Yes "+fruit.name+" exists  "
//       }
//   return fruit.name;
// }
// let re = a.find(isCherries)
// console.log(re.name);
// document.getElementById("pp").innerHTML = "Yes "+re.name+" exists  "
  //   if(value.name == 'York Chocolate'){
  // document.getElementById("pp").innerHTML = value.name
  //   }
  //   else{
  //     document.getElementById("pp").innerHTML = "Countrty Does Not exist"
  //   }
// function isCherries(fruit) {
//   return fruit.name == 'Manx';
// }
// let re = a.find(isCherries)
// console.log(re.name);

// let a = [1,2,3,4,5,6];
// let i = 0;
// let x =3;
// // console.log(a[i],"??????????")
// function ii() {
// for( a[i];a[i]<=7;i++){
// 	console.log(a[i]);
// 	if(a[i]==x){
// 		document.getElementById("pp").innerHTML = "Yes "+a[i]+" exists  "
//     return;


// 	}else{
//     document.getElementById("pp").innerHTML = "No............... "+x+" is not exists  "

//   }






// }}
// console.log(ii(),"..........");