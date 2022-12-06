import { Budget } from "./budget-models";

export const budgetDepenses: Budget[] = [
{
  id: '1',
   name:'Trousers',
   amount:100,
   categories: 'Clothing',
   mandatory:false,
   dateDepenses: ''
 },
 {
   id: '2',
    name:'Food race',
    amount:150,
    categories: 'Food',
    mandatory:true,
    dateDepenses: ''
  },
  {
   id: '3',
    name:'Withdrawing money',
    amount:100,
    categories: 'Bank',
    mandatory:true,
    dateDepenses: ''
  },
  {
   id: '4',
    name:'Rent',
    amount:100,
    categories: 'House',
    mandatory:true,
    dateDepenses: ''
  },
  {
   id: '5',
    name:'Cigarettes',
    amount:10,
    categories: 'Health',
    mandatory:true,
    dateDepenses: ''
  }

];