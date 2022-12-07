import { useMemo } from 'react'
import dados from '../dados'


export function useDeliveryFee(
) {
  const deliveryFee = 3.5
  const price = useMemo(() => {
    return dados?.reduce(
      (acc, item, index) => {
        acc.subTotal += item.amount * item.quantity
        if (index === dados.length - 1) acc.total = acc.subTotal + deliveryFee
        return acc
      },
      { subTotal: 0, total: 0 },
    )
  }, [])
  return price
}
