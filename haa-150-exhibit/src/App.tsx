import { Link, Outlet } from 'react-router-dom'

export default function App() {
	return (
		<div className="min-h-screen">
			<header className="mx-auto max-w-screen-xl p-4 flex items-center justify-between">
				<h1 className="text-xl font-semibold">HAA 150</h1>
				<nav className="flex gap-4">
					<Link to="/">Home</Link>
					<Link to="/exhibition">Exhibition</Link>
					<Link to="/presentation">Presentation</Link>
				</nav>
			</header>
			<main className="mx-auto max-w-screen-xl p-4">
				<Outlet />
			</main>
		</div>
	)
}
