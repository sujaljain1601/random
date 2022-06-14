import "./App.css";
import { Button, Input } from "@mui/material";
import { auth, firebase } from "./firebase";
async function googleLogin() {
  //1 - init Google Auth Provider
  const provider = new firebase.auth.GoogleAuthProvider();
  //2 - create the popup signIn
  await auth.signInWithPopup(provider).then(
    async (result) => {
      //3 - pick the result and store the token
      const token = await auth?.currentUser?.getIdToken(true);
      //4 - check if have token in the current user
      if (token) {
        //5 - put the token at localStorage (We'll use this to make requests)
        localStorage.setItem("@token", token);
        //6 - navigate user to the book list
        // history.push("/success");
        console.log("Token is");
        console.log(token);
        // copyTextToClipboard(token);
        // navigator.clipboard.writeText(token);
        document.getElementById("token").value = token;
      }
    },
    function (error) {
      console.log("Error Occured");
      console.log(error);
    }
  );
}
export async function copyTextToClipboard(text) {
  if ("clipboard" in navigator) {
    return await navigator.clipboard.writeText(text);
  } else {
    return document.execCommand("copy", true, text);
  }
}
function App() {
  return (
    <div className="App">
      <div>
        <h2 style={{ margin: "20px 0" }}>Firebase Token Generator</h2>
        <Button
          variant="contained"
          style={{ margin: "15px" }}
          onClick={googleLogin}
        >
          Login with Gmail
        </Button>
        <Input type="text" style={{ display: "block" }} id="token"></Input>
      </div>
    </div>
  );
}

export default App;
