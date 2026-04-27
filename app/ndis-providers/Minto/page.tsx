import { NDISSuburbPage } from "@/components/ndisSuburbPage"
import { ndisSuburbs } from "@/lib/ndisSuburbData"

const data = ndisSuburbs.minto

export const metadata = data.metadata

export default function MintoPage() {
  return <NDISSuburbPage {...data} />
}