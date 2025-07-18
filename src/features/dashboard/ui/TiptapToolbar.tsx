import { Button } from "@/shared/ui/Button"
import { Bold, Code, Code2, Italic, Link as LinkIcon, List } from "lucide-react"
import { BlockTypeSelector } from "./BlockTypeSelector"

export function TiptapToolbar({ editor }: { editor: any }) {
  if (!editor) return null

  return (
    <div className="border-border bg-muted mb-2 flex flex-wrap items-center gap-3 rounded-t-md border px-4 py-3">
      <BlockTypeSelector editor={editor} />

      <Button
        className="size-7"
        size="icon"
        variant={editor.isActive("bulletList") ? "default" : "ghost"}
        onClick={() => editor.chain().focus().toggleBulletList().run()}
      >
        <List className="h-4 w-4" />
      </Button>

      <Button
        className="size-7"
        size="icon"
        variant={editor.isActive("bold") ? "default" : "ghost"}
        onClick={() => editor.chain().focus().toggleBold().run()}
      >
        <Bold className="h-4 w-4" />
      </Button>

      <Button
        className="size-7"
        size="icon"
        variant={editor.isActive("italic") ? "default" : "ghost"}
        onClick={() => editor.chain().focus().toggleItalic().run()}
      >
        <Italic className="h-4 w-4" />
      </Button>

      <Button
        className="size-7"
        size="icon"
        variant={editor.isActive("code") ? "secondary" : "ghost"}
        onClick={() => editor.chain().focus().toggleCode().run()}
      >
        <Code2 className="h-4 w-4" />
      </Button>

      <Button
        className="size-7"
        size="icon"
        variant={editor.isActive("codeBlock") ? "secondary" : "ghost"}
        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
      >
        <Code className="h-4 w-4" />
      </Button>

      <Button
        className="size-7"
        size="icon"
        variant={editor.isActive("link") ? "secondary" : "ghost"}
        onClick={() => {
          const url = prompt("Enter URL")
          if (url) editor.chain().focus().setLink({ href: url }).run()
        }}
      >
        <LinkIcon className="h-4 w-4" />
      </Button>
    </div>
  )
}
