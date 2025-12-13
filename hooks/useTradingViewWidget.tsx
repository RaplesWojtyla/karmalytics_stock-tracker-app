'use client'
import { useEffect, useRef } from "react"

const useTradingViewWidget = (scriptUrl: string, config: Record<string, unknown>, height = 600) => {
    const containerRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        const widgetContainer = containerRef.current

        if (!widgetContainer) return
        if (widgetContainer.dataset.loaded) return
        widgetContainer.innerHTML = `
            <div class="tradingview-widget-container__widget" style="width: 100%; height: ${height}px;"></div>
        `

        const script = document.createElement("script")
        script.src = scriptUrl
        script.async = true
        script.textContent = JSON.stringify(config)
        
        widgetContainer.appendChild(script)
        widgetContainer.dataset.loaded = 'true'

        return () => {
            if (widgetContainer) {
                widgetContainer.innerHTML = ''
                delete widgetContainer.dataset.loaded
            }
        }
    }, [scriptUrl, config, height])

    return containerRef
}

export default useTradingViewWidget
