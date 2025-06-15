import { useEffect, useRef } from "react"
import { useLocation } from "react-router"

export default function ScrollToAnchor() {
  const location = useLocation()
  const lastHash = useRef<string>("")

  useEffect(() => {
    // Erkennt Hash in URL
    if (location.hash) {
      lastHash.current = location.hash.slice(1)
    }

    // Scrollt bei Render zu DOM-Element
    if (lastHash.current && document.getElementById(lastHash.current)) {
      setTimeout(() => {
        document
          .getElementById(lastHash.current)
          ?.scrollIntoView({ behavior: "smooth", block: "start" })
        lastHash.current = ""
      }, 100)
    }
  }, [location])

  return null
}
