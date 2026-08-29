// Náhrada za next/image (next/image bol súčasťou Next.js frameworku, ktorý
// tento projekt už nepoužíva). API si zámerne ponecháva rovnaké mená props
// (`fill`, `priority`, `sizes`) ako pri pôvodných <Image> volaniach, aby sa
// dal pôvodný JSX skopírovať takmer bez zmeny a výsledný vzhľad zostal
// identický – `fill` sa rovnako ako predtým spolieha na to, že rodičovský
// element má `position: relative` (to isté platilo aj pri next/image).

type Props = {
  src: string;
  alt: string;
  fill?: boolean;
  priority?: boolean;
  sizes?: string;
  className?: string;
};

export default function Img({ src, alt, fill, priority, className = "" }: Props) {
  return (
    <img
      src={src}
      alt={alt}
      loading={priority ? "eager" : "lazy"}
      fetchPriority={priority ? "high" : undefined}
      decoding={priority ? "sync" : "async"}
      className={fill ? `absolute inset-0 w-full h-full ${className}` : className}
    />
  );
}
