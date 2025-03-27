import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Filter } from "lucide-react"
import { Checkbox } from "@/components/ui/checkbox"

export function SermonFilterDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-white text-black hover:bg-white/90">
          <Filter className="h-4 w-4 mr-2" />
          Filter
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Filter Sermons</DialogTitle>
        </DialogHeader>
        <div className="grid gap-6 py-4">
          <div className="space-y-4">
            <h4 className="font-medium">Topics</h4>
            {["Faith", "Prayer", "Hope", "Love", "Worship"].map((topic) => (
              <div key={topic} className="flex items-center space-x-2">
                <Checkbox id={topic} />
                <label htmlFor={topic} className="text-sm">{topic}</label>
              </div>
            ))}
          </div>
          <div className="space-y-4">
            <h4 className="font-medium">Speakers</h4>
            {["Rev. John", "Rev. Sarah", "Rev. David"].map((speaker) => (
              <div key={speaker} className="flex items-center space-x-2">
                <Checkbox id={speaker} />
                <label htmlFor={speaker} className="text-sm">{speaker}</label>
              </div>
            ))}
          </div>
          <div className="space-y-4">
            <h4 className="font-medium">Duration</h4>
            {["< 30 mins", "30-45 mins", "> 45 mins"].map((duration) => (
              <div key={duration} className="flex items-center space-x-2">
                <Checkbox id={duration} />
                <label htmlFor={duration} className="text-sm">{duration}</label>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-end gap-4">
          <Button variant="outline">Reset</Button>
          <Button>Apply Filters</Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}