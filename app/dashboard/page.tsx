import { log } from "console"
import { fetchRevenue } from "../lib/data"

export default async function DashboardPage(){
    const revenue = await fetchRevenue()
    console.log(revenue);
    
    return <p>Dashboard Page</p>
}