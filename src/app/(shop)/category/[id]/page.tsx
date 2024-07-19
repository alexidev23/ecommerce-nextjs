/* eslint-disable import/no-anonymous-default-export */
// import { notFound } from "next/navigation";
import { ProductGrid, Title } from "@/components";
import { Category } from "@/interfaces";
import { initialData } from "@/seed/seed";
import React from "react";
/* eslint-disable react/display-name */

const seedProducts = initialData.products;

interface Props {
  params: {
    id: Category;
  }
}

export default function({ params }: Props) {
  const { id } = params;
  const products = seedProducts.filter( products => products.gender === id);

  const label: Record<Category, string> = {
    'men': 'para hombres',
    'women': 'para mujeres',
    'kid': 'para niños',
    'unisex': 'para todos'
  }
  
  // if (id === 'kids') {
  //   notFound()
  // }

  return (
    <>
    <Title
      title={`Articulos ${(label)[id]}`}
      subtitle="Todos los productos"
      classname="mb-2"
    />
    <ProductGrid
      product={products}
    />
  </>
  )
}