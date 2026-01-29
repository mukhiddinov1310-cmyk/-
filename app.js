const from = document.getElementById('from');
const to = document.getElementById('to');
const amount = document.getElementById('amount');
const btn = document.getElementById('btn');
const summa = document.getElementById('summa')



const GetValyuta = async () => {
    let response = await fetch(`https://hexarate.paikama.co/api/rates/${from.value}/${to.value}/latest`);
    let data = await response.json();

    console.log(data);
    


    btn.addEventListener("click", () =>{


       GetValyuta()
    })

   
  summa.textContent = amount.value * data.data.mid

   
}

GetValyuta();