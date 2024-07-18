/* eslint-disable import/no-anonymous-default-export */
import { notFound } from "next/navigation";
import React from "react";
/* eslint-disable react/display-name */

interface Props {
  params: {
    id: string;
  }
}

export default function({ params }: Props) {
  const { id } = params;

  if (id === 'kids') {
    notFound()
  }

  return (
    <div>
      <h1>Category Page {id}</h1>
    </div>
  )
}