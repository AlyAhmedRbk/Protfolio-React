
import "./parallax.scss";

const Parallax = ({type}) => {

  
  return (
    <div className="parallax" style={{
       background :
        type === "services"
          ? "linear-gradient(180deg, #111132, #0c0c1d)"
          : "linear-gradient(180deg, #111132, #505064)"
      }}>
      <h1> {type==="service"?"What We Do?" : "What we Did?" }</h1>
      <div  className="mountains"></div>
      <div  className="planets"
        style={{ 
          backgroundImage : `url(${type==="service" ? "/planets.png" : "/sun.png"})`
        }}
      />
      <div  className="stars"></div>
    </div>
  )
}

export default Parallax;
