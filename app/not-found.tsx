import Link from "next/link"
import { ArrowLeft, Church } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <main className="section-shell flex min-h-[70vh] items-center justify-center">
      <div className="container text-center">
        <div className="mx-auto flex size-16 items-center justify-center rounded-2xl bg-primary/15 text-primary">
          <Church aria-hidden="true" />
        </div>
        <p className="eyebrow mt-8">A quiet turn in the road</p>
        <h1 className="display-heading mx-auto mt-4">This page could not be found.</h1>
        <p className="prose-copy mx-auto mt-6">The page may have moved, but there is still a warm welcome waiting for you at St. Andrews.</p>
        <Button asChild className="mt-8">
          <Link href="/"><ArrowLeft data-icon="inline-start" /> Back home</Link>
        </Button>
      </div>
    </main>
  )
}
