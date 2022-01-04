import './App.css';
import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import React, { useState } from "react";
import { ethers } from "ethers";


// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 



function App() {
  
  const [fname, setFname] = useState("")

  const handleChange = e => {
    setFname(e.target.value)
  }

  const network = "mainnet";

  const provider = new ethers.providers.InfuraProvider(network, {
    projectId: "234917530f0240f3ac505c80223474e3",
    projectSecret: "78fbac48939044f4834ed277b2a2e4b5"
  });


  let block = provider.on("block", {

  });

  return (
    <div className="App">
        <SideNav id="navcolor">
          <SideNav.Toggle />
            <SideNav.Nav defaultSelected="home">
              <NavItem eventKey="home">
                  <NavIcon>
                      <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
                  </NavIcon>
                  <NavText>
                      Home
                  </NavText>
              </NavItem>
          
          <NavItem eventKey="charts">
            <NavIcon>
                <i className="fa fa-fw fa-line-chart" style={{ fontSize: '1.75em' }} />
            </NavIcon>
            <NavText>
                Charts
            </NavText>
          </NavItem>
          </SideNav.Nav>
        </SideNav>

      <div>

      <header className="App-header">
        Hello There
        <form>
          <label>
            Crypto Address:{" "}
            <input type="text" value={fname} onChange={handleChange} />
          </label>
        </form>
        <h5>Crypto Address: {fname}</h5>
        <h5>block: {block.number}</h5>
      </header>
      </div>

    </div>
  );
}

export default App;
