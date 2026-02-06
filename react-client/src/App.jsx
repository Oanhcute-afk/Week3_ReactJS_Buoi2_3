import Header from "./Buoi2_3/component/Header";
import StudentInfo from "./Buoi2_3/component/StudentInfo";
import Footer from "./Buoi2_3/component/Footer";
import StatusBadge from "./Buoi2_3/component/StatusBadge";
import ControlledForm from "./Buoi2_3/component/ControlledForm";
import ToDoShow from "./Buoi2_3/component/ToDoShow";
import CounterApp from "./Buoi2_3/component/CounterApp";
import DigitalClock from "./Buoi2_3/component/DigitalClock";
import UserForm from "./Buoi2_3/component/UserForm";
import Stopwatch from "./Buoi2_3/component/Stopwatch";
import ProductFilter from "./Buoi2_3/component/ProductFilter";
import TodoApp from "./Buoi2_3/component/TodoListPerformance";
import AppTheme from "./Buoi2_3/component/ThemeSwitcher";
function App() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        backgroundColor: "#f5f5f5",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: 420,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: 20,
          backgroundColor: "#fff",
          boxShadow: "0 0 10px rgba(0,0,0,0.1)",
        }}
      >
        
       

        <div style={{ marginTop: 24 }}>
           <Header />
          <StudentInfo
            name="Tran Ngoc Oanh"
            mssv="23730431"
            className="DHKTPM19B"
          />
          <Footer/>
        </div>
        <div style={{ marginTop: 24 }}>
          <CounterApp/>
        </div>

        <div style={{ marginTop: 24 }}>
          <ControlledForm/>
        </div>
        <div style={{ marginTop: 24 }}>
          <StatusBadge/>
        </div>
        <div style={{ marginTop: 24 }}>
          <ToDoShow/>
        </div>
        <div style={{ marginTop: 24 }}>
          <UserForm/>
        </div>
        <div style={{ marginTop: 24 }}>
          <DigitalClock/>
        </div>
        <div style={{ marginTop: 24 }}>
          <Stopwatch/>
        </div>
        <div style={{ marginTop: 24 }}>
          <ProductFilter/>
        </div>
        <div style={{ marginTop: 24 }}>
          <TodoApp/>
        </div>
        <div style={{ marginTop: 24 }}>
          <AppTheme/>
        </div>
      </div>
    </div>
  );
}

export default App;