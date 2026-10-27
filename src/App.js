import "./App.css";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import TotalExpense from "./components/TotalExpense";
import { ExpenseProvider } from "./context/ExpenseContext";
import ThemeToggle from "./components/ThemeToggle";
import AboutPage from "./pages/AboutPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutIconLink from "./components/AboutIconLink";

function App() {
  return (
    <ExpenseProvider>
      <Router>
        <div className="App">
          <header className="App-header">
            <ThemeToggle />
            <h1>My Expense Tracker</h1>
            <Routes>
              <Route
                path="/"
                exact
                element={
                  <>
                    <ExpenseForm />
                    <TotalExpense />
                    <ExpenseList />
                    <AboutIconLink />
                  </>
                }
              />

              <Route path="/about" exact element={<AboutPage />} />
            </Routes>
          </header>
        </div>
      </Router>
    </ExpenseProvider>
  );
}

export default App;
