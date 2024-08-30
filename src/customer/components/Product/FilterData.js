export const color = [
    'White',
    'Black',
    'Red',
    'Yellow',
    'Purple',
    'Green',
    'Pink',
    'Being',
    'Marun'
]

export const filters = [
    {
        id: 'color',
        name: 'Color',
        options: [
            { value: 'white', label: 'White' },
            { value: 'beige', label: 'Beige' },
            { value: 'blue', label: 'Blue' },
            { value: 'green', label: 'Green' },
            { value: 'black', label: 'Black' },
            { value: 'brown', label: 'Brown' },
            { value: 'red', label: 'Red' },
            { value: 'purple', label: 'Purple' },
            { value: 'pink', label: 'Pink' },
        ]
    },
    {
        id: 'size',
        name: 'Size',
        options: [
            { value: 'S', label: 'S' },
            { value: 'M', label: 'M' },
            { value: 'L', label: 'L' },
            { value: 'XL', label: 'XL' },
            { value: '2XL', label: '2XL' },

        ]
    }
]

export const singleFilter = [
    {
        id: 'price',
        name: 'Price',
        options: [
            { value: '159-399', label: '159$ To 399$' },
            { value: '399-999', label: '399$ To 999$' },
            { value: '999-1999', label: '999$ To 1999$' },
            { value: '1999-2999', label: '1999$ To 2999$' },
            { value: '2999-3999', label: '2999$ To 3999$' },

        ]
    },
    {
        id: 'discount',
        name: 'Discount Range',
        options: [
            { value: '10', label: '10% And Above' },
            { value: '20', label: '20% And Above' },
            { value: '30', label: '30% And Above' },
            { value: '40', label: '40% And Above' },
            { value: '50', label: '50% And Above' },
            { value: '60', label: '60% And Above' },
            { value: '70', label: '70% And Above' },
            { value: '80', label: '80% And Above' },
            { value: '90', label: '90% And Above' },

        ]
    },
    {
        id: 'stock',
        name: 'Availability',
        options: [
            { value: 'in_stock', label: 'In Stock' },
            { value: 'out_of_stock', label: 'Out Of Stock' }

        ]
    }
]

export const sortOptions = [
    // { name: 'Most Popular', href: '#', current: true },
    // { name: 'Best Rating', href: '#', current: false },
    // { name: 'Newest', href: '#', current: false },
    { name: 'Price: Low to High', query: 'price_low', current: false },
    { name: 'Price: High to Low', query: 'price_hight', current: false },
]