import "./App.css";
import { InfoBox } from "./assets/infoBox/infoBox";
import { Name } from "./assets/name/name";
import { SectionRight } from "./assets/sectionRight/sectionRight";
import { TextBox } from "./assets/textBox/textBox";

function App() {
  return (
    <>
      <div className="container">
        {/* <SectionRight> */}
         <div className="sectionRight">
          <p className="sectionRightText">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum illo
            labore, dignissimos, ratione fugiat facere deserunt quos esse
            doloremque ab quae nulla sed et ex iusto aliquam repellat eos
            officiis.  
        </p>  
                <TextBox />

        </div> 
              {/* </SectionRight>  */}

        <Name />
        <div className="foto"></div>
        <InfoBox />
      </div>
      <footer className="footer"></footer>
    </>
  );
}

export default App;
