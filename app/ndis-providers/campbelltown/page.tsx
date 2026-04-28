import { NDISSuburbPage } from "@/components/ndisSuburbPage"
import { ndisSuburbs } from "@/lib/ndisSuburbData"

const data = ndisSuburbs.campbelltown

export const metadata = data.metadata

export default function CampbelltownPage() {
  return <NDISSuburbPage {...data} />
}