export interface AnimatedSceneProps {
  activeZone: string | null
  revealed: Set<string>
}

export function zoneActive(activeZone: string | null, revealed: Set<string>, id: string) {
  return activeZone === id || revealed.has(id)
}
