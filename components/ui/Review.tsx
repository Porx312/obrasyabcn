import { Star, Calendar, ThumbsUp } from 'lucide-react'
import Image from 'next/image'

interface ReviewCardProps {
  name: string
  avatarUrl: string
  projectType: string
  rating: number
  comment: string
  date: string
  likes: number
}

export default function ReviewCard({
  name,
  avatarUrl,
  projectType,
  rating,
  comment,
  date,
  likes,
}: ReviewCardProps) {
  return (
    <div className="mx-auto w-[300px] md:w-full max-w-md overflow-hidden rounded-lg shadow-lg">
      <div className="p-1">
        <div className="flex items-center gap-4">
          <div className="h-16 w-16 overflow-hidden rounded-full bg-gray-200">
            <img
              src={avatarUrl}
              alt={`Avatar de ${name}`}
              className="h-full w-full object-cover"
              onError={(e) => {
                const target = e.target as HTMLImageElement
                target.onerror = null
                target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=random`
              }}
            />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
            <span className="inline-block rounded-full bg-blue-100 px-2 py-1 text-xs text-blue-800">
              {projectType}
            </span>
          </div>
        </div>
        <div className="mt-4">
          <div className="mb-2 flex" aria-label={`Calificación: ${rating} de 5 estrellas`}>
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-5 w-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'} fill-current`}
              />
            ))}
          </div>
          <p className="mt-2 text-gray-600">{comment}</p>
        </div>
        <div className="mt-4 flex items-center text-sm text-gray-500">
          <Calendar className="mr-2 h-4 w-4" />
          <span>{date}</span>
        </div>
      </div>
      <div className="flex items-center bg-gray-50 px-4 py-3 text-sm text-gray-500">
        <ThumbsUp className="mr-2 h-4 w-4" />
        <span>{likes} personas encontraron útil esta reseña</span>
      </div>
    </div>
  )
}
