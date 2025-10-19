import { useNavigate } from "react-router-dom";

const Files = () => {


  const navigate = useNavigate()
  const handledoubleclick = () => {
   navigate('/uplouds')
  }

  return (
    <>
      <div 
        onDoubleClick={handledoubleclick}
        className="border-0 rounded-4 p-4 text-center shadow-sm bg-white position-fixed mt-3 ms-3"
        style={{ 
          width: "250px", 
          maxWidth: "100%",
          cursor: "pointer",
          transition: "all 0.3s ease"
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-5px)";
          e.currentTarget.style.boxShadow = "0 0.5rem 1rem rgba(0, 0, 0, 0.15)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.boxShadow = "";
        }}
      >
        <div className="mb-3" style={{ fontSize: "64px" }}>
          📁
        </div>
        <h5 className="fw-bold mb-1">FILES</h5>
        <p className="text-muted small mb-0">Double click to view</p>
      </div>
    </>
  )
}

export default Files;