import { useEffect, useState } from 'react'
import type { Manifest } from '@iiif/presentation-3'
import { DelftExhibition } from '../DelftExhibition'
import { TEACHING_MANIFEST_URL } from '../config'

export default function TeachingPage() {
	const [manifest, setManifest] = useState<Manifest | null>(null)

	useEffect(() => {
		const params = new URLSearchParams(window.location.search)
		const manifestUrl = params.get('manifest') || TEACHING_MANIFEST_URL
		fetch(manifestUrl)
			.then((r) => r.json())
			.then(setManifest)
	}, [])

	if (!manifest) {
		return <div>Loading manifest…</div>
	}

	return (
		<div>
			<DelftExhibition manifest={manifest as any} language="en" viewObjectLinks={[]} />
		</div>
	)
}
