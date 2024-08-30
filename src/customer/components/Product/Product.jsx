/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
'use client'

import { useEffect, useState } from 'react'
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { ChevronDownIcon, FunnelIcon, MinusIcon, PlusIcon, Squares2X2Icon } from '@heroicons/react/20/solid'
import ProductCard from './ProductCard'
import { filters, singleFilter, sortOptions } from './FilterData'
import { FormControl, FormControlLabel, FormLabel, Pagination, Radio, RadioGroup } from '@mui/material'
import FilterListIcon from '@mui/icons-material/FilterList';
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { findProducts } from '../../../state/product/action'



// export const product = [
//   {
//     id: 1,
//     title: 'Váy ngủ body tôn dáng, siêu hứng thú, tăng kích thích',
//     imageUrl: 'https://file.hstatic.net/1000308659/file/a14_oo_1250_1024x1024.jpg',
//     brand: 'VietCloth',
//     price: 79,
//     discountPrice: 59,
//     discountPercent: 10
//   },
//   {
//     id: 2,
//     title: 'Váy siêu ôm body tôn dáng',
//     imageUrl: 'https://file.hstatic.net/1000308659/file/a14_oo_1250_1024x1024.jpg',
//     brand: 'VietCloth',
//     price: 79,
//     discountPrice: 59,
//     discountPercent: 10
//   },
//   {
//     id: 3,
//     title: 'Váy ngủ body tôn dáng, siêu hứng thú, tăng kích thích',
//     imageUrl: 'https://file.hstatic.net/1000308659/file/a14_oo_1250_1024x1024.jpg',
//     brand: 'VietCloth',
//     price: 79,
//     discountPrice: 59,
//     discountPercent: 10
//   },
//   {
//     id: 4,
//     title: 'Váy siêu ôm body tôn dáng',
//     imageUrl: 'https://file.hstatic.net/1000308659/file/a14_oo_1250_1024x1024.jpg',
//     brand: 'VietCloth',
//     price: 79,
//     discountPrice: 59,
//     discountPercent: 10
//   }, {
//     id: 5,
//     title: 'Váy ngủ body tôn dáng, siêu hứng thú, tăng kích thích',
//     imageUrl: 'https://file.hstatic.net/1000308659/file/a14_oo_1250_1024x1024.jpg',
//     brand: 'VietCloth',
//     price: 79,
//     discountPrice: 59,
//     discountPercent: 10
//   },
//   {
//     id: 6,
//     title: 'Váy siêu ôm body tôn dáng',
//     imageUrl: 'https://file.hstatic.net/1000308659/file/a14_oo_1250_1024x1024.jpg',
//     brand: 'VietCloth',
//     price: 79,
//     discountPrice: 59,
//     discountPercent: 10
//   },
//   {
//     id: 1,
//     title: 'Váy ngủ body tôn dáng, siêu hứng thú, tăng kích thích',
//     imageUrl: 'https://file.hstatic.net/1000308659/file/a14_oo_1250_1024x1024.jpg',
//     brand: 'VietCloth',
//     price: 79,
//     discountPrice: 59,
//     discountPercent: 10
//   },
//   {
//     id: 2,
//     title: 'Váy siêu ôm body tôn dáng',
//     imageUrl: 'https://file.hstatic.net/1000308659/file/a14_oo_1250_1024x1024.jpg',
//     brand: 'VietCloth',
//     price: 79,
//     discountPrice: 59,
//     discountPercent: 10
//   },
//   {
//     id: 3,
//     title: 'Váy ngủ body tôn dáng, siêu hứng thú, tăng kích thích',
//     imageUrl: 'https://file.hstatic.net/1000308659/file/a14_oo_1250_1024x1024.jpg',
//     brand: 'VietCloth',
//     price: 79,
//     discountPrice: 59,
//     discountPercent: 10
//   },
//   {
//     id: 4,
//     title: 'Váy siêu ôm body tôn dáng',
//     imageUrl: 'https://file.hstatic.net/1000308659/file/a14_oo_1250_1024x1024.jpg',
//     brand: 'VietCloth',
//     price: 79,
//     discountPrice: 59,
//     discountPercent: 10
//   }, {
//     id: 5,
//     title: 'Váy ngủ body tôn dáng, siêu hứng thú, tăng kích thích',
//     imageUrl: 'https://file.hstatic.net/1000308659/file/a14_oo_1250_1024x1024.jpg',
//     brand: 'VietCloth',
//     price: 79,
//     discountPrice: 59,
//     discountPercent: 10
//   },
//   {
//     id: 6,
//     title: 'Váy siêu ôm body tôn dáng',
//     imageUrl: 'https://file.hstatic.net/1000308659/file/a14_oo_1250_1024x1024.jpg',
//     brand: 'VietCloth',
//     price: 79,
//     discountPrice: 59,
//     discountPercent: 10
//   },
//   {
//     id: 1,
//     title: 'Váy ngủ body tôn dáng, siêu hứng thú, tăng kích thích',
//     imageUrl: 'https://file.hstatic.net/1000308659/file/a14_oo_1250_1024x1024.jpg',
//     brand: 'VietCloth',
//     price: 79,
//     discountPrice: 59,
//     discountPercent: 10
//   },
//   {
//     id: 2,
//     title: 'Váy siêu ôm body tôn dáng',
//     imageUrl: 'https://file.hstatic.net/1000308659/file/a14_oo_1250_1024x1024.jpg',
//     brand: 'VietCloth',
//     price: 79,
//     discountPrice: 59,
//     discountPercent: 10
//   },
//   {
//     id: 3,
//     title: 'Váy ngủ body tôn dáng, siêu hứng thú, tăng kích thích',
//     imageUrl: 'https://file.hstatic.net/1000308659/file/a14_oo_1250_1024x1024.jpg',
//     brand: 'VietCloth',
//     price: 79,
//     discountPrice: 59,
//     discountPercent: 10
//   },
//   {
//     id: 4,
//     title: 'Váy siêu ôm body tôn dáng',
//     imageUrl: 'https://file.hstatic.net/1000308659/file/a14_oo_1250_1024x1024.jpg',
//     brand: 'VietCloth',
//     price: 79,
//     discountPrice: 59,
//     discountPercent: 10
//   }, {
//     id: 5,
//     title: 'Váy ngủ body tôn dáng, siêu hứng thú, tăng kích thích',
//     imageUrl: 'https://file.hstatic.net/1000308659/file/a14_oo_1250_1024x1024.jpg',
//     brand: 'VietCloth',
//     price: 79,
//     discountPrice: 59,
//     discountPercent: 10
//   },
//   {
//     id: 6,
//     title: 'Váy siêu ôm body tôn dáng',
//     imageUrl: 'https://file.hstatic.net/1000308659/file/a14_oo_1250_1024x1024.jpg',
//     brand: 'VietCloth',
//     price: 79,
//     discountPrice: 59,
//     discountPercent: 10
//   },
// ]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Product() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  const params = useParams()
  const dispatch = useDispatch()
  const product = useSelector(store => store.product)
  

  const decodeQueryString = decodeURIComponent(location.search)
  const searchParams = new URLSearchParams(decodeQueryString)
  const colorValue = searchParams.get('color')
  const sizeValue = searchParams.get('size')
  const priceValue = searchParams.get('price')
  const discountValue = searchParams.get('color')
  const stockValue = searchParams.get('stock')
  const sortValue = searchParams.get('sort')
  const pageNumber = searchParams.get('page') || 1





  const handleFilter = (value, sectionId) => {
    const searchParams = new URLSearchParams(location.search)
    let filterValue = searchParams.getAll(sectionId)
    if (filterValue.length > 0 && filterValue[0].split(',').includes(value)) {
      filterValue = filterValue[0].split(',').filter(item => item !== value)
      if (filterValue.length === 0) {
        searchParams.delete(sectionId)
      }
    } else {
      filterValue.push(value)
    }

    if (filterValue.length > 0) {
      searchParams.set(sectionId, filterValue.join(','))
    }
    const query = searchParams.toString()
    navigate({ search: `?${query}` })
  }

  const handleRadioFilterChange = (e, sectionId) => {
    const searchParams = new URLSearchParams(location.search)
    searchParams.set(sectionId, e.target.value)
    const query = searchParams.toString()
    navigate({ search: `?${query}` })
  }

  const handlePaginationChange = (e,value)=>{
    console.log('page selected: ',value);
    const searchParams = new URLSearchParams(location.search)
    searchParams.set("page",value)
    const query = searchParams.toString()
    navigate({search:`${query}`})
  }
  useEffect(() => {
    const [minPrice, maxPrice] = priceValue === null ? [0, 1000] : priceValue.split('-').map(Number)

    const data = {
      category: params.labelThree,
      color: colorValue || [],
      size: sizeValue || [],
      minPrice,
      maxPrice,
      minDiscount: discountValue || 0,
      sort: sortValue || 'price_low',
      pageNumber: pageNumber - 1,
      pageSize: 12,
      stock: stockValue || 'in_stock'
    }
    console.log("data", data);

    dispatch(findProducts(data))

  }, [
    params.labelThree,
    colorValue,
    priceValue,
    sizeValue,
    sortValue,
    discountValue,
    stockValue,
    pageNumber
  ])
  return (
    <div className="bg-white">
      <div>
        {/* Mobile filter dialog */}
        <Dialog open={mobileFiltersOpen} onClose={setMobileFiltersOpen} className="relative z-40 lg:hidden">
          <DialogBackdrop
            transition
            className="fixed inset-0 bg-black bg-opacity-25 transition-opacity duration-300 ease-linear data-[closed]:opacity-0"
          />

          <div className="fixed inset-0 z-40 flex">
            <DialogPanel
              transition
              className="relative ml-auto flex h-full w-full max-w-xs transform flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl transition duration-300 ease-in-out data-[closed]:translate-x-full"
            >
              <div className="flex items-center justify-between px-4">
                <h2 className="text-lg font-medium text-gray-900">Filters</h2>
                <button
                  type="button"
                  onClick={() => setMobileFiltersOpen(false)}
                  className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                </button>
              </div>

              {/* Filters */}
              <form className="mt-4 border-t border-gray-200">
                {filters.map((section) => (
                  <Disclosure key={section.id} as="div" className="border-t border-gray-200 px-4 py-6">
                    <h3 className="-mx-2 -my-3 flow-root">
                      <DisclosureButton className="group flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                        <span className="font-medium text-gray-900">{section.name}</span>
                        <span className="ml-6 flex items-center">
                          <PlusIcon aria-hidden="true" className="h-5 w-5 group-data-[open]:hidden" />
                          <MinusIcon aria-hidden="true" className="h-5 w-5 [.group:not([data-open])_&]:hidden" />
                        </span>
                      </DisclosureButton>
                    </h3>
                    <DisclosurePanel className="pt-6">
                      <div className="space-y-6">
                        {section.options.map((option, optionIdx) => (
                          <div key={option.value} className="flex items-center">
                            <input
                              defaultValue={option.value}
                              defaultChecked={option.checked}
                              id={`filter-mobile-${section.id}-${optionIdx}`}
                              name={`${section.id}[]`}
                              type="checkbox"
                              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            />
                            <label
                              htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                              className="ml-3 min-w-0 flex-1 text-gray-500"
                            >
                              {option.label}
                            </label>
                          </div>
                        ))}
                      </div>
                    </DisclosurePanel>
                  </Disclosure>
                ))}
                {singleFilter.map((section) => (
                  <Disclosure key={section.id} as="div" className="border-t border-gray-200 px-4 py-6">
                    <h3 className="-mx-2 -my-3 flow-root">
                      <DisclosureButton className="group flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                        <span className="font-medium text-gray-900">{section.name}</span>
                        <span className="ml-6 flex items-center">
                          <PlusIcon aria-hidden="true" className="h-5 w-5 group-data-[open]:hidden" />
                          <MinusIcon aria-hidden="true" className="h-5 w-5 [.group:not([data-open])_&]:hidden" />
                        </span>
                      </DisclosureButton>
                    </h3>
                    <DisclosurePanel className="pt-6">
                      <div className="space-y-6">
                        {section.options.map((option, optionIdx) => (
                          <div key={option.value} className="flex items-center">
                            <input
                              defaultValue={option.value}
                              defaultChecked={option.checked}
                              id={`filter-mobile-${section.id}-${optionIdx}`}
                              name={`${section.id}[]`}
                              type="checkbox"
                              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            />
                            <label
                              htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                              className="ml-3 min-w-0 flex-1 text-gray-500"
                            >
                              {option.label}
                            </label>
                          </div>
                        ))}
                      </div>
                    </DisclosurePanel>
                  </Disclosure>
                ))}
              </form>
            </DialogPanel>
          </div>
        </Dialog>

        <main className="mx-auto px-4 sm:px-6 lg:px-20">
          <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-10">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900">Products</h1>

            <div className="flex items-center">
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <MenuButton className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                    Sort
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                    />
                  </MenuButton>
                </div>

                <MenuItems
                  transition
                  className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                >
                  <div className="py-1">
                    {sortOptions.map((option) => (
                      <MenuItem key={option.name}>
                        <p
                          // href='{option.href}'
                          className={classNames(
                            option.current ? 'font-medium text-gray-900' : 'text-gray-500',
                            'block px-4 py-2 text-sm data-[focus]:bg-gray-100 cursor-pointer',
                          )}
                        >
                          {option.name}
                        </p>
                      </MenuItem>
                    ))}
                  </div>
                </MenuItems>
              </Menu>

              <button type="button" className="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7">
                <span className="sr-only">View grid</span>
                <Squares2X2Icon aria-hidden="true" className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={() => setMobileFiltersOpen(true)}
                className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
              >
                <span className="sr-only">Filters</span>
                <FunnelIcon aria-hidden="true" className="h-5 w-5" />
              </button>
            </div>
          </div>

          <section aria-labelledby="products-heading" className="pb-24 pt-6">
            <h2 id="products-heading" className="sr-only">
              Products
            </h2>

            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-5">
              {/* Filters */}
              <div>
                <div className='flex items-center justify-between hidden lg:block'>
                  <h1 className='opacity-50 text-2xl py-4'>Filters</h1>
                  <FilterListIcon />
                </div>
                <form className="hidden lg:block">
                  {filters.map((section) => (
                    <Disclosure key={section.id} as="div" className="border-b border-gray-200 py-6">
                      <h3 className="-my-3 flow-root">
                        <DisclosureButton className="group flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                          <span className="font-medium text-gray-900">{section.name}</span>
                          <span className="ml-6 flex items-center">
                            <PlusIcon aria-hidden="true" className="h-5 w-5 group-data-[open]:hidden" />
                            <MinusIcon aria-hidden="true" className="h-5 w-5 [.group:not([data-open])_&]:hidden" />
                          </span>
                        </DisclosureButton>
                      </h3>
                      <DisclosurePanel className="pt-6">
                        <div className="space-y-4">
                          {section.options.map((option, optionIdx) => (
                            <div key={option.value} className="flex items-center">
                              <input
                                onChange={() => handleFilter(option.value, section.id)}
                                defaultValue={option.value}
                                defaultChecked={option.checked}
                                id={`filter-${section.id}-${optionIdx}`}
                                name={`${section.id}[]`}
                                type="checkbox"
                                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                              />
                              <label htmlFor={`filter-${section.id}-${optionIdx}`} className="ml-3 text-sm text-gray-600">
                                {option.label}
                              </label>
                            </div>
                          ))}
                        </div>
                      </DisclosurePanel>
                    </Disclosure>
                  ))}
                  {singleFilter.map((section) => (
                    <FormControl fullWidth >
                      <Disclosure key={section.id} as="div" className="border-b border-gray-200 py-6">
                        <h3 className="-my-3 flow-root">
                          <DisclosureButton className="group flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                            <span className="font-medium text-gray-900">{section.name}</span>
                            {/* <FormLabel sx={{color:'black',}} className="font-medium text-gray-900" id="demo-radio-buttons-group-label">{section.name}</FormLabel> */}
                            <span className="ml-6 flex items-center">
                              <PlusIcon aria-hidden="true" className="h-5 w-5 group-data-[open]:hidden" />
                              <MinusIcon aria-hidden="true" className="h-5 w-5 [.group:not([data-open])_&]:hidden" />
                            </span>
                          </DisclosureButton>
                        </h3>
                        <DisclosurePanel className="pt-6">
                          <div className="space-y-4">
                            <RadioGroup
                              aria-labelledby="demo-radio-buttons-group-label"
                              defaultValue="female"
                              name="radio-buttons-group"
                            >
                              {section.options.map((option, optionIdx) => (
                                <FormControlLabel value={option.value} onChange={(e) => handleRadioFilterChange(e, section.id)} control={<Radio />} label={option.label} />
                              ))}
                            </RadioGroup>
                          </div>
                        </DisclosurePanel>
                      </Disclosure>
                    </FormControl>
                  ))}
                </form>
              </div>

              {/* Product grid */}
              <div className="lg:col-span-4 w-full">
                <div className='flex flex-wrap gap-2 bg-white py-5 justify-center'>
                  {product.products?.content?.map((item, index) => <ProductCard product={item} key={index} />)}
                </div>
                <div className='flex justify-center items-center p-4'>
                  <Pagination count={product.products?.totalPages} color="primary" onChange={handlePaginationChange}/>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}
