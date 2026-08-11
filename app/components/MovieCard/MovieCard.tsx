import Image from 'next/image';


interface MovieCardProps{
posterPath:string;
title:string;
description:string;
id:number
}

const MovieCard = ({posterPath,description,id,title}:MovieCardProps) => {
  return (
    <div>
      <Image
        alt={title}
        src={`https://image.tmdb.org/t/p/w500${posterPath}`}
        width={300}
        height={220}
      />
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default MovieCard
 