'use client'

import { Download, FileText, X } from 'lucide-react'
import { resumes } from './data'

export function ResumeButton({ className = 'button button-secondary' }: { className?: string }) {
  return (
    <button type="button" className={className} aria-haspopup="dialog" onClick={() => {
      const dialog = document.getElementById('resume-dialog')
      if (dialog instanceof HTMLDialogElement && !dialog.open) dialog.showModal()
    }}>
      <FileText size={18} aria-hidden="true" />
      Résumé
    </button>
  )
}

export function ResumeDialog() {
  return (
    <dialog id="resume-dialog" className="resume-dialog" aria-labelledby="resume-title"
      onClick={(event) => {
        if (event.target !== event.currentTarget) return
        const bounds = event.currentTarget.getBoundingClientRect()
        if (event.clientX < bounds.left || event.clientX > bounds.right
          || event.clientY < bounds.top || event.clientY > bounds.bottom) {
          event.currentTarget.close()
        }
      }}>
      <div className="dialog-header">
        <h2 id="resume-title">Download a résumé</h2>
        <form method="dialog">
          <button type="submit" className="icon-button" aria-label="Close résumé dialog">
            <X size={21} aria-hidden="true" />
          </button>
        </form>
      </div>
      <div className="resume-options">
        {resumes.map((resume) => (
          <a key={resume.href} href={resume.href} download={resume.downloadName} className="resume-option"
            onClick={(event) => event.currentTarget.closest('dialog')?.close()}>
            <span><strong>{resume.label}</strong><small>{resume.subtitle} · PDF</small></span>
            <Download size={20} aria-hidden="true" />
          </a>
        ))}
      </div>
    </dialog>
  )
}
