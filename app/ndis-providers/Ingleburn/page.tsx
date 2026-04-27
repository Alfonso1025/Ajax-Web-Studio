import { NDISSuburbPage } from "@/components/ndisSuburbPage"
import { ndisSuburbs } from "@/lib/ndisSuburbData"

const data = ndisSuburbs.ingleburn

export const metadata = data.metadata

export default function IngleburnPage() {
  return <NDISSuburbPage {...data} />
}