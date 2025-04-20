import { useState, useCallback, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeSymbols, setIncludeSymbols] = useState(false);
  const [password, setPassword] = useState("");
  const passwordref = useRef( null);
  // The React useCallback Hook returns a memoized callback function and gives optimized sol.
  const generatePassword = useCallback(() => { //useCallback m dependency array pass krte h jisme jo bhi change hoga wo function ko call krega
    let pass = "";
    console.log("pass",pass);
    
    let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let numbers = "0123456789";
    let symbols = "!@#$%^&*()_?";
   
    
    // Include numbers if selected
    if (includeNumbers) {
      characters += numbers;
      pass += numbers.charAt(Math.floor(Math.random() * numbers.length)); // Ensure at least one number
    }
    
    // Include symbols if selected
    if (includeSymbols) {
      characters += symbols;
      pass += symbols.charAt(Math.floor(Math.random() * symbols.length)); // Ensure at least one special character
    }
    
    // Fill the remaining characters
    for (let i = pass.length; i < length; i++) {
      const charIndex = Math.floor(Math.random() * characters.length);
      pass += characters.charAt(charIndex);
    }
    setPassword(pass);
  }, [length, includeNumbers, includeSymbols]);
  // ye function ko call krane k liye h jisme logic likha h agr usko bina useEffect k run krenge to ni chlega or array m kch v change ho to run krane k liye h
  useEffect(() => {
    generatePassword();
  }, [length, includeNumbers, includeSymbols, generatePassword]);

  const copypasswordtoscreen = useCallback(() => {
    console.log("window", window);
    passwordref.current?.select();
    console.log("passwordref",passwordref);

    window.navigator.clipboard.writeText(password);
  }, [password]);
  return (
    <div className="app">
      <h1 className="title">PASSWORD GENERATOR</h1>
      <div className="container">
        <div className="password-box">
          <input
            type="text"
            value={password}
            readOnly
            placeholder="Password"
            className="password-input"
            ref={passwordref}
          />
          <button onClick={copypasswordtoscreen} className="copy-button">
            COPY
          </button>
        </div>
        {/* Add any additional settings like length, number, and char options here */}
        <div className="lowcontainer">
          <div>
            <input
              type="range"
              value={length}
              min={8}
              max={100}
              className=" cursor-pointer  ml-2"
              onChange={(e) => {
                console.log("e", e.target.value);
                setLength(e.target.value);
                // onChange onclick sb pe e event listener lgega or call back rhega object k andar
              }}
            />
            <label className=" ml-2 text-orange-400">Length : {length}</label>
          </div>
          <div className="numcheck ml-5">
            
            <input
              type="checkbox"
              defaultChecked={includeNumbers}
              onChange={() => {
                setIncludeNumbers((prev) => !prev);
              }}
            />
            <label className="text-orange-400"> Number Allowed</label>
          </div>

          <div className="charcheck ml-5">
            
            <input
              type="checkbox"
              defaultChecked={setIncludeSymbols}
              onChange={() => {
                setIncludeSymbols((prev) => !prev);
              }}
            />
            <label className="text-orange-400">Character Allowed</label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
// callback function ko useEffect m pass kiya h jisse wo function call ho jaega jab bhi length, includeNumbers, includeSymbols change honge
// callbackfunction caching k liye or optimiation k liye 
//useEffect m dependency array pass kiya h jisme jo bhi change hoga wo function ko call krega
// kisi bhi chij ka reference lena hota h to useRef ka use hota h

// import { useState, useCallback, useEffect, useRef } from "react";
// import "./App.css";

// function App() {
//   const [length, setLength] = useState(8);
//   const [includeNumbers, setIncludeNumbers] = useState(false);
//   const [includeSymbols, setIncludeSymbols] = useState(false);
//   const [password, setPassword] = useState("");
//   const passwordref = useRef(null);

//   const generatePassword = useCallback(() => {
//     let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
//     let numbers = "0123456789";
//     let symbols = "!@#$%^&*()_?";
//     let pass = "";
    
//     // Include numbers if selected
//     if (includeNumbers) {
//       characters += numbers;
//       pass += numbers.charAt(Math.floor(Math.random() * numbers.length)); // Ensure at least one number
//     }
    
//     // Include symbols if selected
//     if (includeSymbols) {
//       characters += symbols;
//       pass += symbols.charAt(Math.floor(Math.random() * symbols.length)); // Ensure at least one special character
//     }
    
//     // Fill the remaining characters
//     for (let i = pass.length; i < length; i++) {
//       const charIndex = Math.floor(Math.random() * characters.length);
//       pass += characters.charAt(charIndex);
//     }
    
//     // Shuffle the password to avoid predictable patterns
//     setPassword(pass.split('').sort(() => 0.5 - Math.random()).join(''));
//   }, [length, includeNumbers, includeSymbols]);

//   useEffect(() => {
//     generatePassword();
//   }, [length, includeNumbers, includeSymbols, generatePassword]);

//   const copypasswordtoscreen = useCallback(() => {
//     passwordref.current?.select();
//     window.navigator.clipboard.writeText(password);
//   }, [password]);

//   const refreshPage = () => {
//     window.location.reload();
//   };

//   return (
//     <div className="app">
//       <h1 className="title">PASSWORD GENERATOR</h1>
//       <div className="container">
//         <div className="password-box">
//           <input
//             type="text"
//             value={password}
//             readOnly
//             placeholder="Password"
//             className="password-input"
//             ref={passwordref}
//           />
//           <button onClick={copypasswordtoscreen} className="copy-button">
//             COPY
//           </button>
          
//         </div>
        
//         <div className="lowcontainer">
//           <div>
//             <input
//               type="range"
//               value={length}
//               min={8}
//               max={100}
//               className="cursor-pointer ml-2"
//               onChange={(e) => setLength(e.target.value)}
//             />
//             <label className="ml-2 text-orange-400">Length : {length}</label>
//           </div>
          
//           <div className="numcheck ml-5">
//             <input
//               type="checkbox"
//               checked={includeNumbers}
//               onChange={() => setIncludeNumbers((prev) => !prev)}
//             />
//             <label className="text-orange-400"> Number Allowed</label>
//           </div>

//           <div className="charcheck ml-5">
//             <input
//               type="checkbox"
//               checked={includeSymbols}
//               onChange={() => setIncludeSymbols((prev) => !prev)}
//             />
//             <label className="text-orange-400">Character Allowed</label>
//           </div>
          
//         </div>
        
//       </div>
//       <button onClick={refreshPage} className="refresh-button">
//             REFRESH
//           </button>
//     </div>
//   );
// }

// export default App;
// import { useState, useCallback, useEffect, useRef } from "react";
// import "./App.css";

// function App() {
//   const [length, setLength] = useState(() => {
//     return localStorage.getItem("passwordLength") ? parseInt(localStorage.getItem("passwordLength")) : 8;
//   });
//   const [includeNumbers, setIncludeNumbers] = useState(() => {
//     return localStorage.getItem("includeNumbers") === "true";
//   });
//   const [includeSymbols, setIncludeSymbols] = useState(() => {
//     return localStorage.getItem("includeSymbols") === "true";
//   });
//   const [password, setPassword] = useState("");
//   const passwordref = useRef(null);

//   const generatePassword = useCallback(() => {
//     let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
//     let numbers = "0123456789";
//     let symbols = "!@#$%^&*()_?";
//     let pass = "";
    
//     // Include numbers if selected
//     if (includeNumbers) {
//       characters += numbers;
//       pass += numbers.charAt(Math.floor(Math.random() * numbers.length)); // Ensure at least one number
//     }
    
//     // Include symbols if selected
//     if (includeSymbols) {
//       characters += symbols;
//       pass += symbols.charAt(Math.floor(Math.random() * symbols.length)); // Ensure at least one special character
//     }
    
//     // Fill the remaining characters
//     for (let i = pass.length; i < length; i++) {
//       const charIndex = Math.floor(Math.random() * characters.length);
//       pass += characters.charAt(charIndex);
//     }
    
//     // Shuffle the password to avoid predictable patterns
//     setPassword(pass.split('').sort(() => 0.5 - Math.random()).join(''));
//   }, [length, includeNumbers, includeSymbols]);

//   useEffect(() => {
//     generatePassword();
//     localStorage.setItem("passwordLength", length);
//     localStorage.setItem("includeNumbers", includeNumbers);
//     localStorage.setItem("includeSymbols", includeSymbols);
//   }, [length, includeNumbers, includeSymbols, generatePassword]);

//   const copypasswordtoscreen = useCallback(() => {
//     passwordref.current?.select();
//     window.navigator.clipboard.writeText(password);
//   }, [password]);

//   const refreshPage = () => {
//     window.location.reload();
//   };

//   return (
//     <div className="app">
//       <h1 className="title">PASSWORD GENERATOR</h1>
//       <div className="container">
//         <div className="password-box">
//           <input
//             type="text"
//             value={password}
//             readOnly
//             placeholder="Password"
//             className="password-input"
//             ref={passwordref}
//           />
//           <button onClick={copypasswordtoscreen} className="copy-button">
//             COPY
//           </button>
        
//         </div>
        
//         <div className="lowcontainer">
//           <div>
//             <input
//               type="range"
//               value={length}
//               min={8}
//               max={100}
//               className="cursor-pointer ml-2"
//               onChange={(e) => setLength(e.target.value)}
//             />
//             <label className="ml-2 text-orange-400">Length : {length}</label>
//           </div>
          
//           <div className="numcheck ml-5">
//             <input
//               type="checkbox"
//               checked={includeNumbers}
//               onChange={() => setIncludeNumbers((prev) => !prev)}
//             />
//             <label className="text-orange-400"> Number Allowed</label>
//           </div>

//           <div className="charcheck ml-5">
//             <input
//               type="checkbox"
//               checked={includeSymbols}
//               onChange={() => setIncludeSymbols((prev) => !prev)}
//             />
//             <label className="text-orange-400">Character Allowed</label>
//           </div>
//         </div>
//         <button onClick={refreshPage} className="refresh-button">
//             REFRESH
//           </button>
//       </div>
//     </div>
//   );
// }

// export default App;
