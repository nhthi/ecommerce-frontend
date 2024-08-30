import React, { useEffect, useRef, useState } from 'react';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { Avatar, Card, CardHeader, Divider } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { searchProduct } from '../../../../state/product/action';
import { useNavigate } from 'react-router-dom';

function SearchBar() {
  const [searchValue, setSearchValue] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const ref = useRef(null);
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const product = useSelector(store => store.product)

  console.log("search product: ", product.searchProducts);



  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setIsOpen(false);
    }
  };
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleChange = (e) => {
    setSearchValue(e.target.value)
  }
  const handleFocus = () => {
    setIsOpen(true)
  }
  useEffect(() => {
    if (searchValue.length > 0) {
      console.log("search value: ", searchValue);
      dispatch(searchProduct(searchValue))
    }
  }, [searchValue])
  return (
    <div className='relative'>
      <TextField
        onFocus={handleFocus}
        onChange={handleChange}
        sx={{
          borderRadius: '30px', // Bo góc với radius 20px
          '& .MuiOutlinedInput-root': {
            borderRadius: '30px',
            width: 400,
            height: 40// Bo góc cho input
          },
        }}
        value={searchValue}
        variant="outlined"
        placeholder="Search..."
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton>
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
        fullWidth
      />
      {
        (isOpen && searchValue) &&
        <div ref={ref} className=' animate-fadeIn shadow-2xl shadow-stone-800 bg-white absolute z-10 w-full max-h-[60vh] top-[3.2rem] cursor-pointer space-y-3 bg-primary overflow-scroll scroll-hidden rounded-md'>
          {
            (searchValue.length > 0 && product.searchProducts.length>0) ?
            product.searchProducts.map(item =>
              <Card sx={{
                boxShadow: 0,
                transition: 'transform 0.3s ease-in-out',
                '&:hover': {
                  transform: 'scale(1.05)',
                },
                marginLeft: 2,
              }}
              onClick={()=>{
                navigate(`/product/${item?.id}`)
                setIsOpen(false)
              }}
              >
                <CardHeader
                  avatar={
                    <Avatar src={item?.imageUrl} />
                  }
                  titleTypographyProps={{ style: { textAlign: 'left' } }}
                  subheaderTypographyProps={{ style: { textAlign: 'left' } }}
                  title={`${item?.title} - ${item?.brand}`}
                  subheader={`${item?.discountPrice}$`}
                />
              </Card>
            ):
            <h1 className='flex justify-center p-4 font-semibold'>Không có sản phẩm nào ...</h1>
          }


        </div>
      }
    </div>

  );
}

export default SearchBar;