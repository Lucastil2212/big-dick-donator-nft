import React from "react";
import "../styles/App.css";
import { AttachMoneyOutlined } from "@mui/icons-material";
import Button from "@mui/material/Button";

function Header() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">Big Dick Donator NFTs</h1>
        <p>
          Trade my NFT collections and I will match your trade with a donation
          to the specified organization in the collection description!
        </p>

        <h3>So far, I donated </h3>
        <h1>
          0<AttachMoneyOutlined fontSize="large" />
        </h1>
        <h1></h1>
        <Button
          variant="contained"
          href="https://opensea.io/collection/earthy-things"
        >
          Earthy Things Collection
        </Button>
      </header>
    </div>
  );
}

export default Header;
