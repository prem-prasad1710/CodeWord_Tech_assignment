import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from "recharts";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { CalendarIcon, DownloadIcon } from "lucide-react";
import { useState } from "react";
import credit from "@/assets/credit.png";
import dollar from "@/assets/dollar.png";
import electrocardiogram from "@/assets/electrocardiogram.png";
import group from "@/assets/group.png";

const revenueData = [
	{ name: "Jan", value: 4500 },
	{ name: "Feb", value: 5200 },
	{ name: "Mar", value: 2300 },
	{ name: "Apr", value: 4900 },
	{ name: "May", value: 5100 },
	{ name: "Jun", value: 900 },
	{ name: "Jul", value: 3900 },
	{ name: "Aug", value: 4000 },
	{ name: "Sep", value: 1400 },
	{ name: "Oct", value: 4700 },
	{ name: "Nov", value: 1200 },
	{ name: "Dec", value: 3000 },
];

const recentSales = [
	{ name: "Olivia Martin", email: "olivia.martin@email.com", amount: 1999 },
	{ name: "Jackson Lee", email: "jackson.lee@email.com", amount: 39 },
	{ name: "Isabella Nguyen", email: "isabella.nguyen@email.com", amount: 299 },
	{ name: "William Kim", email: "will@email.com", amount: 99 },
	{ name: "Sofia Davis", email: "sofia.davis@email.com", amount: 39 },
];

export default function Dashboard() {
	const [tab, setTab] = useState("overview");
	return (
		<div className="min-h-screen bg-muted/100">
			<header className="flex flex-col md:flex-row items-start md:items-center px-4 md:px-6 py-4 border-b bg-white gap-4 md:gap-0">
				<div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 w-full">
					<div className="flex items-center gap-2">
						<div className="rounded-full bg-gray-200 w-8 h-8 flex items-center justify-center font-bold text-gray-700">
							AK
						</div>
						<p className="font-semibold text-sm">Alica Koach</p>
					</div>
					<nav className="flex flex-wrap gap-2 sm:gap-6 text-sm font-medium w-full sm:w-auto">
						<a className="text-black" href="#">
							Overview
						</a>
						<a className="text-gray-500 hover:text-black" href="#">
							Customers
						</a>
						<a className="text-gray-500 hover:text-black" href="#">
							Products
						</a>
						<a className="text-gray-500 hover:text-black" href="#">
							Settings
						</a>
					</nav>
				</div>
				<div className="flex items-center gap-2 w-full sm:w-auto">
					<input
						className="rounded-md border px-3 py-1 text-sm w-full sm:w-auto"
						placeholder="Search..."
					/>
					<div className="rounded-full bg-gray-200 w-8 h-8 flex items-center justify-center font-bold text-gray-700">
						U
					</div>
				</div>
			</header>
			<main className="p-4 md:p-6 max-w-7xl mx-auto w-full">
				<div className="flex flex-col sm:flex-row items-center justify-between gap-2 mb-1">
				</div>
					<div className="flex items-center gap-2 w-full sm:w-auto justify-between float-end">
						<Button
							variant="outline"
							className="flex items-center gap-2 text-sm font-normal w-full sm:w-auto"
						>
							<CalendarIcon className="w-4 h-4" />
							Jan 20, 2023 - Feb 09, 2023
						</Button>
						<Button className="flex items-center gap-2 w-full sm:w-auto mt-2 sm:mt-0">
							<DownloadIcon className="w-4 h-4" />
							Download
						</Button>
					</div>
				<h1 className="text-2xl md:text-3xl font-bold mb-2 text-left">
					Dashboard
				</h1>
				<Tabs value={tab} onValueChange={setTab} className="mb-6">
					<TabsList className="flex flex-wrap gap-2 bg-gray-100 rounded-md p-1 w-full sm:w-fit">
						<TabsTrigger value="overview">Overview</TabsTrigger>
						<TabsTrigger value="analytics">Analytics</TabsTrigger>
						<TabsTrigger value="reports">Reports</TabsTrigger>
						<TabsTrigger value="notifications">Notifications</TabsTrigger>
					</TabsList>
				</Tabs>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
					<Card>
						<CardHeader>
							<CardTitle>Total Revenue <img src={dollar} alt="" height={15} width={15} className="float-end" /> </CardTitle>
						</CardHeader>
						<CardContent>
							<div className="text-2xl font-bold">$45,231.89</div>
							<div className="text-xs text-green-500">
								+20.1% from last month
							</div>
						</CardContent>
					</Card>
					<Card>
						<CardHeader>
							<CardTitle>Subscriptions<img src={group} alt=""  height={15} width={15}className="float-end" /></CardTitle>
						</CardHeader>
						<CardContent>
							<div className="text-2xl font-bold">+2350</div>
							<div className="text-xs text-green-500">
								+180.1% from last month
							</div>
						</CardContent>
					</Card>
					<Card>
						<CardHeader>
							<CardTitle>Sales<img src={credit} alt="" height={15} width={15} className="float-end" /></CardTitle>
						</CardHeader>
						<CardContent>
							<div className="text-2xl font-bold">+12,234</div>
							<div className="text-xs text-green-500">+19% from last month</div>
						</CardContent>
					</Card>
					<Card>
						<CardHeader>
							<CardTitle>Active Now<img src={electrocardiogram} alt="" height={15} width={15} className="float-end"/></CardTitle>
						</CardHeader>
						<CardContent>
							<div className="text-2xl font-bold">+573</div>
							<div className="text-xs text-green-500">
								+201 since last hour
							</div>
						</CardContent>
					</Card>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-14">
					<Card className="md:col-span-2">
						<CardHeader>
							<CardTitle className="flex items-start">Overview</CardTitle>
						</CardHeader>
						<CardContent>
							<ResponsiveContainer width={600} height={250}>
								<BarChart data={revenueData} barSize={40}>
									<XAxis dataKey="name" axisLine={false} tickLine={false} />
									<YAxis
										axisLine={false}
										tickLine={false}
										tickFormatter={(v) => `$${v}`}
									/>
									<Bar
										dataKey="value"
										fill="#000"
										radius={[4, 4, 0, 0]}
									/>
								</BarChart>
							</ResponsiveContainer>
						</CardContent>
					</Card>
					<Card>
						<CardHeader>
							<CardTitle>Recent Sales</CardTitle>
							<div className="text-xs text-gray-500">
								You made 265 sales this month.
							</div>
						</CardHeader>
						<CardContent>
							<ul className="divide-y">
								{recentSales.map((sale, i) => (
									<li
										key={i}
										className="flex flex-col sm:flex-row items-start sm:items-center justify-between py-2 gap-2 sm:gap-0"
									>
										<div className="flex items-center gap-3">
											<div className="rounded-full bg-gray-200 w-8 h-8 flex items-center justify-center font-bold text-gray-700">
												{sale.name.split(" ").map((n) => n[0]).join("")}
											</div>
											<div>
												<div className="font-medium text-sm">{sale.name}</div>
												<div className="text-xs text-gray-500">
													{sale.email}
												</div>
											</div>
										</div>
										<div className="font-medium text-sm">
											+$
											{sale.amount.toLocaleString(undefined, {
												minimumFractionDigits: 2,
												maximumFractionDigits: 2,
											})}
										</div>
									</li>
								))}
							</ul>
						</CardContent>
					</Card>
				</div>
			</main>
		</div>
	);
}
