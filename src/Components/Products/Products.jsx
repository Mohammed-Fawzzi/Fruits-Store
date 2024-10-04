import React from 'react'
import apple from '../../assets/apple.png'
import orange from '../../assets/orange.png'
import avocado from '../../assets/avocado.png'
import cherry from '../../assets/cherry.png'
import { motion } from 'framer-motion'
import { FadeLeft } from '../../utility/animation'

const Products = () => {
    const menus = [
        {
            id: 1,
            title : "Fresh Apples",
            link: "/",
            price: "$3.99",
            image: apple,
            delay: 0.5
        },
        {
            id: 2,
            title : "Fresh Oranges",
            link: "/",
            price: "$4.99",
            image: orange,
            delay: 0.7
        },
        {
            id: 3,
            title : "Fresh Avocado",
            link: "/",
            price: "$5.99",
            image: avocado,
            delay: 0.9
        },
        {
            id: 4,
            title : "Fresh Cherries",
            link: "/",
            price: "$2.99",
            image: cherry,
            delay: 1.2
        },
    ];

    return (
    <>
        <section>
            <div className="container pt-12 pb-20">
                <motion.h1
                initial={{ opacity: 0 , x: -200 }}
                whileInView={{ opacity: 1 , x: 0 }}
                transition={{ duration: 1 , delay: 0.3 }}
                className='text-2xl font-bold text-left pb-10 uppercase'>Our Menus</motion.h1>
                
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6'>
                    {menus.map((menu) => (
                        <motion.div
                        key={menu.id}  
                        variants={FadeLeft(menu.delay)}
                        initial="hidden"
                        whileInView={"visible"} className='bg-white rounded-3xl px-4 py-2 shadow-[0_0_22px_0_rgba(0,0,0,0.15)] flex flex-row items-center justify-around gap-3'>
                            <img src={menu.image} alt="fruits" className='w-[50px] mb-4 scale-110'/>
                            <div>
                                <h3 className='text-lg font-semibold'>{menu.title}</h3>
                                <p className='text-lg font-semibold text-secondary'>{menu.price}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    </>
    )
}

export default Products;
