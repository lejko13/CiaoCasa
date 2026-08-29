import { useParams } from "react-router-dom";
import SluzbaDetail from "@/components/sluzbaDetail";
import { najdiSluzbuPodlaSlugu } from "@/data/sluzby";
import NotFoundPage from "./NotFoundPage";

export default function SluzbaDetailPage() {
  const { slug } = useParams<{ slug: string }>();

  const data = slug ? najdiSluzbuPodlaSlugu(slug) : undefined;

  if (!data) {
    return <NotFoundPage />;
  }

  return <SluzbaDetail data={data} />;
}
