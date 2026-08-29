import { useParams } from "react-router-dom";
import Uisamosatane from "@/components/uisamostatne";
import { najdiProjektPodlaSlugu } from "@/data/projects";
import NotFoundPage from "./NotFoundPage";

export default function DetailPage() {
  const { slug } = useParams<{ slug: string }>();

  const data = slug ? najdiProjektPodlaSlugu(slug) : undefined;

  if (!data) {
    return <NotFoundPage />;
  }

  return <Uisamosatane data={data} />;
}
