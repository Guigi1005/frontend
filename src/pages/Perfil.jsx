import React from 'react'
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import {
  Stack,
} from "@mui/material";

const Perfil = () => {
  return (

    <box>
      <Navbar/>
      <Stack direction='row' spacing={2}>
        <Sidebar/>
        <Sidebar/>
        <Sidebar/>
      </Stack>
    </box>

  )
}

export default Perfil