import React, {useState, useEffect} from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { useSelector } from 'react-redux'

export default function Overview() {
    const [qtdItens, setQtdItens] = useState('')
    const [total, setTotal] = useState('')
    const products = useSelector(state => state.productStore.products) 

    useEffect(()=>{
        setQtdItens(products.length)
        setTotal(products.reduce((total,item)=> Number(total) + Number(item.valor), 0))
    },[products])

    return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 200,
          height: 250,
        },
      }}
    >
      <Paper> 
        <h4>Resumo</h4>
        <p>Toral: <b>R${total}</b></p>
        <p>Qnt: <b>{qtdItens}</b></p>
      </Paper>
    </Box>
  );
}
