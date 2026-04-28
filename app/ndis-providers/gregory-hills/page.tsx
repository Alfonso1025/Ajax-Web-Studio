import { NDISSuburbPage } from "@/components/ndisSuburbPage"
import { ndisSuburbs } from "@/lib/ndisSuburbData"

const data = ndisSuburbs["gregory-hills"]

export const metadata = data.metadata

export default function GregoryHillsPage() {
  return <NDISSuburbPage {...data} />
}