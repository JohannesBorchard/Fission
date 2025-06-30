import Code from "@tiptap/extension-code"
import Link from "@tiptap/extension-link"
import Placeholder from "@tiptap/extension-placeholder"
import { EditorContent, useEditor } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"
import { TiptapToolbar } from "./TiptapToolbar"

const extensions = [
  StarterKit.configure({
    heading: {
      levels: [2, 3, 4]
    }
  }),
  Link.configure({ openOnClick: false }),
  Code,
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
        class:
          "prose dark:prose-invert prose-lg max-w-none focus:outline-none min-h-[300px] px-4 py-2"
      }
    }
  })

  if (!editor) return null

  return (
    <div className="border-border bg-card mx-auto max-w-3xl rounded-md border shadow-sm">
      <TiptapToolbar editor={editor} />
      <EditorContent editor={editor} />
    </div>
  )
}
