const API_ADDRESS = "https://cbcfe147-7065-4535-a5a3-a4ad3ad6fda2-8080.apps.codespaces.githubusercontent.com/";

export function testApi() {

    fetch(API_ADDRESS,{
        headers: {
            'Content-Type': 'application/json',
            'app-id': '5ff1aa68b9e5e32033aed84b'
          },
    })
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result);
        },
        (error) => {
         console.error(error);
        }
      )


    fetch("https://dummyapi.io/data/api/user?limit=10",{
        headers: {
            'Content-Type': 'application/json',
            'app-id': '5ff1aa68b9e5e32033aed84b'
          },
    })
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result);
        },
        (error) => {
         console.error(error);
        }
      )
}
