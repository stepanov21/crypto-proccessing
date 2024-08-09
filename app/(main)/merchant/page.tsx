'use client'

import { useMerchant } from '@/api/merchant/queries'
import React from 'react'

const Page = () => {
  const { useMerchantGetInvoice } = useMerchant();
  const {data} = useMerchantGetInvoice()
  return (
    <div className='space-y-4'>
    {
      data?.map(invoice => {
        return <div key={invoice.id} className='p-4 middle-purple-gradient rounded-[18px] flex justify-between'><span>{invoice.id}</span><span>{invoice.status}</span></div>
      })
    }
    </div>
  )
}

export default Page