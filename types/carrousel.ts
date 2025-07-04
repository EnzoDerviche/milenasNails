export interface GalleryImage {
  src: string
  alt: string
  title: string
}

export interface ImageCarouselProps {
  images?: GalleryImage[]
  currentIndex?: number
  setCurrentIndex?: (index: number) => void
}