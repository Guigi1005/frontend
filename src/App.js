import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import Rightbar from "./components/Rightbar";
import { Stack } from "@mui/material";
import Navbar from "./components/Navbar";
import Add from "./components/Add";

function App() {
  return (
    <box>
      <Navbar/>
      <Stack direction='row' spacing={2}>
        <Sidebar/>
        <Feed/>
        <Rightbar/>
      </Stack>
      <Add/>
    </box>
  );
}

export default App;
