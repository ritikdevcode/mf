"use client"

import { useState } from "react"
import { Check, ChevronsUpDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { FilterState, SortOption } from "@/lib/types"

interface ProductFiltersProps {
  colors: string[]
  sizes: string[]
  priceRange: [number, number]
  filters: FilterState
  onFilterChange: (filters: FilterState) => void
  onSortChange: (sort: SortOption) => void
}

export function ProductFilters({
  colors,
  sizes,
  priceRange,
  filters,
  onFilterChange,
  onSortChange,
}: ProductFiltersProps) {
  const [isOpen, setIsOpen] = useState(true)

  const handleColorChange = (color: string) => {
    const newColors = filters.colors.includes(color)
      ? filters.colors.filter((c) => c !== color)
      : [...filters.colors, color]
    onFilterChange({ ...filters, colors: newColors })
  }

  const handleSizeChange = (size: string) => {
    const newSizes = filters.sizes.includes(size)
      ? filters.sizes.filter((s) => s !== size)
      : [...filters.sizes, size]
    onFilterChange({ ...filters, sizes: newSizes })
  }

  const handlePriceChange = (value: number[]) => {
    onFilterChange({
      ...filters,
      priceRange: [value[0], value[1]] as [number, number],
    })
  }

  return (
    <Card className="w-full lg:w-72">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">Filters</CardTitle>
        <Button
          variant="ghost"
          size="sm"
          className="w-9 p-0"
          onClick={() => setIsOpen(!isOpen)}
        >
          <ChevronsUpDown className="h-4 w-4" />
        </Button>
      </CardHeader>
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <CollapsibleContent className="space-y-4">
          <CardContent className="grid gap-6">
            <div className="space-y-2">
              <Label>Sort By</Label>
              <Select onValueChange={(value) => onSortChange(value as SortOption)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select order" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="price-asc">Price: Low to High</SelectItem>
                  <SelectItem value="price-desc">Price: High to Low</SelectItem>
                  <SelectItem value="name-asc">Name: A to Z</SelectItem>
                  <SelectItem value="name-desc">Name: Z to A</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Price Range</Label>
              <div className="pt-2">
                <Slider
                  min={priceRange[0]}
                  max={priceRange[1]}
                  step={1}
                  value={[filters.priceRange[0], filters.priceRange[1]]}
                  onValueChange={handlePriceChange}
                />
                <div className="mt-2 flex items-center justify-between text-sm text-muted-foreground">
                  <span>${filters.priceRange[0]}</span>
                  <span>${filters.priceRange[1]}</span>
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <Label>Colors</Label>
              <div className="grid grid-cols-2 gap-2">
                {colors.map((color) => (
                  <div key={color} className="flex items-center space-x-2">
                    <Checkbox
                      id={`color-${color}`}
                      checked={filters.colors.includes(color)}
                      onCheckedChange={() => handleColorChange(color)}
                    />
                    <label
                      htmlFor={`color-${color}`}
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 capitalize"
                    >
                      {color}
                    </label>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-2">
              <Label>Sizes</Label>
              <div className="grid grid-cols-2 gap-2">
                {sizes.map((size) => (
                  <div key={size} className="flex items-center space-x-2">
                    <Checkbox
                      id={`size-${size}`}
                      checked={filters.sizes.includes(size)}
                      onCheckedChange={() => handleSizeChange(size)}
                    />
                    <label
                      htmlFor={`size-${size}`}
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 uppercase"
                    >
                      {size}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </CollapsibleContent>
      </Collapsible>
    </Card>
  )
}