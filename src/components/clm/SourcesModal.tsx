import { SOURCES } from '../../data/sources'

interface Props {
  open: boolean
  onClose: () => void
}

export default function SourcesModal({ open, onClose }: Props) {
  if (!open) return null

  return (
    <div className="sources-modal-backdrop" onClick={onClose} role="presentation">
      <div className="sources-modal" onClick={e => e.stopPropagation()} role="dialog" aria-label="Источники">
        <div className="sources-modal-head">
          <h3>Источники</h3>
          <button type="button" className="sources-modal-close" onClick={onClose} aria-label="Закрыть">×</button>
        </div>
        <div className="sources-modal-body">
          {SOURCES.map(block => (
            <div key={block.topic} className="sources-block">
              <h4>{block.topic}</h4>
              <ul>
                {block.refs.map(ref => (
                  <li key={ref}>{ref}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
