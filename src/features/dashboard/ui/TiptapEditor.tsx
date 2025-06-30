import Code from "@tiptap/extension-code"
import Link from "@tiptap/extension-link"
import Placeholder from "@tiptap/extension-placeholder"
import { EditorContent, useEditor } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"

const extensions = [
  StarterKit.configure({
    heading: {
      levels: [2, 3, 4]
    }
    /* paragraph: {
      HTMLAttributes: {
        class: "tiptap-paragraph"
      }
    } */
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
      <div className="border-border bg-muted mb-2 flex flex-wrap items-center gap-2 rounded-t-md border px-2 py-1">
        <button
          onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
          className={toolbarBtn(editor.isActive("heading", { level: 2 }))}
        >
          H2
        </button>
        <button
          onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
          className={toolbarBtn(editor.isActive("heading", { level: 3 }))}
        >
          H3
        </button>
        <button
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={toolbarBtn(editor.isActive("bulletList"))}
        >
          • List
        </button>
        <button
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={toolbarBtn(editor.isActive("bold"))}
        >
          B
        </button>
        <button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={toolbarBtn(editor.isActive("italic"))}
        >
          I
        </button>
        <button
          onClick={() => editor.chain().focus().toggleCode().run()}
          className={toolbarBtn(editor.isActive("code"))}
        >
          {"</>"}
        </button>
        <button
          onClick={() => editor.chain().focus().toggleCodeBlock().run()}
          className={toolbarBtn(editor.isActive("codeBlock"))}
        >
          CodeBlock
        </button>
        <button
          onClick={() => {
            const url = prompt("Enter URL")
            if (url) {
              editor.chain().focus().setLink({ href: url }).run()
            }
          }}
          className={toolbarBtn(editor.isActive("link"))}
        >
          Link
        </button>
      </div>

      <EditorContent editor={editor} />
    </div>
  )
}

function toolbarBtn(active: boolean) {
  return `rounded px-2 py-1 text-sm hover:bg-accent ${
    active ? "bg-accent text-accent-foreground font-bold" : ""
  }`
}
