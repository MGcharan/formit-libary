import React from "react";

function Footer() {
  return (
    <footer className="py-5 bg-dark"  style={{marginTop:"40%"}}>  
      <div className="container text-center">
     
       <br/>
        <p className="m-0 text-center fst-normal text-white">
          Copyright ©{" "}
          <a
            href="#"
            style={{
              textDecoration: "none",
              color: " #32CD32",
              fontWeight: "bold",
            }}
          >
           <img className="text-center" src="/image/my-logo.png" alt="logo" style={{width:"9gi0px"}}/>
          </a>{" "}
          {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}

export default Footer;
