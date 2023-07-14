'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { FaBatteryFull, FaBolt } from 'react-icons/fa';
import { IoIosWater } from 'react-icons/io';
import { products } from '../../data/products';
import FAQ from '@/partials/faq';

interface Product {
  productId: number;
  name: string;
  slug: string;
  image: string;
  battery: number;
  resistance: number;
  capacity: string | number;
  description: string;
  size: string;
  coil: string;
  colors: string;
  fill: string;
  sku: string;
}

const ProductDetailModal: React.FC<{ product: Product; onClose: () => void; mode: string }> = ({
  product,
  onClose,
  mode,
}) => {
  return (
    <div className="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
        <div className="inline-block align-bottom bg-body  rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div className="px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <h1 className="border-b">{product.name}</h1>

            <div className="flex pt-4 gap-x-6">
              <div>
                <Image src={product.image} alt={product.name} width={200} height={100} />
              </div>
              <div className="ml-4">
                <p className="pb-2"></p>
                <div>
                  <span className="font-extrabold">Size: </span>
                  {product.size}
                </div>
                <div>
                  <span className="font-extrabold">Coil: </span>
                  {product.coil}
                </div>
                <div>
                  <span className="font-extrabold">Colors: </span>
                  {product.colors}
                </div>
                <div>
                  <span className="font-extrabold">Fill: </span>
                  {product.fill}
                </div>
                <div>
                  <span className="font-extrabold">SKU: </span>
                  {product.sku}
                </div>
              </div>
            </div>
          </div>
          <div className= "bg-body px-4 py-3 sm:px-6 sm:flex sm:flex-row">
            <div className="flex items-left justify-start sm:flex-grow">
              {product.battery !== 0 && (
                <div className="flex items-center mr-2">
                  <FaBatteryFull className="`text-black mr-1 text-2xl" />
                  <p className="text-black">{product.battery} mAh</p>
                </div>
              )}
              <div className="flex items-center mr-2">
                <FaBolt
                  className={"text-black mr-1 text-2xl"}
                />
                <p className="text-black">{product.resistance} Ohm</p>
              </div>
              <div className="flex items-center">
                <IoIosWater className="text-black mr-1 text-2xl" />
                <p className="text-black">{product.capacity} ML</p>
              </div>
            </div>
            <button
              onClick={onClose}
              type="button"
              className={`mt-3 w-full inline-flex justify-center rounded-md border shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm`}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProductGrid: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [currentProduct, setCurrentProduct] = useState<Product | null>(null);
  const [nameFilter, setNameFilter] = useState<string>('');
  const [batteryFilter, setBatteryFilter] = useState<number | null>(null);
  const [resistanceFilter, setResistanceFilter] = useState<number | null>(null);
  const [capacityFilter, setCapacityFilter] = useState<number | null>(null);
  const [mode, setMode] = useState('light');
  

  const handleOpenModal = (product: Product) => {
    setCurrentProduct(product);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setCurrentProduct(null);
    setShowModal(false);
  };

  const filteredProducts = products.filter((product) => {
    const nameMatch = product.name.toLowerCase().includes(nameFilter.toLowerCase());
    const batteryMatch = !batteryFilter || product.battery === batteryFilter;
    const resistanceMatch = !resistanceFilter || product.resistance === resistanceFilter;
    const capacityMatch = !capacityFilter || product.capacity === capacityFilter;

    return nameMatch && batteryMatch && resistanceMatch && capacityMatch;
  });

  const clearFilters = () => {
    setNameFilter('');
    setBatteryFilter(null);
    setResistanceFilter(null);
    setCapacityFilter(null);
  };

  return (
    <>
      {showModal && currentProduct && <ProductDetailModal product={currentProduct} onClose={handleCloseModal} mode={mode} />
}
      <div className="mt-10">
        <div
          className={`font-extrabold text-5xl pl-10 py-5 border-b w-full bg-body text-color ${mode === 'dark' ? 'dark:darkmode-text-color dark:border-darkmode-border' : ''}`}
        >
          PRODUCT CATALOG
        </div>
        <div className="flex items-center justify-center pt-10 px-10">
          <input
            type="text"
            value={nameFilter}
            onChange={(e) => setNameFilter(e.target.value)}
            placeholder="Search products"
            className="p-2 border dark:border-darkmode-border rounded-lg mr-4 w-1/4"
          />
          <select
            value={batteryFilter || ''}
            onChange={(e) =>
              setBatteryFilter(e.target.value !== '' ? parseInt(e.target.value) : null)
          }
            className="p-2 border dark:border-darkmode-border rounded-lg mr-4 w-1/4"
          >
            <option value="">Battery (mAh)</option>
            <option value="280">280</option>
            <option value="300">300</option>
            <option value="350">350</option>
            <option value="380">380</option>
          </select>
          <select
            value={resistanceFilter || ''}
            onChange={(e) =>
              setResistanceFilter(e.target.value !== '' ? parseInt(e.target.value) : null)
            }
            className={`p-2 border dark:border-darkmode-border ${mode === 'dark' ? 'dark:darkmode-body' : ''} rounded-lg mr-4 w-1/4`}
          >
            <option value="">Resistance (Ohm)</option>
            <option value="0.8">0.8</option>
            <option value="1.4">1.4</option>
          </select>
          <select
            value={capacityFilter || ''}
            onChange={(e) =>
              setCapacityFilter(e.target.value !== '' ? parseInt(e.target.value) : null)
            }
            className={`p-2 border dark:border-darkmode-border rounded-lg w-1/4 ${mode === 'dark' ? 'bg-none' : ''}`}
          >
            <option value="">Capacity (ML)</option>
            <option value="1">1 mL</option>
            <option value="2">2 mL</option>
            <option value="3">3 mL</option>
          </select>
        </div>
        {filteredProducts.length > 0 && (
          <div className="flex justify-center mt-5">
            <button
              onClick={clearFilters}
              className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              Clear Filters
            </button>
          </div>
        )}
        <div className="grid lg:grid-cols-3 gap-6 p-10">
          {filteredProducts.length === 0 ? (
            <p className="text-gray-500 mt-8 font-extrabold flex justify-center">No products found.</p>
          ) : (
            filteredProducts.map((product, index) => (
              <div
                onClick={() => handleOpenModal(product)}
                key={`${product.productId}-${index}`}
                className="border dark:border-darkmode-border p-4 rounded-xl shadow-lg"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  height: '100%',
                }}
              >
                <div>
                  <div className="relative mb-2">
                    <div className="flex items-center justify-center relative">
                      <Image src={product.image} alt={product.name} width={300} height={200} />
                      <div className="absolute bottom-0 left-0 right-0 p-4 bg-black opacity-0 transition-opacity duration-300 hover:opacity-100">
                        <p className="text-white font-bold flex items-center justify-center">
                          View more details
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3
                      className={`text-4xl font-extrabold border-b dark:border-darkmode-border p-2 ${
                        mode === 'dark' ? 'dark:text-darkmode-text' : ''
                      } pt-4`}
                    >
                      {product.name}
                    </h3>
                    <div className="flex items-center justify-evenly flex-grow pt-2">
                      {product.battery !== 0 && (
                        <div className="flex items-center mr-2">
                          <FaBatteryFull
                            className={`dark:text-darkmode-text mr-1 text-2xl ${
                              mode === 'dark' ? 'dark:text-darkmode-text' : ''
                            }`}
                          />
                          <p className="dark:text-darkmode-text">{product.battery} mAh</p>
                        </div>
                      )}
                      <div className="flex items-center mr-2">
                        <FaBolt
                          className={`dark:text-darkmode-text mr-1 text-2xl ${
                            mode === 'dark' ? 'dark:text-white' : ''
                          }`}
                        />
                        <p className="dark:text-darkmode-text">{product.resistance} Ohm</p>
                      </div>
                      <div className="flex items-center">
                        <IoIosWater
                          className={`dark:text-darkmode-textmr-1 text-2xl ${
                            mode === 'dark' ? 'dark:text-white' : ''
                          }`}
                        />
                        <p className="dark:text-darkmode-text">{product.capacity} ML</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
        <FAQ />
      </div>
    </>
  );
};

export default ProductGrid;
