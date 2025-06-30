import { Button } from "@/shared/ui/Button"
import { Bold, Code, Code2, Heading2, Heading3, Italic, Link as LinkIcon, List } from "lucide-react"

export function TiptapToolbar({ editor }: { editor: any }) {
  if (!editor) return null

  return (
    <div className="border-border bg-muted mb-2 flex flex-wrap items-center gap-1 rounded-md border px-2 py-1">
      <Button
        size="icon"
        variant={editor.isActive("heading", { level: 2 }) ? "secondary" : "ghost"}
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
      >
        <Heading2 className="h-4 w-4" />
      </Button>

      <Button
        size="icon"
        variant={editor.isActive("heading", { level: 3 }) ? "secondary" : "ghost"}
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
      >
        <Heading3 className="h-4 w-4" />
      </Button>

      <Button
        size="icon"
        variant={editor.isActive("bulletList") ? "secondary" : "ghost"}
        onClick={() => editor.chain().focus().toggleBulletList().run()}
      >
        <List className="h-4 w-4" />
      </Button>

      <Button
        size="icon"
        variant={editor.isActive("bold") ? "secondary" : "ghost"}
        onClick={() => editor.chain().focus().toggleBold().run()}
      >
        <Bold className="h-4 w-4" />
      </Button>

      <Button
        size="icon"
        variant={editor.isActive("italic") ? "secondary" : "ghost"}
        onClick={() => editor.chain().focus().toggleItalic().run()}
      >
        <Italic className="h-4 w-4" />
      </Button>

      <Button
        size="icon"
        variant={editor.isActive("code") ? "secondary" : "ghost"}
        onClick={() => editor.chain().focus().toggleCode().run()}
      >
        <Code2 className="h-4 w-4" />
      </Button>

      <Button
        size="icon"
        variant={editor.isActive("codeBlock") ? "secondary" : "ghost"}
        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
      >
        <Code className="h-4 w-4" />
      </Button>

      <Button
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
