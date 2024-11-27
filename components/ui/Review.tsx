import { Star, Calendar, ThumbsUp } from 'lucide-react'

interface ReviewCardProps {
  name: string;
  avatarUrl: string;
  projectType: string;
  rating: number;
  comment: string;
  date: string;
  likes: number;
}

export default function ReviewCard({ name, avatarUrl, projectType, rating, comment, date, likes }: ReviewCardProps) {
  return (
    <div className="w-full max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="p-4">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-200">
            <img 
              src={avatarUrl} 
              alt={`Avatar de ${name}`} 
              className="w-full h-full object-cover"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.onerror = null;
                target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=random`;
              }}
            />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
            <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
              {projectType}
            </span>
          </div>
        </div>
        <div className="mt-4">
          <div className="flex mb-2" aria-label={`Calificación: ${rating} de 5 estrellas`}>
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'} fill-current`}
              />
            ))}
          </div>
          <p className="text-gray-600 mt-2">{comment}</p>
        </div>
        <div className="mt-4 flex items-center text-sm text-gray-500">
          <Calendar className="w-4 h-4 mr-2" />
          <span>{date}</span>
        </div>
      </div>
      <div className="bg-gray-50 px-4 py-3 flex items-center text-sm text-gray-500">
        <ThumbsUp className="w-4 h-4 mr-2" />
        <span>{likes} personas encontraron útil esta reseña</span>
      </div>
    </div>
  )
}

