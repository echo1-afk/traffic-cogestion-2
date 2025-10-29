import { Suspense } from "react"
import RoutePlannerClient from "./route-planner-client"

export default function RoutePlannerPage() {
  return (
    <Suspense fallback={null}>
      <RoutePlannerClient />
    </Suspense>
  )
}
