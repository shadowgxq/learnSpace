import { forwardRef, type ForwardedRef, useState, useImperativeHandle } from "react"

export interface ICardProps {

}
export interface ICardRef {
    handleAdd: () => void
}
const Card = (props: ICardProps, ref: ForwardedRef<ICardRef>) => {
    const [count, setCount] = useState<number>(0)
    const handleAdd = () => {
        setCount((prev) => prev + 1)
    }
    useImperativeHandle(ref, () => {
        return {
            handleAdd
        }
    })
    return (
        <div></div>
    )
}
export default forwardRef<ICardRef, ICardProps>(Card)