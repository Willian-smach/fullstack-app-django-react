import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Produtos } from '../produtos/Produtos';

export default function FormPropsTextFields() {

    const [item, setItem] = useState('');
    const [quantidade, setQuantidade] = useState('');
    
    const buscarItem = (e) =>{
        const item = Produtos.filter((item) => item.produto.includes(e.toString()))
        console.log(item);
        setItem(e)
    }

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id="outlined-basic"
          label="Item"
          variant="outlined"
          value={item}
          onChange={(e) => buscarItem(e.target.value)}
        />
        <TextField
          id="outlined-basic"
          label="Quantidade"
          variant="outlined"
          value={quantidade}
        />
      </div>
    </Box>
  );
}
