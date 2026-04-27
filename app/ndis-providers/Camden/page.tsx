import { NDISSuburbPage } from "@/components/ndisSuburbPage"
import { ndisSuburbs } from "@/lib/ndisSuburbData"

const data = ndisSuburbs.camden

export const metadata = data.metadata

export default function CamdenPage() {
  return <NDISSuburbPage {...data} />
}