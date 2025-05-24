import React from 'react';
import { Link } from 'react-router-dom';
import { Star, MapPin } from 'lucide-react';
import { Artist } from '../../types';
import Card from '../ui/Card';

interface ArtistCardProps {
  artist: Artist;
}

const ArtistCard: React.FC<ArtistCardProps> = ({ artist }) => {
  return (
    <Card hoverable className="h-full">
      <Link to={`/artist/${artist.id}`}>
        <div className="relative">
          <div className="h-32 w-full overflow-hidden">
            <img
              src={artist.coverImage}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
            <div className="w-24 h-24 rounded-full border-4 border-white overflow-hidden">
              <img
                src={artist.avatar}
                alt={artist.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        <div className="pt-14 px-4 pb-4 text-center">
          <h3 className="text-lg font-medium text-gray-900">{artist.name}</h3>
          <div className="mt-1 flex items-center justify-center">
            <MapPin size={14} className="text-gray-500" />
            <span className="ml-1 text-sm text-gray-500">{artist.location}</span>
          </div>
          <div className="mt-2 flex items-center justify-center">
            <div className="flex items-center">
              <Star className="h-4 w-4 text-yellow-500" fill="currentColor" />
              <span className="ml-1 text-sm text-gray-700">{artist.rating}</span>
            </div>
            <span className="mx-2 text-gray-400">•</span>
            <span className="text-sm text-gray-500">{artist.reviewCount} reviews</span>
          </div>
          <p className="mt-3 text-sm text-gray-500 line-clamp-2">{artist.bio}</p>
        </div>
      </Link>
    </Card>
  );
};

export default ArtistCard;