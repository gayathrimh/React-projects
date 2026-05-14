import {useState} from 'react'
export default function Page1() {
    const [itemName, setItemName] = useState('')
    const [itemPrice, setItemPrice] = useState('')
    const [expenses, setExpenses] = useState([])
    const handleSubmit = () => {
          const newExpense = {
    name: itemName,
    price: itemPrice
  };

  setExpenses([...expenses,newExpense]);

  setItemName("");
  setItemPrice("");
};
    

  return (
    <div>
      <p>Page 1</p>
      <p>Enter Item name:   <input type="text" value={itemName} onChange={(e)=>setItemName(e.target.value)}/></p>
      <p>Enter Item price:   <input type="number" value={itemPrice} onChange={(e)=>setItemPrice(e.target.value)}/></p>
      <button onClick={handleSubmit}>Submit</button>
      {expenses.map((e, index) => (

  <p key={index}>
    {e.name} - ₹{e.price}
  </p>

))}
    </div>
  )
}