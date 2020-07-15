import React, { useCallback } from 'react'
import { onGetSummary } from '../model'
import DashboardCardsResume from '../components/DashboardCardsResume'

const Dashboard = () => {
  const handleQuerySummary = useCallback(async () => {
    const response = await onGetSummary()
    if (response.status === 200) return response.data
    return false
  }, [])
  return (
    <>
      <DashboardCardsResume querySummary={handleQuerySummary} />
    </>
  )
}
export default Dashboard
