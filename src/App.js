
import './App.css';
import Header from './components/header';
import Balance from './components/Balance';
import IncomeExpences from './components/incomeExpences';
import TransactionList from './components/TransactionList';
import AddTransaction from './components/AddTransaction';
function App() {
  return (
    <div>
    <Header />
    <div className="container">
      <Balance/>
      <IncomeExpences />
      <TransactionList />
      <AddTransaction />
    </div>
    </div>
  );
}

export default App;
