console.log('hello world');

// let add=document.getElementById('add')
// let sub=document.getElementById('sub')
const billInput=document.getElementById('bill')
const tipInput=document.getElementById('tip')
const people=document.getElementById('tot')
let perPerson=document.getElementById('perPersonTotal')


let totPeople=Number(people.innerText)


const calculateBill = () => {
     const bill = Number(billInput.value)
  
 const tipPercent = Number(tipInput.value) / 100
  
 const tipAmount = bill * tipPercent
  
    const total = tipAmount + bill
  
    const perPersonTotal = total / totPeople
  
     perPerson.innerText = `$${perPersonTotal.toFixed(2)}`
  }

const add=()=>{
    totPeople += 1

 people.innerText = totPeople
  calculateBill()
}

const sub=()=>{
  
  if (totPeople <= 1) {
    return
  }

  totPeople -= 1
people.innerText = totPeople
calculateBill()
}

