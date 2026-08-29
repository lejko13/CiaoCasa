import { Link } from 'react-router-dom'
import Img from '@/common/Img'

type Project = {
  image: string;
  title: string;
  year: number;
  tags: string;
  slug: string;
};

type Props = {
  project: Project;
};


export default function ProjectCardCenter({ project }: Props) {

  return (

<Link to={`/detail/${project.slug}`}>

    <div className=" group  rounded-[var(--radius)] border border-[var(--sivaTmava)] bg-[var(--cierna)] p-3 md:p-4">
      <div className="relative overflow-hidden rounded-[var(--radiusInsie)] aspect-[4/3] ">
        <Img
          src={project.image}
          alt={project.title}
          fill
         className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
        />
      </div>

      <div className="flex items-end justify-between mt-4 px-1 pb-1">
        <div>
          <h3 className="text-white text-lg md:text-xl font-light tracking-tight">
            {project.title}
          </h3>
          <p className="text-[var(--sivaSvetlsie)] text-sm mt-0.5">
            {project.year}
          </p>
        </div>

        <div className="flex gap-2">

            <span

              className="text-xs text-[var(--sivaSvetlsie)] border border-[var(--sivaTmava)] rounded-full px-3 py-1 font-light"
            >
              {project.tags}
            </span>

        </div>
      </div>
    </div>
    </Link>
  );
}
