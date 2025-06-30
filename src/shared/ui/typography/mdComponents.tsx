import { H2 } from "@/shared/ui/typography/H2"
import { P } from "@/shared/ui/typography/P"
import { Strong } from "@/shared/ui/typography/Strong"
import { UL } from "@/shared/ui/typography/UL"
import type { Components } from "react-markdown"
import { Code } from "./Code"

export const mdComponents: Components = {
  h2: (props) => <H2 article {...props} />,
  p: (props) => <P article {...props} />,
  strong: (props) => <Strong article {...props} />,
  ul: (props) => <UL article {...props} />,
  li: (props) => <li className="mt-2" {...props} />,
  code: (props) => <Code {...props} />
}
