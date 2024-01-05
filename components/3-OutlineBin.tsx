import React from "react";

const c2d: React.CSSProperties = {
  width: "90%",
  margin: "auto",
  padding: 5,
  boxShadow: "0px 0px 20px 10px #c3c3c3",
  borderRadius: 5,
};

const headerStyle: React.CSSProperties = {
  textDecoration: "none",
  fontFamily: "Arial",
  fontWeight: "bold",
  color: "black",
}

export const OutlineBin: React.FC<{
  clipIndex: number;
  setNum: React.Dispatch<React.SetStateAction<number>>;
}> = ({ clipIndex, setNum }) => {
  
  const onChange = (value: number) => {
    setNum(value);
    console.log(value)
  }

  const buttonStyle = {
    border: "none",
    borderRadius: "100px",
    backgroundColor: "#c3c3c3",
    margin: "5px",
    padding: "var(--geist-half-pad)",
    color: "white",
    fontFamily: "Arial",
    fontWeight: "bold",
    fontSize: 14,
  }

  const activeButtonStyle = {
    border: "none",
    borderRadius: "100px",
    backgroundColor: "#61DBFB",
    margin: "5px",
    padding: "var(--geist-half-pad)",
    color: "white",
    fontFamily: "Arial",
    fontWeight: "bold",
    fontSize: 14,
  }

  return (
    <div style={c2d}>
      <ul><b style={headerStyle}>Directory</b>
        <li>
          <button 
          style={clipIndex === 1 ? activeButtonStyle : buttonStyle} 
          onClick={() => onChange(1)}>
            Introduction
          </button>
        </li>
        <b style={headerStyle}>About Me</b>
        <ul>
          <li>
            <button 
            style={clipIndex === 2 ? activeButtonStyle : buttonStyle} 
            onClick={() => onChange(2)}>
              Problem Solver
            </button>
          </li>
          <li>
            <button 
            style={clipIndex === 3 ? activeButtonStyle : buttonStyle} 
            onClick={() => onChange(3)}>
              Entreprenuership
            </button>
          </li>
          <li>
            <button 
            style={clipIndex === 4 ? activeButtonStyle : buttonStyle} 
            onClick={() => onChange(4)}>
              Why Philanthropy?
            </button>
          </li>
        </ul>
        <b style={headerStyle}>Projects</b>
        <ul>
          <li>
            <button 
            style={clipIndex === 5 ? activeButtonStyle : buttonStyle} 
            onClick={() => onChange(5)}>
              Online System Administration
            </button>
          </li>
          <li>
            <button 
            style={clipIndex === 6 ? activeButtonStyle : buttonStyle} 
            onClick={() => onChange(6)}>
              KPI Finances Dashboard
            </button>
          </li>
          <li>
            <button 
            style={clipIndex === 7 ? activeButtonStyle : buttonStyle} 
            onClick={() => onChange(7)}>
              Programmatic Video Content
            </button>
          </li>
        </ul>
          <li>
            <button 
            style={clipIndex === 8 ? activeButtonStyle : buttonStyle} 
            onClick={() => onChange(8)}>
              Value to Your Oganization
            </button>
          </li>
          <li>
            <button 
            style={clipIndex === 9 ? activeButtonStyle : buttonStyle} 
            onClick={() => onChange(9)}>
              Contact Me
            </button>
          </li>
      </ul>
    </div>
  );
};


{/*

<ul><b style={headerStyle}>Directory</b>
      <li><button style={button} type={"button"} value={1} onClick={onChange}>Introduction</button></li>

    </ul>



    <button type={"button"} value={1} onClick={onChange}>Introduction</button>
    <button type={"button"} value={2} onClick={onChange}>I'm a problem solver</button>
    <button type={"button"} value={3} onClick={onChange}>Entreprenuership</button>
    <button type={"button"} value={4} onClick={onChange}>Why Philanthropy?</button>
    <button type={"button"} value={5} onClick={onChange}>Online System Administration</button>
    <button type={"button"} value={6} onClick={onChange}>KPI Finance and Dashboard</button>
    <button type={"button"} value={7} onClick={onChange}>Programmatic Video Content</button>
    <button type={"button"} value={8} onClick={onChange}>Value to Organization</button>
    <button type={"button"} value={9} onClick={onChange}>Contact Me</button>
  </div>

    <input 
      type="range"
      min={-2000}
      max={2000}
      step={10}
      name="translate"
      value={clipIndex}
      onChange={onChange}
    />

    <ul><b style={headerStyle}>Directory</b>
                  <a href="#a1" style={linkStyle}>
                  <li style={{
                    ...button,
                    backgroundColor: "#61DBFB",
                  }}>Introduction</li>
                  </a>
                  <b style={headerStyle}>About Me</b>
                  <ul>
                    <a href="#a2" style={linkStyle}><li style={button}>I'm a problem solver</li></a>
                    <a href="#a3" style={linkStyle}><li style={button}>Entreprenuership</li></a>
                    <a href="#a4" style={linkStyle}><li style={button}>Why Philanthropy?</li></a>
                  </ul>
                  <b style={headerStyle}>Projects</b>
                  <ul>
                    <a href="#a5" style={linkStyle}><li style={button}>Online System Administration</li></a>
                    <a href="#a6" style={linkStyle}><li style={button}>KPI Finance and Dashboard</li></a>
                    <a href="#a7" style={linkStyle}><li style={button}>Programmatic Video Content</li></a>
                  </ul>
                  <a href="#a8" style={linkStyle}><li style={button}>Value to Your Organization</li></a>
                  <a href="#a9" style={linkStyle}><li style={button}>Contact Me</li></a>
                </ul>


    <a href="#a2" style={linkStyle}><li style={button}>I'm a problem solver</li></a>
                    <a href="#a3" style={linkStyle}><li style={button}>Entreprenuership</li></a>
                    <a href="#a4" style={linkStyle}><li style={button}>Why Philanthropy?</li></a>
                  </ul>
                  <b style={headerStyle}>Projects</b>
                  <ul>
                    <a href="#a5" style={linkStyle}><li style={button}>Online System Administration</li></a>
                    <a href="#a6" style={linkStyle}><li style={button}>KPI Finance and Dashboard</li></a>
                    <a href="#a7" style={linkStyle}><li style={button}>Programmatic Video Content</li></a>
                  </ul>
                  <a href="#a8" style={linkStyle}><li style={button}>Value to Your Organization</li></a>
                  <a href="#a9" style={linkStyle}><li style={button}>Contact Me</li></a>

    <select>
      <option value={1}>Intro</option>
      <option value={2}>Intro2</option>
      <option value={3}>Intro3</option>
      <option value={4}>Intr4</option>
    </select>
  */}