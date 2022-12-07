import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { Produtos } from '../produtos/Produtos';
import { useDispatch, useSelector } from 'react-redux';
import {
    addProduct,
    removeProduct
} from '../slices/productSlice'

export default function FormHome() {

    const dispatch = useDispatch()

    const products = useSelector((state) => state.productStore.products)

    const [item, setItem] = useState('');
    const [quantidade, setQuantidade] = useState('');
    
    const buscarItem = (e) =>{
        const item = Produtos.filter((item) => item.produto.includes(e.toString()))
        if(item){
            setItem(item)
        }
    }

    const addToTable = (item) => {
        dispatch(addProduct(item))
    }

    useEffect(() => {
        console.log(products)
    }, [products])

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
          onChange={(e) => buscarItem(e.target.value)}
        />
        <TextField
          id="outlined-basic"
          label="Quantidade"
          variant="outlined"
          value={quantidade}
        />
        {
            item ?
            item.map((it) =>
                <Button onClick={(e) => addToTable(it)}>{it.produto}</Button>
            ):
            // eslint-disable-next-line jsx-a11y/heading-has-content
            (<h4></h4>)
        }
      </div>
    </Box>
  );
}
