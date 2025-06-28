import { useCallback, useRef } from "react"
import type { ICardRef } from "./Card"
import { Button } from 'antd'
import Card from "./Card"
const ForWordComp = () => {
    const cardRef = useRef<ICardRef>(null)
    const handleAdd = useCallback((() => {
        cardRef.current?.handleAdd()
    }), [])
    return (
        <div>
            <Card ref={cardRef} />
            <Button onClick={handleAdd}>add</Button>
        </div>
    )
}
export default ForWordComp