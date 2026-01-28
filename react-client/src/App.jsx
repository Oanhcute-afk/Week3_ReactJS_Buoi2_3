import Header from "./Buoi2_3/component/Header";
import StudentInfo from "./Buoi2_3/component/StudentInfo";
import Footer from "./Buoi2_3/component/Footer";

import ControlledForm from "./Buoi2_3/component/ControlledForm";
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
          <ControlledForm/>
        </div>
      </div>
    </div>
  );
}

export default App;