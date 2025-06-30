import { cn } from "@/shared/lib/utils"
import Link from "@tiptap/extension-link"
import Placeholder from "@tiptap/extension-placeholder"
import { EditorContent, useEditor } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"
import { TiptapToolbar } from "./TiptapToolbar"

const extensions = [
  StarterKit.configure({
    heading: {
      levels: [1, 2]
    }
  }),
  Link.configure({ openOnClick: false }),
  Placeholder.configure({
    placeholder: "Start writing your blog post...",
    emptyEditorClass: "is-editor-empty"
  })
]

export function TiptapEditor() {
  const editor = useEditor({
    extensions,
    content: "",
    editorProps: {
      attributes: {
        class: cn(
          "focus:outline-none",
          "min-h-[300px]",
          "px-4 py-2",
          "font-serif", // global für Fließtext
          "text-foreground",
          "mx-auto",
          "text-left",
          "[&>p]:mb-2 [&>p]:text-xl [&>p]:leading-[1.5] [&>p]:max-w-prose",

          // Headings mit font-sans
          "[&>h1]:mb-3 [&>h1]:not-first:mt-8 [&>h1]:text-3xl [&>h1]:font-sans [&>h1]:font-semibold [&>h1]:leading-tight [&>h1]:max-w-[650px]",
          "[&>h2]:mb-3 [&>h2]:not-first:mt-5 [&>h2]:text-2xl [&>h2]:font-sans [&>h2]:font-semibold [&>h2]:leading-snug [&>h2]:max-w-[650px]",
          "[&>h3]:mb-3 [&>h3]:not-first:mt-8 [&>h3]:text-xl [&>h3]:font-sans [&>h3]:font-semibold [&>h3]:leading-snug [&>h2]:max-w-[650px]",

          "[&>ul]:my-4 [&>ul]:ml-4 [&>ul]:list-disc [&>ul>li]:mt-2 [&>ul]:text-xl [&>ul]:max-w-[650px]",
          "[&>code]:bg-muted [&>code]:text-secondary-foreground [&>code]:rounded",
          "[&>code]:px-[0.25em] [&>code]:py-[0.1em] [&>code]:font-mono [&>code]:text-[0.87em]"
        )
      }
    }
  })

  if (!editor) return null

  return (
    <div className="border-border bg-card mx-auto max-w-[700px] rounded-md border shadow-sm">
      <TiptapToolbar editor={editor} />
      <EditorContent className="p-2" editor={editor} />
    </div>
  )
}
