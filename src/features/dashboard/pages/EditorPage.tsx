import Section from "@/shared/ui/Section"
import { H2 } from "@/shared/ui/typography/H2"
import { TiptapEditor } from "../ui/TiptapEditor"

export default function EditorPage() {
  return (
    <Section>
      <H2 className="mb-8">Create Blog Post</H2>

      <TiptapEditor />
    </Section>
  )
}
