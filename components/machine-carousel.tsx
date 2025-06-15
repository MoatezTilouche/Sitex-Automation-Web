"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface MachineCarouselProps {
  images: string[]
  machineName: string
}

export function MachineCarousel({ images, machineName }: MachineCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isClient, setIsClient] = useState(false)

  // Ensure component only renders interactive elements on client
  useEffect(() => {
    setIsClient(true)
  }, [])

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1))
  }

  // Show static version during SSR
  if (!isClient) {
    return (
      <div className="relative">
        <div className="relative overflow-hidden rounded-md">
          <Image
            src={images[0] || "/placeholder.svg"}
            alt={`${machineName} - Image 1`}
            width={400}
            height={200}
            className="w-full h-48 object-contain bg-gray-100"
          />
        </div>
        {/* Static dots for SSR */}
        <div className="flex justify-center mt-2 space-x-2">
          {images.map((_, index) => (
            <div key={index} className={`w-2 h-2 rounded-full ${index === 0 ? "bg-blue-600" : "bg-gray-300"}`} />
          ))}
        </div>
      </div>
    )
  }

  // Interactive version for client
  return (
    <div className="relative group">
      <div className="relative overflow-hidden rounded-md">
        <Image
          src={images[currentIndex] || "/placeholder.svg"}
          alt={`${machineName} - Image ${currentIndex + 1}`}
          width={400}
          height={200}
          className="w-full h-48 object-contain bg-gray-100 transition-all duration-300"
        />

        {/* Navigation Buttons */}
        <Button
          variant="secondary"
          size="icon"
          className="absolute left-2 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-white/80 hover:bg-white/90"
          onClick={goToPrevious}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>

        <Button
          variant="secondary"
          size="icon"
          className="absolute right-2 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-white/80 hover:bg-white/90"
          onClick={goToNext}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>

      {/* Interactive Dots Indicator */}
      <div className="flex justify-center mt-2 space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-colors duration-200 ${
              index === currentIndex ? "bg-blue-600" : "bg-gray-300 hover:bg-gray-400"
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  )
}

export default MachineCarousel
