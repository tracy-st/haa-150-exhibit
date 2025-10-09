import { useEffect, useState } from 'react'
import type { Manifest } from '@iiif/presentation-3'
import { DelftPresentation } from '../DelftPresentation'
import { MANIFEST_URL } from '../config'

export default function PresentationPage() {
	const [manifest, setManifest] = useState<Manifest | null>(null)

	useEffect(() => {
		fetch(MANIFEST_URL)
			.then((r) => r.json())
			.then(setManifest)
	}, [])

	if (!manifest) {
		return <div>Loading manifest…</div>
	}

	return (
		<div className="h-[800px]">
			<DelftPresentation manifest={manifest as any} language="en" viewObjectLinks={[]} />
		</div>
	)
}
