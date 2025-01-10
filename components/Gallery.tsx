'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { useTheme } from '@/contexts/ThemeContext'

type GalleryItem = {
  id: number
  title: string
  category: string
  imageUrl: string
  description: string
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: "Project Showcase",
    category: "Web Development",
    imageUrl: "/placeholder.svg?height=800&width=1200",
    description: "A comprehensive web application showcasing modern design principles and interactive features."
  },
  {
    id: 2,
    title: "UI Design System",
    category: "Design",
    imageUrl: "/placeholder.svg?height=800&width=1200",
    description: "A cohesive design system built for scalability and consistency across platforms."
  },
  {
    id: 3,
    title: "Mobile Application",
    category: "Development",
    imageUrl: "/placeholder.svg?height=800&width=1200",
    description: "Cross-platform mobile app with seamless user experience and robust functionality."
  },
  // Keep other items...
]

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const { theme } = useTheme()

  const navigate = (newDirection: number) => {
    setDirection(newDirection)
    setCurrentIndex((prevIndex) => {
      if (newDirection === 1) {
        return (prevIndex + 1) % galleryItems.length
      }
      return (prevIndex - 1 + galleryItems.length) % galleryItems.length
    })
  }

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        navigate(-1)
      } else if (e.key === 'ArrowRight') {
        navigate(1)
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [])

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  }

  return (
    <div className="relative w-full max-w-5xl mx-auto h-[600px] overflow-hidden">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 }
          }}
          className="absolute w-full h-full"
        >
          <div 
            className="relative w-full h-full cursor-pointer"
            onClick={() => setSelectedImage(galleryItems[currentIndex])}
          >
            <Image
              src={galleryItems[currentIndex].imageUrl}
              alt={galleryItems[currentIndex].title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/60 opacity-0 hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">{galleryItems[currentIndex].title}</h3>
                <p className="text-gray-200">{galleryItems[currentIndex].category}</p>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Buttons */}
      <button
        onClick={() => navigate(-1)}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 
          w-10 h-10 flex items-center justify-center
          bg-black/20 hover:bg-black/40 backdrop-blur-sm
          rounded-full transition-colors duration-200"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>
      <button
        onClick={() => navigate(1)}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 
          w-10 h-10 flex items-center justify-center
          bg-black/20 hover:bg-black/40 backdrop-blur-sm
          rounded-full transition-colors duration-200"
        aria-label="Next image"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>

      {/* Image Dialog */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl">
          {selectedImage && (
            <div className="space-y-4">
              <div className="relative aspect-[16/9]">
                <Image
                  src={selectedImage.imageUrl}
                  alt={selectedImage.title}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="space-y-2">
                <h2 className="text-2xl font-bold">{selectedImage.title}</h2>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {selectedImage.category}
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  {selectedImage.description}
                </p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}

