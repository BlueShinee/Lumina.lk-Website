"use client"

import React from 'react'
import { SearchBar } from '@/components/SearchBar'
import { CategoryFilter } from '@/components/CatFilter'

const categories = [
    "2025 A/l",
    "2026 A/l",
    "2027 A/l"
]

export default function page() {
    
    const [searchTerm, setSearchTerm] = React.useState("");
    const [selectedCategory, setSelectedCategory] = React.useState("all");
    
    
  return (
      <div className='bg-zinc-50 flex flex-col min-h-screen p-6'>
          <div className='flex flex-col mb-6'>
              <h1 className='text-2xl font-bold tracking-tight'>Study Materials</h1>
              <span className='text-zinc-600'>Download Tutues from all class years.</span>
          </div>
          <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
          <CategoryFilter
              categories={categories}
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
          />
      </div>
  )
}
