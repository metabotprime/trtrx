import { useState } from 'react';

const STATES = [
  'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado',
  'Connecticut', 'Delaware', 'District of Columbia', 'Florida', 'Georgia',
  'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky',
  'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota',
  'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire',
  'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota',
  'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island',
  'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont',
  'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming',
] as const;

/** A local-only planning selector, never an eligibility or coverage decision. */
export function StateReadiness() {
  const [state, setState] = useState<string>('');
  return (
    <div className="rounded-2xl border border-border bg-surface-alt p-6 md:p-8">
      <label htmlFor="availability-state" className="block text-sm font-medium text-primary">
        Where would you be located for a visit?
      </label>
      <select
        id="availability-state"
        value={state}
        onChange={(event) => setState(event.target.value)}
        className="mt-3 w-full rounded-lg border border-border bg-surface p-3 text-text"
        aria-describedby="availability-result"
      >
        <option value="">Select your state</option>
        {STATES.map((name) => <option key={name} value={name}>{name}</option>)}
      </select>
      <div id="availability-result" aria-live="polite" className="mt-5">
        <p className="font-medium text-primary">
          {state ? `TRTrx availability in ${state} is not confirmed.` : 'State coverage has not been confirmed.'}
        </p>
        <p className="mt-2 text-sm leading-relaxed text-muted">
          Choosing a state does not join a waitlist, confirm eligibility or start an assessment.
          This selection stays in your browser and is not submitted.
        </p>
      </div>
    </div>
  );
}
