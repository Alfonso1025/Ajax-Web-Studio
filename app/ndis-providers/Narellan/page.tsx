import { NDISSuburbPage } from "@/components/ndisSuburbPage"
import { ndisSuburbs } from "@/lib/ndisSuburbData"

const data = ndisSuburbs.narellan

export const metadata = data.metadata

export default function NarellanPage() {
  return <NDISSuburbPage {...data} />
}